"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

interface ScrollExpandMediaProps {
  mediaSrc: string;
  bgImageSrc: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  scrollToExpand?: string;
  children?: ReactNode;
}

const ScrollExpandMedia = ({
  mediaSrc,
  bgImageSrc,
  eyebrow,
  title,
  subtitle,
  scrollToExpand,
  children,
}: ScrollExpandMediaProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);
  const [isMobileState, setIsMobileState] = useState(false);
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (reduceMotion) {
      setScrollProgress(1);
      setShowContent(true);
      setMediaFullyExpanded(true);
    }
  }, [reduceMotion]);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobileState(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;

    const handleWheel = (event: globalThis.WheelEvent) => {
      if (mediaFullyExpanded && event.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        setShowContent(false);
        event.preventDefault();
        return;
      }

      if (!mediaFullyExpanded) {
        event.preventDefault();
        setScrollProgress((currentProgress) => {
          const nextProgress = Math.min(
            Math.max(currentProgress + event.deltaY * 0.0009, 0),
            1,
          );

          if (nextProgress >= 1) {
            setMediaFullyExpanded(true);
            setShowContent(true);
          } else if (nextProgress < 0.75) {
            setShowContent(false);
          }

          return nextProgress;
        });
      }
    };

    const handleTouchStart = (event: globalThis.TouchEvent) => {
      setTouchStartY(event.touches[0].clientY);
    };

    const handleTouchMove = (event: globalThis.TouchEvent) => {
      if (!touchStartY) return;

      const touchY = event.touches[0].clientY;
      const deltaY = touchStartY - touchY;

      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        setShowContent(false);
        event.preventDefault();
        return;
      }

      if (!mediaFullyExpanded) {
        event.preventDefault();
        const scrollFactor = deltaY < 0 ? 0.008 : 0.005;
        setScrollProgress((currentProgress) => {
          const nextProgress = Math.min(
            Math.max(currentProgress + deltaY * scrollFactor, 0),
            1,
          );

          if (nextProgress >= 1) {
            setMediaFullyExpanded(true);
            setShowContent(true);
          } else if (nextProgress < 0.75) {
            setShowContent(false);
          }

          return nextProgress;
        });
        setTouchStartY(touchY);
      }
    };

    const handleTouchEnd = () => {
      setTouchStartY(0);
    };

    const handleScroll = () => {
      if (!mediaFullyExpanded) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("touchstart", handleTouchStart, {
      passive: false,
    });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [mediaFullyExpanded, reduceMotion, touchStartY]);

  const mediaWidth = 320 + scrollProgress * (isMobileState ? 660 : 1240);
  const mediaHeight = 410 + scrollProgress * (isMobileState ? 270 : 460);
  const copyOpacity = 1 - scrollProgress * 0.78;
  const copyTranslate = scrollProgress * (isMobileState ? 36 : 56);

  return (
    <div
      ref={sectionRef}
      className="overflow-x-hidden bg-[#06111f] transition-colors duration-700 ease-in-out"
    >
      <section className="relative flex min-h-[100dvh] flex-col items-center justify-start">
        <motion.div
          className="absolute inset-0 z-0 h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 - scrollProgress * 0.36 }}
          transition={{ duration: 0.1 }}
        >
          <Image
            src={bgImageSrc}
            alt=""
            width={1920}
            height={1080}
            className="h-screen w-screen object-cover object-center"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-black/25" />
        </motion.div>

        <div className="container relative z-10 mx-auto flex min-h-[100dvh] flex-col items-center justify-center px-5">
          <div
            className="absolute left-1/2 top-1/2 z-0 overflow-hidden rounded-[16px] shadow-[0_30px_90px_rgba(0,0,0,0.38)]"
            style={{
              width: `${mediaWidth}px`,
              height: `${mediaHeight}px`,
              maxWidth: "95vw",
              maxHeight: "88vh",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Image
              src={mediaSrc}
              alt=""
              width={1280}
              height={900}
              className="h-full w-full object-cover object-center"
              priority
              unoptimized
            />
            <motion.div
              className="absolute inset-0 bg-black/35"
              initial={{ opacity: 0.65 }}
              animate={{ opacity: 0.62 - scrollProgress * 0.28 }}
              transition={{ duration: 0.2 }}
            />
          </div>

          <div
            className="relative z-10 max-w-5xl text-center"
            style={{
              opacity: copyOpacity,
              transform: `translateY(-${copyTranslate}px)`,
            }}
          >
            {eyebrow && (
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
                {eyebrow}
              </p>
            )}
            <h1 className="text-balance text-4xl font-semibold leading-[0.96] tracking-[-0.04em] text-[#ededed] sm:text-6xl md:text-7xl">
              {title}
            </h1>
            {subtitle && (
              <p className="mx-auto mt-6 max-w-2xl text-balance text-lg font-semibold leading-[1.15] tracking-[-0.03em] text-white/92 drop-shadow-[0_2px_16px_rgba(0,0,0,0.45)] sm:text-2xl md:text-3xl">
                {subtitle}
              </p>
            )}
            {scrollToExpand && (
              <p className="mt-10 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60">
                {scrollToExpand}
              </p>
            )}
          </div>
        </div>
      </section>

      {children && (
        <motion.section
          className="w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: showContent ? 1 : 0 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        >
          {children}
        </motion.section>
      )}
    </div>
  );
};

export default ScrollExpandMedia;
