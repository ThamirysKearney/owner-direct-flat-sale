import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Baby,
  Car,
  Check,
  ChevronLeft,
  ChevronRight,
  Dumbbell,
  Flag,
  GraduationCap,
  HeartPulse,
  Mail,
  MessageCircle,
  Mountain,
  ShieldCheck,
  ShoppingCart,
  Sun,
  Trees,
  Trophy,
  UtensilsCrossed,
  Waves,
} from "lucide-react";

import bannerAsset from "@/assets/arenal-golf-banner.jpg.asset.json";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { PhotoFrame } from "@/components/listing/PhotoFrame";
import {
  AMENITIES,
  APARTMENT_FEATURES,
  DIRECT_SALE,
  FACTS,
  FEATURE_PHOTOS,
  FLOOR_PLAN,
  GALLERY,
  LISTING,
  LOCATION,
  formatPrice,
} from "@/lib/listing";

const TITLE = "Two-bedroom apartment for sale in Arenal Golf, Benalmádena — €395,000";
const DESCRIPTION =
  "Fully furnished, as-new ground-floor apartment with 12 m² terrace in Arenal Golf, Costa del Sol. Sold directly by the owner — no agency fees.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const AMENITY_ICONS = {
  waves: Waves,
  flag: Flag,
  dumbbell: Dumbbell,
  trophy: Trophy,
  baby: Baby,
  utensils: UtensilsCrossed,
  trees: Trees,
  mountain: Mountain,
  shield: ShieldCheck,
};

const LOCATION_ICONS = {
  sun: Sun,
  heart: HeartPulse,
  cart: ShoppingCart,
  school: GraduationCap,
  car: Car,
};

const NAV = [
  { href: "#apartment", label: "The apartment" },
  { href: "#resort", label: "Resort" },
  { href: "#location", label: "Location" },
  { href: "#gallery", label: "Photos" },
];

const price = formatPrice(LISTING.price);

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <FactsStrip />
        <DirectSale />
        <Apartment />
        <Resort />
        <Location />
        <Gallery />
        <FloorPlan />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="bg-ink relative z-30 md:absolute md:inset-x-0 md:top-0 md:bg-transparent">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#top" className="font-display text-2xl text-ink-foreground">
          Arenal Golf <span className="text-ink-muted">·</span>{" "}
          <span className="italic">Apartment</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm tracking-wide text-ink-foreground/85 transition-colors hover:text-ink-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <Button asChild variant="glass" size="sm">
          <a href="#contact">Arrange a viewing</a>
        </Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-ink md:flex md:min-h-[92vh] md:items-end"
    >
      <img
        src={bannerAsset.url}
        alt="Arenal Golf course in Benalmádena: putting green with the club flag, palm trees and the residential building"
        width={1376}
        height={768}
        className="block w-full md:absolute md:inset-0 md:h-full md:w-full md:object-cover"
      />
      <div className="bg-hero-overlay hidden md:absolute md:inset-0 md:block" />
      <div className="relative mx-auto w-full max-w-7xl px-6 py-12 md:pb-24 md:pt-40">
        <p className="eyebrow animate-rise inline-block rounded-full bg-ink/60 px-4 py-2 text-ink-foreground ring-1 ring-ink-foreground/15">
          For sale directly by the owner · No agency fees
        </p>
        <h1 className="sr-only">
          Two-bedroom apartment for sale in Arenal Golf, Benalmádena — {price}
        </h1>
        <p className="animate-rise mt-6 max-w-xl text-lg text-ink-foreground/85 [animation-delay:240ms]">
          A privileged lifestyle surrounded by golf, nature and exceptional amenities —{" "}
          {LISTING.location}.
        </p>
        <div className="animate-rise mt-10 flex flex-wrap items-end gap-x-10 gap-y-6 [animation-delay:360ms]">
          <div>
            <p className="eyebrow text-ink-muted">Asking price</p>
            <p className="font-display text-5xl text-ink-foreground md:text-6xl">{price}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="hero" size="xl">
              <a href="#contact">Contact the owner</a>
            </Button>
            <Button asChild variant="glass" size="xl">
              <a href="#gallery">See the photos</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function FactsStrip() {
  return (
    <section aria-label="Key facts" className="border-b border-border bg-card">
      <dl className="mx-auto grid max-w-7xl grid-cols-2 px-6 sm:grid-cols-3 lg:grid-cols-6">
        {FACTS.map((fact) => (
          <div
            key={fact.label}
            className="border-border py-8 text-center [&:not(:last-child)]:lg:border-r"
          >
            <dt className="sr-only">{fact.label}</dt>
            <dd className="font-display text-3xl text-foreground">{fact.value}</dd>
            <dd className="eyebrow mt-1 text-muted-foreground">{fact.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow text-primary">{eyebrow}</p>
      <h2 className="mt-4 text-4xl leading-tight md:text-5xl">{title}</h2>
      {intro && <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{intro}</p>}
    </div>
  );
}

function DirectSale() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <SectionHeading
          eyebrow="A direct, transparent sale"
          title="Sold by the owner. Handled by a lawyer."
          intro="No agency in the middle, no inflated commission. Just a clean, well-kept property and a straightforward process."
        />
        <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">
          {DIRECT_SALE.map((item) => (
            <div key={item.title} className="bg-card p-8">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Check className="h-4 w-4" aria-hidden />
              </span>
              <h3 className="mt-5 text-2xl">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Apartment() {
  return (
    <section id="apartment" className="bg-secondary py-24">
      <div className="mx-auto grid max-w-7xl items-start gap-14 px-6 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-24">
          <PhotoFrame slot={FEATURE_PHOTOS.apartment} className="aspect-[4/5] shadow-soft" />
        </div>
        <div>
          <SectionHeading
            eyebrow="The apartment"
            title="Immaculate, as new, and ready to move into"
            intro="Purchased brand new and only enjoyed occasionally as a private second home — never a permanent residence and never rented out. 64 m² of interior living space plus a generous 12 m² terrace, on the ground floor of the prestigious Arenal Golf Residential Complex."
          />
          <ul className="mt-10 divide-y divide-border border-y border-border">
            {APARTMENT_FEATURES.map((feature) => (
              <li key={feature} className="flex gap-4 py-4">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Resort() {
  return (
    <section id="resort" className="bg-ink py-24 text-ink-foreground">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        <div>
          <p className="eyebrow text-primary">An exceptional resort lifestyle</p>
          <h2 className="mt-4 max-w-xl text-4xl leading-tight md:text-5xl">
            Golf, pools and gardens on your doorstep
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">
            Whether you enjoy an active lifestyle, relaxing by the pool, playing golf or simply the
            tranquillity of beautifully maintained surroundings, Arenal Golf is the best of the
            Costa del Sol.
          </p>
          <ul className="mt-12 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {AMENITIES.map((amenity) => {
              const Icon = AMENITY_ICONS[amenity.icon];
              return (
                <li key={amenity.label} className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink-foreground/20">
                    <Icon className="h-5 w-5 text-primary" aria-hidden />
                  </span>
                  <span>{amenity.label}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <PhotoFrame slot={FEATURE_PHOTOS.resort} className="aspect-[4/5]" />
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="location" className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        eyebrow="An outstanding location"
        title="Between the sea and Benalmádena Pueblo"
        intro="Residential tranquillity with everyday essentials close by — perfectly placed between the vibrant coast and the charming historic village of Benalmádena Pueblo."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        {LOCATION.map((item) => {
          const Icon = LOCATION_ICONS[item.icon];
          return (
            <div key={item.title} className="rounded-md border border-border bg-card p-6">
              <Icon className="h-6 w-6 text-accent" aria-hidden />
              <h3 className="mt-5 text-2xl">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Gallery() {
  const photos = GALLERY.filter((slot) => slot.src);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const current = openIndex === null ? null : photos[openIndex];

  const step = (delta: number) =>
    setOpenIndex((i) => (i === null ? i : (i + delta + photos.length) % photos.length));

  return (
    <section id="gallery" className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Photos" title="Take a look around" />
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {GALLERY.map((slot, i) => (
            <PhotoFrame
              key={slot.id}
              slot={slot}
              className={i === 0 ? "col-span-2 row-span-2 h-full" : "aspect-[4/3]"}
              onOpen={() => setOpenIndex(photos.indexOf(slot))}
            />
          ))}
        </div>
      </div>

      <Dialog open={current !== null} onOpenChange={(open) => !open && setOpenIndex(null)}>
        <DialogContent className="max-w-5xl border-none bg-ink p-2 text-ink-foreground">
          <DialogTitle className="sr-only">{current?.label}</DialogTitle>
          {current && (
            <div className="relative">
              <img src={current.src} alt={current.label} className="w-full rounded-sm" />
              <p className="px-2 py-3 font-display text-xl">{current.label}</p>
              {photos.length > 1 && (
                <>
                  <Button
                    variant="glass"
                    size="icon"
                    className="absolute left-3 top-1/2 -translate-y-1/2"
                    onClick={() => step(-1)}
                    aria-label="Previous photo"
                  >
                    <ChevronLeft />
                  </Button>
                  <Button
                    variant="glass"
                    size="icon"
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                    onClick={() => step(1)}
                    aria-label="Next photo"
                  >
                    <ChevronRight />
                  </Button>
                </>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function FloorPlan() {
  const [open, setOpen] = useState(false);
  const alt = "Floor plan of the apartment showing every room and its dimensions";

  return (
    <section id="floor-plan" className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        eyebrow="Floor plan"
        title="How the apartment is laid out"
        intro="Two bedrooms, two bathrooms, a dining area and an open living room, opening onto a covered terrace. The plan shows every room with its dimensions — click it to see it larger."
      />
      <div className="mt-12 rounded-md border border-border bg-card p-4 md:p-10">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="mx-auto block w-full max-w-3xl cursor-zoom-in"
          aria-label="Open the floor plan"
        >
          <img
            src={FLOOR_PLAN.src}
            alt={alt}
            width={839}
            height={454}
            className="mx-auto block h-auto w-full"
          />
        </button>
        <p className="mt-6 text-center text-sm leading-relaxed text-muted-foreground">
          Salón · living room &nbsp;·&nbsp; Comedor · dining room &nbsp;·&nbsp; Dormitorio · bedroom
          &nbsp;·&nbsp; Baño · bathroom &nbsp;·&nbsp; Pasillo · hallway &nbsp;·&nbsp; Exterior ·
          terrace
        </p>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl border-none bg-card p-4">
          <DialogTitle className="sr-only">Floor plan</DialogTitle>
          <img src={FLOOR_PLAN.src} alt={alt} className="w-full rounded-sm" />
        </DialogContent>
      </Dialog>
    </section>
  );
}

function Contact() {
  const { email, whatsapp } = LISTING.contact;
  const subject = encodeURIComponent("Arenal Golf apartment — viewing request");
  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-28 text-center">
      <p className="eyebrow text-primary">A rare opportunity</p>
      <h2 className="mt-5 text-4xl leading-tight md:text-6xl">
        A home to enjoy, <span className="italic">in a setting to fall in love with.</span>
      </h2>
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        An elegant permanent residence, a private holiday retreat or a sound investment on the Costa
        del Sol. Get in touch directly with the owner to ask questions or arrange a viewing.
      </p>
      <p className="mt-10 eyebrow text-muted-foreground">Price</p>
      <p className="font-display text-6xl text-foreground">{price}</p>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Button asChild variant="hero" size="xl">
          <a href={`mailto:${email}?subject=${subject}`}>
            <Mail /> Email the owner
          </a>
        </Button>
        {whatsapp && (
          <Button asChild variant="outline" size="xl">
            <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer">
              <MessageCircle /> WhatsApp
            </a>
          </Button>
        )}
      </div>
      <p className="mt-6 text-sm text-muted-foreground">
        Private sale · No agency fees · Legal process managed by the owner's lawyer
      </p>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-8 text-sm text-muted-foreground md:flex-row">
        <p className="font-display text-lg text-foreground">Arenal Golf · Apartment</p>
        <p>{LISTING.location}</p>
      </div>
    </footer>
  );
}
