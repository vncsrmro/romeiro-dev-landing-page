"use client";

import { motion } from "framer-motion";
import { Globe, Database, ShoppingBag, BarChart3, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
    {
        icon: Globe,
        title: "Sites de Alta Performance",
        description: "Landing pages, blogs e sites institucionais otimizados para conversão e SEO.",
    },
    {
        icon: Database,
        title: "Sistemas Customizados",
        description: "Painéis de gestão, ERPs e automações desenvolvidos sob medida para sua operação.",
    },
    {
        icon: ShoppingBag,
        title: "E-commerce Otimizado",
        description: "Lojas virtuais rápidas, seguras e focadas em vender mais.",
    },
    {
        icon: BarChart3,
        title: "Consultoria & Otimização",
        description: "Análise profunda de performance e melhorias técnicas para projetos existentes.",
    },
];

export function Services() {
    return (
        <section id="services" className="py-24 relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-6"
                    >
                        Desafie a Gravidade do seu <span className="text-secondary">Projeto</span>.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto"
                    >
                        Soluções completas para elevar seu negócio ao próximo nível.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-panel p-8 rounded-2xl group hover:bg-white/5 transition-all duration-300 border border-white/10 hover:border-secondary/50"
                        >
                            <div className="flex items-start gap-6">
                                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <service.icon className="w-7 h-7 text-secondary" />
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-2xl font-bold mb-3 group-hover:text-secondary transition-colors">{service.title}</h3>
                                    <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                                    <Link
                                        href="https://wa.me/yournumber"
                                        target="_blank"
                                        className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-secondary transition-colors"
                                    >
                                        Solicitar Orçamento
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
