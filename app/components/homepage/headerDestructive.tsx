import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

const HeaderDestructive = () => {
  return (
    <section className="pt-20 bg-white">
      <div className="relative container">
        <h1 className="text-[96px] leading-tight font-medium mb-4">
          Le blog pour prendre soin de son crâne et de sa peau !
        </h1>
        {/* <div className="absolute right-[150px] top-[205px]">
          <Image
            src="/images/icon-gb.png"
            width={300}
            height={300}
            alt="icone"
          />
        </div> */}
      </div>
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-20 justify-center items-center max-sm:gap-10">
        <div className="-ml-10">
          <Image
            src="/images/header-img-v3.png"
            width={600}
            height={600}
            alt="header"
            className="object-cover w-full sm:w-full md:w-3/4 lg:w-full max-lg:mx-auto h-full rounded-2xl"
          />
        </div>
        <div>
          <div className="flex flex-col h-full w-full justify-center max-lg:mx-auto">
            <p className="text-lg mb-8 text-slate-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
              qui fugiat optio dicta eum nulla sit velit saepe quam, voluptatem
              laborum ut dolor ducimus odit facilis officiis veritatis dolorum
              corporis!
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button
                size={"lg"}
                className="rounded-sm flex items-center gap-3"
              >
                Découvrir mes articles
                <ArrowRight className="h-5" />
              </Button>
              <Button
                className="bg-transparent border-primary text-primary hover:bg-transparent hover:text-primary rounded-sm"
                size={"lg"}
                variant={"outline"}
              >
                Me contacter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderDestructive;
