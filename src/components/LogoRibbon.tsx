import Image from "next/image";

const logos = [
  { src: "/logos/bw/disney.png", alt: "Disney" },
  { src: "/logos/bw/nelvana.png", alt: "Nelvana" },
  { src: "/logos/bw/jim-henson.png", alt: "The Jim Henson Company" },
  { src: "/logos/bw/nickelodeon.png", alt: "Nickelodeon" },
  { src: "/logos/bw/jam-filled.png", alt: "Jam Filled Entertainment" },
  { src: "/logos/bw/mainframe.png", alt: "Mainframe Entertainment" },
  { src: "/logos/bw/island-of-misfits.png", alt: "Island of Misfits" },
  { src: "/logos/bw/hallmark.png", alt: "Hallmark Channel" },
  { src: "/logos/bw/nscc.png", alt: "NSCC" },
];

export default function LogoRibbon() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10 sm:gap-y-12 items-center justify-items-center">
      {logos.map((logo) => (
        <Image
          key={logo.src}
          src={logo.src}
          alt={logo.alt}
          width={160}
          height={48}
          className="h-8 sm:h-10 w-auto max-w-[70%] object-contain opacity-60 grayscale transition-opacity duration-300 hover:opacity-100"
        />
      ))}
    </div>
  );
}
