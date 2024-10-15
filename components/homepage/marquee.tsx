import Marquee from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";

const reviews = [
  {
    body: "boy with trotteur",
    img: "/images/trotteur-img.jpg",
    stars: 5,
  },
  {
    body: "chaise haute",
    img: "/images/thermomix-img.png",
    stars: 5,
  },
  {
    body: "Chaise haute baby",
    img: "/images/chaise-haute-img.jpg",
    stars: 5,
  },
  {
    body: "Pousette yoyo",
    img: "/images/thermomix-img.png",
    stars: 5,
  },
  {
    body: "Thermomix",
    img: "/images/chaise-haute-img.jpg",
    stars: 5,
  },
  {
    body: "",
    img: "/images/yoyo-img.jpg",
    stars: 5,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const Stars = () => {
  return (
    <div className={` bg-green-500 mr-1 p-1 rounded-md`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5 fill-white stroke-none"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
        />
      </svg>
    </div>
  );
};

const ReviewCard = ({
  img,
  body,
  stars,
}: {
  img: string;
  body: string;
  stars: number;
}) => {
  return (
    <figure
      className={cn(
        "relative overflow-hidden rounded-xl border p-6",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] ",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          className="aspect-[3/4] object-cover"
          width="64"
          height="64"
          alt=""
          src={img}
        />
        <div className="flex flex-col gap-2">
          <blockquote className="mt-2 text-sm">{body}</blockquote>
          <div className="flex">
            {Array.from({ length: stars }).map((_, index) => (
              <Stars key={index} />
            ))}
          </div>
        </div>
      </div>
    </figure>
  );
};

export default function MarqueeDemo() {
  return (
    <div className="relative flex h-[450px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      <Marquee className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.img} {...review} />
        ))}
      </Marquee>
      <Marquee reverse className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.img} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
