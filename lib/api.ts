const POST_GRAPHQL_FIELDS = `
  slug
  title
  sys {
    publishedAt
    firstPublishedAt
  }
  coverImage {
    url
  }
  date
  author {
    name
    picture {
      url
    }
  }
  category {
    name
    slug
  }
  excerpt
  content {
    json
    links {
      entries {
				block {
					sys {
						id}
          __typename
        ... on Avantages {
					like
          dislike
          stars
          productImage {
            url
            } 
        }
        }
				}
    }
  }
  
`;

const POST_GRAPHQL_VENDOR = `
avantages {
  title
  like
  dislike
  vendor {
    name
    price
    url
    icon {
      url
    }
  }
}`;

// export async function getVendors(isDraftMode: boolean): Promise<any[]> {
//   const entries = await fetchGraphQL(
//     `query {
//       postCollection(where: { slug_exists: true }, order: date_DESC, preview: ${
//         isDraftMode ? "true" : "false"
//       }) {
//         items {
//           ${POST_GRAPHQL_VENDOR}
//         }
//       }
//     }`,
//     isDraftMode
//   );
//   return extractPostEntries(entries);
// }

async function fetchGraphQL(query: string, preview = false): Promise<any> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      next: { tags: ["posts"] },
    }
  ).then((response) => response.json());
}

function extractPost(fetchResponse: any): any {
  return fetchResponse?.data?.postCollection?.items?.[0];
}

function extractPostEntries(fetchResponse: any): any[] {
  return fetchResponse?.data?.postCollection?.items;
}

export async function getPreviewPostBySlug(slug: string | null): Promise<any> {
  console.log();
  const entry = await fetchGraphQL(
    `query {
      postCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    true
  );

  return extractPost(entry);
}

export async function getCategory(): Promise<any> {
  const entries = await fetchGraphQL(
    `query {
      categoryCollection {
        items {
          name
        }
      }
    }`
  );
  return entries.data.categoryCollection.items;
}

export async function getEntryById(id: string): Promise<any> {
  const entry = await fetchGraphQL(`
  query {
    postCollection(where: {sys: {id:"${id}"}}) {
  items {
    avantages {
      title
      like
      dislike
      vendor {
        name
        price
        url
        icon {
          url
        }
      }
    }
    
  }}
    }`);
  return extractPost(entry);
}

export async function getAllPosts(isDraftMode: boolean): Promise<any[]> {
  try {
    console.log("Fetching posts from Contentful...");
    const entries = await fetchGraphQL(
      `query {
        postCollection(where: { slug_exists: true }, order: date_DESC, preview: ${
          isDraftMode ? "true" : "false"
        }) {
          items {
            ${POST_GRAPHQL_FIELDS}
          }
        }
      }`,
      isDraftMode
    );

    console.log("Response from Contentful:", JSON.stringify(entries, null, 2));

    if (
      !entries ||
      !entries.data ||
      !entries.data.postCollection ||
      !Array.isArray(entries.data.postCollection.items)
    ) {
      console.error("Invalid response structure from Contentful");
      return [];
    }

    const posts = entries.data.postCollection.items;
    console.log(`Fetched ${posts.length} posts from Contentful`);
    return posts;
  } catch (error) {
    console.error("Error fetching posts from Contentful:", error);
    return [];
  }
}

export async function getPostAndMorePosts(
  slug: string,
  preview: boolean
): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      postCollection(where: { slug: "${slug}" }, preview: ${
      preview ? "true" : "false"
    }, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );
  const entries = await fetchGraphQL(
    `query {
      postCollection(where: { slug_not_in: "${slug}" }, order: date_DESC, preview: ${
      preview ? "true" : "false"
    }, limit: 3) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );

  return {
    post: extractPost(entry),
    morePosts: extractPostEntries(entries),
  };
}
