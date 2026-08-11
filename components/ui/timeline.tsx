"use client";

import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [data.length]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 18%", "end 62%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const nextIndex = Math.min(
      data.length - 1,
      Math.max(0, Math.floor(latest * data.length)),
    );
    setActiveIndex(nextIndex);
  });

  return (
    <div ref={containerRef} className="w-full bg-[#ededed] font-sans">
      <div ref={ref} className="relative mx-auto max-w-[1160px] pb-24">
        {data.map((item, index) => (
          <div
            key={item.title}
            className="flex justify-start gap-6 pt-12 md:gap-10 md:pt-28"
          >
            <div className="sticky top-32 z-30 flex max-w-[13rem] shrink-0 self-start md:w-full md:max-w-[18rem]">
              <div className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full bg-[#ededed]">
                <div
                  className={`h-4 w-4 rounded-full border p-2 transition-colors duration-300 ${
                    activeIndex >= index
                      ? "border-[#073bff] bg-[#073bff]"
                      : "border-[#c7c7c7] bg-[#dedede]"
                  }`}
                />
              </div>
              <h3 className="hidden pl-16 text-4xl font-semibold leading-[0.94] tracking-[-0.06em] text-[#7a7a7a] md:block">
                {item.title}
              </h3>
            </div>

            <motion.div
              initial={
                reduceMotion
                  ? { opacity: 1 }
                  : { opacity: 0, transform: "translateY(28px)" }
              }
              whileInView={{ opacity: 1, transform: "translateY(0px)" }}
              viewport={{ once: true, amount: 0.24 }}
              transition={{
                duration: 0.72,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="relative w-full pl-10 md:pl-0"
            >
              <h3 className="mb-4 block text-3xl font-semibold leading-[0.94] tracking-[-0.06em] text-[#7a7a7a] md:hidden">
                {item.title}
              </h3>
              {item.content}
            </motion.div>
          </div>
        ))}

        <div
          style={{ height: `${height}px` }}
          className="absolute left-5 top-0 w-[2px] overflow-hidden bg-gradient-to-b from-transparent via-[#c7c7c7] to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] md:left-5"
        >
          <motion.div
            style={{
              height: reduceMotion ? height : heightTransform,
              opacity: reduceMotion ? 1 : opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-[#073bff] via-[#073bff] to-transparent"
          />
        </div>
      </div>
    </div>
  );
};
