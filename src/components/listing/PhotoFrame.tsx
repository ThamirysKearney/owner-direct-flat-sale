import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { PhotoSlot } from "@/lib/listing";

export function PhotoFrame({
  slot,
  className,
  onOpen,
}: {
  slot: PhotoSlot;
  className?: string;
  onOpen?: () => void;
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
