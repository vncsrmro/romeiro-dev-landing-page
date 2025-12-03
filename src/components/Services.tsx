"use client";

import { motion } from "framer-motion";
import { Globe, Database, ShoppingBag, ArrowRight, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
    {
        icon: Globe,
        title: "Sites de Alta Performance",
        description: "Landing pages e sites institucionais otimizados para conversão máxima.",
        className: "md:col-span-2",
        gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
        icon: Database,
        title: "Sistemas Web",
        description: "Painéis administrativos e ERPs sob medida.",
        className: "md:col-span-1",
        gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
        icon: ShoppingBag,
        title: "E-commerce",
        description: "Lojas virtuais que vendem 24/7.",
        className: "md:col-span-1",
        gradient: "from-orange-500/20 to-red-500/20"
    },
    {
        icon: Cpu,
        title: "Automação & IA",
        description: "Integrações inteligentes para escalar sua operação.",
        className: "md:col-span-2",
        gradient: "from-emerald-500/20 to-teal-500/20"
    },
];

export function Services() {
    return (
        <section id="services" className="py-32 relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
                    >
                        Tecnologia de Ponta, <span className="text-gradient-primary">Resultados Reais</span>.
                    </motion.h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Escolha a solução ideal para o seu momento.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                            className={cn(
                                "group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] p-8 hover:border-white/20 transition-all duration-500",
                                service.className
                            )}
                        >
                            <div className={cn(
                                "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                                service.gradient
                            )} />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <service.icon className="w-6 h-6 text-white" />
                                </div>

                                <h3 className="text-2xl font-bold mb-3 text-white group-hover:translate-x-1 transition-transform duration-300">
                                    {service.title}
                                </h3>

                                <p className="text-gray-400 mb-8 flex-grow group-hover:text-gray-300 transition-colors">
                                    {service.description}
                                </p>

                                <div className="flex items-center gap-2 text-sm font-bold text-white/50 group-hover:text-white transition-colors">
                                    Saiba mais <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
