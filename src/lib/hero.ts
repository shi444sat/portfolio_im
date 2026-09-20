export const FRAME_COUNT = 169;

export const framePath = (n: number) =>
  `/frames/frame_${String(n).padStart(4, "0")}.jpg`;

export type Dialogue = {
  id: string;
  show: number;
  hide: number;
  quote: string;
  speaker: string;
  film: string;
};

export const DIALOGUES: Dialogue[] = [
  {
    id: "d1",
    show: 0.1,
    hide: 0.3,
    quote: "Engineering isn't just about writing code — it's about building solutions that bridge physical silicon, algorithms, and real human impact.",
    speaker: "Shivesh Kumar Satyam",
    film: "IIT MADRAS BS DATA SCIENCE",
  },
  {
    id: "d2",
    show: 0.35,
    hide: 0.55,
    quote: "Curiosity is the ultimate compiler. From microcontrollers and computer vision to secure full-stack web platforms, I build to understand and solve.",
    speaker: "Shivesh Kumar Satyam",
    film: "SYSTEMS ENGINEER // BUILDER",
  },
  {
    id: "d3",
    show: 0.6,
    hide: 0.8,
    quote: "Don't just observe the technological revolution — architect it, secure it, and deploy it for real users.",
    speaker: "Shivesh Kumar Satyam",
    film: "SHIVESH // SYSTEMS NOMINAL",
  },
];

export const HERO_TEXT_FADE_END = 0.08;
