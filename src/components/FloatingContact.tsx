import { MessageCircle, Phone } from "lucide-react";
import { contact } from "@/data/site";

/** Floating WhatsApp + call buttons, shown on mobile only. */
export function FloatingContact() {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-3 md:hidden">
      <a
        href={`tel:${contact.phoneTel}`}
        aria-label="Call the office"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-steel ring-1 ring-gold/50"
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
      </a>
      <a
        href={`https://wa.me/${contact.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp (opens in a new tab)"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1F8F4E] text-white"
      >
        <MessageCircle className="h-6 w-6" aria-hidden="true" />
      </a>
    </div>
  );
}
