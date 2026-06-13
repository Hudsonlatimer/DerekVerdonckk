import { contacts } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 py-12 border-t border-white/20 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-gray-300 text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Derek Verdonck. All rights reserved.
        </div>
        <div className="flex space-x-6">
          {contacts.map((contact) => (
            <a
              key={contact.platform}
              href={contact.url}
              target={contact.url.startsWith("http") ? "_blank" : undefined}
              rel={contact.url.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {contact.platform}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
