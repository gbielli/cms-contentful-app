import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const HeaderDestructive = () => {
  return (
    <section className="pt-20 bg-white">
      <div className="relative container">
        <h1 className="sm:text-7xl md:text-6xl leading-tight font-medium mb-8 md:mb-4">
          Une petite famille, des expériences et des avis sincères, tout
          simplement !
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
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 justify-center items-center max-sm:gap-10">
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
              On ne nait pas parent, on le devient. L'arrivée d'un petit bébé
              est certainement l'une des plus belles choses que l'on puisse
              vivre sur cette terre. Mais c'est aussi un saut dans l'inconnu. On
              a décidé de partager nos expériences et nos conseils pour aider
              les jeunes parents.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button asChild size={"lg"} className="flex items-center gap-3">
                <Link href="/articles">Découvrir nos articles</Link>
                {/* <ArrowRight className="h-5" /> */}
              </Button>
              <Button
                className="bg-transparent border-primary text-primary hover:bg-transparent hover:text-primary rounded-sm"
                size={"lg"}
                variant={"outline"}
              >
                Nous contacter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderDestructive;
