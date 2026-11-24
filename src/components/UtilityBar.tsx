import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { contact, firm } from "@/data/site";

/** Slim navy bar above the header: phone, email, hours, location. */
export function UtilityBar() {
  const hours = contact.hours[0];
  return (
    <div className="bg-navy text-[0.8rem] text-white/85">
      <div className="container flex min-h-[40px] flex-wrap items-center justify-between gap-x-6 gap-y-1 py-1.5">
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-1">
          <li>
            <a href={`tel:${contact.phoneTel}`} className="flex min-h-[28px] items-center gap-2 hover:text-gold">
              <Phone className="h-3.5 w-3.5 text-gold" aria-hidden="true" /> {contact.phoneDisplay}
            </a>
          </li>
          <li className="hidden sm:block">
            <a href={`mailto:${contact.email}`} className="flex min-h-[28px] items-center gap-2 hover:text-gold">
              <Mail className="h-3.5 w-3.5 text-gold" aria-hidden="true" /> {contact.email}
            </a>
          </li>
        </ul>
        <ul className="hidden items-center gap-x-6 md:flex">
          <li className="flex items-center gap-2">
            <Clock className="h-3.5 w-3.5 text-gold" aria-hidden="true" /> {hours.days}, {hours.time}
          </li>
          <li className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-gold" aria-hidden="true" /> {firm.city}, {firm.region}
          </li>
        </ul>
      </div>
    </div>
  );
}
