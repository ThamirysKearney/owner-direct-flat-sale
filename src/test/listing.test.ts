import { describe, expect, it } from "vitest";
import { FEATURE_PHOTOS, GALLERY, LISTING, formatPrice } from "@/lib/listing";

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

  it("shows the ten photos the owner supplied", () => {
    const filled = GALLERY.filter((slot) => slot.src).length;
    expect(filled + 2).toBe(10);
  });
});
