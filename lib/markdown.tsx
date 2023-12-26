import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import '/lib/markdown.css'
import Summary from '@/public/images/summary.svg'


interface Asset {
  sys: {
    id: string
  }
  url: string
  description: string
}

interface AssetLink {
  block: Asset[]
}

interface Content {
  json: any
  links: {
    assets: AssetLink
  }
}

interface ContentItem {
  nodeType: string;
  content: { value: string }[];
}

function RichTextAsset({
  id,
  assets,
}: {
  id: string
  assets: Asset[] | undefined
}) {
  const asset = assets?.find((asset) => asset.sys.id === id)
  



  if (asset?.url) {
    return <Image src={asset.url} layout="fill" alt={asset.description} />
  }

  return null
}


const slugify = (str : string) => {
  return  str
  .toString()
  .toLowerCase()
  .trim()
  .replace(/[^\w\s-]/g, '')
  .replace(/[\s_-]+/g, '-')
  .replace(/^-+|-+$/g, '')
}

export function Markdown({ content }: { content: Content}) {


const retrieveValues = (array: ContentItem[]) => {
  const filter =  array.filter(item => item.nodeType === 'heading-2')

  return filter.map((item) => item.content.map((nestedItem) => nestedItem.value));
};


const summary = retrieveValues(content.json.content)





  return (
    <div>
      <div className='border p-6 rounded-md'>
        <h3 className='text-2xl mb-3'>Sommaire</h3>
     {summary.map((item, index) => { 
      return (
      <div key={index} className='flex gap-2 mb-2'>
        <Image src={Summary} width={24} alt='summary' />
        <a className='hover:underline' href={`#${slugify(item)}`}>{item}</a>
      </div>
     )})}

      </div>

    {documentToReactComponents(content.json, {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => (
        <RichTextAsset
          id={node.data.target.sys.id}
          assets={content.links.assets.block}
        />
      ),
      [BLOCKS.HEADING_2]: (node: any, children: any) => (
        <h2 className="text-4xl py-6 font-semibold with-before" id={slugify(children)}>{children}</h2>
      ),
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
        <p className="text-xl py-3">{children}</p>
      ),
      
    },
  })}
  </div>
  )

}
