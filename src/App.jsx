import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, BarChart3, BriefcaseBusiness,
  CheckCircle2, ChevronRight, Code2, Globe2, Mail,
  Megaphone, Phone, Search, ShieldCheck, ShoppingBag,
  Sparkles, Target, TrendingDown, TrendingUp, Zap,
  Package, Brain, Database, Cpu, Store, LineChart,
  Layers, Settings, Users, Award, Star, BookOpen,
} from "lucide-react";

const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } };
const stagger = { visible: { transition: { staggerChildren: .07 } } };

/* ── METRICS ── */
const metrics = [
  { value: "99K",   suffix: "",    label: "GA4 Active Users",          detail: "Last 90 days",             color: "from-violet-500 to-indigo-500" },
  { value: "1.5",   suffix: "AED", label: "Meta WhatsApp CPR",         detail: "Down from AED 4 — 62%↓",  color: "from-emerald-500 to-teal-500"  },
  { value: "202K",  suffix: "",    label: "Organic Impressions",        detail: "Search Console, 3 months", color: "from-sky-500 to-blue-500"      },
  { value: "1.94K", suffix: "",    label: "Merchant Products",          detail: "Google Merchant Center",   color: "from-fuchsia-500 to-pink-500"  },
  { value: "26K",   suffix: "AED", label: "Tracked Revenue",           detail: "GA4 purchase snapshot",    color: "from-amber-500 to-orange-500"  },
  { value: "35",    suffix: "%",   label: "ROI Increase",              detail: "BOSQ performance period",  color: "from-rose-500 to-red-400"      },
];

/* ── PROOF IMAGES ── */
const proofImages = [
  { src: `${import.meta.env.BASE_URL}images/ga4-engagement.png`,             title: "GA4 Engagement & Retention",  stat: "99K active users",  copy: "Managed a high-volume traffic pipeline and used engagement data to identify stronger retention and conversion opportunities." },
  { src: `${import.meta.env.BASE_URL}images/ga4-revenue.png`,                title: "GA4 E-Commerce Revenue",      stat: "AED 26K revenue",   copy: "Tracked revenue, ARPPU, purchases, add-to-cart behavior and product-level performance inside GA4." },
  { src: `${import.meta.env.BASE_URL}images/search-console-performance.png`, title: "Search Console Performance",  stat: "202K impressions",  copy: "Managed organic visibility with 4.86K clicks, 2.4% CTR and 9.5 average position over 3 months." },
  { src: `${import.meta.env.BASE_URL}images/core-web-vitals.png`,            title: "Core Web Vitals",             stat: "0 poor URLs",       copy: "Protected technical SEO health with 215 good desktop URLs and zero poor URL issues." },
  { src: `${import.meta.env.BASE_URL}images/merchant-listings.png`,          title: "Merchant Listings",           stat: "272 valid listings",copy: "Maintained merchant listing health with 0 critical issues and strong shopping visibility signals." },
  { src: `${import.meta.env.BASE_URL}images/merchant-quality.png`,           title: "Merchant Store Quality",      stat: "Great rating",      copy: "Maintained a Google Merchant Store Quality rating of Great, well above the UAE market average." },
];

/* ── SKILL TRACKS ── */
const skillTracks = [
  {
    track: "E-Commerce & Online Sales",
    icon: ShoppingBag,
    color: "from-violet-600 to-indigo-600",
    glow: "rgba(139,92,246,.22)",
    headline: "Multi-platform sales architecture that compounds revenue",
    description: "End-to-end WooCommerce, Shopify, Amazon and Noon expertise — from catalog architecture to checkout optimisation and marketplace-specific growth strategies. I manage 1.94K-product Merchant Center catalogs, Amazon Seller Central operations, Noon partner accounts and maintain Great store quality ratings across all channels.",
    tags: ["WooCommerce","Shopify","Amazon Seller Central","Noon Partner Center","Google Merchant Center","Product Feed Health","Checkout Optimisation","Payment Gateway Integration","Cart Abandonment Recovery","Add-to-Cart Tracking","ARPPU Optimisation","Catalog Management","Amazon PPC","Noon Ads","Buy Box Strategy","FBA / FBN Logistics","Review & Rating Management","Marketplace SEO"],
    proofPoints: [
      { metric: "169",   label: "Purchases tracked via GA4 in one window" },
      { metric: "1.73K", label: "Approved Merchant Center listings maintained" },
      { metric: "Great", label: "Google Merchant Store Quality rating" },
    ],
  },
  {
    track: "AI, Automation & Custom Dashboards",
    icon: Brain,
    color: "from-amber-500 to-orange-600",
    glow: "rgba(245,158,11,.22)",
    headline: "AI-powered systems and live data dashboards built from scratch",
    description: "I design and build custom analytics dashboards using API data fetching — pulling live data from Meta Ads API, GA4 Reporting API, Google Search Console API, Amazon SP-API and Noon APIs into unified performance views. I also deploy AI workflows using GPT-4, Claude API and n8n automation for content, reporting, lead scoring and operational efficiency.",
    tags: ["Meta Ads API","GA4 Reporting API","Search Console API","Amazon SP-API","Noon API Integration","Custom Dashboard Development","n8n Automation","GPT-4 Workflows","Claude API","AI Content Generation","Lead Scoring Automation","Automated Reporting","Data Pipeline Design","API Integration","Webhook Systems","CRM Automation","Performance Monitoring Dashboards","Real-Time Analytics"],
    proofPoints: [
      { metric: "6+",    label: "Live API data sources integrated into dashboards" },
      { metric: "Auto",  label: "Reporting pipelines replacing manual work" },
      { metric: "GPT-4", label: "AI workflows deployed across operations" },
    ],
  },
  {
    track: "Web Development & Systems",
    icon: Code2,
    color: "from-sky-600 to-blue-600",
    glow: "rgba(56,189,248,.22)",
    headline: "Infrastructure that holds revenue under load",
    description: "I build and maintain the technical layer e-commerce runs on — Linux VPS, Apache/Nginx, PHP, MySQL, SSL, GCP — plus full Stripe, PayPal, N-Genius, CyberSource and Telr payment integration. Custom React dashboards, API-connected tools and performance engineering that reached 0 poor Core Web Vitals URLs.",
    tags: ["Linux VPS","Apache / Nginx","PHP & MySQL","GCP","SSL & Security","WordPress & WooCommerce","Shopify Liquid","React.js","REST API Development","Payment Gateways","Core Web Vitals","Performance Engineering","GTM & Tracking","CRM Integrations","Custom Tooling","Webhook Systems"],
    proofPoints: [
      { metric: "0",     label: "Poor Core Web Vitals URLs on desktop" },
      { metric: "215",   label: "Good-status desktop URLs maintained" },
      { metric: "5 GWs", label: "Payment gateways integrated end-to-end" },
    ],
  },
  {
    track: "Organic Growth & SEO",
    icon: TrendingUp,
    color: "from-emerald-600 to-teal-600",
    glow: "rgba(16,185,129,.22)",
    headline: "Compounding visibility that survives algorithm updates",
    description: "Search Console strategy, CTR optimisation, Core Web Vitals health, technical SEO audits, schema markup and Amazon/Noon marketplace SEO. Delivered 202K organic impressions, 4.86K clicks and a 2.4% CTR over 3 months while maintaining a 9.5 average position.",
    tags: ["Google Search Console","Technical SEO","Core Web Vitals","Schema Markup","CTR Optimisation","Keyword Mapping","Internal Linking","Crawl Health","Page Speed","Mobile-First Indexing","Amazon Listing SEO","Noon Product SEO","Merchant Free Listings SEO","A+ Content Strategy"],
    proofPoints: [
      { metric: "202K",  label: "Organic impressions in 3 months" },
      { metric: "4.86K", label: "Organic clicks from Search Console" },
      { metric: "2.4%",  label: "Average organic CTR sustained" },
    ],
  },
  {
    track: "Paid Acquisition & Meta Ads",
    icon: Megaphone,
    color: "from-fuchsia-600 to-pink-600",
    glow: "rgba(217,70,239,.22)",
    headline: "CPR-obsessed paid media that pays back fast",
    description: "Meta Ads campaign architecture, audience segmentation, creative strategy and WhatsApp lead generation optimisation. Reduced CPR from AED 4 to under AED 1.5 — a 62%+ reduction — through systematic testing of targeting, hooks and funnel alignment. Also manages Amazon PPC, Noon Ads and Google Ads.",
    tags: ["Meta Ads Manager","WhatsApp Lead Gen","CPR Optimisation","Audience Segmentation","Lookalike Audiences","Creative Strategy","Retargeting","Campaign Structure","Lead Quality Optimisation","Budget Pacing","A/B Testing","Amazon PPC","Noon Ads","Google Ads","Performance Max"],
    proofPoints: [
      { metric: "AED 1.5", label: "Optimised WhatsApp CPR (from AED 4)" },
      { metric: "62%+",    label: "CPR reduction achieved" },
      { metric: "Multi",   label: "Paid channels managed simultaneously" },
    ],
  },
  {
    track: "Amazon & Noon Marketplace",
    icon: Package,
    color: "from-orange-500 to-yellow-500",
    glow: "rgba(249,115,22,.22)",
    headline: "Marketplace dominance on the GCC's biggest platforms",
    description: "Full Amazon Seller Central and Noon Partner Center management — product listing optimisation, A+ content, Buy Box strategy, FBA/FBN logistics coordination, Amazon PPC campaign management, review strategy and ranking optimisation. Deep understanding of UAE and GCC marketplace dynamics and buyer behaviour.",
    tags: ["Amazon Seller Central","Noon Partner Center","Amazon PPC","Sponsored Products","Sponsored Brands","Buy Box Optimisation","FBA Logistics","FBN Fulfillment","A+ Content / EBC","Listing Optimisation","Keyword Research","Review Strategy","Inventory Planning","Marketplace Analytics","Price Strategy","UAE Market Expertise","GCC Consumer Insights","Competitor Analysis"],
    proofPoints: [
      { metric: "UAE",   label: "Amazon & Noon GCC market specialist" },
      { metric: "A+",    label: "Content and listing quality tier maintained" },
      { metric: "PPC",   label: "Campaign management across both platforms" },
    ],
  },
];

/* ── EXPERIENCE ── */
const experience = [
  {
    year: "2025 — Present",
    company: "Emarath",
    role: "Digital Growth & E-Commerce Systems Manager",
    type: "Full-Stack Growth Leadership",
    bullets: [
      "Optimised Meta WhatsApp CPR from AED 4 to below AED 1.5 — a 62%+ reduction in cost per result.",
      "Managed GA4 for 99K active users, 169 purchases, 816 add-to-carts and AED 26K tracked revenue.",
      "Delivered 202K organic impressions, 4.86K clicks and 2.4% CTR via Search Console strategy.",
      "Maintained 0 poor Core Web Vitals URLs across 215 desktop-good pages.",
      "Managed 1.94K Merchant Center products with 1.73K approved listings and Great store quality.",
      "Built custom API-connected dashboards pulling live data from Meta, GA4, Search Console and Merchant Center.",
      "Deployed AI automation workflows for reporting, lead scoring and content operations.",
      "Led full-funnel operations: paid acquisition, SEO, analytics, checkout, payments and catalog.",
    ],
  },
  {
    year: "2024 — 2025",
    company: "BOSQ Ergonomic Living",
    role: "E-Commerce & Digital Marketing Manager",
    type: "Performance Marketing & Conversion",
    bullets: [
      "Increased ROI 35% through performance marketing and systematic funnel optimisation.",
      "Built full-funnel system: paid ads → landing pages → CRM → conversion tracking.",
      "Managed Amazon and Noon marketplace listings, PPC campaigns and catalog operations.",
      "Designed high-converting landing pages aligned with paid traffic intent and audience segments.",
      "Managed Meta Ads and Google Ads with ROAS-focused optimisation frameworks.",
      "Implemented GA4, conversion events and custom dashboards for accurate performance analysis.",
      "Automated lead handling and customer journey workflows to improve end-to-end conversion efficiency.",
    ],
  },
  {
    year: "2021 — 2024",
    company: "NAVO Ergonomics",
    role: "Web Developer & E-Commerce Systems Engineer",
    type: "Technical Infrastructure & Systems",
    bullets: [
      "Built and optimised WooCommerce and Shopify e-commerce platforms from the ground up.",
      "Integrated 5 payment gateways: Stripe, PayPal, N-Genius, CyberSource and Telr.",
      "Developed custom API integrations pulling live data into internal reporting dashboards.",
      "Managed VPS infrastructure (Apache, Nginx, PHP, MySQL) for performance and reliability.",
      "Connected platforms with CRM, marketing automation and lead management systems.",
      "Implemented Amazon and Noon marketplace integrations for multi-channel selling.",
    ],
  },
];

/* ── AI & TECH STACK ── */
const techStack = [
  { category: "AI & Automation", items: ["GPT-4 / Claude API", "n8n Workflows", "AI Content Pipelines", "Lead Scoring AI", "Automated Reporting"], icon: Brain, color: "from-amber-500 to-orange-500" },
  { category: "Analytics & Data", items: ["GA4 / GTM", "Meta Ads API", "Search Console API", "Amazon SP-API", "Custom Dashboards"], icon: BarChart3, color: "from-violet-500 to-indigo-500" },
  { category: "E-Commerce Platforms", items: ["WooCommerce", "Shopify", "Amazon Seller Central", "Noon Partner Center", "Google Merchant Center"], icon: ShoppingBag, color: "from-sky-500 to-blue-500" },
  { category: "Dev & Infrastructure", items: ["React.js", "PHP / MySQL", "Linux VPS", "GCP", "REST APIs", "Webhooks"], icon: Code2, color: "from-emerald-500 to-teal-500" },
];

const tickerItems = [
  "Meta Ads","WhatsApp Lead Gen","GA4 Analytics","Amazon Seller Central","Noon Partner Center",
  "WooCommerce","Shopify","Google Merchant Center","Core Web Vitals","Technical SEO",
  "Custom Dashboards","AI Automation","API Integration","Amazon PPC","Noon Ads",
  "GTM","Conversion Optimisation","n8n Workflows","React.js","Search Console",
];

/* ── COUNTER ── */
function Counter({ target, suffix = "", duration = 1800 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const numericTarget = parseFloat(target.replace(/[^0-9.]/g, ""));
  const isDecimal = target.includes(".");
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const steps = 60;
    const increment = numericTarget / steps;
    const interval = duration / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericTarget) { setCount(numericTarget); clearInterval(timer); }
      else setCount(start);
    }, interval);
    return () => clearInterval(timer);
  }, [inView, numericTarget, duration]);
  const formatted = isDecimal ? count.toFixed(1) : Math.floor(count);
  const hasK = target.includes("K");
  const display = hasK ? `${formatted}K` : `${formatted}`;
  return (
    <span ref={ref}>
      {suffix === "AED" ? <span className="text-xl font-bold opacity-70 mr-1">AED</span> : null}
      {display}{suffix && suffix !== "AED" ? suffix : ""}
    </span>
  );
}

/* ── SECTION ── */
function Section({ id, eyebrow, title, subtitle, children, className = "" }) {
  return (
    <section id={id} className={`relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28 ${className}`}>
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible"
        viewport={{ once: true, amount: 0.1 }} transition={{ duration: .65 }} className="mb-14 max-w-3xl">
        {eyebrow && (
          <div className="pill mb-5"><span className="live-dot" />{eyebrow}</div>
        )}
        <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl leading-[1.05]">{title}</h2>
        {subtitle && <p className="mt-5 text-base leading-8 text-slate-300 max-w-2xl">{subtitle}</p>}
      </motion.div>
      {children}
    </section>
  );
}

/* ── METRIC CARD ── */
function MetricCard({ value, suffix, label, detail, color, index }) {
  return (
    <motion.div variants={fadeUp} transition={{ duration: .55, delay: index * .05 }}
      className="card-hover glass rounded-2xl p-6 shadow-premium relative overflow-hidden noise-overlay">
      <div className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${color} opacity-80`} />
      <p className="font-black text-white text-3xl md:text-4xl leading-none stat-accent">
        <Counter target={value} suffix={suffix} />
      </p>
      <p className="mt-2 text-sm font-bold text-slate-100">{label}</p>
      <p className="mt-1 text-xs text-slate-400 leading-5">{detail}</p>
    </motion.div>
  );
}

/* ── SKILL TRACK CARD ── */
function SkillTrackCard({ track, icon: Icon, color, headline, description, tags, proofPoints, index }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div variants={fadeUp} transition={{ duration: .55, delay: index * .06 }}
      className="card-hover glass rounded-2xl shadow-premium overflow-hidden">
      <div className={`h-1 bg-gradient-to-r ${color}`} />
      <div className="p-7">
        <div className="flex items-start justify-between gap-4">
          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${color} shadow-lg flex-shrink-0`}>
            <Icon className="w-5 h-5 text-white" />
          </div>
          <button onClick={() => setOpen(o => !o)}
            className="text-xs font-bold text-slate-400 hover:text-violet-300 transition-colors flex items-center gap-1 mt-1">
            {open ? "Less" : "All Skills"}
            <ChevronRight className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-90" : ""}`} />
          </button>
        </div>
        <h3 className="mt-5 text-xl font-black text-white leading-tight">{track}</h3>
        <p className="mt-1 text-sm font-semibold text-gradient">{headline}</p>
        <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
        <div className="mt-5 grid grid-cols-3 gap-3">
          {proofPoints.map((p) => (
            <div key={p.label} className="rounded-xl border border-white/[.08] bg-white/[.035] p-3 text-center">
              <p className="font-black text-white text-base leading-none">{p.metric}</p>
              <p className="mt-1 text-[10px] text-slate-400 leading-4">{p.label}</p>
            </div>
          ))}
        </div>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
            className="mt-5 flex flex-wrap gap-2">
            {tags.map((t) => <span key={t} className="skill-tag">{t}</span>)}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

/* ── PROOF CARD ── */
function ProofCard({ item }) {
  return (
    <motion.article variants={fadeUp}
      className="card-hover glass image-frame rounded-2xl shadow-premium overflow-hidden">
      <div className="relative bg-slate-950/80" style={{ minHeight: "240px" }}>
        <img src={item.src} alt={item.title} className="w-full object-cover" style={{ minHeight: "240px" }}
          onError={(e) => { e.currentTarget.style.display = "none"; e.currentTarget.nextSibling.style.display = "flex"; }} />
        <div className="hidden items-center justify-center bg-gradient-to-br from-slate-900 to-indigo-950 p-8 text-center" style={{ minHeight: "240px" }}>
          <div>
            <BarChart3 className="mx-auto h-12 w-12 text-violet-400" />
            <p className="mt-2 text-lg font-black text-white">{item.title}</p>
          </div>
        </div>
        <div className="absolute top-4 left-4 rounded-full px-3 py-1.5 text-xs font-black text-white backdrop-blur-md"
          style={{ background: "rgba(139,92,246,.65)", border: "1px solid rgba(139,92,246,.4)" }}>
          {item.stat}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-black text-white">{item.title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-300">{item.copy}</p>
      </div>
    </motion.article>
  );
}

/* ── EXPERIENCE CARD ── */
function ExperienceCard({ year, company, role, type, bullets, index }) {
  return (
    <motion.div variants={fadeUp} transition={{ duration: .55, delay: index * .08 }}
      className="card-hover glass rounded-2xl shadow-premium overflow-hidden">
      <div className="h-1 bg-gradient-to-r from-violet-600 to-indigo-600" />
      <div className="p-8">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
          <div>
            <div className="pill mb-3">{year}</div>
            <h3 className="text-2xl font-black text-white">{company}</h3>
            <p className="mt-1 text-sm text-violet-300 font-semibold">{role}</p>
          </div>
          <span className="text-xs font-bold px-3 py-1.5 rounded-full border border-white/[.10] text-slate-400 bg-white/[.03]">{type}</span>
        </div>
        <ul className="space-y-2.5">
          {bullets.map((b) => (
            <li key={b} className="flex gap-2.5 text-sm leading-6 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" />{b}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

/* ── ROOT APP ── */
export default function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#05051a] text-white">
      <div className="fixed inset-0 -z-10 grid-bg opacity-40 pointer-events-none" />
      <div className="orb h-[36rem] w-[36rem] animate-slow-pulse top-[-10rem] left-[-10rem] opacity-70"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,.28) 0%, transparent 70%)" }} />
      <div className="orb h-[32rem] w-[32rem] animate-float top-[12rem] right-[-10rem] opacity-60"
        style={{ background: "radial-gradient(circle, rgba(56,189,248,.22) 0%, transparent 70%)" }} />
      <div className="orb h-[28rem] w-[28rem] bottom-[5%] left-[30%] opacity-40"
        style={{ background: "radial-gradient(circle, rgba(245,158,11,.15) 0%, transparent 70%)" }} />

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/[.07]"
        style={{ background: "rgba(5,5,26,.85)", backdropFilter: "blur(20px)" }}>
        <div className="mx-auto max-w-7xl px-5 py-4 lg:px-8 flex items-center justify-between">
          <a href="#" className="text-lg font-black tracking-tight">
            Shabeel<span className="text-gradient">.</span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-300">
            {[["#case","Results"],["#skills","Skills"],["#marketplace","Marketplace"],["#ai","AI & Tech"],["#proof","Proof"],["#experience","Experience"]].map(([href, label]) => (
              <a key={href} href={href} className="hover:text-white transition-colors">{label}</a>
            ))}
          </div>
          <a href="#contact" className="btn-primary px-5 py-2.5 text-sm">
            Hire Me <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <header className="relative mx-auto max-w-7xl px-5 pb-20 pt-32 lg:grid lg:grid-cols-[1.15fr_.85fr] lg:gap-14 lg:px-8 lg:pt-44 lg:pb-28">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: .7 }}>
          <div className="pill mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Senior E-Commerce & Digital Growth Leader · Dubai, UAE
          </div>
          <h1 className="text-5xl font-black leading-[1.02] tracking-tight md:text-6xl xl:text-7xl">
            I build <span className="text-shimmer">revenue systems</span> across every channel — from{" "}
            <span className="text-gradient">ads to Amazon to AI.</span>
          </h1>
          <p className="mt-7 text-lg leading-8 text-slate-300 max-w-xl">
            Digital Growth Manager with 4+ years leading e-commerce, paid acquisition, marketplace operations (Amazon & Noon), SEO, custom dashboard development and AI automation — owning the full revenue chain across UAE and GCC markets.
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {["62%+ CPR reduction","Amazon & Noon expert","AI automation deployed","Custom API dashboards","202K organic impressions","AED 26K tracked revenue"].map((chip) => (
              <span key={chip} className="skill-tag text-xs">{chip}</span>
            ))}
          </div>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#case" className="btn-primary px-7 py-4">View Results <ArrowRight className="w-5 h-5" /></a>
            <a href="mailto:muhammedshabeel96@gmail.com" className="btn-outline px-7 py-4">Contact Me</a>
          </div>
        </motion.div>

        {/* hero card */}
        <motion.div initial={{ opacity: 0, scale: .93, y: 28 }} animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: .8, delay: .18 }}
          className="glass rounded-2xl p-5 shadow-glow mt-14 lg:mt-0 noise-overlay relative">
          <div className="rounded-xl border border-white/[.07] bg-slate-950/80 p-5">
            <div className="flex items-center justify-between border-b border-white/[.07] pb-4">
              <div>
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-widest">Multi-Channel Revenue System</p>
                <p className="mt-1 text-2xl font-black">Performance Overview</p>
              </div>
              <div className="flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold text-emerald-300"
                style={{ background: "rgba(52,211,153,.1)", border: "1px solid rgba(52,211,153,.25)" }}>
                <span className="live-dot" /> Active
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {[
                ["Meta Ads", "AED 4 → < 1.5 CPR", Megaphone, "from-fuchsia-600 to-pink-600"],
                ["Amazon / Noon", "Marketplace ops", Package, "from-orange-500 to-yellow-500"],
                ["AI Dashboards", "Live API data", Brain, "from-amber-500 to-orange-600"],
                ["Organic SEO", "202K impressions", Search, "from-sky-600 to-blue-600"],
              ].map(([a, b, Icon, grad]) => (
                <div key={a} className="rounded-xl border border-white/[.07] bg-white/[.035] p-4">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br ${grad} mb-3`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-xs text-slate-400">{a}</p>
                  <p className="mt-1 font-black text-white text-sm leading-tight">{b}</p>
                </div>
              ))}
            </div>
            {/* CPR bar */}
            <div className="mt-4 rounded-xl border border-white/[.07] bg-white/[.035] p-5">
              <div className="flex items-end justify-between mb-4">
                <div>
                  <p className="text-xs text-slate-400">WhatsApp CPR Reduction</p>
                  <p className="text-2xl font-black text-white">62%+ Efficiency Gain</p>
                </div>
                <TrendingDown className="w-7 h-7 text-emerald-400" />
              </div>
              <div className="flex items-end gap-3">
                <div className="flex-1">
                  <div className="h-24 rounded-t-xl" style={{ background: "linear-gradient(to top, rgba(239,68,68,.7), rgba(239,68,68,.3))" }} />
                  <p className="mt-2 text-center text-xs text-slate-400">Before</p>
                  <p className="text-center font-black text-sm">AED 4</p>
                </div>
                <div className="flex-1">
                  <div className="h-9 rounded-t-xl" style={{ background: "linear-gradient(to top, rgba(52,211,153,.8), rgba(52,211,153,.3))" }} />
                  <p className="mt-2 text-center text-xs text-slate-400">After</p>
                  <p className="text-center font-black text-sm">&lt; AED 1.5</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </header>

      {/* ── TICKER ── */}
      <div className="border-y border-white/[.07] py-3 overflow-hidden" style={{ background: "rgba(139,92,246,.06)" }}>
        <div className="ticker-track flex gap-10 whitespace-nowrap w-max">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="text-sm font-bold text-slate-400 flex items-center gap-2.5">
              <Zap className="w-3.5 h-3.5 text-violet-400 flex-shrink-0" />{item}
            </span>
          ))}
        </div>
      </div>

      {/* ── METRICS ── */}
      <Section id="metrics" eyebrow="Verified performance signals" title="Real numbers. Real systems."
        subtitle="Every metric pulled from live dashboards — GA4, Search Console, Meta Ads, Google Merchant Center.">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {metrics.map((m, i) => <MetricCard key={m.label} {...m} index={i} />)}
        </motion.div>
      </Section>

      <div className="section-divider" />

      {/* ── CASE STUDY ── */}
      <Section id="case" eyebrow="Current role · Emarath"
        title="Scaling acquisition, marketplace and revenue systems."
        subtitle="I own the full digital revenue lifecycle — from paid leads to organic search to Amazon/Noon marketplace to e-commerce performance to AI-powered dashboards.">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["Meta Lead Gen","AED 4 → < 1.5 CPR","Optimised WhatsApp campaigns through targeting, creative testing and funnel alignment.", Megaphone, "from-fuchsia-600 to-pink-600"],
            ["GA4 Commerce","99K users / AED 26K","Tracked users, purchases, add-to-carts, ARPPU and product-level revenue.", BarChart3, "from-violet-600 to-indigo-600"],
            ["Marketplace","Amazon + Noon ops","Managed listings, PPC, A+ content, Buy Box strategy and fulfillment across both platforms.", Package, "from-orange-500 to-yellow-500"],
            ["AI Dashboards","6+ API sources","Built custom dashboards pulling live data from Meta, GA4, Search Console and Amazon APIs.", Brain, "from-amber-500 to-orange-600"],
          ].map(([title, metric, copy, Icon, grad]) => (
            <motion.div key={title} variants={fadeUp}
              className="card-hover glass rounded-2xl p-7 shadow-premium overflow-hidden relative">
              <div className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${grad}`} />
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${grad} mb-5`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <p className="text-xs font-black uppercase tracking-[.22em] text-slate-400">{title}</p>
              <h3 className="mt-2 text-2xl font-black text-white leading-tight">{metric}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{copy}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          transition={{ duration: .65, delay: .1 }}
          className="mt-8 glass rounded-2xl p-8 shadow-premium md:p-10 noise-overlay relative">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <div className="pill mb-4">Measurable impact</div>
              <h3 className="text-3xl font-black text-white md:text-4xl leading-tight">Growth across every layer of the funnel.</h3>
              <p className="mt-5 leading-8 text-slate-300">
                I eliminate the silos between paid, organic, marketplace, technical and data layers — and optimise the handoffs between every stage of the revenue chain.
              </p>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {[
                "Reduced Meta WhatsApp CPR from AED 4 to below AED 1.5.",
                "Managed 99K active users and AED 26K revenue via GA4.",
                "Operated Amazon Seller Central and Noon Partner Center end-to-end.",
                "Built live API dashboards integrating 6+ data sources.",
                "Deployed AI workflows for reporting, content and lead operations.",
                "Maintained 215 good Core Web Vitals URLs with 0 poor.",
                "Managed 1.94K Merchant Center products with Great rating.",
                "Delivered 202K organic impressions and 4.86K clicks in 3 months.",
              ].map((item) => (
                <div key={item} className="rounded-xl border border-white/[.07] bg-white/[.03] p-4 text-sm leading-6 text-slate-300">
                  <CheckCircle2 className="mb-2.5 w-4 h-4 text-violet-400" />{item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Section>

      <div className="section-divider" />

      {/* ── MARKETPLACE SECTION ── */}
      <Section id="marketplace" eyebrow="Amazon & Noon expertise"
        title="GCC marketplace operations — Amazon, Noon and beyond."
        subtitle="UAE and GCC market specialist with hands-on Seller Central, Noon Partner Center, PPC and catalog management experience.">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Amazon Seller Central", icon: Package, color: "from-orange-500 to-yellow-500", items: ["Product listing creation & optimisation","A+ Content / Enhanced Brand Content","Amazon PPC — Sponsored Products & Brands","Buy Box strategy and price optimisation","FBA logistics and inventory planning","Review strategy and seller health management","Amazon SEO and keyword ranking","Competitor analysis and market positioning"] },
            { title: "Noon Partner Center", icon: Store, color: "from-yellow-500 to-amber-500", items: ["Noon seller account setup & management","Product catalog listing and optimisation","Noon Ads campaign management","FBN (Fulfilled by Noon) operations","Pricing strategy for UAE & KSA markets","Listing quality and content optimisation","Noon-specific keyword and SEO strategy","Performance metrics monitoring"] },
            { title: "Online Sales Growth", icon: LineChart, color: "from-emerald-500 to-teal-500", items: ["Multi-channel revenue architecture","Cross-platform catalog synchronisation","Conversion rate optimisation per channel","Pricing and margin management","Promotional strategy and deal management","Customer lifetime value optimisation","Revenue attribution across channels","GCC market consumer behaviour insights"] },
          ].map((card) => (
            <motion.div key={card.title} variants={fadeUp}
              className="card-hover glass rounded-2xl shadow-premium overflow-hidden">
              <div className={`h-1 bg-gradient-to-r ${card.color}`} />
              <div className="p-7">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${card.color} mb-5 shadow-lg`}>
                  <card.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-black text-white mb-5">{card.title}</h3>
                <ul className="space-y-2">
                  {card.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-slate-300 leading-5">
                      <ChevronRight className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <div className="section-divider" />

      {/* ── AI & TECH ── */}
      <Section id="ai" eyebrow="AI, automation & custom development"
        title="I build the tools others buy."
        subtitle="Custom dashboards, live API integrations, AI automation workflows and data pipelines — built from scratch, not from templates.">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {techStack.map((stack, i) => (
            <motion.div key={stack.category} variants={fadeUp} transition={{ delay: i * .06 }}
              className="card-hover glass rounded-2xl shadow-premium overflow-hidden">
              <div className={`h-1 bg-gradient-to-r ${stack.color}`} />
              <div className="p-6">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${stack.color} mb-4 shadow-lg`}>
                  <stack.icon className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-base font-black text-white mb-4">{stack.category}</h3>
                <ul className="space-y-2">
                  {stack.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-slate-300 leading-5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 flex-shrink-0 mt-0.5" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* AI capabilities deep dive */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          transition={{ duration: .65, delay: .1 }}
          className="mt-8 glass rounded-2xl p-8 shadow-premium md:p-10 noise-overlay relative">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <div className="pill mb-4"><Brain className="w-3.5 h-3.5" /> AI & Automation</div>
              <h3 className="text-3xl font-black text-white leading-tight">I automate the repetitive. I engineer the strategic.</h3>
              <p className="mt-5 leading-8 text-slate-300">
                From GPT-4 content pipelines to n8n automation workflows to custom API dashboards — I build systems that replace manual work, surface insights faster and give leadership real-time visibility without waiting for reports.
              </p>
            </div>
            <div className="grid gap-3">
              {[
                ["Custom Live Dashboards", "React dashboards pulling live data from Meta Ads API, GA4, Search Console, Amazon SP-API and Noon into a single unified view."],
                ["AI Content & Reporting", "GPT-4 and Claude API workflows for automated content generation, performance summaries and SEO content at scale."],
                ["n8n Automation Pipelines", "End-to-end automation for lead scoring, CRM updates, reporting triggers, Slack alerts and campaign performance monitoring."],
                ["API Integration Architecture", "Designed and built integrations connecting e-commerce platforms, ad channels, marketplaces and analytics into one operational layer."],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-xl border border-white/[.07] bg-white/[.03] p-5">
                  <p className="font-black text-white text-sm mb-1.5">{title}</p>
                  <p className="text-xs leading-5 text-slate-400">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Section>

      <div className="section-divider" />

      {/* ── SKILLS ── */}
      <Section id="skills" eyebrow="Core competencies"
        title="Six tracks. One revenue system."
        subtitle="Every track is backed by real results. Click 'All Skills' to expand the full stack.">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillTracks.map((t, i) => <SkillTrackCard key={t.track} {...t} index={i} />)}
        </motion.div>

        {/* revenue chain */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          transition={{ duration: .65, delay: .15 }}
          className="mt-8 glass rounded-2xl p-8 shadow-premium md:p-10">
          <div className="pill mb-6">Operating model</div>
          <h3 className="text-2xl font-black text-white mb-7">The full revenue chain I own and optimise</h3>
          <div className="grid gap-3 grid-cols-4 md:grid-cols-5 lg:grid-cols-10">
            {["Traffic","Lead","Behaviour","Conversion","Checkout","Payment","Marketplace","AI/Data","Retention","Infrastructure"].map((step, i) => (
              <div key={step} className="rounded-xl border border-white/[.07] bg-white/[.035] p-3 text-center">
                <div className="num-badge mx-auto mb-2">{i + 1}</div>
                <p className="text-[10px] font-bold text-white leading-tight">{step}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </Section>

      <div className="section-divider" />

      {/* ── PROOF ── */}
      <Section id="proof" eyebrow="Dashboard proof"
        title="Performance evidence — directly from the source."
        subtitle="Screenshots from GA4, Google Search Console, Core Web Vitals and Google Merchant Center.">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2">
          {proofImages.map((item) => <ProofCard key={item.title} item={item} />)}
        </motion.div>
      </Section>

      <div className="section-divider" />

      {/* ── EXPERIENCE ── */}
      <Section id="experience" eyebrow="Professional experience"
        title="Three companies. One consistent outcome."
        subtitle="4+ years of measurable growth across e-commerce, marketplace, paid acquisition, development and AI systems.">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid gap-6 lg:grid-cols-3">
          {experience.map((e, i) => <ExperienceCard key={e.company} {...e} index={i} />)}
        </motion.div>

        {/* value proposition for hiring managers */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          transition={{ duration: .65, delay: .1 }}
          className="mt-8 glass rounded-2xl p-8 shadow-premium md:p-10 noise-overlay relative">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div>
              <div className="pill mb-4"><Award className="w-3.5 h-3.5" /> Why hire me at manager level</div>
              <h3 className="text-2xl font-black text-white leading-tight mb-5">I don't manage one channel. I manage the entire revenue system.</h3>
              <p className="text-slate-300 leading-8">
                Most digital managers specialise in one or two areas. I operate end-to-end — strategy, execution, infrastructure and reporting — which means I replace 3–4 specialists with one senior hire who understands how every piece connects.
              </p>
            </div>
            <div className="grid gap-3">
              {[
                ["Cross-functional ownership", "Paid, organic, marketplace, dev and AI — all under one strategic owner."],
                ["Data-first decision making", "Every decision backed by live dashboards I build and own personally."],
                ["GCC market depth", "UAE, KSA and broader GCC consumer behaviour, platforms and dynamics."],
                ["AI-accelerated output", "I use AI to multiply team output without multiplying headcount."],
                ["Proven cost reduction", "62%+ CPR reduction and 35% ROI improvement across different companies."],
                ["Fast time to impact", "I identify the highest-leverage changes and execute them first."],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-xl border border-white/[.07] bg-white/[.03] p-4">
                  <p className="font-black text-white text-sm mb-1">{title}</p>
                  <p className="text-xs leading-5 text-slate-400">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Section>

      <div className="section-divider" />

      {/* ── CONTACT ── */}
      <Section id="contact" eyebrow="Let's talk"
        title="Open to senior e-commerce & growth leadership roles.">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          transition={{ duration: .65 }}
          className="glass rounded-2xl p-8 shadow-premium md:p-10 noise-overlay relative">
          <div className="grid gap-10 md:grid-cols-[1.2fr_.8fr]">
            <div>
              <p className="text-lg leading-8 text-slate-300 max-w-2xl">
                Based in Dubai, UAE. Open to Head of E-Commerce, Digital Growth Manager, Marketplace Director,
                Revenue Operations Lead and senior consulting roles across UAE and GCC.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Head of E-Commerce","Digital Growth Manager","Marketplace Director","Revenue Operations","Growth Consultant"].map((role) => (
                  <span key={role} className="skill-tag text-xs">{role}</span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="mailto:muhammedshabeel96@gmail.com" className="btn-primary px-6 py-3">
                  <Mail className="w-4 h-4" /> Email Me
                </a>
                <a href="tel:+971545232815" className="btn-outline px-6 py-3">
                  <Phone className="w-4 h-4" /> +971 54 523 2815
                </a>
                <a href="https://linkedin.com/in/muhammedshabeel" target="_blank" rel="noreferrer" className="btn-outline px-6 py-3">
                  <Globe2 className="w-4 h-4" /> LinkedIn
                </a>
              </div>
            </div>
            <div className="rounded-xl border border-white/[.08] bg-slate-950/60 p-6 flex items-start gap-5">
              <div className="profile-ring flex-shrink-0">
                <img
                  src={`${import.meta.env.BASE_URL}images/profile.png`}
                  alt="Muhammed Shabeel"
                  className="w-24 h-24 rounded-xl object-cover block"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
              </div>
              <div>
                <h3 className="text-xl font-black text-white">Muhammed Shabeel P.P</h3>
                <p className="text-sm text-violet-300 font-semibold mt-0.5">Senior Digital Growth & E-Commerce Leader</p>
                <div className="mt-4 space-y-2 text-sm text-slate-300">
                  <p className="flex items-center gap-2"><BriefcaseBusiness className="w-4 h-4 text-violet-400 flex-shrink-0" /> Emarath, Dubai UAE</p>
                  <p className="flex items-center gap-2"><Package className="w-4 h-4 text-violet-400 flex-shrink-0" /> Amazon · Noon · Shopify · WooCommerce</p>
                  <p className="flex items-center gap-2"><Brain className="w-4 h-4 text-violet-400 flex-shrink-0" /> AI · Custom Dashboards · API Integration</p>
                  <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-violet-400 flex-shrink-0" /> muhammedshabeel96@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

      <footer className="border-t border-white/[.07] px-5 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Muhammed Shabeel P.P · Dubai, UAE · Built with React + Vite
      </footer>
    </main>
  );
}
