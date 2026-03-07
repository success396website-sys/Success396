import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import CTAButton from "./CTAButton";

interface FAQItem {
  question: string;
  answer: string;
  cta?: {
    text: string;
    href: string;
  };
}

interface FAQSectionProps {
  title?: string;
  description?: string;
  items?: FAQItem[];
}

const defaultFaqs: FAQItem[] = [
  {
    question: "What exactly does Success369 do?",
    answer:
      "Success369 helps individuals, leaders, teams, and organisations build success through clarity, alignment, and sustainable action.\nWe do this through guided conversations, structured journeys, and practical frameworks that support better decisions, stronger alignment, and meaningful momentum.",
  },
  {
    question: "Is Success369 coaching, training, or consulting?",
    answer:
      "Success369 is not traditional coaching, training, or consulting.\nIt is a guided growth ecosystem that combines clarity work, alignment, and application—depending on where you are and what you need.\nSome journeys are reflective, some are applied, and some are strategic. The format adapts to the context.",
  },
  {
    question: "Who are the Success369 Journeys meant for?",
    answer:
      "Success369 Journeys are designed for:\n• Individuals at life or career crossroads\n• Professionals and leaders navigating growth or transition\n• Founders and entrepreneurs building long-term value\n• Teams and organisations seeking alignment and execution\n\nEach journey is stand-alone and chosen based on readiness—not hierarchy.",
    cta: {
      text: "Take a Free Session",
      href: "/free-session"
    }
  },
  {
    question: "Do I need to follow a fixed path or complete all journeys?",
    answer:
      "No.\nEach Success369 Journey is complete in itself.\nThere is no mandatory sequence and no expectation to progress from one to another.\nYou engage with what fits your current need.",
  },
  {
    question: "I’m not sure which journey is right for me. What should I do?",
    answer:
      "That’s common—and expected.\nIf you’re unsure, the best place to begin is a free Success369 session.\nIt’s a calm conversation designed to help you:\n• Understand where you are\n• See what fits\n• Decide without pressure",
    cta: {
      text: "Take a Free Session",
      href: "/free-session"
    }
  },
  {
    question: "What happens in a free session?",
    answer:
      "The free session is a guided conversation, not a sales call.\nYou can expect:\n• Thoughtful listening\n• Clarifying questions\n• A clearer view of your situation\n• Honest guidance on whether—and how—Success369 may help\n\nThere is no obligation to proceed further.",
  },
  {
    question: "Is Success369 only for individuals, or also for teams and organisations?",
    answer:
      "Success369 works at both levels.\nThe same principles apply to:\n• Individuals\n• Leadership teams\n• Organisations and institutions\n\nJourneys and engagements are adapted to context, scale, and responsibility.",
  },
  {
    question: "How is Success369 different from other success or leadership programs?",
    answer:
      "Most programs focus on performance, tactics, or motivation.\nSuccess369 focuses on alignment first—because sustainable success depends on clarity, coherence, and integrity.\nWe don’t push speed.\nWe help build success that lasts.",
  },
  {
    question: "Is this suitable if I’m already doing well?",
    answer:
      "Yes.\nMany people come to Success369 not because something is wrong—but because they want to ensure their success remains meaningful, aligned, and sustainable as responsibility grows.",
  },
  {
    question: "Do I need to read the book before engaging?",
    answer:
      "No.\nThe book and the journeys work independently and together.\nSome people read first. Others begin with a conversation.\nBoth paths are valid.",
  },
  {
    question: "How do I get started?",
    answer:
      "The simplest way to begin is with a free session.\nIt helps you explore Success369 without pressure and decide your next step with confidence.",
    cta: {
      text: "Take a Free Session",
      href: "/free-session"
    }
  },
];

const FAQSection = ({ 
  title = "FREQUENTLY ASKED QUESTIONS", 
  description = "Understand how Success369 works and how it can help your journey.",
  items = defaultFaqs 
}: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 bg-background relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

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
              Got Questions?
            </p>
            <span className="h-[1px] w-8 bg-primary/60" />
          </div>
          <h2 className="mb-8">{title}</h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Accordion */}
          <div className="space-y-4">
            {items.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div
                  className={`rounded-2xl border transition-all duration-500 ${
                    openIndex === index
                      ? "border-primary/30 bg-primary/5 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)]"
                      : "border-border/50 bg-card/30 backdrop-blur-xl hover:border-primary/20 hover:bg-card/50"
                  }`}
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full flex items-center justify-between p-6 sm:p-8 text-left gap-4"
                  >
                    <span className="text-base sm:text-lg md:text-xl font-semibold text-foreground leading-tight">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className={`shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-colors duration-500 ${
                        openIndex === index ? "border-primary/50 bg-primary/10" : "border-border"
                      }`}
                    >
                      {openIndex === index ? (
                        <Minus className="w-5 h-5 text-primary" />
                      ) : (
                        <Plus className="w-5 h-5 text-muted-foreground" />
                      )}
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.5,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                          <div className="h-px w-full bg-border/30 mb-6" />
                          <div className="space-y-6">
                            <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-light whitespace-pre-line">
                              {faq.answer}
                            </p>
                            {faq.cta && (
                              <div className="pt-2">
                                <CTAButton to={faq.cta.href} size="sm" variant="outline">
                                  {faq.cta.text}
                                </CTAButton>
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
