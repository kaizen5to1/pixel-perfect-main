import { useEffect, useRef, useState, type ReactNode } from "react";
import { Menu as MenuIcon, X, Phone, MapPin, ExternalLink, Star, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { site, images, menu, menuCategories, menuCards, bakeryShowcase, gallery, realPhotos, type MenuCategory } from "@/data/site";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e?.isIntersecting && (setShown(true), io.disconnect()), { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} data-shown={shown} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function Btn({ href, children, variant = "solid", external }: { href: string; children: ReactNode; variant?: "solid" | "outline" | "light"; external?: boolean }) {
  const styles = {
    solid: "bg-accent text-accent-foreground hover:bg-espresso",
    outline: "border border-current hover:bg-foreground hover:text-background",
    light: "border border-ivory/60 text-ivory hover:bg-ivory hover:text-espresso",
  }[variant];
  return (
    <a href={href} {...(external ? ext : {})} className={`inline-flex min-h-12 items-center justify-center gap-2 px-6 text-sm font-semibold tracking-wide transition-colors duration-300 ${styles}`}>
      {children}
    </a>
  );
}

function Wordmark({ light }: { light?: boolean }) {
  return (
    <a href="#home" className={`flex flex-col leading-none ${light ? "text-ivory" : "text-foreground"}`} aria-label="Martabaan home">
      <span className="font-display text-2xl tracking-[0.18em]">MARTABAAN</span>
      <span className="eyebrow mt-1 text-[0.55rem] opacity-80">Restaurant & Bakery</span>
    </a>
  );
}

const nav = [
  ["Home", "#home"], ["Menu", "#menu"], ["Order", "#order"], ["Bakery", "#bakery"], ["Our Story", "#story"], ["Gallery", "#gallery"], ["Contact", "#contact"],
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    f(); window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  const light = !scrolled && !open;
  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${scrolled ? "border-b bg-background/95 backdrop-blur" : "bg-transparent"}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-10">
        <Wordmark light={light} />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {nav.map(([l, h]) => (
            <a key={h} href={h} className={`text-sm transition-opacity hover:opacity-60 ${light ? "text-ivory" : "text-foreground"}`}>{l}</a>
          ))}
          <Btn href={site.reserveUrl} external>Reserve a Table</Btn>
        </nav>
        <button className={`grid h-12 w-12 place-items-center lg:hidden ${light ? "text-ivory" : "text-foreground"}`} onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X /> : <MenuIcon />}
        </button>
      </div>
      {open && (
        <div className="border-t bg-background px-5 pb-8 lg:hidden">
          {nav.map(([l, h]) => (
            <a key={h} href={h} onClick={() => setOpen(false)} className="block border-b py-4 font-display text-2xl">{l}</a>
          ))}
          <div className="mt-6 grid gap-3">
            <Btn href={site.reserveUrl} external>Reserve a Table</Btn>
            <Btn href={site.phoneHref} variant="outline"><Phone className="h-4 w-4" /> {site.phoneDisplay}</Btn>
          </div>
        </div>
      )}
    </header>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-end overflow-hidden bg-espresso">
      <img src={images.hero} alt="North Indian dishes shared on a table" width={1920} height={1152} className="hero-zoom absolute inset-0 h-full w-full object-cover" />
      <div className="hero-scrim absolute inset-0" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-32 md:px-10 md:pb-24">
        <p className="fade-up eyebrow flex items-center gap-2 text-brass"><MapPin className="h-3.5 w-3.5" /> Sector 1 · Greater Noida</p>
        <p className="fade-up mt-6 font-hindi text-xl text-ivory/80" style={{ animationDelay: "120ms" }}>{site.hindiName}</p>
        <h1 className="fade-up mt-3 max-w-3xl text-5xl leading-[0.98] text-ivory sm:text-6xl md:text-8xl" style={{ animationDelay: "220ms" }}>
          A Little Tradition. <em className="text-brass">A Lot of Flavour.</em>
        </h1>
        <p className="fade-up mt-6 max-w-lg text-base leading-relaxed text-ivory/80 md:text-lg" style={{ animationDelay: "360ms" }}>
          From comforting Indian favourites to tempting snacks and bakery delights, discover food made for sharing.
        </p>
        <div className="fade-up mt-9 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "480ms" }}>
          <Btn href="#menu">Explore the Menu</Btn>
          <Btn href={site.reserveUrl} variant="light" external>Reserve a Table</Btn>
        </div>
      </div>
    </section>
  );
}

export function MenuSection() {
  const [cat, setCat] = useState<MenuCategory | "All">("All");
  const [menuCardIndex, setMenuCardIndex] = useState<number | null>(null);
  const items = cat === "All" ? menu : menu.filter((m) => m.category === cat);
  const selectedMenuCard = menuCardIndex === null ? undefined : menuCards[menuCardIndex];
  useEffect(() => {
    if (menuCardIndex === null) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuCardIndex(null);
      if (event.key === "ArrowRight") setMenuCardIndex((current) => current === null ? null : (current + 1) % menuCards.length);
      if (event.key === "ArrowLeft") setMenuCardIndex((current) => current === null ? null : (current - 1 + menuCards.length) % menuCards.length);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [menuCardIndex]);
  return (
    <section id="menu" className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
      <Reveal className="grid gap-6 md:grid-cols-[1fr_1fr] md:items-end">
        <div>
          <p className="eyebrow text-accent">The Menu</p>
          <h2 className="mt-4 text-4xl leading-tight md:text-6xl">Plates made <em>for sharing.</em></h2>
        </div>
        <p className="max-w-md text-muted-foreground md:justify-self-end">
          Every dish and price below comes directly from Martabaan's supplied menu cards.
        </p>
      </Reveal>
      <div className="mt-14 border-y py-12 md:py-16">
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow text-accent">Full Menu & Prices</p>
            <h3 className="mt-3 text-3xl md:text-5xl">Browse our menu cards.</h3>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">Select any card to read it at full size. Prices are shown exactly as provided by Martabaan.</p>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {menuCards.map((card, index) => (
            <Reveal key={card.title} delay={(index % 3) * 70}>
              <button type="button" onClick={() => setMenuCardIndex(index)} className="group block w-full text-left" aria-label={`Open ${card.title} menu card`}>
                <span className="block aspect-[1357/1920] overflow-hidden bg-muted">
                  <img src={card.src} alt={`${card.title} menu with prices`} loading="lazy" width={1357} height={1920} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
                </span>
                <span className="mt-3 flex items-center justify-between gap-3 font-display text-xl">
                  {card.title}<ArrowUpRight className="h-5 w-5 shrink-0 text-accent" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
      <div className="mt-12 flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Menu categories">
        {(["All", ...menuCategories] as const).map((c) => (
          <button key={c} role="tab" aria-selected={cat === c} onClick={() => setCat(c)}
            className={`min-h-11 shrink-0 border px-4 text-sm transition-colors ${cat === c ? "border-primary bg-primary text-primary-foreground" : "hover:border-foreground"}`}>
            {c}
          </button>
        ))}
      </div>
      <div className="mt-12 grid gap-x-12 md:grid-cols-2">
        {items.map((m, i) => (
          <Reveal key={`${m.category}-${m.name}`} delay={(i % 4) * 40}>
            <article className="flex min-h-20 items-center justify-between gap-5 border-b py-4">
              <div>
                <h3 className="font-display text-xl leading-snug md:text-2xl">{m.name}</h3>
                {cat === "All" && <p className="eyebrow mt-1 text-[0.55rem] text-accent">{m.category}</p>}
              </div>
              <span className="shrink-0 font-semibold text-accent">{m.price}</span>
            </article>
          </Reveal>
        ))}
      </div>
      <p className="mt-12 text-xs text-muted-foreground">Prices are transcribed from the supplied menu cards and may change at the restaurant.</p>
      {selectedMenuCard && menuCardIndex !== null && (
        <div role="dialog" aria-modal="true" aria-label={`${selectedMenuCard.title} menu card`} className="fixed inset-0 z-50 flex items-center justify-center bg-espresso/95 p-3 sm:p-6" onClick={() => setMenuCardIndex(null)}>
          <div className="flex max-h-[92vh] max-w-[min(92vw,720px)] flex-col items-center" onClick={(event) => event.stopPropagation()}>
            <p className="mb-3 font-display text-xl text-ivory sm:text-2xl">{selectedMenuCard.title}</p>
            <img src={selectedMenuCard.src} alt={`${selectedMenuCard.title} menu with prices`} className="min-h-0 max-h-[84vh] max-w-full object-contain" />
          </div>
          <button type="button" autoFocus onClick={() => setMenuCardIndex(null)} className="absolute right-3 top-3 grid h-12 w-12 place-items-center text-ivory sm:right-6 sm:top-6" aria-label="Close menu card"><X /></button>
          <button type="button" onClick={(event) => { event.stopPropagation(); setMenuCardIndex((menuCardIndex - 1 + menuCards.length) % menuCards.length); }} className="absolute left-1 grid h-12 w-12 place-items-center bg-espresso/70 text-ivory sm:left-4" aria-label="Previous menu card"><ChevronLeft /></button>
          <button type="button" onClick={(event) => { event.stopPropagation(); setMenuCardIndex((menuCardIndex + 1) % menuCards.length); }} className="absolute right-1 grid h-12 w-12 place-items-center bg-espresso/70 text-ivory sm:right-4" aria-label="Next menu card"><ChevronRight /></button>
        </div>
      )}
    </section>
  );
}

export function OrderSection() {
  const { zomatoUrl, swiggyUrl } = site.ordering;
  const card = "group flex flex-col justify-between border border-ivory/20 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brass md:p-10";
  return (
    <section id="order" className="bg-olive-deep text-ivory">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-brass">Order Your Favourites</p>
          <h2 className="mt-4 text-4xl md:text-6xl">Your Cravings. <em>Your Way.</em></h2>
          <p className="mt-6 text-ivory/75">Enjoy your Martabaan favourites wherever you are. Call us directly or order online through your preferred food delivery platform.</p>
        </Reveal>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          <div className={`${card} bg-ivory/5`}>
            <div>
              <Phone className="h-7 w-7 text-brass" />
              <h3 className="mt-6 text-3xl">Order by Phone</h3>
              <p className="mt-3 font-display text-2xl text-brass">{site.phoneDisplay}</p>
            </div>
            <a href={site.phoneHref} className="mt-10 inline-flex min-h-14 items-center justify-center gap-2 bg-accent font-semibold text-accent-foreground transition-colors hover:bg-ivory hover:text-espresso">Call to Order</a>
          </div>
          <div className={card}>
            <div>
              <p className="font-sans text-3xl font-extrabold lowercase tracking-tight text-terracotta">zomato</p>
              <h3 className="mt-6 text-3xl">Order on Zomato</h3>
              <p className="mt-3 text-sm text-ivory/70">{zomatoUrl ? "Delivery through Zomato." : "Our Zomato ordering page is being confirmed. Please call us to order in the meantime."}</p>
            </div>
            {zomatoUrl ? (
              <a href={zomatoUrl} {...ext} className="mt-10 inline-flex min-h-14 items-center justify-center gap-2 border border-ivory font-semibold transition-colors hover:bg-ivory hover:text-espresso">Order on Zomato <ArrowUpRight className="h-4 w-4" /></a>
            ) : (
              <a href={site.phoneHref} className="mt-10 inline-flex min-h-14 items-center justify-center gap-2 border border-ivory/40 font-semibold transition-colors hover:bg-ivory hover:text-espresso">Call instead</a>
            )}
          </div>
          <div className={card}>
            <div>
              <p className="font-sans text-3xl font-extrabold tracking-tight text-terracotta">Swiggy</p>
              <h3 className="mt-6 text-3xl">Order on Swiggy</h3>
              <p className="mt-3 text-sm text-ivory/70">Opens Swiggy in a new tab. Your order is placed and paid on Swiggy, not on this website.</p>
            </div>
            {swiggyUrl ? (
              <a href={swiggyUrl} {...ext} className="mt-10 inline-flex min-h-14 items-center justify-center gap-2 border border-ivory font-semibold transition-colors hover:bg-ivory hover:text-espresso">Order on Swiggy <ArrowUpRight className="h-4 w-4" /></a>
            ) : (
              <a href={site.phoneHref} className="mt-10 inline-flex min-h-14 items-center justify-center border border-ivory/40 font-semibold">Call instead</a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Bakery() {
  return (
    <section id="bakery" className="bg-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-12 md:px-10 md:py-32">
        <Reveal className="md:col-span-5 md:pt-10">
          <p className="eyebrow text-accent">The Bakery</p>
          <h2 className="mt-4 text-4xl leading-tight md:text-6xl">A Little Sweetness <em className="text-accent">Goes a Long Way.</em></h2>
          <p className="mt-6 max-w-md text-muted-foreground">Freshly baked treats to finish a meal or carry home. Ask us what's on the counter today.</p>
          <div className="mt-8"><Btn href={site.phoneHref} variant="outline"><Phone className="h-4 w-4" /> Bakery enquiries</Btn></div>
        </Reveal>
        <Reveal className="md:col-span-7" delay={120}>
          <img src={images.bakery} alt="Croissants, bread, cake and tarts" loading="lazy" className="aspect-[5/4] w-full object-cover" />
        </Reveal>
        <div className="grid gap-8 sm:grid-cols-3 md:col-span-12">
          {bakeryShowcase.map((b, i) => (
            <Reveal key={b.name} delay={i * 100}>
              <h3 className="border-t border-espresso/30 pt-4 text-2xl">{b.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{b.note}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Story() {
  return (
    <section id="story" className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 md:grid-cols-12 md:px-10 md:py-32">
      <Reveal className="md:col-span-6">
        <img src={realPhotos[1]!.src} alt={realPhotos[1]!.alt} loading="lazy" className="aspect-[4/5] w-full object-cover" />
        <p className="mt-2 text-xs text-muted-foreground">Inside Martabaan</p>
      </Reveal>
      <Reveal className="md:col-span-5 md:col-start-8" delay={120}>
        <p className="eyebrow text-accent">Our Story</p>
        <h2 className="mt-4 text-4xl leading-tight md:text-6xl">Good Food. Warm Moments. <em>Together.</em></h2>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          A <em>martabaan</em> is the jar that keeps a family's flavours safe — pickles, preserves, recipes passed along. We built our table around that idea: familiar food, generous portions, and room for everyone.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">Come for a quick bite, stay for dal and conversation, and leave with something sweet from the bakery.</p>
      </Reveal>
    </section>
  );
}

export function Gallery() {
  const all = [...realPhotos.map((p) => ({ ...p, real: true })), ...gallery.map((g) => ({ ...g, real: false }))];
  const [idx, setIdx] = useState<number | null>(null);
  useEffect(() => {
    if (idx === null) return;
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIdx(null);
      if (e.key === "ArrowRight") setIdx((i) => (i! + 1) % all.length);
      if (e.key === "ArrowLeft") setIdx((i) => (i! - 1 + all.length) % all.length);
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [idx, all.length]);
  return (
    <section id="gallery" className="bg-espresso text-ivory">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
        <Reveal>
          <p className="eyebrow text-brass">Gallery</p>
          <h2 className="mt-4 text-4xl md:text-6xl">At the <em>table.</em></h2>
          <p className="mt-4 max-w-lg text-sm text-ivory/60">Photos marked "Martabaan" are of the restaurant, from its public listing. Others are illustrative.</p>
        </Reveal>
        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {all.map((g, i) => (
            <button key={i} onClick={() => setIdx(i)} className="group relative mb-4 block w-full overflow-hidden" aria-label={`View ${g.alt}`}>
              <img src={g.src} alt={g.alt} loading="lazy" width={g.w} height={g.h} className="w-full transition-transform duration-700 group-hover:scale-105" />
              <span className="eyebrow absolute bottom-0 left-0 bg-espresso/80 px-3 py-2 text-[0.6rem]">{g.real ? g.tag : `${g.tag} · Illustrative`}</span>
            </button>
          ))}
        </div>
      </div>
      {idx !== null && (
        <div role="dialog" aria-modal="true" aria-label="Image viewer" className="fixed inset-0 z-50 flex items-center justify-center bg-espresso/95 p-4" onClick={() => setIdx(null)}>
          <img src={all[idx]!.src} alt={all[idx]!.alt} className="max-h-[85vh] max-w-full object-contain" onClick={(e) => e.stopPropagation()} />
          <button autoFocus onClick={() => setIdx(null)} className="absolute right-4 top-4 grid h-12 w-12 place-items-center" aria-label="Close"><X /></button>
          <button onClick={(e) => { e.stopPropagation(); setIdx((idx - 1 + all.length) % all.length); }} className="absolute left-2 grid h-12 w-12 place-items-center" aria-label="Previous"><ChevronLeft /></button>
          <button onClick={(e) => { e.stopPropagation(); setIdx((idx + 1) % all.length); }} className="absolute right-2 grid h-12 w-12 place-items-center" aria-label="Next"><ChevronRight /></button>
        </div>
      )}
    </section>
  );
}

export function Reviews() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-10">
      <Reveal className="grid gap-10 border-y py-14 md:grid-cols-[auto_1fr_auto] md:items-center">
        <p className="font-display text-8xl leading-none text-primary">{site.rating.value}</p>
        <div>
          <div className="flex gap-1 text-accent" aria-label={`${site.rating.value} out of 5`}>
            {[0, 1, 2, 3].map((i) => <Star key={i} className="h-5 w-5 fill-current" />)}<Star className="h-5 w-5" />
          </div>
          <p className="mt-3 font-display text-2xl">Rated {site.rating.value}/5 from {site.rating.count} reviews</p>
          <p className="mt-1 text-sm text-muted-foreground">As reported on our public listing. Read every review there.</p>
        </div>
        <Btn href={site.swiggyDineoutUrl} variant="outline" external>Read reviews <ExternalLink className="h-4 w-4" /></Btn>
      </Reveal>
    </section>
  );
}

export function Contact() {
  const a = site.address;
  return (
    <section id="contact" className="bg-olive text-ivory">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-2 md:px-10 md:py-32">
        <Reveal>
          <p className="eyebrow text-brass">Visit & Reserve</p>
          <h2 className="mt-4 text-4xl md:text-6xl">Find your <em>seat.</em></h2>
          <address className="mt-8 not-italic leading-relaxed text-ivory/85">
            {site.name}<br />{a.line1}<br />{a.line2}<br />{a.city}, {a.region} {a.postalCode}
          </address>
          <a href={site.phoneHref} className="mt-6 block font-display text-3xl hover:text-brass">{site.phoneDisplay}</a>
          <div className="mt-8 border-t border-ivory/20 pt-6">
            <p className="eyebrow text-brass">Opening hours</p>
            {site.hours.rows.map((r) => (
              <p key={r.days} className="mt-2 flex justify-between gap-4 text-sm"><span>{r.days}</span><span>{r.time}</span></p>
            ))}
            {!site.hours.verified && <p className="mt-2 text-xs text-ivory/60">Hours are being confirmed — please call before visiting.</p>}
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Btn href={site.reserveUrl} external>Reserve a Table</Btn>
            <Btn href={site.directionsUrl} variant="light" external><MapPin className="h-4 w-4" /> Get Directions</Btn>
            <Btn href={site.swiggyDineoutUrl} variant="light" external>Swiggy Dineout</Btn>
          </div>
          <p className="mt-4 text-xs text-ivory/60">Reservations are handled on Google; your booking is confirmed there, not on this site.</p>
        </Reveal>
        <Reveal delay={120} className="min-h-[360px]">
          <iframe title="Map to Martabaan Restaurant & Bakery" src={site.mapEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-full min-h-[360px] w-full border-0 grayscale-[40%]" />
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-espresso text-ivory">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-12 md:flex-row md:items-end md:justify-between md:px-10">
        <div>
          <Wordmark light />
          <p className="mt-3 font-hindi text-ivory/70">{site.hindiName}</p>
        </div>
        <div className="flex flex-col items-start gap-2 md:items-end">
          <p className="text-xs text-ivory/50">© {new Date().getFullYear()} {site.name} · Greater Noida</p>
          <p className="text-xs text-ivory/50">
            Website made by <span className="text-ivory/80">Ishaan Sareen</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
