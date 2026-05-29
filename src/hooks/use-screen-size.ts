import { useEffect, useState } from "react";

const SCREEN_SIZES = ["xs", "sm", "md", "lg", "xl", "2xl"] as const;
export type ScreenSize = (typeof SCREEN_SIZES)[number];

const sizeOrder: Record<ScreenSize, number> = {
  xs: 0, sm: 1, md: 2, lg: 3, xl: 4, "2xl": 5,
} as const;

class ComparableScreenSize {
  constructor(private value: ScreenSize) {}
  toString(): ScreenSize          { return this.value; }
  valueOf(): number                { return sizeOrder[this.value]; }
  equals(o: ScreenSize): boolean           { return this.value === o; }
  lessThan(o: ScreenSize): boolean         { return this.valueOf() < sizeOrder[o]; }
  greaterThan(o: ScreenSize): boolean      { return this.valueOf() > sizeOrder[o]; }
  lessThanOrEqual(o: ScreenSize): boolean  { return this.valueOf() <= sizeOrder[o]; }
  greaterThanOrEqual(o: ScreenSize): boolean { return this.valueOf() >= sizeOrder[o]; }
}

const useScreenSize = (): ComparableScreenSize => {
  const [size, setSize] = useState<ScreenSize>("xs");

  useEffect(() => {
    const handle = () => {
      const w = window.innerWidth;
      if      (w >= 1536) setSize("2xl");
      else if (w >= 1280) setSize("xl");
      else if (w >= 1024) setSize("lg");
      else if (w >= 768)  setSize("md");
      else if (w >= 640)  setSize("sm");
      else                setSize("xs");
    };
    handle();
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);

  return new ComparableScreenSize(size);
};

export { useScreenSize };
