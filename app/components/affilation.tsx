import logoAmazon from "@/public/images/logo-amazon.png";
import Image from "next/image";
import { Button } from "./ui/button";
const Affilation = (post: any) => {
  return (
    <div className="mt-10">
      <div className="max-w-3xl mx-auto mb-5">
        <h3 className="text-2xl mb-5 font-semibold">
          Les offres de la poussette Babyzen YOYO
        </h3>
        <div className="bg-blue-100 p-3 rounded-md">
          <p className="text-blue-500">
            🙏 En passant par ces liens, vous soutenez directement mon contenu
          </p>
        </div>
      </div>
      <div className="affilate max-w-3xl mx-auto">
        <div className="flex items-center w-full justify-between mb-3 pb-4 border-b ">
          <div className="left flex h-6 items-center gap-3">
            <Image
              className="object-cover w-full h-full"
              src={logoAmazon}
              alt="amazon logo"
            />
            <p className="text-lg">Amazon</p>
          </div>
          <div className="right flex gap-10 items-center">
            <p className="text-lg">59€</p>
            <Button className="bg-blue-500">Voir l'offre</Button>
          </div>
        </div>
        <div className="flex items-center w-full justify-between mb-3 pb-4 border-b">
          <div className="left flex h-6 items-center gap-3">
            <Image
              className="object-cover w-full h-full"
              src={logoAmazon}
              alt="amazon logo"
            />
            <p className="text-lg">Amazon</p>
          </div>
          <div className="right flex gap-10 items-center">
            <p className="text-lg">59€</p>
            <Button className="bg-blue-500">Voir l'offre</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Affilation;
