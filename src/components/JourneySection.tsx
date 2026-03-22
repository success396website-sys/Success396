import { motion } from "framer-motion";
import card1 from "@/assets/card-1.webp";
import card2 from "@/assets/card-2.webp";
import card3 from "@/assets/card-3.webp";
import card4 from "@/assets/card-4.webp";

const cards = [
  {
    image: card1,
    title: "Individuals Seeking Clarity and Direction",
    description:
      "You're capable and driven—but at a crossroads. You want clarity, confidence, and the right next step, not a rushed decision. You value thoughtful direction over impulsive action.",
    step: "01",
  },
  {
    image: card2,
    title: "Professionals Navigating Growth or Transition",
    description:
      "You're progressing, but growth feels heavy and misaligned as responsibilities and expectations increase. You want alignment, and sustainable momentum without losing balance or meaning.",
    step: "02",
  },
  {
    image: card3,
    title: "Leaders, Founders, and Entrepreneurs",
    description:
      "You carry responsibility for people, impact, and meaningful outcomes—not just results. You want long-term clarity and success built with coherence, not short-term gains at lasting cost.",
    step: "03",
  },
  {
    image: card4,
    title: "Organisations and Institutions",
    description:
      "You want performance without compromising trust, culture, or purpose. Growth is happening—but alignment, and meaning are missing, and you seek focused leadership and strong execution.",
    step: "04",
  },
];

const JourneySection = () => {
  return (
    <section id="journey" className="py-20 px-4 sm:px-6 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none -translate-x-1/2" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] pointer-events-none translate-x-1/4 -translate-y-1/4" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14 md:mb-20 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-primary/60" />
            <p className="font-display text-xs uppercase tracking-[0.3em] text-primary font-bold">
              The Path
            </p>
            <span className="h-[1px] w-8 bg-primary/60" />
          </div>
          <h2 className="mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Who Should <br />
            Begin This Journey?
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Success396 is for those who want success to feel clear, aligned, and meaningful—not rushed or forced.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 items-start">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ marginTop: (index === 1 || index === 3) ? "100px" : "0px" }}
              className="group relative"
            >
              {/* Floating Background Number - Refined */}
              <span className="absolute -top-16 -right-8 font-display text-[10rem] md:text-[14rem] font-black text-foreground/[0.03] select-none pointer-events-none transition-all duration-1000 group-hover:text-primary/[0.07] group-hover:-translate-y-8 group-hover:-translate-x-4">
                {card.step}
              </span>

              <div className="relative rounded-[2.5rem] border border-border/40 bg-card/30 backdrop-blur-2xl overflow-hidden transition-all duration-700 hover:border-primary/40 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]">
                {/* Image Container */}
                <div className="relative h-64 sm:h-80 md:h-[400px] overflow-hidden">
                  <motion.img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover grayscale brightness-75 transition-all duration-1000 ease-out group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent" />
                  
                  {/* Hover Accent Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                </div>

                {/* Content */}
                <div className="p-10 md:p-12">
                  <motion.div 
                    className="w-16 h-1 bg-primary/20 mb-8 overflow-hidden rounded-full"
                    whileInView={{ width: "64px" }}
                  >
                    <motion.div 
                      className="h-full bg-primary"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.div>
                  
                  <h3 className="mb-4 text-foreground tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Interactive bottom bar */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary via-accent to-primary w-0 group-hover:w-full transition-all duration-1000 ease-in-out" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
