import Link from "next/link";
import { Github, Mail, Twitter } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function Footer() {
    return (
        <footer className="bg-background border-t border-white/10 py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col items-center md:items-start">
                        <div className="relative w-32 h-8 mb-4">
                            <img
                                src="/logo.png"
                                alt="INOVASYS"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <p className="text-sm text-gray-400 max-w-xs">
                            Soluções que transformam o seu negócio.
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        <Link href={SITE_CONFIG.links.github} target="_blank" className="text-gray-400 hover:text-primary transition-colors">
                            <Github className="w-5 h-5" />
                        </Link>

                        <Link href={SITE_CONFIG.links.twitter} target="_blank" className="text-gray-400 hover:text-primary transition-colors">
                            <Twitter className="w-5 h-5" />
                        </Link>
                        <Link href={SITE_CONFIG.email} className="text-gray-400 hover:text-primary transition-colors">
                            <Mail className="w-5 h-5" />
                        </Link>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/5 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} INOVASYS. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
