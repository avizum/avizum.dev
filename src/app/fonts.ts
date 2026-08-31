import localFont from "next/font/local";


export const vendSans = localFont({
    src: [
        { path: "./fonts/VendSans.woff2", style: "normal" },
        { path: "./fonts/VendSans-Italic.woff2", style: "italic" }
    ],
    variable: "--font-vendSans",
    display: "swap"
})

export const jetBrainsMono = localFont({
    src: [
        { path: "./fonts/JetBrainsMono.woff2", style: "normal" },
        { path: "./fonts/JetBrainsMono-Italic.woff2", style: "italic" }
    ],
    variable: "--font-jetBrainsMono",
    display: "swap"
})

