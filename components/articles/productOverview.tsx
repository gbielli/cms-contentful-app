import Negative from "@/public/images/negative.svg";
import Positive from "@/public/images/positive.svg";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

type overviewProps = {
  overview: {
    listVendorsCollection?: {
      items: {
        name: string;
        price: number;
        url: string;
        icon?: {
          url?: string;
        };
      }[];
    };
    title: string;
    productImage: {
      url: string;
    };
    stars: number;
    like: string[];
    dislike: string[];
  };
};

const Stars = ({ number, total }: { number: number; total: number }) => {
  const numberOfStars = number;
  const totalStars = total;

  if (
    isNaN(numberOfStars) ||
    isNaN(totalStars) ||
    numberOfStars < 0 ||
    totalStars <= 0
  ) {
    return null; // or handle the error in a way that makes sense for your application
  }

  // Determine the color based on the number of stars
  let starColorClass = "";
  if (numberOfStars >= 4) {
    starColorClass = "bg-green-500";
  } else if (numberOfStars === 3) {
    starColorClass = "bg-yellow-500";
  } else if (numberOfStars <= 2) {
    starColorClass = "bg-red-500";
  }

  // Render the stars based on the number and total
  const stars = Array.from({ length: total }, (_, index) => (
    <div
      className={
        index < number
          ? `${starColorClass} mr-2 p-1 rounded-md`
          : "bg-slate-300 mr-2 p-1 rounded-md"
      }
      key={index}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-7 h-7 fill-white stroke-none"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
        />
      </svg>
    </div>
  ));

  return <div className="flex items-center">{stars}</div>;
};

export default function ProductOverview({ overview }: overviewProps) {
  const listVendors = overview.listVendorsCollection?.items;
  return (
    <div>
      <div className="mb-10 ">
        <div className="max-w-3xl mx-auto bg-slate-100 pb-10 rounded-2xl border border-slate-300 ">
          <div className="bg-white rounded-2xl py-6">
            <div className="max-w-72 mx-auto">
              {overview.productImage && (
                <Image
                  className="object-cover w-full "
                  src={overview.productImage.url}
                  alt="poussette yoyo"
                  width={400}
                  height={400}
                />
              )}
            </div>
          </div>
          <div className="p-8 bg-slate-100">
            <h3 className="text-2xl font-medium font-roundo mb-4">
              {overview.title}
            </h3>
            <div className="bg-slate-100 flex gap-3 items-center text-xl mb-8">
              <Stars number={overview.stars} total={5} />
              <p> {overview.stars} / 5 </p>
            </div>

            {listVendors?.map((vendor, index) => {
              return (
                <div
                  key={`${vendor.name}_${index}`}
                  className="flex items-center w-full justify-between mb-3 pb-4 border-b"
                >
                  <div className="left flex h-6 items-center gap-3">
                    {vendor.icon?.url && (
                      <Image
                        className="object-cover w-full h-full"
                        src={vendor.icon?.url}
                        alt="vendor logo"
                        width={32}
                        height={32}
                      />
                    )}
                    <p className="text-lg">{vendor.name}</p>
                  </div>
                  <div className="right flex gap-10 items-center">
                    <p className="text-lg">{vendor.price}€</p>
                    <Button className="px-7" asChild>
                      <Link href={`${vendor.url && vendor.url}`}>
                        Voir l'offre
                      </Link>
                    </Button>
                  </div>
                </div>
              );
            })}
            <div className="grid px-10 grid-cols-1 gap-5 sm:grid-cols-2 bg-slate-100">
              <div className="">
                <h3 className="font-medium text-xl">Les plus du produit</h3>
                <div className="flex flex-col gap-2 mt-3">
                  {overview.like.map((item, index) => {
                    return (
                      <div
                        className="flex gap-2 mb-2"
                        key={`like_${item}_${index}`}
                      >
                        <Image
                          src={Positive}
                          alt="point positif"
                          width={24}
                          className="text-blue-500 "
                        />
                        <p className=" text-slate-700">{item}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="">
                <h3 className="font-medium text-xl">Les moins du produit</h3>
                <div className="flex flex-col gap-2 mt-3">
                  {overview.dislike.map((item, index) => {
                    return (
                      <div
                        className="flex gap-2 mb-2"
                        key={`dislike_${item}_${index}`}
                      >
                        <Image
                          src={Negative}
                          alt="point positif"
                          width={24}
                          className="text-blue-500 "
                        />
                        <p className="text-slate-700">{item}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
