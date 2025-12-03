"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Database, ShoppingBag, ArrowRight, Cpu, X, MessageCircle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/lib/constants";

const services = [
    {
        id: "sites",
        icon: Globe,
        title: "Sites de Alta Performance",
        description: "Landing pages e sites institucionais otimizados para conversão máxima.",
        className: "md:col-span-2",
        gradient: "from-blue-500/20 to-cyan-500/20",
        expanded: {
            title: "Sites que Vendem 24/7",
            details: [
                "Foco total na Performance Score (Lighthouse acima de 95).",
                "Desenvolvimento em Next.js para SEO e Velocidade Imediata.",
                "Design Único focado em UX para conversão máxima.",
                "Integração com Ferramentas de Marketing (Tags e Pixels)."
            ]
        }
    },
    {
        id: "sistemas",
        icon: Database,
        title: "Sistemas Web",
        description: "Painéis administrativos e ERPs sob medida.",
        className: "md:col-span-1",
        gradient: "from-purple-500/20 to-pink-500/20",
        expanded: {
            title: "Dashboards e Controle Personalizado",
            details: [
                "Criação de Painéis Administrativos e ERPs Sob Medida.",
                "Estruturação de Bancos de Dados em Tempo Real (Supabase/PostgreSQL).",
                "Sistemas de Autenticação Segura (Login e Gestão de Permissões).",
                "Consultoria de Processos para digitalizar planilhas e rotinas."
            ]
        }
    },
    {
        id: "ecommerce",
        icon: ShoppingBag,
        title: "E-commerce",
        description: "Lojas virtuais que vendem 24/7.",
        className: "md:col-span-1",
        gradient: "from-orange-500/20 to-red-500/20",
        expanded: {
            title: "Lojas Virtuais Otimizadas para Vendas",
            details: [
                "E-commerce com carregamento instantâneo (Garantia de Performance).",
                "Checkout otimizado para reduzir carrinhos abandonados.",
                "Integração com os principais Gateways de Pagamento (Mercado Pago, PagSeguro, Stripe).",
                "Solução modular que escala conforme seu volume de vendas."
            ]
        }
    },
    {
        id: "automacao",
        icon: Cpu,
        title: "Automação & IA",
        description: "Integrações inteligentes para escalar sua operação.",
        className: "md:col-span-2",
        gradient: "from-emerald-500/20 to-teal-500/20",
        expanded: {
            title: "Inteligência para Escalar a Operação",
            details: [
                "Automação de tarefas repetitivas (Webhooks e APIs).",
                "Integração com Agentes de IA (via APIs) para otimização de conteúdo ou suporte.",
                "Conexão de dados entre diferentes softwares (Ex: CRM com Estoque).",
                "Relatórios automatizados e data driven para tomada de decisão."
            ]
        }
    },
];

export function Services() {
    const [expandedId, setExpandedId] = useState<string | null>(null);

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
                    {services.map((service) => (
                        <motion.div
                            layout
                            key={service.id}
                            onClick={() => setExpandedId(expandedId === service.id ? null : service.id)}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ layout: { duration: 0.3, type: "spring" } }}
                            className={cn(
                                "group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] cursor-pointer transition-colors duration-500",
                                service.className,
                                expandedId === service.id ? "md:col-span-3 row-span-2 bg-[#0f0f0f] border-cyan-500/30" : "hover:border-cyan-500/50 hover:shadow-[0_0_30px_-10px_rgba(0,255,255,0.15)]"
                            )}
                            whileHover={expandedId !== service.id ? { y: -5 } : {}}
                        >
                            <div className={cn(
                                "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500",
                                expandedId === service.id ? "opacity-10" : "group-hover:opacity-100",
                                service.gradient
                            )} />

                            <motion.div layout className="relative z-10 p-8 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-6">
                                    <motion.div
                                        layout
                                        className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500"
                                    >
                                        <service.icon className="w-6 h-6 text-white" />
                                    </motion.div>

                                    {expandedId === service.id && (
                                        <motion.button
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setExpandedId(null);
                                            }}
                                            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                                        >
                                            <X className="w-5 h-5" />
                                        </motion.button>
                                    )}
                                </div>

                                <motion.h3 layout className="text-2xl font-bold mb-3 text-white">
                                    {service.title}
                                </motion.h3>

                                <AnimatePresence mode="wait">
                                    {expandedId === service.id ? (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="mt-4"
                                        >
                                            <h4 className="text-xl font-bold text-cyan-400 mb-6">{service.expanded.title}</h4>
                                            <ul className="grid md:grid-cols-2 gap-4 mb-8">
                                                {service.expanded.details.map((detail, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-gray-300">
                                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500 flex-shrink-0" />
                                                        <span>{detail}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            <Link
                                                href={SITE_CONFIG.whatsapp}
                                                target="_blank"
                                                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-cyan-500 text-black font-bold hover:bg-cyan-400 transition-colors"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <MessageCircle className="w-5 h-5" />
                                                Iniciar Conversa
                                            </Link>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        >
                                            <p className="text-gray-400 mb-8 group-hover:text-gray-300 transition-colors">
                                                {service.description}
                                            </p>

                                            <div className="flex items-center gap-2 text-sm font-bold text-white/50 group-hover:text-white transition-colors mt-auto">
                                                Saiba mais <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
