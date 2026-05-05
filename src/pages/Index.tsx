import heroImg from "@/assets/hero.jpg";
import room1 from "@/assets/room-1.jpg";
import room2 from "@/assets/room-2.jpg";
import room3 from "@/assets/room-3.jpg";
import room4 from "@/assets/room-4.jpg";
import { Button } from "@/components/ui/button";
import { Wifi, Car, Coffee, ShieldCheck, Sparkles, Tv, Instagram, MapPin, Phone, Mail } from "lucide-react";

const amenities = [
  { icon: Wifi, label: "High-Speed Wi-Fi" },
  { icon: ShieldCheck, label: "24/7 Security" },
  { icon: Car, label: "Private Parking" },
  { icon: Coffee, label: "Espresso Bar" },
  { icon: Tv, label: "Smart Entertainment" },
  { icon: Sparkles, label: "Daily Housekeeping" },
];

const apartments = [
  { img: room1, name: "The Royal Suite", desc: "King bed · City view · 65m²", price: "₦95,000" },
  { img: room2, name: "The Grand Lounge", desc: "Open-plan living · 2 BR · 110m²", price: "₦150,000" },
  { img: room3, name: "The Marble Retreat", desc: "Spa bath · 1 BR · 70m²", price: "₦110,000" },
  { img: room4, name: "The Chef's Residence", desc: "Gourmet kitchen · 2 BR · 120m²", price: "₦170,000" },
];

const testimonials = [
  { quote: "Effortlessly elegant. The attention to detail rivals any five-star hotel I've stayed in.", name: "Adaeze O.", role: "Lagos" },
  { quote: "A discreet sanctuary in the middle of Surulere. We'll be back every visit.", name: "Marcus & Lara", role: "London" },
  { quote: "The space, the service, the styling — Duchess sets the standard.", name: "Tunde A.", role: "Abuja" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/40 border-b border-border/40">
        <nav className="container flex items-center justify-between h-16">
          <a href="#" className="flex items-baseline gap-2">
            <span className="font-serif text-2xl text-gold">Duchess</span>
            <span className="text-[10px] tracking-luxe uppercase text-muted-foreground">Surulere</span>
          </a>
          <div className="hidden md:flex gap-10 text-xs tracking-luxe uppercase text-muted-foreground">
            <a href="#residences" className="hover:text-gold transition-colors">Residences</a>
            <a href="#amenities" className="hover:text-gold transition-colors">Amenities</a>
            <a href="#gallery" className="hover:text-gold transition-colors">Gallery</a>
            <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
          </div>
          <Button variant="gold" size="sm" asChild>
            <a href="#contact">Reserve</a>
          </Button>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Luxury Duchess Apartments interior overlooking Lagos at dusk"
          width={1920}
          height={1280}
          className="absolute inset-0 w-full h-full object-cover ken-burns"
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative z-10 h-full container flex flex-col justify-end pb-24">
          <div className="max-w-3xl fade-up">
            <p className="text-xs tracking-luxe uppercase text-gold mb-6">Surulere · Lagos</p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-8">
              A residence,<br />refined.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mb-10">
              Duchess Apartments offers a private collection of fully-serviced luxury short-stays — designed for those who travel with intention.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="gold" size="lg" asChild>
                <a href="#residences">Explore Residences</a>
              </Button>
              <Button variant="outlineGold" size="lg" asChild>
                <a href="#contact">Plan Your Stay</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="container py-32 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5">
          <p className="text-xs tracking-luxe uppercase text-gold mb-4">The Duchess Standard</p>
          <h2 className="text-4xl md:text-5xl leading-tight">Quiet luxury, in the heart of Lagos.</h2>
        </div>
        <div className="md:col-span-7 md:col-start-7 text-muted-foreground space-y-6 text-lg leading-relaxed">
          <p>
            Tucked into one of Surulere's most storied neighbourhoods, Duchess is an intimate residence built for the modern traveller — equal parts hotel polish and the unmistakable comfort of home.
          </p>
          <p>
            Each apartment is curated by hand: bespoke interiors, hotel-grade linens, and a quiet, attentive concierge ready around the clock.
          </p>
        </div>
      </section>

      {/* Residences */}
      <section id="residences" className="bg-card/30 py-32">
        <div className="container">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
            <div>
              <p className="text-xs tracking-luxe uppercase text-gold mb-4">The Residences</p>
              <h2 className="text-4xl md:text-5xl">Four signature apartments</h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              From intimate suites to expansive two-bedroom residences — every space tells the same story of considered detail.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {apartments.map((a) => (
              <article key={a.name} className="group relative overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={a.img}
                    alt={a.name}
                    width={1280}
                    height={1280}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
                  />
                </div>
                <div className="p-8 flex items-end justify-between gap-4">
                  <div>
                    <h3 className="text-2xl mb-2">{a.name}</h3>
                    <p className="text-sm text-muted-foreground">{a.desc}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-xs tracking-luxe uppercase text-muted-foreground">From</p>
                    <p className="text-gold text-lg font-medium">{a.price}<span className="text-muted-foreground text-xs"> /night</span></p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section id="amenities" className="container py-32">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-xs tracking-luxe uppercase text-gold mb-4">Amenities</p>
          <h2 className="text-4xl md:text-5xl mb-6">Every detail, considered.</h2>
          <p className="text-muted-foreground">A quietly comprehensive set of services so you can simply arrive and exhale.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border">
          {amenities.map(({ icon: Icon, label }) => (
            <div key={label} className="bg-background p-8 flex flex-col items-center text-center gap-4 hover:bg-card transition-colors">
              <Icon className="w-7 h-7 text-gold" strokeWidth={1.25} />
              <p className="text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-32 bg-card/30">
        <div className="container">
          <p className="text-xs tracking-luxe uppercase text-gold mb-4 text-center">Gallery</p>
          <h2 className="text-4xl md:text-5xl text-center mb-16">A glimpse inside.</h2>
          <div className="grid grid-cols-12 gap-4">
            <img src={room2} alt="Living room" loading="lazy" width={1280} height={1280} className="col-span-12 md:col-span-8 h-[480px] object-cover w-full" />
            <img src={room3} alt="Bathroom" loading="lazy" width={1280} height={1280} className="col-span-12 md:col-span-4 h-[480px] object-cover w-full" />
            <img src={room4} alt="Kitchen" loading="lazy" width={1280} height={1280} className="col-span-12 md:col-span-5 h-[400px] object-cover w-full" />
            <img src={room1} alt="Bedroom" loading="lazy" width={1280} height={1280} className="col-span-12 md:col-span-7 h-[400px] object-cover w-full" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container py-32">
        <p className="text-xs tracking-luxe uppercase text-gold mb-4 text-center">Guest Diaries</p>
        <h2 className="text-4xl md:text-5xl text-center mb-20">In their own words.</h2>
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {testimonials.map((t) => (
            <figure key={t.name} className="bg-background p-10">
              <blockquote className="font-serif text-2xl leading-snug mb-8">"{t.quote}"</blockquote>
              <figcaption>
                <p className="text-gold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground tracking-luxe uppercase mt-1">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="relative py-32 overflow-hidden">
        <div className="container grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-luxe uppercase text-gold mb-4">Reserve</p>
            <h2 className="text-4xl md:text-6xl mb-8 leading-tight">Your stay begins with a message.</h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-md">
              Reach our concierge directly to check availability, request a private viewing, or arrange bespoke services.
            </p>
            <div className="space-y-5">
              <a href="https://instagram.com/duchessapartments.surulere" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-gold transition-colors">
                <Instagram className="w-5 h-5 text-gold" strokeWidth={1.25} />
                <span>@duchessapartments.surulere</span>
              </a>
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-gold" strokeWidth={1.25} />
                <span>Surulere, Lagos · Nigeria</span>
              </div>
              <a href="tel:+2340000000000" className="flex items-center gap-4 hover:text-gold transition-colors">
                <Phone className="w-5 h-5 text-gold" strokeWidth={1.25} />
                <span>+234 000 000 0000</span>
              </a>
              <a href="mailto:stay@duchessapartments.com" className="flex items-center gap-4 hover:text-gold transition-colors">
                <Mail className="w-5 h-5 text-gold" strokeWidth={1.25} />
                <span>stay@duchessapartments.com</span>
              </a>
            </div>
          </div>
          <form className="bg-card border border-border p-10 space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-5">
              <input type="text" placeholder="First name" className="bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm" />
              <input type="text" placeholder="Last name" className="bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm" />
            </div>
            <input type="email" placeholder="Email" className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm" />
            <div className="grid grid-cols-2 gap-5">
              <input type="date" className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm text-muted-foreground" />
              <input type="date" className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm text-muted-foreground" />
            </div>
            <textarea placeholder="Tell us about your stay" rows={4} className="w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-sm resize-none" />
            <Button variant="gold" size="lg" className="w-full" type="submit">Request Reservation</Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="container flex flex-wrap gap-4 items-center justify-between text-xs text-muted-foreground tracking-luxe uppercase">
          <p>© {new Date().getFullYear()} Duchess Apartments · Surulere</p>
          <p>Crafted with quiet care</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
