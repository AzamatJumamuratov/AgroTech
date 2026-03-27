import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    id: "title",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-12 md:px-20">
        <span className="inline-block text-sm text-amber-400 border border-amber-400/30 px-4 py-1 rounded-full w-fit mb-8 tracking-wide">
          Diplom jumısı • 2026
        </span>
        <h1 className="font-serif text-6xl md:text-8xl font-black text-white leading-tight mb-4">
          Agro<span className="text-amber-400">Tech</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed">
          Awıl xojalıǵı kompaniyası ushın
          <br />
          AI integraciyalanǵan veb-platforma
        </p>
        <div className="w-20 h-1 bg-amber-400 mt-8 mb-6" />
        <p className="text-white/40">
          <span className="text-gray-500">Orınlawshı:</span>{" "}
          <span className="font-semibold text-white/70">Jumamuratov Azamat</span>
        </p>
        <div className="absolute right-[8%] bottom-[12%] text-[12rem] opacity-5 select-none">
          🌾
        </div>
      </div>
    ),
  },
  {
    id: "intro",
    bg: "light",
    content: (
      <div className="px-12 md:px-20 py-10">
        <p className="font-serif text-7xl font-black text-amber-400/20 leading-none -mb-4">01</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-emerald-900 mb-8">Kirispe</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-8 shadow-md border-t-4 border-amber-400 hover:-translate-y-1 transition-transform">
            <div className="text-3xl mb-3">⚠️</div>
            <h3 className="font-serif text-xl font-bold text-emerald-900 mb-4">Mashqala</h3>
            <ul className="space-y-3">
              {["Awıl xojalıǵında zamanagóy texnologiyalardıń jetispewshiligi",
                "Fermerlerge agronomiyalıq másláhát alıw qıyınshılıǵı",
                "Kompaniya menen baylanıs ornatıwdıń múrákkepligi"].map((t, i) => (
                <li key={i} className="text-gray-500 text-[0.95rem] leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-amber-400">{t}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-md border-t-4 border-emerald-600 hover:-translate-y-1 transition-transform">
            <div className="text-3xl mb-3">💡</div>
            <h3 className="font-serif text-xl font-bold text-emerald-900 mb-4">Aktuallıǵı</h3>
            <ul className="space-y-3">
              {["AI texnologiyalar awıl xojalıǵın avtomatlastırıwda jańa múmkinshilikler ashadı",
                "RAG sisteması — zamanagóy intellektual izlew",
                "Chat-bot fermerlerge 24/7 másláhát beredi"].map((t, i) => (
                <li key={i} className="text-gray-500 text-[0.95rem] leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-emerald-500">{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "goal",
    bg: "dark",
    content: (
      <div className="px-12 md:px-20 py-10">
        <p className="font-serif text-7xl font-black text-amber-400/30 leading-none -mb-4">02</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">Joybardıń maqseti</h2>
        <div className="bg-white/10 border border-white/20 text-white rounded-xl p-6 text-lg mb-8">
          AgroTech kompaniyası ushın AI integraciyalanǵan kóp tillik veb-platforma jaratıw
        </div>
        <div className="grid grid-cols-3 gap-6">
          {[
            { n: "01", t: "AI chat-bot", d: "Aqıllı agronom hám kompaniya assistenti jaratıw" },
            { n: "02", t: "RAG izlew", d: "Semantikalıq izlew sistemasın pgvector arqalı qurıw" },
            { n: "03", t: "Avtomatlastırıw", d: "Múrájaatlardı AI arqalı avtomatlastırıw" },
          ].map((c) => (
            <div key={c.n} className="bg-white/10 rounded-2xl p-8 text-center hover:-translate-y-1 transition-transform">
              <div className="font-serif text-4xl font-black text-amber-400 mb-2">{c.n}</div>
              <h4 className="font-bold text-white mb-2">{c.t}</h4>
              <p className="text-sm text-white/50">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "stack",
    bg: "light",
    content: (
      <div className="px-12 md:px-20 py-10">
        <p className="font-serif text-7xl font-black text-amber-400/20 leading-none -mb-4">03</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-emerald-900 mb-8">Texnologiyalar steki</h2>
        <div className="grid grid-cols-2 gap-5">
          {[
            { cat: "Backend", color: "bg-emerald-700", items: ["Django 5.2 + DRF 3.16", "PostgreSQL + pgvector", "Google Gemini 2.5 Flash"] },
            { cat: "Frontend", color: "bg-emerald-500", items: ["React 19 + Vite 6", "Tailwind CSS 4", "i18next (4 til)"] },
            { cat: "AI / ML", color: "bg-amber-500", items: ["RAG (Retrieval-Augmented Generation)", "Gemini Embeddings 3072d", "Semantikalıq izlew"] },
            { cat: "Infrastruktura", color: "bg-emerald-900", items: ["JWT autentifikaciya", "ReportLab (PDF generaciya)", "Nginx + Gunicorn"] },
          ].map((g) => (
            <div key={g.cat} className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className={`${g.color} text-white px-5 py-3 font-bold`}>{g.cat}</div>
              <div className="p-5 space-y-3">
                {g.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "architecture",
    bg: "dark",
    content: (
      <div className="px-12 md:px-20 py-10">
        <p className="font-serif text-7xl font-black text-amber-400/30 leading-none -mb-4">04</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-8">Sayt arxitekturası</h2>
        <div className="flex flex-col items-center gap-0">
          {[
            { label: "Frontend", sub: "React 19 + Vite + Tailwind CSS + i18next", extra: "RU • EN • UZ • KK", color: "bg-emerald-500" },
            { label: "REST API", sub: "Django DRF + JWT Auth + Rate Limiting + CORS", color: "bg-emerald-700" },
            { label: "Database + AI", sub: "PostgreSQL + pgvector + Gemini API + Embeddings", color: "bg-emerald-900" },
          ].map((l, i) => (
            <div key={l.label}>
              {i > 0 && <div className="text-center text-white/30 text-xl py-1">▼</div>}
              <div className={`${l.color} text-white rounded-xl px-8 py-5 w-[700px] flex items-center gap-8`}>
                <span className="font-bold text-lg min-w-[120px]">{l.label}</span>
                <span className="text-white/70 text-sm">
                  {l.sub}
                  {l.extra && <><br /><span className="font-bold text-amber-200">{l.extra}</span></>}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "chatbot",
    bg: "light",
    content: (
      <div className="px-12 md:px-20 py-10">
        <p className="font-serif text-7xl font-black text-amber-400/20 leading-none -mb-4">05</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-emerald-900 mb-2">AI Chat-bot</h2>
        <p className="text-gray-500 mb-6">Aqıllı assistent — sayttan izlew, másláhát beriw, múrájaat jiberiw</p>
        <div className="grid grid-cols-2 gap-5">
          {[
            { icon: "🔍", t: "Sayttan izlew", d: "Jańalıqlar, joybarlar, kontaktlar boyınsha AI semantikalıq izlew" },
            { icon: "🌱", t: "Agronomiyalıq másláhát", d: "Region, topıraq, maqsetke baylanıslı egin usınısı" },
            { icon: "📨", t: "Múrájaat jiberiw", d: "AI ózi kompaniyaǵa kontakt sorawın avtomat jiberedi" },
            { icon: "📄", t: "PDF hújjetler", d: "Kontrakt hám shartnanalardı avtomat generaciyalaw" },
          ].map((f) => (
            <div key={f.t} className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-emerald-600 hover:-translate-y-1 transition-transform">
              <div className="text-2xl mb-2">{f.icon}</div>
              <h4 className="font-bold text-emerald-900 mb-1">{f.t}</h4>
              <p className="text-sm text-gray-500">{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "rag",
    bg: "dark",
    content: (
      <div className="px-12 md:px-20 py-10">
        <p className="font-serif text-7xl font-black text-amber-400/30 leading-none -mb-4">06</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-8">RAG — Semantikalıq izlew</h2>
        <div className="space-y-3">
          {[
            { n: "1", t: "Kontent indeksaciya", d: "Jańalıqlar, joybarlar → Gemini Embedding → Vektor" },
            { n: "2", t: "pgvector saqlawlar", d: "Vektorlar PostgreSQL bazasında saqlanadı" },
            { n: "3", t: "Soraw embedding", d: "Paydalanıwshı sorawı → Gemini arqalı vektorǵa aylandırıladı" },
            { n: "4", t: "Kosinus izlew", d: "CosineDistance arqalı eń jaqın 5 dokument tabıladı" },
            { n: "5", t: "AI juwap", d: "Kontekst + soraw → Gemini 2.5 Flash → Tolıq juwap" },
          ].map((s) => (
            <div key={s.n} className="flex items-center gap-5 py-3 border-b border-white/10">
              <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold shrink-0">{s.n}</div>
              <div>
                <strong className="text-white">{s.t}</strong>
                <span className="block text-white/40 text-sm">{s.d}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 bg-amber-400/15 rounded-lg px-5 py-3 text-amber-400 text-sm">
          ⚡ Kontent jańalanǵanda embeddingler avtomat jańalanadı (Django signals)
        </div>
      </div>
    ),
  },
  {
    id: "agronomist",
    bg: "light",
    content: (
      <div className="px-12 md:px-20 py-10">
        <p className="font-serif text-7xl font-black text-amber-400/20 leading-none -mb-4">07</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-emerald-900 mb-6">AI Aqıllı Agronom</h2>
        <div className="flex items-stretch gap-4">
          <div className="flex-1 bg-emerald-50 rounded-2xl p-6 border-t-4 border-emerald-600">
            <h3 className="font-serif text-lg font-bold text-emerald-900 mb-4">Kiriwshi maǵlıwmatlar</h3>
            {["🌍 Region (qala atı)", "🏔️ Topıraq túri", '🌱 Egin (yamasa "bilmeymen")', "🎯 Maqset: zúráát / payda / turaqłılıq"].map((f, i) => (
              <div key={i} className="bg-white rounded-lg px-4 py-3 mb-2 text-sm">{f}</div>
            ))}
          </div>
          <div className="flex items-center text-3xl text-amber-400 font-bold">→</div>
          <div className="flex-1 bg-emerald-50 rounded-2xl p-6 border-t-4 border-amber-400">
            <h3 className="font-serif text-lg font-bold text-emerald-900 mb-4">AI juwabı</h3>
            <p className="italic text-emerald-700 text-sm mb-3">"Siziń regionıńız ushın usınıs..."</p>
            <ul className="space-y-2 text-sm text-gray-500 mb-4">
              <li className="pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-amber-400">3-5 egin usınısı + sebebi</li>
              <li className="pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-amber-400">Egiw hám jıynaw kalendarı</li>
              <li className="pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-amber-400">Kútim boyınsha másláhát</li>
            </ul>
            <div className="bg-amber-50 rounded-lg px-4 py-3 text-sm font-semibold text-emerald-900">
              🌾 "Bizdiń kompaniya sizge járdem bere aladı!"
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "results",
    bg: "light",
    content: (
      <div className="px-12 md:px-20 py-10">
        <p className="font-serif text-7xl font-black text-amber-400/20 leading-none -mb-4">08</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-emerald-900 mb-8">Nátiyjeler</h2>
        <div className="flex gap-5 mb-8">
          {[
            { n: "4", l: "Django\nqosımsha", c: "text-emerald-700" },
            { n: "12+", l: "API\nendpoint", c: "text-emerald-500" },
            { n: "4", l: "Til\nqollaw", c: "text-amber-500" },
            { n: "6", l: "Indekslengen\nmodel", c: "text-emerald-900" },
          ].map((s) => (
            <div key={s.n + s.l} className="flex-1 bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className={`font-serif text-5xl font-black ${s.c}`}>{s.n}</div>
              <div className="text-sm text-gray-500 mt-2 whitespace-pre-line">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="bg-emerald-50 rounded-xl p-6 space-y-3">
          {[
            "AI chat-bot kompaniyaǵa múrájaattı avtomat jiberedi",
            "RAG arqalı semantikalıq izlew isleydi",
            "Kontent jańalanǵanda embeddingler avtomat jańalanadı",
            "Admin panelden AI konteksti qosıw múmkinshiligi",
          ].map((r, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs shrink-0">✓</span>
              <span className="text-emerald-900">{r}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "conclusion",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-12 md:px-20">
        <h2 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">Juwmaq</h2>
        <p className="text-lg text-white/50 leading-relaxed max-w-2xl mb-8">
          AgroTech platforması awıl xojalıǵı tarawında AI texnologiyalardı qollanıwdıń praktikalıq mısalı boldı.
        </p>
        <div className="space-y-3 mb-8">
          {[
            "🤖 AI chat-bot fermerlerge 24/7 másláhát beredi",
            "🔍 Semantikalıq izlew kontentli mánis boyınsha tabadı",
            "📨 Kompaniyaǵa múrájaat jiberiw tolıq avtomatlastırıldı",
          ].map((p, i) => (
            <div key={i} className="text-white/60 py-3 border-b border-white/10">{p}</div>
          ))}
        </div>
        <div className="w-20 h-1 bg-amber-400 mb-6" />
        <div className="font-serif text-3xl font-bold text-amber-400">Itibarıńız ushın raxmet!</div>
        <div className="text-white/30 mt-3">Jumamuratov Azamat • 2026</div>
      </div>
    ),
  },
];

const bgClass = {
  dark: "bg-[#1B3A2D]",
  light: "bg-[#F0F7F4]",
  white: "bg-white",
};

export default function Demo() {
  const [current, setCurrent] = useState(0);

  const goNext = useCallback(() => setCurrent((c) => Math.min(c + 1, slides.length - 1)), []);
  const goPrev = useCallback(() => setCurrent((c) => Math.max(c - 1, 0)), []);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); goNext(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); goPrev(); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goNext, goPrev]);

  const slide = slides[current];

  return (
    <div className={`relative w-screen h-screen overflow-hidden ${bgClass[slide.bg]} transition-colors duration-500`}>
      {/* Slide content */}
      <div key={slide.id} className="w-full h-full animate-fadeIn">
        {slide.content}
      </div>

      {/* Navigation */}
      <div className="fixed bottom-6 right-8 flex items-center gap-3 z-50">
        <button
          onClick={goPrev}
          disabled={current === 0}
          className="w-11 h-11 rounded-full border border-white/20 bg-black/30 backdrop-blur text-white flex items-center justify-center hover:bg-amber-500 hover:border-amber-500 hover:scale-110 transition disabled:opacity-30 disabled:cursor-not-allowed"
        >
          ←
        </button>
        <span className="text-sm px-3 py-1 rounded-full bg-black/30 backdrop-blur text-white/60">
          {current + 1} / {slides.length}
        </span>
        <button
          onClick={goNext}
          disabled={current === slides.length - 1}
          className="w-11 h-11 rounded-full border border-white/20 bg-black/30 backdrop-blur text-white flex items-center justify-center hover:bg-amber-500 hover:border-amber-500 hover:scale-110 transition disabled:opacity-30 disabled:cursor-not-allowed"
        >
          →
        </button>
      </div>

      {/* Progress bar */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-black/10 z-50">
        <div
          className="h-full bg-gradient-to-r from-emerald-600 to-amber-400 transition-all duration-500"
          style={{ width: `${((current + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  );
}
