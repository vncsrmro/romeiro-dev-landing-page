"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "O Vinicius entregou um site absurdamente rápido. A conversão das nossas campanhas aumentou em 40% na primeira semana.",
        author: "Carlos Silva",
        role: "CEO, TechStart",
    },
    {
        quote: "A experiência de uso do sistema que ele desenvolveu é incrível. Tudo flui, nada trava. Realmente uma tecnologia antigravidade.",
        author: "Ana Oliveira",
        role: "Diretora de Operações, LogiFast",
    },
    {
        quote: "Profissionalismo e qualidade técnica impecáveis. O design ficou moderno e exatamente como imaginávamos.",
        author: "Ricardo Santos",
        role: "Fundador, E-Shop Brasil",
    },
];

export function Testimonials() {
    return (
        <section id="testimonials" className="py-24 relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-6"
                    >
                        Quem já <span className="text-secondary">Elevou</span> seu Negócio Comigo.
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-panel p-8 rounded-2xl relative"
                        >
                            <Quote className="w-10 h-10 text-secondary/20 absolute top-6 left-6" />
                            <p className="text-gray-300 mb-6 relative z-10 italic leading-relaxed">"{item.quote}"</p>
                            <div>
                                <p className="font-bold text-white">{item.author}</p>
                                <p className="text-sm text-gray-500">{item.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
