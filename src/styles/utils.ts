import chroma from "chroma-js";

export const rgba = (color: string, alpha = 1) => `rgba(${chroma(color).rgb()},${alpha})`;

export const lighten = (color: string, value = 1) => chroma(color).brighten(value).hex();