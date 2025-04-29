"use client";

import { useEffect, useRef } from "react";
import Card from "./card";
import gsap from "gsap";
import ReactLenis from "@studio-freight/react-lenis";
import ScrollTrigger from "gsap/ScrollTrigger";
import { projects } from "@/constants/projects";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const container = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const cards = cardRefs.current;
    const trigger = container.current?.querySelector(".cards");

    if (!trigger || cards.length === 0) return;

    const totalScrollHeight = window.innerHeight * 3;
    const positions = [14, 32, 50, 68, 86];
    const rotations = [-11, -5.5, 0, 5.5, 11];

    // PIN
    ScrollTrigger.create({
      trigger: trigger,
      start: "top 10%",
      end: () => `+=${totalScrollHeight}`,
      pin: true,
      pinSpacing: true,
    });

    // SPREAD
    cards.forEach((card, index) => {
      if (card) {
        gsap.to(card, {
          left: `${positions[index]}%`,
          rotation: `${rotations[index]}`,
          ease: "none",
          scrollTrigger: {
            trigger: trigger,
            start: "top 10%",
            end: () => `+=${window.innerHeight}`,
            scrub: true,
            id: `spread-${index}`,
          },
        });
      }
    });

    // FLIP
    cards.forEach((card, index) => {
      const frontEl = card?.querySelector(".front");
      const backEl = card?.querySelector(".back");

      const staggerOffset = index * 0.05;
      const startOffset = 1 / 3 + staggerOffset;
      const endOffset = 2 / 3 + staggerOffset;
      ScrollTrigger.create({
        trigger: trigger,
        start: "top 10%",
        end: () => `+=${totalScrollHeight}`,
        scrub: true,
        id: `rotate-flip-${index}`,
        onUpdate: (self) => {
          const progress = self.progress;
          if (progress >= startOffset && progress <= endOffset) {
            const animationProgress = (progress - startOffset) / (1 / 3);
            const frontRotation = -180 * animationProgress;
            const backRotation = 180 - 180 * animationProgress;
            const cardRotation = rotations[index] * (1 - animationProgress);
            if (frontEl && backEl) {
              gsap.to(frontEl, { rotateY: frontRotation, ease: "power1.out" });
              gsap.to(backEl, { rotateY: backRotation, ease: "power1.out" });
            }
            gsap.to(card, {
              xPercent: -50,
              yPercent: -50,
              rotate: cardRotation,
              ease: "power1.out",
            });
          }
        },
      });
    });
  }, []);

  const title = container.current?.querySelector(".title-container");

  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  });
  return (
    <ReactLenis root>
      <div className="relative w-full h-[100vh]">
        <div className="absolute top-0 left-0 w-full z-20 h-[310vh]">
          <div className="sticky top-8 pl-10">
            <h2 className="font-playfair text-7xl z-20">
              Project <span className="italic">Showcase</span>
            </h2>
            <p className="font-inter text-xl pt-2 z-10">
              Take a look at some of my most notable projects. More to come!
            </p>
          </div>
        </div>

        <div className="flex flex-row w-full h-[100vh] mt-10" ref={container}>
          <section className="cards w-full h-full relative">
            {projects.map((_, index) => (
              <Card
                key={index}
                id={`card-${index + 1}`}
                frontText={_.frontText}
                backText={_.backText}
                githubLink={_.githubLink}
                ref={(el: HTMLElement | null) => {
                  cardRefs.current[index] = el;
                }}
              />
            ))}
          </section>
          <section className="footer"></section>
        </div>
      </div>
    </ReactLenis>
  );
}
