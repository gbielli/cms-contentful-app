import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function CarouselSize() {
  return (
    <>
      <div className="text-4xl leading-snug font-bold">
        Les derniers articles que <br></br> vous{" "}
        <span className="text-[#7c80d9]">n'aimeriez pas manquer</span>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full pb-20 pt-10"
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="">
                <Card>
                  <CardContent className="relative flex items-center justify-center p-0">
                    <Image
                      className="object-cover w-full h-full rounded-2xl"
                      src="/images/psyoyo.webp"
                      layout="fill"
                      fill={true}
                      objectFit="cover"
                      alt=""
                    />
                    <div className="image h-full w-full">
                      <div className="flex items-center  justify-center px-2 py-0.5 absolute top-3 left-3 bg-white  bg-opacity-30 rounded-full backdrop-blur-lg">
                        <span className="text-lg text-white">
                          Avis produits
                        </span>
                      </div>
                      <div className="flex items-center  justify-center h-40 absolute bottom-0 w-full bg-gradient-to-t from-black via-black opacity-60"></div>
                      <div className="px-2 py-0.5 absolute bottom-5 left-3 rounded-full">
                        <h3 className="text-3xl text-white font-medium">
                          Mon avis complet sur la possette Yoyo Babyzen 2023.
                        </h3>
                        <div className="mt-4">
                          <Link
                            className={`${buttonVariants({
                              variant: "outline",
                            })} gap-2 shadow-[5px_5px_0px_0px_rgba(109,40,217)]`}
                            href="/login"
                          >
                            Voir l'article
                            <ArrowRightIcon width={24} strokeWidth={1.5} />
                          </Link>
                        </div>
                      </div>

                      <div className="w-[500px] h-[500px]"></div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
