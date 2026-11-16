import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { PhotoSlot } from "@/lib/listing";

export function PhotoFrame({
  slot,
  className,
  onOpen,
  caption = false,
}: {
  slot: PhotoSlot;
  className?: string;
  onOpen?: () => void;
  /** Show the photo's label over its lower edge on hover / focus. */
  caption?: boolean;
}) {
  if (slot.src) {
    return (
      <button
        type="button"
        onClick={onOpen}
        className={cn("group relative block w-full overflow-hidden rounded-md bg-muted", className)}
        aria-label={`Open photo: ${slot.label}`}
      >
        <img
          src={slot.src}
          alt={slot.label}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {caption && (
          <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent px-4 pb-3 pt-10 text-left text-sm tracking-wide text-ink-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
            {slot.label}
          </span>
        )}
      </button>
    );
  }

  return (
    <div
      className={cn(
        "flex w-full flex-col items-center justify-center gap-2 rounded-md border border-dashed border-primary/30 bg-placeholder p-4 text-center",
        className,
      )}
    >
      <ImageIcon className="h-6 w-6 text-primary/60" aria-hidden />
      <p className="font-display text-lg leading-tight text-foreground">{slot.label}</p>
      <p className="eyebrow text-muted-foreground">{slot.size}</p>
    </div>
  );
}
