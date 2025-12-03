"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Clock, Layers, Smartphone } from "lucide-react";

const problems = [
    {
        icon: Clock,
        title: "Lentidão que Custa Clientes",
        description: "Sites lentos espantam visitantes antes mesmo de carregar. Cada segundo conta na conversão.",
    },
    {
        icon: Layers,
        title: "Sistemas Complexos",
        description: "Processos manuais e ferramentas desconectadas que travam sua operação diária.",
    },
    {
        icon: Smartphone,
        title: "Design Ultrapassado",
        description: "Interfaces que não funcionam bem no celular e não transmitem a credibilidade da sua marca.",
    },
    {
        icon: AlertTriangle,
        title: "Tecnologia Obsoleta",
        description: "Projetos vulneráveis e difíceis de manter, presos a tecnologias do passado.",
    },
];

export function Problem() {
    return (
        <section id="problem" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-6"
                    >
                        Seu Negócio Merece Mais que um <span className="text-red-500">Site Pesado</span>.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto"
                    >
                        Identifique o que está segurando o crescimento do seu projeto digital.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {problems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-colors group"
                        >
                            <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <item.icon className="w-6 h-6 text-red-500" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
