export const bio =
  "Collaborative. Creative. Dependable. For 25 years, Derek has worked with directors, production designers, and creative crews to deliver top-tier storytelling on time, on budget, and always with a collaborative spirit.";

export const contacts = [
  { platform: "LinkedIn", url: "https://ca.linkedin.com/in/derek-verdonck-05327352", label: "LinkedIn" },
  { platform: "IMDb", url: "https://www.imdb.com/name/nm2447901/", label: "IMDb" },
  { platform: "Email", url: "mailto:derek.verdonck@gmail.com", label: "derek.verdonck@gmail.com" },
  { platform: "Phone", url: "tel:9028807643", label: "902.880.7643" },
];

export type Credit = {
  title: string;
  year: string;
  role: string;
  studio?: string;
  accolades?: string;
};

export const filmCredits: Credit[] = [
  {
    title: "We Were Liars Season 2",
    year: "2026",
    role: "Scenic Art Department Painter",
  },
  {
    title: "Sullivan's Crossing Season 5",
    year: "2026",
    role: "3rd Assistant Art Director",
  },
  {
    title: "Sullivan's Crossing Season 4",
    year: "2025",
    role: "3rd Assistant Art Director",
  },
  {
    title: "Sullivan's Crossing Season 3, 4 & 5",
    year: "2024",
    role: "Production Assistant",
  },
];

export const tvAnimationCredits: Credit[] = [
  {
    title: "Rubble And Crew",
    studio: "JAM-FILLED ENTERTAINMENT / Spin Master",
    year: "2022",
    role: "3D Animator",
    accolades: "2022 Canadian Screen Awards Nominated for Best Pre-School Program or Series",
  },
  {
    title: "Slugterra",
    studio: "DHX/IOM Media",
    year: "2022",
    role: "Layout Artist",
  },
  {
    title: "Lucas The Spider",
    studio: "DHX/IOM Media",
    year: "2021",
    role: "Layout Artist",
  },
  {
    title: "Norman Price And the Mystery in the Sky",
    studio: "DHX/IOM Media",
    year: "2020",
    role: "Layout Artist",
  },
  {
    title: "Fireman Sam",
    studio: "DHX/IOM Media",
    year: "2020",
    role: "Layout Artist",
  },
  {
    title: "Charlie's Colorforms City",
    studio: "DHX/IOM Media",
    year: "2018",
    role: "Layout Supervisor",
    accolades: "2019 Parent's Choice Fun Stuff Award",
  },
  {
    title: "Rev & Roll",
    studio: "DHX/IOM Media",
    year: "2017",
    role: "Layout Artist",
  },
  {
    title: "Doozers",
    studio: "Jim Henson Company",
    year: "2017",
    role: "Layout Supervisor and 3D Animator",
  },
  {
    title: "Bob The Builder",
    studio: "DHX/IOM Media",
    year: "2017",
    role: "3D Animator",
  },
  {
    title: "Wishenpoof!",
    studio: "DHX/IOM Media",
    year: "2016",
    role: "3D Animator",
  },
  {
    title: "Little Charmers",
    studio: "NELVANA",
    year: "2015",
    role: "3D Animator",
  },
  {
    title: "Trucktown",
    studio: "NELVANA",
    year: "2014-2015",
    role: "3D Animator and Layout Artist",
  },
  {
    title: "Mike The Knight",
    studio: "NELVANA",
    year: "2012-2015",
    role: "3D Animator",
    accolades: "Won 2015 International Emmy Kids Award for Best Pre-School Series",
  },
  {
    title: "Bubble Guppies",
    studio: "NELVANA",
    year: "2011-2012",
    role: "Lead 3D Animator on Season 2",
    accolades: "2013 Won Daytime Emmy Outstanding Pre-School Children's Animated Program",
  },
  {
    title: "Di-Gata Defenders",
    studio: "NELVANA",
    year: "2006",
    role: "FX Animator",
  },
  {
    title: "Franklin",
    studio: "NELVANA",
    year: "2006",
    role: "3D Animator",
  },
  {
    title: "Handy Manny",
    studio: "NELVANA",
    year: "2006-2008",
    role: "3D Animator",
    accolades: "2009 Nominated Daytime Emmy Annie Awards; Won NAMIC Vision Awards 2008 & 2009; Won Genesis Awards for Children's Programming",
  },
  {
    title: "Miss Spider",
    studio: "NELVANA",
    year: "2004-2007",
    role: "Layout Artist and 3D Animator",
    accolades: "2006: Nominated for Daytime Emmy Annie Awards",
  },
  {
    title: "Monster By Mistake",
    studio: "CATAPULT",
    year: "2003",
    role: "3D Animator",
  },
  {
    title: "Ryan (directed by Chris Landreth)",
    studio: "NFB",
    year: "2002",
    role: "Previsualization Artist",
    accolades: "2005 Winner Oscar: Best Short Film, Animated; Annecy International Film Festival Jury's Special Award; SIGGRAPH Jury Award",
  },
  {
    title: "Action Man",
    studio: "MAINFRAME ENTERTAINMENT",
    year: "2001",
    role: "3D Animator",
  },
  {
    title: "Heavy Gear",
    studio: "MAINFRAME ENTERTAINMENT",
    year: "2001",
    role: "3D Animator",
  },
];
