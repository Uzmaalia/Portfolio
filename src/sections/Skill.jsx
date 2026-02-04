import { useState } from "react";
import { cn } from "@/lib/utils";

import jackImg from "@/avatars/J.jpg";
import kingImg from "@/avatars/K.jpg";
import queenImg from "@/avatars/Q.jpg";
import jokerImg from "@/avatars/Joker.jpg";

const skills = [
  { name: "Java", rank: "K", image: kingImg },
  { name: "Spring Boot", rank: "K", image: kingImg },
  { name: "SQL", rank: "K", image: kingImg },

  { name: "Git", rank: "Q", image: queenImg },
  { name: "CSS", rank: "Q", image: queenImg },

  { name: "AWS", rank: "J", image: jackImg },
  { name: "GitHub Action", rank: "J", image: jackImg },

  { name: "AI / ML", rank: "JOKER", image: jokerImg },
  { name: "React", rank: "JOKER", image: jokerImg },

  { name: "Docker", rank: "J", image: jackImg },
];

const rankStyles = {
  K: "text-primary",
  Q: "text-pink-400",
  J: "text-foreground/80",
  JOKER: "text-white",
};

const rankSymbols = {
  K: "♠",
  Q: "♦",
  J: "♥",
};

const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);

export const Skill = () => {
  const [deck, setDeck] = useState(skills);
  const [showAllMobile, setShowAllMobile] = useState(false);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

  const visibleSkills = isMobile && !showAllMobile ? deck.slice(0, 4) : deck;

  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skill</span> Deck
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 place-items-center">
          {visibleSkills.map((skill, idx) => (
            <div
              key={skill.name}
              className={cn(
                "glass relative rounded-2xl p-3 h-[240px] w-[150px] glow-border",
                "animate-fade-in",
              )}
              style={{
                animationDelay:
                  isMobile && showAllMobile ? `${idx * 80}ms` : `${idx * 60}ms`,
              }}
            >
              {/* Top */}
              <div className="flex flex-col items-start gap-0.5 text-xs uppercase">
                <span className={cn("font-semibold", rankStyles[skill.rank])}>
                  {skill.rank}
                </span>

                {rankSymbols[skill.rank] && (
                  <span className="text-muted-foreground font-normal leading-none">
                    {rankSymbols[skill.rank]}
                  </span>
                )}
              </div>

              {/* Center */}
              <div className="flex flex-col items-center justify-center h-full -mt-4">
                <div className="w-14 h-14 rounded-full bg-black/40 mb-3 overflow-hidden flex items-center justify-center">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-full h-full object-cover pixelated select-none"
                    draggable={false}
                  />
                </div>

                <h3 className="text-sm font-semibold text-center">
                  {skill.name}
                </h3>
              </div>

              {/* Bottom */}
              <div
                className={cn(
                  "absolute bottom-3 right-3 flex flex-col items-end gap-0.5 text-xs uppercase rotate-180 font-semibold",
                  rankStyles[skill.rank],
                )}
              >
                <span>{skill.rank}</span>

                {rankSymbols[skill.rank] && (
                  <span className="text-muted-foreground font-normal leading-none">
                    {rankSymbols[skill.rank]}
                  </span>
                )}
              </div>
            </div>
          ))}

          {/* + MORE — centered on mobile */}
          {isMobile && !showAllMobile && deck.length > 4 && (
            <button
              onClick={() => setShowAllMobile(true)}
              className="relative sm:hidden col-span-2 flex justify-center animate-fade-in"
            >
              {/* stacked back cards */}
              <div className="absolute top-1 left-1 w-[150px] h-[240px] rounded-2xl bg-secondary/60 opacity-40" />
              <div className="absolute top-2 left-2 w-[150px] h-[240px] rounded-2xl bg-secondary/60 opacity-30" />

              {/* front card */}
              <div className="glass relative w-[150px] h-[240px] rounded-2xl glow-border flex flex-col items-center justify-center">
                <div className="text-4xl mb-3 text-primary">🂠</div>
                <span className="text-xs uppercase tracking-widest text-primary">
                  +{deck.length - 4} More
                </span>
              </div>
            </button>
          )}
        </div>

        {/* Shuffle Button */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => {
              setDeck(shuffleArray(deck));
            }}
            className="
              px-6 py-2 text-xs uppercase tracking-widest
              border border-primary/60
              text-primary
              hover:bg-primary/10
              transition-all duration-300
              rounded-md
              glow-border
            "
          >
            ✦ Shuffle Deck
          </button>
        </div>

        {/* Legend */}
        <p className="mt-4 text-center text-xs tracking-wider text-muted-foreground">
          <span className="text-primary">KING</span> = Consider It Done&nbsp;
          |&nbsp;
          <span className="text-primary">QUEEN</span> = I Can Do&nbsp; |&nbsp;
          <span className="text-primary">JACK</span> = Confident&nbsp; |&nbsp;
          <span className="text-primary">JOKER</span> = It’s My Wild Card
        </p>
      </div>
    </section>
  );
};
