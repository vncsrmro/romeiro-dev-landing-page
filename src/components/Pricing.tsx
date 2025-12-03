"use client";

import { motion } from "framer-motion";
import { Check, Rocket, Zap, Shield } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/lib/constants";

const packages = [
    {
        title: "PAC Essencial",
        subtitle: "O Cartão de Visita Digital de Alta Conversão",
        focus: "Ideal para: Autônomos, Freelancers, Pequenos Serviços.",
        features: [
            "Site One-Page (Ultra-Rápido e responsivo)",
            "Chamada Flutuante para WhatsApp",
            "Integração com Google Maps",
            "Hospedagem de Performance (Inclusa)",
            "Atualizações de Conteúdo (Mensais)"
        ],
        price: {
            monthly: "R$ 99",
            period: "/mês",
            setup: "Implantação Gratuita"
        },
        cta: "Quero Decolar 🚀",
        highlight: false,
        icon: Rocket
    },
    {
        title: "PAC Profissional",
        subtitle: "Transmita Autoridade e Posicione-se no Google",
        focus: "Ideal para: Clínicas, Consultorias, Empresas Locais e Médias.",
        features: [
            "Tudo do Essencial +",
            "Até 5 Seções/Páginas (Home, Serviços, Sobre, Blog)",
            "Otimização para Mecanismos de Busca (SEO Base)",
            "Área de Conteúdo (Blog/Notícias) Gerenciável",
            "Contas de E-mail Personalizadas",
            "Suporte Técnico Prioritário"
        ],
        price: {
            monthly: "R$ 199",
            period: "/mês",
            setup: "Implantação Gratuita"
        },
        cta: "Quero Decolar 🚀",
        highlight: true,
        icon: Zap
    },
    {
        title: "PAC Customizado",
        subtitle: "Sistemas Antigravidade: Controle Total da sua Operação",
        focus: "Ideal para: Startups, Gestão Interna Complexa, Soluções SaaS.",
        features: [
            "Desenvolvimento de Sistemas Sob Medida (Web Apps)",
            "Painel Administrativo (Dashboard) com Gráficos",
            "Gestão de Níveis de Acesso e Usuários",
            "Banco de Dados Seguro e Escalável"
        ],
        price: {
            monthly: "Sob Consulta",
            period: "",
            setup: "A partir de R$ 1.500,00 (desenvolvimento único)"
        },
        cta: "Quero Decolar 🚀",
        highlight: false,
        icon: Shield
    }
];

export function Pricing() {
    return (
        <section id="pricing" className="py-32 relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
                    >
                        Nossos Pacotes de <span className="text-gradient-primary">Elevada Performance</span>
                    </motion.h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Escolha o plano ideal para o seu momento e escale seu negócio.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={cn(
                                "relative flex flex-col p-8 rounded-3xl border transition-all duration-300 group",
                                pkg.highlight
                                    ? "bg-[#050a15] border-blue-500/50 shadow-[0_0_40px_-10px_rgba(59,130,246,0.2)] scale-105 z-10"
                                    : "bg-[#050505] border-white/5 hover:border-white/10 hover:bg-[#0a0a0a]"
                            )}
                            whileHover={{ y: -5 }}
                        >
                            {pkg.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-blue-600 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-blue-600/20">
                                    Mais Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-white mb-2">{pkg.title}</h3>
                                <p className="text-blue-400 text-sm font-medium mb-4 min-h-[40px]">{pkg.subtitle}</p>
                                <p className="text-gray-500 text-xs mb-6">{pkg.focus}</p>

                                <div className="mb-2">
                                    <span className="text-5xl font-bold text-white tracking-tight">{pkg.price.monthly}</span>
                                    <span className="text-gray-400 text-lg ml-1">{pkg.price.period}</span>
                                </div>
                                <p className={cn("text-sm font-medium", pkg.highlight ? "text-green-400" : "text-green-500")}>
                                    ✓ {pkg.price.setup}
                                </p>
                            </div>

                            <div className="flex-grow mb-8 border-t border-white/5 pt-8">
                                <ul className="space-y-4">
                                    {pkg.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                            <div className={cn("mt-0.5 rounded-full p-0.5", pkg.highlight ? "bg-blue-500/20 text-blue-400" : "bg-white/10 text-gray-400")}>
                                                <Check className="w-3 h-3" />
                                            </div>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-auto">
                                <Link
                                    href={SITE_CONFIG.whatsapp}
                                    target="_blank"
                                    className={cn(
                                        "w-full py-4 rounded-xl font-bold text-center transition-all duration-300 flex items-center justify-center gap-2",
                                        pkg.highlight
                                            ? "bg-blue-600 text-white hover:bg-blue-500 hover:scale-105 shadow-lg shadow-blue-600/20"
                                            : "bg-white/5 text-white hover:bg-white/10 hover:scale-105 border border-white/10"
                                    )}
                                >
                                    {pkg.cta}
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
