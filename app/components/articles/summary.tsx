import { slugify } from "@/lib/utils";
import SummaryIcon from "@/public/images/summary.svg";
import Image from "next/image";

type ContentItem = {
  nodeType: string;
  content: { value: string }[];
};

const Summary = (content: any) => {
  const retrieveValues = (array: ContentItem[]) => {
    const filter = array.filter((item) => item.nodeType === "heading-2");
    return filter.map((item) =>
      item.content.map((nestedItem) => nestedItem.value)
    );
  };

  const sum = retrieveValues(content.post);

  return (
    <div className="border p-6 rounded-md bg-slate-100 border-slate-300 summary">
      <h3 className="text-2xl mb-3 font-medium">Sommaire</h3>
      {sum.map((item: any, index) => {
        return (
          <div key={index} className="flex gap-2 mb-2">
            <Image src={SummaryIcon} width={24} alt="summary" />
            <a className="hover:underline" href={`#${slugify(item)}`}>
              {item}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Summary;
