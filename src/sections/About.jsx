import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Rocket,
    title: "Problem Solving",
    description:
      "Breaking down problems into clear, logical steps to build effective solutions.",
  },

  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing well structured, understandable code while following best practices.",
  },

  {
    icon: Lightbulb,
    title: "Learning",
    description:
      "Strengthening skills through hands on projects, experimentation, and continuous improvement.",
  },

  {
    icon: Users,
    title: "Collaboration",
    description:
      "Open to feedback and working with others to turn ideas into working solutions.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Turning ideas into code,
              <span className="font-serif italic font-normal text-white">
                {" "}
                with curiosity and clarity.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I approach software as a craft understanding how systems work
                and shaping them into something clear, functional, and
                intentional. Curiosity pulled me into development; discipline
                keeps me improving.
              </p>
              <p>
                I work across the stack using tools like React and Java,
                focusing on clarity in code and structure in design. I enjoy the
                process of shaping small components into complete applications
                that feel thoughtful, usable, and well put together.
              </p>
              <p>
                Beyond writing code, I spend time learning new tools, refining
                past projects, and understanding how good software is designed
                and maintained. I’m focused on steady growth, strong
                fundamentals, and doing the work well.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                “I approach development with curiosity, structure, and a focus on steady improvement.”
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
