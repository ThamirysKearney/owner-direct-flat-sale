import { describe, expect, it } from "vitest";
import {
  FACTS,
  FEATURE_PHOTOS,
  FLOOR_PLAN,
  GALLERY,
  LISTING,
  formatPrice,
  instagramLink,
  phoneLink,
  whatsappLink,
} from "@/lib/listing";

describe("listing", () => {
  it("shows the asking price of €395,000", () => {
    expect(formatPrice(LISTING.price)).toBe("€395,000");
  });

  it("shows a single 80 m² total surface instead of separate interior and terrace sizes", () => {
    expect(FACTS.find((f) => f.value === "80 m²")).toBeTruthy();
    expect(FACTS.some((f) => f.value === "64 m²" || f.value === "12 m²")).toBe(false);
  });
});

describe("contact", () => {
  it("emails arenalgolfpiso@gmail.com", () => {
    expect(LISTING.contact.email).toBe("arenalgolfpiso@gmail.com");
  });

  it("opens WhatsApp chat with +34 694 497 708", () => {
    expect(whatsappLink(LISTING.contact.whatsapp)).toBe("https://wa.me/34694497708");
  });

  it("calls +34 694 497 708", () => {
    expect(phoneLink(LISTING.contact.phone)).toBe("tel:+34694497708");
  });

  it("links to the costadelsolflat Instagram account", () => {
    expect(instagramLink(LISTING.contact.instagram)).toBe(
      "https://www.instagram.com/costadelsolflat/",
    );
  });
});

describe("photos", () => {
  it("has real images in both feature photo slots", () => {
    expect(FEATURE_PHOTOS.apartment.src).toMatch(/^\/__l5e\/assets-v1\//);
    expect(FEATURE_PHOTOS.resort.src).toMatch(/^\/__l5e\/assets-v1\//);
  });

  it("gives every gallery slot a unique id and a served image url when filled", () => {
    const ids = GALLERY.map((slot) => slot.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const slot of GALLERY) {
      if (slot.src) expect(slot.src).toMatch(/^\/__l5e\/assets-v1\//);
    }
  });

  it("shows every photo the owner supplied, with no empty slots left", () => {
    expect(GALLERY.length).toBe(17);
    expect(GALLERY.every((slot) => slot.src)).toBe(true);
  });

  it("adds the dining area, the building exterior and the playground", () => {
    const srcs = GALLERY.map((slot) => slot.src);
    expect(srcs.some((src) => src?.includes("dining-area"))).toBe(true);
    expect(srcs.some((src) => src?.includes("front-of-building"))).toBe(true);
    expect(srcs.some((src) => src?.includes("playground"))).toBe(true);
  });

  it("shows the floor plan", () => {
    expect(FLOOR_PLAN.src).toMatch(/^\/__l5e\/assets-v1\//);
  });

  it("adds the private terrace photo right after the terrace view", () => {
    expect(GALLERY[1].src).toContain("private-terrace");
  });

  it("uses the new portrait living room photo as the apartment feature", () => {
    expect(FEATURE_PHOTOS.apartment.src).toContain("living-room-portrait");
    const srcs = [
      FEATURE_PHOTOS.apartment.src,
      FEATURE_PHOTOS.resort.src,
      ...GALLERY.map((s) => s.src),
    ];
    expect(srcs.some((src) => src?.includes("living-dining"))).toBe(false);
  });

  it("shows each photo only once", () => {
    const srcs = [
      FEATURE_PHOTOS.apartment.src,
      FEATURE_PHOTOS.resort.src,
      FLOOR_PLAN.src,
      ...GALLERY.map((slot) => slot.src),
    ].filter(Boolean);
    expect(new Set(srcs).size).toBe(srcs.length);
  });

  it("drops the low-resolution pool photo in favour of the larger one", () => {
    const srcs = [FEATURE_PHOTOS.apartment.src, FEATURE_PHOTOS.resort.src, ...GALLERY.map((s) => s.src)];
    expect(srcs.some((src) => src?.includes("swimming-pools"))).toBe(false);
    expect(FEATURE_PHOTOS.resort.src).toContain("pool-mountain");
  });
});
