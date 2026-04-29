import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  Globe2,
  Mail,
  Megaphone,
  MessageCircle,
  MonitorCog,
  Network,
  Phone,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Target,
  TrendingDown,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

const metrics = [
  { value: "99K", label: "GA4 active users", detail: "Last 90 days" },
  { value: "< AED 1.5", label: "Meta WhatsApp CPR", detail: "Reduced from AED 4" },
  { value: "202K", label: "Organic impressions", detail: "Search Console, 3 months" },
  { value: "1.94K", label: "Merchant products", detail: "Catalog operations" },
  { value: "AED 26K", label: "Tracked revenue", detail: "GA4 purchase revenue snapshot" },
  { value: "0", label: "Poor Core Web Vitals URLs", detail: "Technical SEO health" },
];

const proofImages = [
  {
    src: "/images/ga4-engagement.png",
    title: "GA4 Engagement & Retention",
    stat: "99K active users",
    copy: "Managed a high-volume traffic pipeline and used engagement data to identify stronger retention and conversion opportunities."
  },
  {
    src: "/images/ga4-revenue.png",
    title: "GA4 E-commerce Revenue",
    stat: "AED 26K revenue",
    copy: "Tracked revenue, ARPPU, purchases, add-to-cart behavior and product-level performance inside GA4."
  },
  {
    src: "/images/search-console-performance.png",
    title: "Search Console Performance",
    stat: "202K impressions",
    copy: "Managed organic visibility with 4.86K clicks, 2.4% CTR and 9.5 average position over 3 months."
  },
  {
    src: "/images/core-web-vitals.png",
    title: "Core Web Vitals",
    stat: "0 poor URLs",
    copy: "Protected technical SEO health with 215 good desktop URLs and zero poor URL issues."
  },
  {
    src: "/images/merchant-listings.png",
    title: "Merchant Listings",
    stat: "272 valid listings",
    copy: "Maintained merchant listing health with 0 critical issues and strong shopping visibility signals."
  },
  {
    src: "/images/merchant-quality.png",
    title: "Merchant Store Quality",
    stat: "Great rating",
    copy: "Maintained a Google Merchant Store Quality rating of Great, well above average in the UAE market."
  }
];

const capabilities = [
  ["Paid Growth", "Meta Ads WhatsApp campaigns, CPR optimization, Google Ads, creative and targeting efficiency", Megaphone],
  ["Analytics", "GA4 reporting, Google Tag Manager, event tracking, funnel and behavior analysis", BarChart3],
  ["SEO", "Search Console, CTR analysis, Core Web Vitals and technical SEO health", Search],
  ["Merchant Center", "Product feed health, store quality, listings, approvals and catalog operations", ShoppingBag],
  ["E-commerce Systems", "WooCommerce, Shopify, checkout optimization, payment reliability and conversion flow", Network],
  ["Infrastructure", "Linux, VPS, GCP, Apache, Nginx, PHP, MySQL, SSL and hosting control", MonitorCog],
];

function Section({ id, eyebrow, title, subtitle, children }) {
  return (
    <section id={id} className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="mb-12 max-w-4xl"
      >
        {eyebrow && <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-cyan-300">{eyebrow}</p>}
        <h2 className="font-display text-4xl font-black tracking-tight text-white md:text-6xl">{title}</h2>
        {subtitle && <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{subtitle}</p>}
      </motion.div>
      {children}
    </section>
  );
}

function StatCard({ value, label, detail }) {
  return (
    <motion.div variants={fadeUp} className="card-hover glass rounded-3xl p-6 shadow-premium">
      <p className="font-display text-3xl font-black text-white md:text-4xl">{value}</p>
      <p className="mt-2 text-sm font-bold text-slate-200">{label}</p>
      <p className="mt-1 text-xs leading-5 text-slate-400">{detail}</p>
    </motion.div>
  );
}

function ProofCard({ item }) {
  return (
    <motion.article variants={fadeUp} className="card-hover glass image-frame overflow-hidden rounded-[2rem] shadow-premium">
      <div className="relative min-h-60 bg-slate-950">
        <img
          src={item.src}
          alt={item.title}
          className="h-full min-h-60 w-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.currentTarget.nextSibling.style.display = "flex";
          }}
        />
        <div className="hidden min-h-60 items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 p-8 text-center">
          <div>
            <BarChart3 className="mx-auto h-12 w-12 text-cyan-300" />
            <p className="mt-4 text-sm font-bold uppercase tracking-widest text-slate-400">Screenshot placeholder</p>
            <p className="mt-2 text-xl font-black text-white">{item.title}</p>
          </div>
        </div>
        <div className="absolute left-5 top-5 rounded-full bg-black/65 px-4 py-2 text-sm font-black text-cyan-200 backdrop-blur">
          {item.stat}
        </div>
      </div>
      <div className="p-7">
        <h3 className="text-2xl font-black text-white">{item.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-300">{item.copy}</p>
      </div>
    </motion.article>
  );
}

function Capability({ title, copy, Icon }) {
  return (
    <motion.div variants={fadeUp} className="card-hover glass rounded-3xl p-7 shadow-premium">
      <Icon className="h-8 w-8 text-cyan-300" />
      <h3 className="mt-5 text-xl font-black text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{copy}</p>
    </motion.div>
  );
}

function TimelineItem({ year, company, role, bullets }) {
  return (
    <motion.div variants={fadeUp} className="relative border-l border-white/10 pl-8">
      <div className="absolute -left-2 top-1 h-4 w-4 rounded-full bg-cyan-300 shadow-glow" />
      <p className="text-sm font-black uppercase tracking-[.22em] text-cyan-300">{year}</p>
      <h3 className="mt-2 text-2xl font-black text-white">{company}</h3>
      <p className="mt-1 text-slate-300">{role}</p>
      <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
        {bullets.map((b) => <li key={b}>• {b}</li>)}
      </ul>
    </motion.div>
  );
}

export default function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
      <div className="fixed inset-0 -z-10 grid-bg opacity-50" />
      <div className="fixed left-[-8rem] top-[-8rem] -z-10 h-[32rem] w-[32rem] animate-slow-pulse rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="fixed right-[-8rem] top-[8rem] -z-10 h-[30rem] w-[30rem] animate-float rounded-full bg-indigo-600/20 blur-[125px]" />
      <div className="fixed bottom-[-10rem] left-[35%] -z-10 h-[30rem] w-[30rem] rounded-full bg-fuchsia-500/10 blur-[140px]" />

      <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-slate-950/65 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#" className="font-display text-lg font-black">Shabeel<span className="text-cyan-300">.</span></a>
          <div className="hidden items-center gap-8 text-sm font-semibold text-slate-300 md:flex">
            <a href="#case" className="hover:text-white">Case Study</a>
            <a href="#proof" className="hover:text-white">Proof</a>
            <a href="#capabilities" className="hover:text-white">Capabilities</a>
            <a href="#experience" className="hover:text-white">Experience</a>
          </div>
          <a href="#contact" className="rounded-full bg-white px-5 py-2 text-sm font-black text-slate-950 transition hover:bg-cyan-200">
            Hire / Contact
          </a>
        </div>
      </nav>

      <header className="relative mx-auto grid max-w-7xl gap-14 px-6 pb-20 pt-32 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:pt-40">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-200">
            <Sparkles className="h-4 w-4" />
            Digital Growth & Systems Architect
          </div>
          <h1 className="font-display text-5xl font-black leading-[0.96] tracking-tight md:text-7xl">
            I engineer digital growth systems that turn <span className="text-gradient">traffic into predictable revenue.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            Current Digital Growth Manager at Emarath. I operate across paid acquisition, Meta WhatsApp lead generation,
            SEO, GA4 analytics, Google Merchant Center, e-commerce conversion, payments, CRM automation and infrastructure.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#case" className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-7 py-4 font-black text-slate-950 transition hover:bg-cyan-200">
              View Emarath Case Study <ArrowRight className="h-5 w-5" />
            </a>
            <a href="mailto:muhammedshabeel96@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 font-black text-white transition hover:bg-white/10">
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: .8, delay: .15 }}
          className="glass relative rounded-[2rem] p-5 shadow-glow"
        >
          <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/90 p-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-sm text-slate-400">Emarath Growth System</p>
                <p className="mt-1 font-display text-2xl font-black">Performance Control Room</p>
              </div>
              <div className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">Optimized</div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-4">
              {[
                ["Meta Leads", "AED 4 → <1.5 CPR", Megaphone],
                ["Organic Search", "202K impressions", Search],
                ["Merchant Health", "Great rating", ShoppingBag],
                ["Tech SEO", "0 poor URLs", ShieldCheck],
              ].map(([a, b, Icon]) => (
                <div key={a} className="rounded-2xl border border-white/10 bg-white/[.04] p-4">
                  <Icon className="h-6 w-6 text-cyan-300" />
                  <p className="mt-4 text-sm text-slate-400">{a}</p>
                  <p className="mt-1 text-lg font-black text-white">{b}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl border border-white/10 bg-white/[.04] p-5">
              <div className="mb-4 flex items-end justify-between">
                <div>
                  <p className="text-sm text-slate-400">Lead Cost Optimization</p>
                  <p className="font-display text-3xl font-black text-white">75%+ CPR Reduction</p>
                </div>
                <TrendingDown className="h-8 w-8 text-emerald-300" />
              </div>
              <div className="flex items-end gap-3">
                <div className="flex-1">
                  <div className="h-28 rounded-t-2xl bg-red-400/55" />
                  <p className="mt-2 text-center text-xs text-slate-400">Before</p>
                  <p className="text-center font-black">AED 4</p>
                </div>
                <div className="flex-1">
                  <div className="h-8 rounded-t-2xl bg-emerald-300/80" />
                  <p className="mt-2 text-center text-xs text-slate-400">After</p>
                  <p className="text-center font-black">&lt; AED 1.5</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </header>

      <Section id="metrics" eyebrow="Verified performance signals" title="Real numbers. Real systems. Real commercial impact." subtitle="The portfolio is built around Emarath’s current performance surfaces: paid leads, GA4 commerce, SEO visibility, Merchant Center, catalog health and technical performance.">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ staggerChildren: .06 }} className="grid gap-5 md:grid-cols-3 lg:grid-cols-6">
          {metrics.map((m) => <StatCard key={m.label} {...m} />)}
        </motion.div>
      </Section>

      <Section id="case" eyebrow="Current role case study" title="Emarath — scaling acquisition, conversion, catalog and revenue systems." subtitle="I own work across the full digital revenue lifecycle: traffic acquisition, WhatsApp lead generation, SEO performance, commerce tracking, product visibility, merchant quality and technical infrastructure.">
        <div className="grid gap-6 lg:grid-cols-4">
          {[
            ["Meta Lead Generation", "AED 4 → < AED 1.5 CPR", "Optimized WhatsApp lead generation campaigns by improving targeting, creative direction, funnel intent and lead quality.", Megaphone],
            ["GA4 Commerce", "99K users / AED 26K revenue", "Tracked active users, new users, add-to-carts, purchases, ARPPU and revenue behavior through GA4.", BarChart3],
            ["SEO Visibility", "202K impressions", "Managed organic performance with 4.86K clicks, 2.4% CTR and 9.5 average position over 3 months.", Search],
            ["Merchant Center", "1.94K products", "Managed product feed health, approvals, listings and store quality signals across Google Merchant Center.", ShoppingBag],
          ].map(([title, metric, copy, Icon]) => (
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} key={title} className="card-hover glass rounded-3xl p-7 shadow-premium">
              <Icon className="h-8 w-8 text-cyan-300" />
              <p className="mt-5 text-xs font-black uppercase tracking-[.22em] text-slate-400">{title}</p>
              <h3 className="mt-2 font-display text-3xl font-black text-white">{metric}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{copy}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 glass rounded-[2rem] p-8 shadow-premium md:p-10">
          <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[.3em] text-cyan-300">Positive impact</p>
              <h3 className="mt-4 text-3xl font-black text-white md:text-4xl">Driving measurable growth across paid acquisition, SEO and e-commerce performance systems.</h3>
              <p className="mt-5 leading-8 text-slate-300">
                Emarath’s digital ecosystem spans paid lead generation, organic search, product visibility and e-commerce performance. My role focuses on eliminating inefficiencies, reducing acquisition costs and improving conversion performance across the entire funnel.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "Reduced Meta WhatsApp lead acquisition cost from AED 6 to below AED 1.5.",
                "Managed and analyzed 99K active users and 99K new users through GA4.",
                "Tracked 816 add-to-cart events, 169 purchases and AED 26K revenue.",
                "Maintained 215 good Core Web Vitals desktop URLs with zero poor URLs.",
                "Managed a 1.94K product catalog with 1.73K approved listings.",
                "Sustained a Great Google Merchant Store Quality rating.",
                "Delivered 202K organic impressions and 4.86K clicks across 3 months.",
                "Maintained 272 valid merchant listings with zero critical errors."
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[.04] p-5 text-sm leading-6 text-slate-300">
                  <CheckCircle2 className="mb-3 h-5 w-5 text-cyan-300" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="proof" eyebrow="Dashboard proof" title="Performance evidence from Emarath systems." subtitle="Visual proof assets from GA4, Google Search Console, Core Web Vitals and Google Merchant Center.">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ staggerChildren: .08 }} className="grid gap-6 md:grid-cols-2">
          {proofImages.map((item) => <ProofCard key={item.title} item={item} />)}
        </motion.div>
      </Section>

      <Section id="leadgen" eyebrow="Meta Ads lead generation" title="Scaling paid acquisition efficiency through Meta Ads and WhatsApp lead generation." subtitle="Reduced WhatsApp lead acquisition cost from AED 6 to below AED 1.5 by optimizing audience targeting, creative strategy and funnel alignment.">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="glass rounded-[2rem] p-8 shadow-premium lg:col-span-2">
            <div className="grid gap-6 md:grid-cols-3">
              <StatCard value="AED 4" label="Previous CPR" detail="WhatsApp lead baseline" />
              <StatCard value="< AED 1.5" label="Optimized CPR" detail="After campaign optimization" />
              <StatCard value="75%+" label="Cost reduction" detail="Efficiency gain" />
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                "Refined audience targeting toward higher-intent prospects.",
                "Improved creative hooks and ad messaging for WhatsApp action.",
                "Aligned campaign promise with WhatsApp conversation intent.",
                "Monitored CPR, lead quality and campaign signals continuously.",
                "Reduced wasted spend and improved lead acquisition efficiency.",
                "Built a stronger paid social lead generation engine for Emarath."
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[.04] p-5 text-sm leading-6 text-slate-300">
                  <Target className="mb-3 h-5 w-5 text-cyan-300" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="glass rounded-[2rem] p-8 shadow-premium">
            <p className="text-sm font-black uppercase tracking-[.25em] text-cyan-300">Interview-ready story</p>
            <h3 className="mt-4 text-3xl font-black text-white">From costly leads to efficient demand capture.</h3>
            <p className="mt-5 leading-8 text-slate-300">
              Earlier campaigns generated WhatsApp leads at around AED 4 CPR. I optimized campaign structure, targeting and messaging until CPR dropped below AED 1.5. That is a serious efficiency gain—not a cosmetic improvement.
            </p>
          </div>
        </div>
      </Section>

      <Section id="capabilities" eyebrow="Capabilities" title="Core capabilities across growth, performance and technical systems.">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ staggerChildren: .08 }} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(([title, copy, Icon]) => <Capability key={title} title={title} copy={copy} Icon={Icon} />)}
        </motion.div>
      </Section>

      <Section id="system" eyebrow="Operating model" title="The revenue chain I optimize." subtitle="Most professionals focus on isolated tools. My approach focuses on the full business system those tools serve.">
        <div className="glass rounded-[2rem] p-8 shadow-premium md:p-10">
          <div className="grid gap-4 md:grid-cols-8">
            {["Traffic", "Lead", "Behavior", "Conversion", "Checkout", "Payment", "Retention", "Infrastructure"].map((step, i) => (
              <div key={step} className="rounded-2xl border border-white/10 bg-white/[.04] p-5 text-center">
                <p className="mx-auto mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-cyan-300 text-sm font-black text-slate-950">{i + 1}</p>
                <p className="font-bold text-white">{step}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-4xl text-lg leading-8 text-slate-300">
            I do not just increase traffic. I reduce lead cost, strengthen organic visibility, improve catalog health, track user behavior, remove conversion friction, stabilize payments and protect performance.
          </p>
        </div>
      </Section>

      <Section id="experience" eyebrow="Experience" title="Professional experience.">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ staggerChildren: .08 }} className="grid gap-10 lg:grid-cols-3">
          <TimelineItem year="2025 — Present" company="Emarath" role="E-Commerce & Digital Growth Manager" bullets={[
            "Optimized Meta WhatsApp lead generation CPR from AED 4 to below AED 1.5.",
            "Managed GA4 reporting across 99K active users, revenue, purchase and add-to-cart events.",
            "Monitored SEO performance across 202K impressions, 4.86K clicks, 2.4% CTR and 9.5 average position.",
            "Maintained Core Web Vitals health with 215 good desktop URLs and 0 poor URLs.",
            "Managed Google Merchant Center operations across 1.94K products and Great store quality rating.",
            "Led conversion, checkout, analytics, payment, logistics and catalog optimization."
          ]} />
          <TimelineItem year="2024 — 2025" company="BOSQ Ergonomic Living" role="E-Commerce & Digital Marketing Manager" bullets={[
  "Increased ROI by 35% through performance marketing and funnel optimization.",
  "Built full-funnel system architecture (paid ads → landing pages → CRM → conversion).",
  "Designed high-converting landing pages aligned with paid traffic intent.",
  "Managed Meta Ads and Google Ads campaigns with performance-focused optimization.",
  "Implemented GA4, tracking pixels, and conversion events for accurate performance analysis.",
  "Automated lead handling and customer journey workflows to improve conversion efficiency."
]} />
         <TimelineItem year="2021 — 2024" company="NAVO Ergonomics" role="Web Developer & Systems Engineer" bullets={[
  "Built and optimized WooCommerce and Shopify e-commerce platforms.",
  "Integrated payment gateways (Stripe, PayPal, Network N-Genius, CyberSource, Telr) enabling full transaction flows.",
  "Implemented analytics tracking and conversion measurement systems across user journeys.",
  "Managed VPS infrastructure (Apache, Nginx, PHP, MySQL) ensuring performance and reliability.",
  "Connected websites with CRM, marketing automation and lead management systems."
]} />
        </motion.div>
      </Section>

      <Section id="contact" eyebrow="Contact" title="Open to senior digital growth and e-commerce leadership opportunities.">
        <div className="glass grid gap-8 rounded-[2rem] p-8 shadow-premium md:grid-cols-[1fr_.8fr] md:p-10">
          <div>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              I am based in Dubai and open to senior digital growth, e-commerce leadership, paid acquisition, revenue operations, systems architecture and high-impact consulting opportunities.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="mailto:muhammedshabeel96@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-black text-slate-950 transition hover:bg-cyan-200"><Mail className="h-5 w-5" /> Email</a>
              <a href="tel:+971545232815" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-black text-white transition hover:bg-white/10"><Phone className="h-5 w-5" /> Call</a>
              <a href="https://linkedin.com/in/muhammedshabeel" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-black text-white transition hover:bg-white/10"><Globe2 className="h-5 w-5" /> LinkedIn</a>
            </div>
          </div>
          <div className="relative bg-[#020617] border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row items-center md:items-start gap-6">

  {/* PROFILE IMAGE */}
  <div className="w-28 h-28 md:w-32 md:h-32 flex-shrink-0">
    <img
      src={`${import.meta.env.BASE_URL}images/profile.png`}
      alt="Muhammed Shabeel"
      className="w-full h-full object-cover rounded-xl border border-white/10 shadow-lg"
    />
  </div>

  {/* INFO */}
  <div className="text-center md:text-left">
    <h3 className="text-xl font-bold">Muhammed Shabeel P.P</h3>
    <p className="text-cyan-300 text-sm mb-3">Digital Growth & Systems Architect</p>

    <div className="space-y-2 text-sm text-slate-300">
      <p>📍 Dubai, UAE</p>
      <p>📧 muhammedshabeel96@gmail.com</p>
      <p>📞 +971 54 523 2815</p>
      <p>🏢 Current: Emarath, UAE</p>
    </div>
  </div>

</div>
        </div>
      </Section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Muhammed Shabeel P.P. Designed & built by Muhammed Shabeel P.P
      </footer>
    </main>
  );
}
