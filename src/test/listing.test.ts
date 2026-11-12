import { describe, expect, it } from "vitest";
import { FEATURE_PHOTOS, FLOOR_PLAN, GALLERY, LISTING, formatPrice } from "@/lib/listing";

describe("listing", () => {
  it("shows the asking price of €395,000", () => {
    expect(formatPrice(LISTING.price)).toBe("€395,000");
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
    expect(GALLERY.length).toBe(16);
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

  it("uses the larger dining-room photo as the apartment feature", () => {
    expect(FEATURE_PHOTOS.apartment.src).toContain("dining-room");
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
