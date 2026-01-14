import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://oliver-molina-dev.vercel.app",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
    ];
}
