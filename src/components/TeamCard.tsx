"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { PhotoPlaceholder } from "./Decor";
import type { TeamMember } from "@/data/site";

/** Profile card: photo placeholder (initials), name, credentials, role. Click to expand the bio. */
export function TeamCard({ member }: { member: TeamMember }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <article className="card card-hover flex h-full flex-col overflow-hidden">
      <PhotoPlaceholder label={`Photo placeholder for ${member.name}`} initials={member.initials} className="aspect-[4/3] rounded-none" />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl">{member.name}</h3>
        <p className="mt-2 inline-flex w-fit rounded-sm border border-line px-3 py-0.5 text-xs font-semibold tracking-wide text-muted">
          {member.credentials}
        </p>
        <p className="mt-3 text-[0.95rem] font-medium text-ink">{member.role}</p>

        <div id={panelId} className={`grid transition-all duration-300 motion-reduce:transition-none ${open ? "mt-4 grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
          <div className="overflow-hidden">
            <p className="border-t border-line pt-4 text-[0.95rem]">{member.bio}</p>
          </div>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="mt-auto inline-flex min-h-[44px] items-center gap-2 pt-4 text-sm font-semibold text-ink hover:text-ink"
        >
          {open ? "Hide profile" : "Read profile"}
          <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}
