import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowUp,
  ArrowUpRight,
  Baby,
  Car,
  Check,
  ChevronLeft,
  ChevronRight,
  Dumbbell,
  Flag,
  GraduationCap,
  HeartPulse,
  Instagram,
  Mail,
  MessageCircle,
  Mountain,
  Phone,
  Plane,
  ShieldCheck,
  Ship,
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
  ABOUT_OWNERS,
  AMENITIES,
  APARTMENT_FEATURE_GROUPS,
  DIRECT_SALE,
  FACTS,
  FEATURE_PHOTOS,
  FLOOR_PLAN,
  GALLERY,
  GOLF_TRAVEL,
  LISTING,
  LOCATION,
  OWNER_PHOTO,
  formatPrice,
  instagramLink,
  phoneLink,
  whatsappLink,
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

const GOLF_TRAVEL_ICONS = {
  plane: Plane,
  flag: Flag,
  trophy: Trophy,
  ship: Ship,
};

const NAV = [
  { href: "#about", label: "The owners" },
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
        <AboutOwners />
        <Apartment />
        <Resort />
        <Location />
        <GolfTravel />
        <Gallery />
        <FloorPlan />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
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
      <dl className="mx-auto grid max-w-7xl grid-cols-2 px-6 sm:grid-cols-3 lg:grid-cols-5">
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

function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow flex items-center gap-3 text-primary">
        <span className="h-px w-8 bg-primary" aria-hidden />
        {eyebrow}
      </p>
      <h2 className="mt-5 text-4xl leading-[1.1] md:text-5xl">{title}</h2>
      {intro && (
        <p
          className={
            tone === "dark"
              ? "mt-5 text-lg leading-relaxed text-ink-muted"
              : "mt-5 text-lg leading-relaxed text-muted-foreground"
          }
        >
          {intro}
        </p>
      )}
    </div>
  );
}

function DirectSale() {
  return (
    <section aria-labelledby="direct-sale-title" className="bg-accent text-accent-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:py-20 lg:grid-cols-[1fr_2fr] lg:items-center lg:gap-16">
        <div>
          <p className="eyebrow text-accent-foreground/70">A direct, transparent sale</p>
          <h2 id="direct-sale-title" className="mt-4 text-3xl leading-tight md:text-4xl">
            Sold by the owner. <span className="italic">Handled by a lawyer.</span>
          </h2>
        </div>
        <ul className="grid gap-8 sm:grid-cols-3 sm:gap-6">
          {DIRECT_SALE.map((item) => (
            <li key={item.title} className="border-t border-accent-foreground/25 pt-5">
              <Check className="h-5 w-5 text-accent-foreground/80" aria-hidden />
              <h3 className="mt-3 text-2xl">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-accent-foreground/80">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function AboutOwners() {
  const [open, setOpen] = useState(false);

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <figure className="mx-auto w-full max-w-sm">
          <div className="relative">
            <div
              className="absolute inset-0 translate-x-4 translate-y-4 rounded-md border border-primary/35"
              aria-hidden
            />
            <PhotoFrame
              slot={OWNER_PHOTO}
              className="relative aspect-square shadow-soft"
              onOpen={() => setOpen(true)}
            />
          </div>
          <figcaption className="eyebrow mt-8 text-center text-muted-foreground">
            The family
          </figcaption>
        </figure>
        <div>
          <SectionHeading
            eyebrow="About the owners"
            title="Owned by one family from new. Never rented out."
            intro="Cared for by one family — which is why it looks the way it does in the photos, and why we are selling it ourselves."
          />
          <ol className="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-2">
            {ABOUT_OWNERS.map((item, i) => (
              <li key={item.title} className="border-t border-border pt-5">
                <span className="font-display text-lg italic text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-1 text-2xl">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-sm border-none bg-ink p-2 text-ink-foreground">
          <DialogTitle className="sr-only">{OWNER_PHOTO.label}</DialogTitle>
          <img src={OWNER_PHOTO.src} alt={OWNER_PHOTO.label} className="w-full rounded-sm" />
          <p className="px-2 py-3 font-display text-xl">{OWNER_PHOTO.label}</p>
        </DialogContent>
      </Dialog>
    </section>
  );
}

function Apartment() {
  return (
    <section id="apartment" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-start gap-14 px-6 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-24">
          <PhotoFrame slot={FEATURE_PHOTOS.apartment} className="aspect-[4/5] shadow-soft" />
        </div>
        <div>
          <SectionHeading
            eyebrow="The apartment"
            title="Immaculate, as new, and ready to move into"
            intro="A bright, comfortable home with a generous private terrace, in the prestigious Arenal Golf Residential Complex."
          />
          <div className="mt-12 space-y-10">
            {APARTMENT_FEATURE_GROUPS.map((group) => (
              <div key={group.title}>
                <h3 className="eyebrow text-primary">{group.title}</h3>
                <ul className="mt-3 divide-y divide-border border-t border-border">
                  {group.items.map((feature) => (
                    <li key={feature} className="flex gap-4 py-4">
                      <span
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                        aria-hidden
                      />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Resort() {
  return (
    <section id="resort" className="bg-ink py-24 text-ink-foreground md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        <div>
          <SectionHeading
            tone="dark"
            eyebrow="An exceptional resort lifestyle"
            title="Golf, pools and gardens on your doorstep"
            intro="Whether you enjoy an active lifestyle, relaxing by the pool, playing golf or simply the tranquillity of beautifully maintained surroundings, Arenal Golf is the best of the Costa del Sol."
          />
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
    <section id="location" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-start gap-14 px-6 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        <div className="lg:sticky lg:top-24">
          <SectionHeading
            eyebrow="An outstanding location"
            title="Between the sea and Benalmádena Pueblo"
            intro="Quiet and residential, with hospitals, shops and schools all within a few minutes."
          />
        </div>
        <ul className="divide-y divide-border border-y border-border">
          {LOCATION.map((item) => {
            const Icon = LOCATION_ICONS[item.icon];
            return (
              <li key={item.title} className="flex gap-6 py-7">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary">
                  <Icon className="h-5 w-5 text-accent" aria-hidden />
                </span>
                <div>
                  <h3 className="text-2xl">{item.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function GolfTravel() {
  return (
    <section id="golf-travel" className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Golf & travel distances"
          title="Everything within easy reach"
          intro="Driving times from the front door of the complex."
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {GOLF_TRAVEL.map((item) => {
            const Icon = GOLF_TRAVEL_ICONS[item.icon];
            return (
              <div key={item.title} className="flex flex-col bg-card p-8">
                <Icon className="h-5 w-5 text-accent" aria-hidden />
                <p className="mt-6 font-display text-4xl leading-none text-primary">
                  {item.time.replace(/ via .*/, "")}
                </p>
                {item.time.includes(" via ") && (
                  <p className="eyebrow mt-2 text-muted-foreground">
                    {item.time.replace(/.* (via .*)/, "$1")}
                  </p>
                )}
                <h3 className="mt-5 text-2xl leading-snug">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            );
          })}
        </div>
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
    <section id="gallery" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Photos"
          title="Take a look around"
          intro="Click any photo to see it larger and browse the rest."
        />
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {GALLERY.map((slot, i) => (
            <PhotoFrame
              key={slot.id}
              slot={slot}
              className={i === 0 ? "col-span-2 row-span-2 h-full" : "aspect-[4/3]"}
              onOpen={() => setOpenIndex(photos.indexOf(slot))}
              caption
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
    <section id="floor-plan" className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading
        eyebrow="Floor plan"
        title="How the apartment is laid out"
        intro="Every room with its dimensions — click the plan to see it larger."
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
  const { email, phone, whatsapp, instagram } = LISTING.contact;
  const subject = encodeURIComponent("Arenal Golf apartment — viewing request");
  const row =
    "flex items-center gap-5 rounded-md border border-ink-foreground/15 bg-ink-foreground/5 p-5";
  const icon =
    "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground";

  return (
    <section id="contact" className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 md:py-32 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div>
          <p className="eyebrow flex items-center gap-3 text-primary">
            <span className="h-px w-8 bg-primary" aria-hidden />A rare opportunity
          </p>
          <h2 className="mt-5 text-4xl leading-[1.1] md:text-6xl">
            A home to enjoy, <span className="italic">in a setting to fall in love with.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
            An elegant permanent residence, a private holiday retreat or a sound investment on the
            Costa del Sol. Get in touch to ask questions or arrange a viewing.
          </p>
          <p className="eyebrow mt-10 text-ink-muted">Asking price</p>
          <p className="font-display text-6xl">{price}</p>
        </div>

        <ul className="space-y-4">
          <li>
            <a
              href={`mailto:${email}?subject=${subject}`}
              className={`${row} group transition-colors hover:border-primary/60`}
            >
              <span className={icon}>
                <Mail className="h-5 w-5" aria-hidden />
              </span>
              <span className="min-w-0 flex-1">
                <span className="eyebrow block text-ink-muted">Email the owner</span>
                <span className="mt-1 block truncate text-lg">{email}</span>
              </span>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-ink-muted transition-colors group-hover:text-primary" />
            </a>
          </li>
          <li className={`${row} flex-wrap`}>
            <span className={icon}>
              <Phone className="h-5 w-5" aria-hidden />
            </span>
            <span className="min-w-0 flex-1">
              <span className="eyebrow block text-ink-muted">Phone & WhatsApp</span>
              <a
                href={phoneLink(phone)}
                className="mt-1 block text-lg underline-offset-4 hover:text-primary hover:underline"
              >
                {phone}
              </a>
            </span>
            <Button asChild variant="hero" size="lg">
              <a href={whatsappLink(whatsapp)} target="_blank" rel="noreferrer">
                <MessageCircle /> WhatsApp
              </a>
            </Button>
          </li>
          <li>
            <a
              href={instagramLink(instagram)}
              target="_blank"
              rel="noreferrer"
              className={`${row} group transition-colors hover:border-primary/60`}
            >
              <span className={icon}>
                <Instagram className="h-5 w-5" aria-hidden />
              </span>
              <span className="min-w-0 flex-1">
                <span className="eyebrow block text-ink-muted">More photos on Instagram</span>
                <span className="mt-1 block text-lg">@{instagram}</span>
              </span>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-ink-muted transition-colors group-hover:text-primary" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

function BackToTop() {
  return (
    <a
      href="#top"
      aria-label="Back to top"
      className="fixed bottom-4 left-4 z-40 inline-flex h-9 w-9 items-center justify-center gap-2 rounded-full border border-border bg-card/90 p-0 text-sm tracking-wide text-foreground shadow-soft backdrop-blur-sm transition-colors hover:border-primary/50 hover:text-primary sm:bottom-6 sm:left-6 sm:h-auto sm:w-auto sm:px-4 sm:py-2.5"
    >
      <ArrowUp className="h-4 w-4" aria-hidden />
      <span className="hidden sm:inline">Back to top</span>
    </a>
  );
}

function Footer() {
  return (
    <footer>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-8 text-sm text-muted-foreground md:flex-row">
        <p className="font-display text-lg text-foreground">Arenal Golf · Apartment</p>
        <p>{LISTING.location}</p>
      </div>
    </footer>
  );
}
