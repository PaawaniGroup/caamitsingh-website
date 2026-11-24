import Image from "next/image";
import type { Photo as PhotoData } from "@/data/site";

/**
 * Photograph in a fixed-aspect frame (square corners, hairline border).
 * `ratio` is a Tailwind aspect class; `position` is a CSS object-position for the crop.
 */
export function Photo({
  photo, ratio = "aspect-[3/2]", sizes = "(min-width: 1024px) 50vw, 100vw", position = "center", priority = false, className = "",
}: { photo: PhotoData; ratio?: string; sizes?: string; position?: string; priority?: boolean; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-sm border border-line bg-band ${ratio} ${className}`}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        priority={priority}
        style={{ objectPosition: position }}
        className="object-cover"
      />
    </div>
  );
}

/** Photograph with a caption below, for galleries. */
export function CaptionedPhoto({ photo, ...rest }: { photo: PhotoData } & Omit<Parameters<typeof Photo>[0], "photo">) {
  return (
    <figure>
      <Photo photo={photo} {...rest} />
      <figcaption className="mt-3 border-l-2 border-brass pl-3 text-sm text-muted">{photo.caption}</figcaption>
    </figure>
  );
}
