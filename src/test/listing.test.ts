import { describe, expect, it } from "vitest";
import { LISTING, formatPrice } from "@/lib/listing";

describe("listing", () => {
  it("shows the asking price of €395,000", () => {
    expect(formatPrice(LISTING.price)).toBe("€395,000");
  });
});
