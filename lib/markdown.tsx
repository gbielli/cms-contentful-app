import { Button } from "@/app/components/ui/button";
import Summary from "@/public/images/summary.svg";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Image from "next/image";
import Link from "next/link";
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
  json: any;
  links: {
    assets: AssetLink;
  };
}

interface ContentItem {
  nodeType: string;
  content: { value: string }[];
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

const slugify = (str: string) => {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

export function Markdown({ content }: { content: Content }) {
  const retrieveValues = (array: ContentItem[]) => {
    const filter = array.filter((item) => item.nodeType === "heading-2");

    return filter.map((item) =>
      item.content.map((nestedItem) => nestedItem.value)
    );
  };

  const summary = retrieveValues(content.json.content);

  return (
    <div className="">
      <div className="border p-6 rounded-md bg-slate-100 border-slate-300 summary">
        <h3 className="text-2xl mb-3 font-medium">Sommaire</h3>
        {summary.map((item: any, index) => {
          return (
            <div key={index} className="flex gap-2 mb-2">
              <Image src={Summary} width={24} alt="summary" />
              <a className="hover:underline" href={`#${slugify(item)}`}>
                {item}
              </a>
            </div>
          );
        })}
      </div>

      {documentToReactComponents(content.json, {
        renderNode: {
          [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
            return (
              <RichTextAsset
                id={node.data.target.sys.id}
                assets={content.links.assets.block}
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
        },
      })}
    </div>
  );
}
