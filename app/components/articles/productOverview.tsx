import CoverImage from "@/app/components/cover-image";
import logoAmazon from "@/public/images/logo-amazon.png";
import Negative from "@/public/images/negative.svg";
import Positive from "@/public/images/positive.svg";
import Image from "next/image";
import { Button } from "../ui/button";

type avantagesProps = {
  post: {
    productImage: {
      url: string;
    };
    stars: number;
    avantages: {
      title: string;
      like: string[];
      dislike: string[];
    };
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
  const stars = Array.from({ length: totalStars }, (_, index) => {
    if (index < numberOfStars) {
      return (
        <div className={`${starColorClass} mr-2 p-1 rounded-md`}>
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7 fill-white stroke-none "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
        </div>
      ); // Filled star
    } else {
      return (
        <div className="bg-slate-300 mr-2 p-1 rounded-md">
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7 fill-white stroke-none "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
        </div>
      );
    }
  });

  return <div className="flex items-center">{stars}</div>;
};

export default function productOverview({ post }: avantagesProps) {
  return (
    <>
      <div className="mb-10">
        <div className="max-w-3xl mx-auto bg-white pb-10 rounded-2xl border border-slate-200">
          <div>
            {post.productImage && (
              <CoverImage
                url={post.productImage.url}
                width={400}
                height={400}
                title="poussette yoyo"
              />
            )}
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-semibold font-roundo mb-4">
              {post.avantages.title}
            </h3>
            <div className="flex gap-3 items-center text-xl mb-8">
              <Stars number={post.stars} total={5} />
              <p> {post.stars} / 5 </p>
            </div>
            <div className="flex items-center w-full justify-between mb-3 pb-4 border-b ">
              <div className="left flex h-6 items-center gap-3">
                <Image
                  className="object-cover w-full h-full"
                  src={logoAmazon}
                  alt="amazon logo"
                />
                <h2 className="text-lg">Amazon</h2>
              </div>
              <div className="right flex gap-10 items-center">
                <p className="text-lg">59€</p>
                <Button className="px-7">Voir l'offre</Button>
              </div>
            </div>
          </div>
          <div className="grid px-10 grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="">
              <h3 className="font-medium text-xl">Les plus du produit</h3>
              <div className="flex flex-col gap-2 mt-3">
                {post.avantages.like.map((item, index) => {
                  return (
                    <div className="flex gap-2 mb-2" key={index}>
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
                {post.avantages.dislike.map((item, index) => {
                  return (
                    <div className="flex gap-2 mb-2" key={index}>
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
    </>
  );
}
