import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Oliver Molina Portfolio",
        short_name: "OM Portfolio",
        description: "Front-End Developer & UI Designer Portfolio",
        start_url: "/",
        display: "standalone",
        background_color: "#0a0a0f",
        theme_color: "#0a0a0f",
        icons: [
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
            },
        ],
    };
}
