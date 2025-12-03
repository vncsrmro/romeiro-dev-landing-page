"use client";

import { motion } from "framer-motion";
import { Check, Rocket, Zap, Shield } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const packages = [
    {
        title: "Landing Boost",
        subtitle: "Aceleração Inicial",
        focus: "Cartão Digital e Geração de Leads",
        idealFor: "Profissionais Liberais, Pequenos Serviços e Autônomos.",
        features: [
            "Página Única de Alto Tráfego",
            "Formulário de Captação de Contato",
            "Otimização de Velocidade (Core Web Vitals)",
            "Hospedagem Premium Vercel (Inclusa)",
            "Suporte Técnico Padrão"
        ],
        price: {
            setup: "R$ 250,00",
            monthly: "R$ 119,90"
        },
        cta: "Quero Lançar Agora!",
        highlight: false,
        icon: Rocket
    },
    {
        title: "Autoridade Pro",
        subtitle: "Recomendado",
        focus: "Site Completo e Fortalecimento de Marca",
        idealFor: "Clínicas, Empresas Locais e Consultorias.",
        features: [
            "Tudo do pacote anterior",
            "Até 7 Páginas (Serviços, Equipe, Blog, etc.)",
            "SEO Estratégico e Indexação Imediata",
            "Painel de Notícias / Artigos",
            "E-mails Corporativos Ilimitados",
            "Consultoria de UX/UI Inicial"
        ],
        price: {
            setup: "R$ 550,00",
            monthly: "R$ 249,90"
        },
        cta: "Elevar Minha Marca",
        highlight: true,
        icon: Zap
    },
    {
        title: "Enterprise Custom",
        subtitle: "Sob Medida",
        focus: "Sistemas Web, Dashboards e Soluções SaaS",
        idealFor: "Startups, Gestão de Estoque e Soluções Empresariais.",
        features: [
            "Plataforma de Login e Permissões de Usuário",
            "Dashboard Interativo com Dados em Tempo Real",
            "Integração com API's e Serviços Externos",
            "Banco de Dados Supabase/PostgreSQL Dedicado",
            "SLA de Suporte Prioritário"
        ],
        price: {
            setup: "A partir de R$ 1.500,00",
            monthly: "Sob Consulta"
        },
        cta: "Agendar Diagnóstico",
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
                                    ? "bg-[#181818] border-cyan-500/30 shadow-[0_0_30px_-10px_rgba(0,255,255,0.15)] scale-105 z-10"
                                    : "bg-[#121212] border-white/5 hover:border-white/10 hover:bg-[#151515]"
                            )}
                            whileHover={{ y: -5, boxShadow: pkg.highlight ? "0 0 40px -10px rgba(0,255,255,0.3)" : "0 10px 30px -10px rgba(0,0,0,0.5)" }}
                        >
                            {pkg.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-cyan-500 text-black text-xs font-bold uppercase tracking-wider">
                                    Recomendado
                                </div>
                            )}

                            <div className="mb-8">
                                <div className={cn(
                                    "w-12 h-12 rounded-xl flex items-center justify-center mb-6",
                                    pkg.highlight ? "bg-cyan-500/10 text-cyan-500" : "bg-white/5 text-gray-400"
                                )}>
                                    <pkg.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">{pkg.title}</h3>
                                <p className="text-sm text-cyan-500 font-medium mb-4 uppercase tracking-wide">{pkg.subtitle}</p>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">{pkg.focus}</p>
                                <p className="text-xs text-gray-500 italic">Ideal para: {pkg.idealFor}</p>
                            </div>

                            <div className="flex-grow mb-8">
                                <ul className="space-y-4">
                                    {pkg.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                            <Check className={cn("w-5 h-5 flex-shrink-0", pkg.highlight ? "text-cyan-500" : "text-gray-500")} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-auto pt-8 border-t border-white/5">
                                <div className="text-center mb-6">
                                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Implantação</p>
                                    <p className={cn("text-2xl font-bold mb-2", pkg.highlight ? "text-cyan-400" : "text-white")}>{pkg.price.setup}</p>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Mensalidade</p>
                                    <p className={cn("text-3xl font-bold", pkg.highlight ? "text-cyan-400" : "text-white")}>{pkg.price.monthly}</p>
                                </div>

                                <Link
                                    href="https://wa.me/5519991511101"
                                    target="_blank"
                                    className={cn(
                                        "w-full py-4 rounded-xl font-bold text-center transition-all duration-300 block",
                                        pkg.highlight
                                            ? "bg-cyan-500 text-black hover:bg-cyan-400 hover:scale-105 shadow-lg shadow-cyan-500/20"
                                            : "bg-white/10 text-white hover:bg-white/20 hover:scale-105"
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
