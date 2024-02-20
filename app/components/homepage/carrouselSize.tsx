import { buttonVariants } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function CarouselSize({ morePosts }: { morePosts: any[] }) {
  return (
    <section className="container">
      <div className="text-4xl leading-snug font-bold">
        Les derniers articles
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full pb-20 pt-10"
      >
        <CarouselContent>
          {morePosts.map((post, index) => {
            return (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="">
                  <Card>
                    <CardContent className="relative flex items-center justify-center p-0">
                      <Image
                        className="object-cover w-full h-full rounded-2xl"
                        src="/images/psyoyo.webp"
                        fill={true}
                        alt=""
                      />
                      <div className="image h-full w-full">
                        <div className="flex items-center  justify-center px-2 py-0.5 absolute top-3 left-3 bg-white  bg-opacity-30 rounded-full backdrop-blur-lg">
                          <span className="text-lg text-white">
                            {post.category.name}
                          </span>
                        </div>
                        <div className="flex items-center  justify-center h-60 absolute bottom-0 w-full bg-gradient-to-t from-black via-black opacity-60 rounded-2xl"></div>
                        <div className="px-2 py-0.5 absolute bottom-5 left-3 rounded-full">
                          <h3 className="text-2xl text-white font-medium">
                            {post.title}
                          </h3>
                          <div className="mt-4">
                            <Link
                              className={`${buttonVariants({
                                variant: "outline",
                              })} gap-2`}
                              href={`/articles/${post.slug}`}
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
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
