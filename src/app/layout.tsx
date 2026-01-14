import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const outfit = Outfit({
    variable: "--font-outfit",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "Oliver Molina | Front-End Developer & UI Designer",
        template: "%s | Oliver Molina",
    },
    description:
        "Detail-oriented Front-End Developer specializing in React.js, UI design, and crafting seamless digital experiences. Based in Taguig City, Philippines.",
    keywords: [
        "Oliver Molina",
        "Front-End Developer",
        "UI Designer",
        "React Developer",
        "Web Developer Philippines",
        "Portfolio",
        "Clean Design",
    ],
    authors: [{ name: "Oliver Molina" }],
    creator: "Oliver Molina",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://your-portfolio-url.com", // User should update this
        siteName: "Oliver Molina Portfolio",
        title: "Oliver Molina | Front-End Developer & UI Designer",
        description:
            "Detail-oriented Front-End Developer specializing in React.js and UI design.",
        images: [
            {
                url: "/og-image.png", // We should ideally have an OG image
                width: 1200,
                height: 630,
                alt: "Oliver Molina Portfolio",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Oliver Molina | Front-End Developer & UI Designer",
        description:
            "Detail-oriented Front-End Developer specializing in React.js and UI design.",
        images: ["/og-image.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${outfit.variable} antialiased`}>
                <Toaster position="bottom-right" />
                {children}
            </body>
        </html>
    );
}
