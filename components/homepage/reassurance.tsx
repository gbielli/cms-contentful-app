import { CheckCircle2 } from "lucide-react";

const reassurance = () => {
  return (
    <section className="bg-white mb-20">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-20 ">
        <div className="flex items-center justify-center my-3 py-5 rounded-lg px-2 gap-2 ">
          <CheckCircle2
            width={35}
            height={35}
            strokeWidth={1.3}
            className="fill-primary text-white"
          />
          <p className="text-lg">Non sponsorisé</p>
        </div>
        <div className="flex items-center justify-center my-3 py-5 rounded-lg px-2 gap-2 ">
          <CheckCircle2
            width={35}
            height={35}
            strokeWidth={1.2}
            className="fill-primary text-white"
          />
          <p className="text-lg">Produits testés</p>
        </div>
        <div className="flex items-center justify-center my-3 py-5 rounded-lg px-2 gap-2 ">
          <CheckCircle2
            width={35}
            height={35}
            strokeWidth={1.3}
            className="fill-primary text-white"
          />
          <p className="text-lg">Liens d'affiliation</p>
        </div>
        <div className="flex items-center justify-center my-3 py-5 rounded-lg px-2 gap-2 ">
          <CheckCircle2
            width={35}
            height={35}
            strokeWidth={1.3}
            className="fill-primary text-white"
          />
          <p className="text-lg">Transparence</p>
        </div>
      </div>
    </section>
  );
};

export default reassurance;
