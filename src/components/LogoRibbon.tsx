import Image from "next/image";

const logos = [
  // Original B&W logos (white on transparent, made for dark backgrounds)
  { src: "/logos/bw/disney.png", alt: "Disney" },
  { src: "/logos/bw/nelvana.png", alt: "Nelvana" },
  { src: "/logos/bw/jim-henson.png", alt: "The Jim Henson Company" },
  { src: "/logos/bw/nickelodeon.png", alt: "Nickelodeon" },
  { src: "/logos/bw/jam-filled.png", alt: "Jam Filled Entertainment" },
  { src: "/logos/bw/mainframe.png", alt: "Mainframe Entertainment" },
  { src: "/logos/bw/island-of-misfits.png", alt: "Island of Misfits" },
  // New logos from root folder
  { 
    src: "/logos/sony.png", 
    alt: "Sony",
    className: "invert mix-blend-screen" // Assuming white bg, black text, or just needs invert
  },
  { 
    src: "/logos/spinmaster.png", 
    alt: "Spin Master",
    className: "invert mix-blend-screen" 
  },
  { 
    src: "/logos/bell media.jpg", 
    alt: "Bell Media",
    className: "invert mix-blend-screen" 
  },
  { 
    src: "/logos/nbc.png", 
    alt: "NBC Universal",
    className: "invert mix-blend-screen" 
  },
  { 
    src: "/logos/hitentertainment.png", 
    alt: "HIT Entertainment",
    className: "invert mix-blend-screen" 
  },
];

export default function LogoRibbon() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-x-10 gap-y-10 items-center justify-items-center">
      {logos.map((logo) => (
        <div key={logo.src} className="flex items-center justify-center w-full">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={200}
            height={80}
            className={`w-auto max-w-[140px] h-12 sm:h-14 object-contain opacity-60 transition-opacity duration-300 hover:opacity-100 ${
              logo.className || ""
            }`}
          />
        </div>
      ))}
    </div>
  );
}
