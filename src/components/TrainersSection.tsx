import { motion } from "framer-motion";
import { Linkedin, Award, Users, ArrowRight, BookOpen } from "lucide-react";
import trainer1 from "@/assets/trainer-1.webp";
import trainer2 from "@/assets/trainer-2.webp";
import CTAButton from "./CTAButton";

const trainers = [
  {
    name: "Dr. Ajayya Kumar",
    title: "Co-creator and steward",
    image: trainer1,
    bio: "Dr. Ajayya Kumar is a global thought leader, educator, mentor, entrepreneur, and philanthropist known for his work in leadership, purpose, and human potential.",
    philosophy: "True leadership isn't about control—it's about alignment. When your inner world is clear, everything you touch reflects that clarity.",
    credentials: ["Ph.D. Academic Leader", "Global Entrepreneur", "Dedicated Philanthropist"],
    specialties: ["Leadership Excellence", "Purpose Discovery", "Human Potential"],
    stats: { clients: "10k+", years: "25+", workshops: "1000+" },
    linkedin: "https://www.linkedin.com/in/ajayya-kumar/",
  },
  {
    name: "Praveen Parameswar",
    title: "Co-creator and steward",
    image: trainer2,
    bio: "Praveen Parameswar is an education entrepreneur and mentor helping people navigate growth and transitions with clarity and confidence.",
    philosophy: "Growth happens when clarity meets action. My mission is to help individuals navigate their journey with confidence and purpose.",
    credentials: ["Education Entrepreneur", "Strategic Mentor", "Growth Specialist"],
    specialties: ["Career Navigation", "Strategic Growth", "Clarity Coaching"],
    stats: { clients: "5k+", years: "15+", workshops: "750+" },
    linkedin: "https://www.linkedin.com/in/praveenparameswar/",
  },
];

const TrainersSection = () => {
  return (
    <section id="trainers" className="py-20 px-4 sm:px-6 bg-background relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
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
Stewards of Success369            </p>
            <span className="h-[1px] w-8 bg-primary/60" />
          </div>
          <h2 className="mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
Guided by Experience. Grounded in Integrity.          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
Success369 is guided by two stewards who believe success is cultivated with clarity and care. They safeguard its philosophy and guide its application across individuals, teams, and organisations ensuring it evolves through real-world practice.          </p>
        </motion.div>

        {/* Trainers — alternating full-width rows */}
        <div className="space-y-20 md:space-y-32">
          {trainers.map((trainer, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <motion.div
                key={trainer.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} gap-8 md:gap-14 items-center`}
              >
                {/* Image side */}
                <div className="w-full md:w-[45%] shrink-0">
                  <div className="group relative rounded-2xl overflow-hidden aspect-[3/4] sm:aspect-[4/5]">
                    <img
                      src={trainer.image}
                      alt={trainer.name}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />


                    {/* Decorative accent line */}
                    <div className={`absolute top-0 ${isReversed ? "right-0" : "left-0"} w-1 h-24 bg-gradient-to-b from-primary to-transparent`} />
                  </div>
                </div>

                {/* Content side */}
                <div className="w-full md:w-[55%]">
                  <div className="space-y-5">
                    <div>
                      <p className="font-display text-xs uppercase tracking-[0.2em] text-primary mb-2">
                        {trainer.title}
                      </p>
                      <h3 className="text-foreground">
                        {trainer.name}
                      </h3>
                    </div>

                    <p className="text-muted-foreground text-base md:text-lg">
                      {trainer.bio}
                    </p>

                    {/* Philosophy quote */}
                    <div className="border-l-2 border-primary/40 pl-5 py-1">
                      <p className="text-foreground/80 text-lg md:text-xl italic font-light">
                        "{trainer.philosophy}"
                      </p>
                    </div>

                    {/* Specialties */}
                    <div className="flex flex-wrap gap-2">
                      {trainer.specialties.map((s) => (
                        <span
                          key={s}
                          className="text-[11px] font-display font-medium uppercase tracking-wider px-3 py-1.5 rounded-full border border-border text-foreground bg-secondary/50"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    {/* Credentials */}
                    <div className="flex flex-wrap gap-3">
                      {trainer.credentials.map((cred) => (
                        <div key={cred} className="flex items-center gap-2 text-muted-foreground">
                          <Award className="h-3.5 w-3.5 text-primary/60" />
                          <span className="text-xs sm:text-sm">{cred}</span>
                        </div>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4 pt-2">
                      <CTAButton 
                        href="mailto:support@success369.org"
                        size="sm"
                        variant="primary"
                        className="uppercase tracking-wider"
                      >
                        Take a Session
                      </CTAButton>
                      <div className="flex gap-2">
                        <a 
                          href={trainer.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h-9 w-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors duration-300"
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* --- JOIN AS MENTOR CTA --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 md:mt-32 text-center bg-card/40 backdrop-blur-xl border border-border/30 rounded-[2.5rem] p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-primary/5 -z-10" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Users size={32} className="text-primary" />
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 text-foreground">Join as a <span className="italic text-primary">Mentor</span></h3>
            <p className="text-muted-foreground text-lg mb-8">
              Are you an experienced leader or coach aligned with our philosophy? Join our team of stewards to guide others toward clarity and sustainable success.
            </p>
            <CTAButton to="/apply/mentor" variant="shimmer" size="lg" className="px-12">
              Apply to Join
            </CTAButton>
          </div>
          {/* Background Decoration */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        </motion.div>

      </div>
    </section>
  );
};

export default TrainersSection;
