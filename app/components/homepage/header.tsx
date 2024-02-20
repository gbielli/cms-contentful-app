import Image from "next/image";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <section className="py-40 bg-white">
      <div className="container grid  grid-cols-1 lg:grid-cols-2 gap-20 max-sm:gap-10">
        <div>
          <div className="flex flex-col h-full w-full justify-center max-w-3xl max-lg:mx-auto">
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
            className="object-cover w-full sm:w-full md:w-3/4 lg:w-full max-lg:mx-auto h-full rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
