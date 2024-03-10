import ProductOverview from "@/app/components/articles/productOverview";
import Summary from "@/app/components/articles/summary";
import { Button } from "@/app/components/ui/button";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Image from "next/image";
import Link from "next/link";
import { slugify } from "./utils";
import "/lib/markdown.css";

interface Asset {
  sys: {
    id: string;
  };
  url: string;
  description: string;
}

interface AssetLink {
  block: Asset[];
}

interface Content {
  productImage: {
    url: string;
  };
  stars: number;
  avantages: {
    title: string;
    like: string[];
    dislike: string[];
    vendor: {
      name: string;
      price: number;
      url: string;
      icon: {
        url: string;
      };
    };
  };
  content: {
    json: any;
    links: {
      assets: AssetLink;
    };
  };
}

function RichTextAsset({
  id,
  assets,
}: {
  id: string;
  assets: Asset[] | undefined;
}) {
  const asset = assets?.find((asset) => asset.sys.id === id);

  if (asset?.url) {
    return <Image src={asset.url} fill={true} alt={asset.description} />;
  }

  return null;
}

export async function Markdown({ post }: { post: Content }) {
  return (
    <div>
      <Summary post={post.content.json.content} />

      <ProductOverview post={post} />

      {documentToReactComponents(post.content.json, {
        renderNode: {
          [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
            return (
              <RichTextAsset
                id={node.data.target.sys.id}
                assets={post.content.links.assets.block}
              />
            );
          },
          [BLOCKS.HEADING_2]: (node: any, children: any) => (
            <h2
              className="text-3xl pt-4 pb-6 font-medium"
              id={slugify(children)}
            >
              {children}
            </h2>
          ),
          [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
            <p className="text-lg pb-4">{children}</p>
          ),
          [INLINES.HYPERLINK]: ({ data }, children: any) => {
            if (children && children[0].includes("Consulter")) {
              return (
                <Button
                  asChild
                  rel={`noopener noreferrer`}
                  className="bg-primary"
                >
                  <Link href={data.uri}>{children}</Link>
                </Button>
              );
            }
            return (
              <Link className="text-primary" href={data.uri}>
                {children}
              </Link>
            );
          },
          [INLINES.ENTRY_HYPERLINK]: (node: any, children: any) => {
            return <Button>{children}</Button>;
          },
        },
      })}
    </div>
  );
}
