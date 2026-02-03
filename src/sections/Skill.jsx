import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 65, category: "backend" },
  { name: "GraphQL", level: 60, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const Skill = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory,
  );

  const visibleSkills = showAll ? filteredSkills : filteredSkills.slice(0, 6);

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in animation-delay-100">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setShowAll(false); // reset on category change
              }}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {visibleSkills.map((skill, idx) => (
            <div
              key={skill.name}
              className="
                glass
                rounded-2xl
                p-6
                glow-border
                animate-fade-in
                transition-all
                duration-300
                hover:-translate-y-1
              "
              style={{ animationDelay: `${(idx + 1) * 80}ms` }}
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg text-foreground">
                  {skill.name}
                </h3>
              </div>

              <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <div className="text-right mt-2">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less */}
        {filteredSkills.length > 6 && (
          <div className="flex justify-center mt-16 animate-fade-in">
            <AnimatedBorderButton onClick={() => setShowAll((prev) => !prev)}>
              {showAll ? (
                <>
                  <ChevronUp className="w-5 h-5" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="w-5 h-5" />
                  Show More
                </>
              )}
            </AnimatedBorderButton>
          </div>
        )}
      </div>
    </section>
  );
};
