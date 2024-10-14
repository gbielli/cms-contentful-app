import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

interface Vendor {
  name: string;
  price: number;
  url: string;
  icon?: {
    url?: string;
  };
}

interface Content {
  content: {
    json: any;
    links: any;
  };
  listVendorsCollection?: {
    items: Vendor[];
  };
}

export const VendorsList: React.FC<{ vendors: Vendor[] }> = ({ vendors }) => {
  if (vendors.length === 0) {
    return null;
  }

  return (
    <div className="mt-10">
      <h3 className="text-3xl font-medium p-0 mb-2">Les offres du produit</h3>
      <p className="mb-6">
        🙏 En passant par ces liens, vous soutenez directement mon contenu
      </p>
      <div className="space-y-4">
        {vendors.map((vendor, index) => (
          <div
            key={`${vendor.name}_${index}`}
            className="flex items-center w-full justify-between p-4 bg-slate-100 rounded-lg"
          >
            <div className="left flex items-center gap-3">
              {vendor.icon?.url && (
                <Image
                  className="object-cover w-8 h-8"
                  src={vendor.icon.url}
                  alt={`${vendor.name} logo`}
                  width={32}
                  height={32}
                />
              )}
              <p className="text-lg font-medium">{vendor.name}</p>
            </div>
            <div className="right flex gap-6 items-center">
              <p className="text-lg font-bold">{vendor.price}€</p>
              <Button className="px-7" asChild>
                <Link href={vendor.url}>Voir l'offre</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
