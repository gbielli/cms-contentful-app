import ContentfulImage from "@/lib/contentful-image";

export default function Avatar({
  name,
  picture,
}: {
  name: string;
  picture: any;
}) {
  return (
    <>
      <div className="flex items-center justify-center mt-10 max-w-3xl mx-auto">
        <div className="mr-4 w-12 h-12">
          <ContentfulImage
            alt={name}
            className="object-cover h-full rounded-full"
            height={48}
            width={48}
            src={picture.url}
          />
        </div>
        <div className="flex flex-col">
          <div className="text-xl font-bold">{name} </div>

          <div className="text-slate-500 text-center  italic">
            le 10 decembre 2023
          </div>
        </div>
      </div>

      {/* <div className='flex justify-center gap-5 mt-10'>
            <div className='flex gap-3 justify-center items-center mb-5'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              <p className='text-slate-500 text-center  italic'>publié par <span className='font-semibold'>Guillaume</span></p>
            </div>
            <div className='flex gap-3 justify-center items-center mb-5'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-slate-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

              <p className='text-slate-500 text-center  italic'> mis à jour le 10 decembre 2023</p>

            </div>
          </div> */}
    </>
  );
}
