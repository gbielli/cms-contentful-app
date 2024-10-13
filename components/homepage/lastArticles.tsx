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

export function LastArticles({ morePosts }: { morePosts: any[] }) {
  const firstPost = morePosts[0];
  return (
    <section className="container pt-20 bg-secondary pb-20 mb-20">
      <div className="text-4xl text-[#001744] leading-snug font-bold">
        Nos derniers articles
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full pb-10 pt-10"
      >
        <CarouselContent>
          {morePosts.map((post, index) => {
            return (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 ">
                <Link href={`/articles/${post.slug}`} className="block">
                  <Card>
                    <CardContent className="relative flex items-center justify-center p-0 ">
                      <Image
                        className="object-cover w-full h-full rounded-2xl "
                        src="/images/psyoyo.webp"
                        fill={true}
                        alt=""
                      />
                      <div className="image h-full w-full">
                        <div className="flex items-center  justify-center px-2 py-0.5 absolute top-3 left-3 bg-white shadow-md  bg-opacity-50 rounded-full backdrop-blur-lg">
                          <span className="text-md text-black">
                            {post.category.name}
                          </span>
                        </div>
                        <div className="flex items-center  justify-center h-60 absolute bottom-0 w-full bg-gradient-to-t from-black via-black opacity-60 rounded-2xl"></div>
                        <div className="px-4 py-0.5 absolute bottom-5 rounded-full">
                          <h3 className="text-2xl text-white font-medium">
                            {post.title}
                          </h3>
                          <div className="mt-4">
                            <span
                              className={`ml-auto ${buttonVariants({
                                variant: "outline",
                              })} gap-2`}
                            >
                              Voir l'article
                              <ArrowRightIcon width={24} strokeWidth={1.5} />
                            </span>
                          </div>
                        </div>

                        <div className="w-[500px] h-[500px]"></div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
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
