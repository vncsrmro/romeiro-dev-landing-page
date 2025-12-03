"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    NextJsIcon,
    ReactIcon,
    TailwindIcon,
    TypeScriptIcon,
    NodeJsIcon,
    SupabaseIcon,
    PrismaIcon,
    VercelIcon
} from "./TechIcons";

const technologies = [
    { name: "Next.js", icon: NextJsIcon },
    { name: "React", icon: ReactIcon },
    { name: "Tailwind CSS", icon: TailwindIcon },
    { name: "TypeScript", icon: TypeScriptIcon },
    { name: "Node.js", icon: NodeJsIcon },
    { name: "Supabase", icon: SupabaseIcon },
    { name: "Prisma", icon: PrismaIcon },
    { name: "Vercel", icon: VercelIcon },
];

export function TechStack() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section id="stack" className="py-24 bg-white/5 relative overflow-hidden gpu-accelerated">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-6"
                    >
                        Tecnologias que <span className="text-primary">Elevam</span> seu Negócio.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto"
                    >
                        Utilizo as ferramentas mais modernas e robustas do mercado para garantir projetos rápidos, seguros e escaláveis.
                    </motion.p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <motion.div
                                animate={isMobile ? {} : { y: [0, -10, 0] }}
                                transition={isMobile ? {} : { duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                                className="glass-panel p-6 rounded-xl flex flex-col items-center justify-center gap-4 hover:bg-white/10 transition-colors gpu-accelerated"
                            >
                                <tech.icon className="w-10 h-10 text-primary" />
                                <span className="font-bold text-lg">{tech.name}</span>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
