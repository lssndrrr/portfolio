import React from "react";
import { DiGithubBadge } from "react-icons/di";

import { forwardRef } from "react";

type CardProps = {
  id: string;
  frontText: string;
  backText: string;
  githubLink?: string;
};

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ id, frontText, backText, githubLink }, ref) => {
    return (
      <div className="card absolute w-[100vw]" id={id} ref={ref}>
        <div className="card-wrapper">
          <div className="inner">
            <div className="front bg-[#00EEFF] text-black font-playfair italic text-2xl text-center">
              <p>{frontText}</p>
            </div>
            <div className="back bg-[#FF0061] h-3/4 w-full p-0 m-0 text-left flex flex-col">
              <p className="w-full px-2">{backText}</p>
              {githubLink && (
                <div className="w-full flex justify-center mt-auto mb-2">
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <DiGithubBadge
                      size={32}
                      className="text-white group-hover:text-pink-500 transition-colors duration-300"
                    />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default Card;
