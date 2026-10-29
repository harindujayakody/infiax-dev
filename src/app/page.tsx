import React from "react";
import { Server, Globe, Shield, Cpu, ExternalLink, GitBranch, Layers, CheckCircle2 } from "lucide-react";

export default function Home() {
  const specs = [
    { label: "Architecture", value: "x86_64 Ubuntu 24.04" },
    { label: "VPS Specs", value: "4 vCPU / 8 GB RAM" },
    { label: "Reverse Proxy", value: "Traefik v3" },
    { label: "SSL Status", value: "Let's Encrypt / Cloudflare" },
    { label: "Output Mode", value: "Standalone Container" },
  ];

  const features = [
    {
      icon: <Globe className="w-6 h-6 text-indigo-400" />,
      title: "Wildcard Subdomain Routing",
      desc: "Instant subdomain provisioning via *.infiax.dev without touching DNS settings.",
    },
    {
      icon: <Layers className="w-6 h-6 text-emerald-400" />,
      title: "Docker Isolation",
      desc: "Each Next.js app runs in its own memory-isolated container with zero port conflicts.",
    },
    {
      icon: <Shield className="w-6 h-6 text-cyan-400" />,
      title: "Automated HTTPS",
      desc: "Zero-config SSL termination and automatic certificates for every subdomain.",
    },
    {
      icon: <GitBranch className="w-6 h-6 text-purple-400" />,
      title: "Git Push to Deploy",
      desc: "Vercel-like continuous deployment: push code to GitHub and auto-build via Nixpacks.",
    },
  ];

  return (
    <main className="min-h-screen text-slate-100 flex flex-col justify-between">
      {/* Navigation */}
      <header className="border-b border-slate-800/80 backdrop-blur-md sticky top-0 z-50 bg-[#08090d]/80">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20">
              I
            </div>
            <span className="font-bold text-lg tracking-tight text-white">infiax.dev</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1 text-xs font-semibold rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>All Systems Operational</span>
            </span>

            <a
              href="https://panel.infiax.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-sm flex items-center space-x-1.5"
            >
              <span>Coolify Panel</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-20 w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-400 mb-6">
            <Cpu className="w-3.5 h-3.5 text-indigo-400" />
            <span>Next.js 14 Standalone Production Build</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-b from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Self-Hosted Cloud Infrastructure
          </h1>

          <p className="text-lg text-slate-400 leading-relaxed">
            High-performance Next.js application hosting on your dedicated 4 vCPU / 8 GB VPS with automated subdomains, Docker containment, and single dashboard control.
          </p>
        </div>

        {/* System Specs Card */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 mb-16 shadow-2xl backdrop-blur-sm">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-6">
            <div className="flex items-center space-x-2.5">
              <Server className="w-5 h-5 text-indigo-400" />
              <h2 className="font-semibold text-sm uppercase tracking-wider text-slate-300">Environment Node Specs</h2>
            </div>
            <span className="text-xs font-mono text-slate-500">Node: 161.97.162.133</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {specs.map((item, index) => (
              <div key={index} className="bg-slate-950/50 border border-slate-800/60 rounded-xl p-3.5">
                <div className="text-xs text-slate-500 mb-1">{item.label}</div>
                <div className="text-sm font-semibold text-slate-200 truncate">{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-all rounded-2xl p-6 group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-lg text-slate-200 mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-8 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Infiax. Hosted on private VPS via Coolify.</p>
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/harindujayakody/infiax-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors flex items-center space-x-1"
            >
              <span>GitHub Repo</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a href="https://panel.infiax.dev" className="hover:text-slate-300 transition-colors">
              Management Dashboard
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
