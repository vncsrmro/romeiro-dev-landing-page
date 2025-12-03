"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "A ROMEIRO.DEV transformou nossa presença digital. O site é incrivelmente rápido e o design é de outro mundo.",
        author: "Carlos Silva",
        role: "CEO, TechStart",
        company: "TechStart"
    },
    {
        quote: "Profissionalismo e qualidade técnica impecáveis. A automação que implementaram nos economiza horas todos os dias.",
        author: "Ana Souza",
        role: "Diretora de Operações",
        company: "Logística Express"
    },
    {
        quote: "O e-commerce ficou perfeito. Nossas vendas aumentaram 40% no primeiro mês após o lançamento.",
        author: "Marcos Oliveira",
        role: "Fundador",
        company: "Moda Verde"
    },
    {
        quote: "Design moderno e funcional. A equipe entendeu exatamente o que precisávamos.",
        author: "Juliana Mendes",
        role: "Marketing Manager",
        company: "Creative Agency"
    },
    {
        quote: "Suporte excepcional e entrega dentro do prazo. Recomendo fortemente.",
        author: "Roberto Santos",
        role: "CTO",
        company: "Fintech Solutions"
    },
];

export function Testimonials() {
    return (
        <section className="py-32 relative overflow-hidden bg-[#050505]">
            <div className="container mx-auto px-4 mb-16 text-center">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                    O que dizem nossos <span className="text-gradient-primary">Parceiros</span>
                </h2>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee whitespace-nowrap flex gap-8">
                    {[...testimonials, ...testimonials].map((testimonial, index) => (
                        <div
                            key={index}
                            className="w-[400px] glass-card-strong p-8 rounded-3xl flex-shrink-0 whitespace-normal"
                        >
                            <Quote className="w-10 h-10 text-primary/20 mb-6" />
                            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                                &quot;{testimonial.quote}&quot;
                            </p>
                            <div>
                                <p className="font-bold text-white">{testimonial.author}</p>
                                <p className="text-sm text-gray-500">{testimonial.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-8">
                    {[...testimonials, ...testimonials].map((testimonial, index) => (
                        <div
                            key={index}
                            className="w-[400px] glass-card-strong p-8 rounded-3xl flex-shrink-0 whitespace-normal"
                        >
                            <Quote className="w-10 h-10 text-primary/20 mb-6" />
                            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                                &quot;{testimonial.quote}&quot;
                            </p>
                            <div>
                                <p className="font-bold text-white">{testimonial.author}</p>
                                <p className="text-sm text-gray-500">{testimonial.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Gradient Fade Edges */}
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#050505] to-transparent z-10" />
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#050505] to-transparent z-10" />
        </section>
    );
}
