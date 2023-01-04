import { darken, lighten, rgba } from "./utils"

export const GREEN = "#1DB954";
export const GREEN_DARK_20 = rgba(GREEN, 0.8);
export const GREEN_DARK_40 = rgba(GREEN, 0.5);
export const GREEN_DARK_60 = rgba(GREEN, 0.4);
export const GREEN_DARK_80 = rgba(GREEN, 0.2);

export const GREEN_LIGHT_20 = lighten(GREEN, 0.5)
export const GREEN_LIGHT_40 = lighten(GREEN, 0.8)
export const GREEN_LIGHT_60 = lighten(GREEN, 1)
export const GREEN_LIGHT_80 = lighten(GREEN, 1.5)

export const WHITE = "#FFFFFF";
export const BLACK = "#000000";

export const GREY_80 = "#222222";
export const GREY_60 = "#444444";
export const GREY_40 = "#666666";
export const GREY_20 = "#888888";

export const BLUE = "#2ebfee";
export const BLUE_DARK_20 = rgba(BLUE, 0.8);
export const BLUE_DARK_40 = rgba(BLUE, 0.5);
export const BLUE_DARK_60 = rgba(BLUE, 0.4);
export const BLUE_DARK_80 = rgba(BLUE, 0.2);

export const BLUE_LIGHT_20 = lighten(BLUE, 0.5)
export const BLUE_LIGHT_40 = lighten(BLUE, 0.8)
export const BLUE_LIGHT_60 = lighten(BLUE, 1)
export const BLUE_LIGHT_80 = lighten(BLUE, 1.5);

export const NAVY = darken(BLUE);

export const NAVY_2 = darken(BLUE, 0.5);
export const NAVY_3 = darken(BLUE, 2.5);

const colors = {
    GREEN,
    GREEN_DARK_20,
    GREEN_DARK_40,
    GREEN_DARK_60,
    GREEN_DARK_80,
    GREEN_LIGHT_20,
    GREEN_LIGHT_40,
    GREEN_LIGHT_60,
    GREEN_LIGHT_80,
    WHITE,
    BLACK,
    GREY_80,
    GREY_60,
    GREY_40,
    GREY_20,
    BLUE,
    BLUE_DARK_20,
    BLUE_DARK_40,
    BLUE_DARK_60,
    BLUE_DARK_80,
    BLUE_LIGHT_20,
    BLUE_LIGHT_40,
    BLUE_LIGHT_60,
    BLUE_LIGHT_80,
    NAVY,
    NAVY_2,
    NAVY_3,
}

export default colors;