export interface Event {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  longDescription?: string;
  recap?: string;
  tag: string;
  status: "upcoming" | "past";
  type: "virtual" | "hybrid" | "in-person";
  date: string;
  time: string;
  location: string;
  image: string;
  videoUrl?: string;
  spots?: string;
  attendees?: string;
  highlights: string[];
  speakers?: { name: string; role: string }[];
}

import eventSummitImg from "@/assets/event-summit.webp";

export const allEvents: Event[] = [
  {
    slug: "master-your-momentum",
    title: "Master Your Momentum",
    subtitle: "The 3rd Annual Success369 Summit",
    description: "Join us for a transformational 3-day experience designed to align your vision with your daily actions.",
    longDescription: "The Success369 Summit is our flagship annual event. It brings together a community of high-achievers who are looking for something deeper than traditional productivity hacks. Over three days, you will dive deep into the success architecture that has helped thousands build lives of clarity and impact.",
    tag: "Summit",
    status: "upcoming",
    type: "in-person",
    date: "May 12-14, 2024",
    time: "9:00 AM - 6:00 PM",
    location: "London, UK",
    image: eventSummitImg,
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-businessmen-and-businesswomen-in-a-meeting-room-4840-large.mp4",
    spots: "50 spots remaining",
    highlights: [
      "Deep dive into the 3 pillars of Success369",
      "Interactive workshops with lead coaches",
      "Networking with like-minded visionaries",
      "Exclusive summit workbook and resources"
    ],
    speakers: [
      { name: "Sarah Chen", role: "Lead Facilitator" },
      { name: "Marcus Thorne", role: "Founder, Success369" }
    ]
  },
  {
    slug: "virtual-clarity-workshop",
    title: "The Clarity Catalyst",
    description: "A free 90-minute masterclass on finding focus in an age of distraction.",
    tag: "Workshop",
    status: "past",
    type: "virtual",
    date: "Jan 25, 2024",
    time: "7:00 PM - 8:30 PM",
    location: "Online",
    image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&q=80&w=800",
    attendees: "1,200+ attendees",
    highlights: [
      "The GITA framework for mental clarity",
      "Practical tools for identifying priorities",
      "Live Q&A session"
    ]
  }
];

export const stats = [
  { label: "Community Members", value: "10K+" },
  { label: "Events Hosted", value: "150+" },
  { label: "Success Stories", value: "2K+" },
  { label: "Global Presence", value: "45 Cities" }
];
