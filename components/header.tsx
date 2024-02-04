import Image from "next/image";

const Header = () => {
  return (
    <section>
      <div className="mx-auto py-10 mt-10 grid grid-cols-5">
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
          {/* <Link className={buttonVariants({ size: "lg" })} href="/articles">
          Voir les articles
        </Link>
        <Link
          className={buttonVariants({ size: "lg", variant: "outline" })}
          href="#"
        >
          Me contacter
        </Link> */}
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
      </div>
    </section>
  );
};

export default Header;
