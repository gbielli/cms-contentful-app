"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function infiniteText() {
  const slider = useRef(null);
  const firstText = useRef<HTMLDivElement>(null);
  const secondText = useRef<HTMLDivElement>(null);

  let xPercent = 0;

  useEffect(() => {
    gsap.set(secondText.current, {
      left: secondText.current.getBoundingClientRect().width,
    });

    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    }

    gsap.set(firstText.current, { xPercent: xPercent });

    gsap.set(secondText.current, { xPercent: xPercent });

    requestAnimationFrame(animate);

    xPercent -= 0.07;
  };

  return (
    <div className="relative h-[400px] overflow-hidden">
      <div className="sliderContainer overflow-hidden absolute">
        <div ref={slider} className="relative whitespace-nowrap">
          <p
            ref={firstText}
            className="relative m-0 text-[230px] font-semibold pr-10"
          >
            BALD // BALD // BALD //
          </p>

          <p
            ref={secondText}
            className="text-[230px] absolute left-[100%] font-semibold top-0"
          >
            BALD // BALD // BALD //
          </p>
        </div>
      </div>
    </div>
  );
}
