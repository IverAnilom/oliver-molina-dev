import { Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-white/5 bg-[#050508] py-8">
            <div className="mx-auto max-w-6xl px-6">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>
                            © 2025 Oliver M. Molina. All rights reserved.
                        </span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>Built with</span>
                        <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                        <span>using React & Tailwind CSS</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
