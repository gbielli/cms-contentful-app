import Image from "next/image";
import { Button } from "../_ui/button";

const Header = () => {
  return (
    <section className="px-10 py-20">
      <div className="grid grid-cols-2">
        <div>
          <div className="flex flex-col h-full w-full justify-center max-w-2xl">
            <h1 className="text-5xl font-semibold mb-4">
              Mes avis <span className="text-primary">sans filtre </span>pour
              les cranes rasés et les soins pour homme
            </h1>
            <p className="text-lg mb-8 text-slate-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
              qui fugiat optio dicta eum nulla sit velit saepe quam, voluptatem
              laborum ut dolor ducimus odit facilis officiis veritatis dolorum
              corporis!
            </p>
            <div className="flex gap-4">
              <Button size={"lg"}>Découvrir mes articles</Button>
              <Button
                className="bg-transparent border-primary text-primary hover:bg-transparent hover:text-primary"
                size={"lg"}
                variant={"outline"}
              >
                Me contacter
              </Button>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Image
            src="/images/header-img-v2-min.png"
            width={600}
            height={600}
            alt="header"
          />
        </div>
      </div>
      {/* <div className="mx-auto py-10 mt-10 grid grid-cols-5">
        <div className=" gap-3 max-w-3xl mx-auto col-span-3">
          <div className="inline-block">
            <h1 className="text-5xl inline-block font-semibold ">
              Le blog pour les chauves et les cranes rasés
            </h1>
          </div>
        </div>
        <div className="flex gap-5 justify-center mt-5 col-span-2">
          <p className="text-lg font-chillax">
            Tu as le crâne rasé (ou presque) ? je te donne tous mes conseils,
            mes avis et mes tests sur les produits pour faire briller ton crâne
            comme jamais !
          </p>
          <Link className={buttonVariants({ size: "lg" })} href="/articles">
          Voir les articles
        </Link>
        <Link
          className={buttonVariants({ size: "lg", variant: "outline" })}
          href="#"
        >
          Me contacter
        </Link>
        </div>
        <div className="text-center mt-3"></div>
      </div>
      <div className="h-[400px] relative">
        <Image
          className="w-full h-full rounded-2xl"
          width={100}
          height={100}
          src="/images/Rectangle.jpg"
          alt="bg"
        />
      </div>
      <div className="absolute top-60 right-20">
        <Image
          className="rounded-2xl"
          width={800}
          height={400}
          src="/images/razor.png"
          alt="bg"
        />
      </div> */}
    </section>
  );
};

export default Header;
