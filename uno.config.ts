import { defineConfig, presetIcons, presetUno } from "unocss";
import presetWebFonts from "@unocss/preset-web-fonts";

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.4,
      prefix: "i-",
      extraProperties: {
        display: "inline-block",
      },
      warn: true,
    }),
    presetWebFonts({
      provider: "google",
      fonts: {
        pacifico: "Pacifico",
      },
    }),
  ],
});
