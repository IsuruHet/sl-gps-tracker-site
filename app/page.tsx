import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080D0A] text-white overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex items-center justify-between border-b border-white/5 backdrop-blur-md bg-[#080D0A]/80">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#00C853]/20 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M3 17l4-8 4 4 4-6 4 10H3z" stroke="#00C853" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
            </svg>
          </div>
          <span className="font-bold text-sm tracking-widest text-white/90 uppercase">SL GPS Tracker</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-white/50">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#download" className="hover:text-white transition-colors">Download</a>
          <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-32 pb-24 px-6 flex flex-col items-center text-center">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(#00C853 1px, transparent 1px), linear-gradient(90deg, #00C853 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#00C853]/10 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00C853]/30 bg-[#00C853]/10 text-[#00C853] text-xs font-semibold tracking-wider uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00C853] animate-pulse" />
            Built for Sri Lanka
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight mb-6">
            Navigate{" "}
            <span className="text-[#00C853]">anywhere</span>
            <br />in Sri Lanka
          </h1>

          <p className="text-white/50 text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-10">
            Full offline GPS tracking — download the map once, use it forever.
            No signal needed in the jungle, mountains, or anywhere in between.
          </p>

          <div id="download" className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href="#"
              className="flex items-center gap-3 px-6 py-3.5 rounded-xl bg-[#00C853] text-black font-bold text-sm hover:bg-[#00E676] transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76A1.5 1.5 0 0 1 1.5 22.5V1.5A1.5 1.5 0 0 1 3.18.24l19.5 10.5a1.5 1.5 0 0 1 0 2.52L3.18 23.76z"/>
              </svg>
              Get on Google Play
            </a>
            <a
              href="#manual-download"
              className="flex items-center gap-3 px-6 py-3.5 rounded-xl border border-white/10 text-white/70 text-sm font-medium hover:border-white/25 hover:text-white transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17"/>
              </svg>
              Download APK manually
            </a>
            <a
              href="#features"
              className="px-6 py-3.5 rounded-xl border border-white/10 text-white/70 text-sm font-medium hover:border-white/25 hover:text-white transition-colors"
            >
              See features →
            </a>
          </div>
        </div>

        {/* Phone mockup */}
        <div className="relative mt-20 w-full max-w-sm mx-auto">
          <div className="absolute inset-0 bg-[#00C853]/20 blur-[60px] rounded-full" />
          <div className="relative rounded-[2.5rem] border border-white/10 bg-[#0D1610] overflow-hidden shadow-2xl shadow-black/60 aspect-[9/19]">
            <div className="absolute inset-0 bg-[#1a2e1e] opacity-60"
              style={{ backgroundImage: "linear-gradient(#2a4030 1px, transparent 1px), linear-gradient(90deg, #2a4030 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 420" fill="none">
              <path d="M60 380 C80 320, 100 280, 120 220 C140 160, 130 120, 110 80" stroke="#00C853" strokeWidth="3" strokeLinecap="round" opacity="0.9"/>
              <circle cx="60" cy="380" r="8" fill="#00C853" opacity="0.3"/>
              <circle cx="60" cy="380" r="4" fill="#00C853"/>
              <circle cx="110" cy="80" r="6" fill="#FFD600" opacity="0.9"/>
            </svg>
            <div className="absolute top-0 left-0 right-0 px-4 pt-10 pb-3 bg-gradient-to-b from-[#080D0A] to-transparent">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black tracking-widest text-white/80 uppercase">SL GPS TRACKER</span>
                <span className="text-[9px] text-[#00C853] font-semibold">GPS Active • ±3m</span>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 px-4 pb-8 pt-4 bg-gradient-to-t from-[#080D0A] via-[#080D0A]/90 to-transparent">
              <div className="grid grid-cols-3 gap-2 mb-3">
                {[["Speed", "0 km/h"], ["Alt", "142 m"], ["Acc", "±3 m"]].map(([k, v]) => (
                  <div key={k} className="bg-white/5 rounded-lg px-2 py-2 text-center">
                    <div className="text-[9px] text-white/40 uppercase tracking-wider">{k}</div>
                    <div className="text-xs font-bold text-white mt-0.5">{v}</div>
                  </div>
                ))}
              </div>
              <div className="w-full py-2.5 rounded-xl bg-[#00C853] text-black text-xs font-black text-center tracking-wider">
                START RECORDING
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="px-6 py-24 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
            Everything you need,<br />
            <span className="text-white/30">nothing you don&apos;t</span>
          </h2>
          <p className="text-white/40 max-w-md mx-auto">
            Designed for Sri Lanka&apos;s terrain — from coastal roads to highland trails.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              icon: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z",
              title: "Full Offline Maps",
              body: "Download Sri Lanka once — Overview, Standard, Detailed, or Full HD. Use it forever with zero internet.",
              accent: "#00C853",
            },
            {
              icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
              title: "GPS Track Recording",
              body: "Record your routes with timestamps, distance, speed, and altitude. Export as GPX anytime.",
              accent: "#FFD600",
            },
            {
              icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
              title: "Waypoints",
              body: "Pin locations with custom icons and colors. Long-press anywhere on the map to drop a waypoint.",
              accent: "#FF5252",
            },
            {
              icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4",
              title: "Google Maps Quality",
              body: "Tiles sourced from Google Maps — sharp roads, landmarks, and terrain at every zoom level.",
              accent: "#1A73E8",
            },
            {
              icon: "M13 10V3L4 14h7v7l9-11h-7z",
              title: "Live Speed & Altitude",
              body: "Real-time GPS stats on screen — speed, altitude, accuracy, and bearing while you move.",
              accent: "#00C853",
            },
            {
              icon: "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z",
              title: "GPX Export & Share",
              body: "Share your tracks and waypoints as standard GPX files — compatible with any mapping app.",
              accent: "#FFD600",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="group relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${f.accent}18` }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={f.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d={f.icon} />
                </svg>
              </div>
              <h3 className="font-bold text-white mb-2">{f.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MAP PACKAGES */}
      <section className="px-6 py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3">
              Choose your map package
            </h2>
            <p className="text-white/40">Download once. Navigate forever.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { name: "Overview", zoom: "z1–10", size: "~1 MB", detail: "Country & highways", color: "#00C853" },
              { name: "Standard", zoom: "z11–13", size: "~27 MB", detail: "Cities & streets", color: "#FFD600" },
              { name: "Detailed", zoom: "z14–15", size: "~233 MB", detail: "Buildings & paths", color: "#FF9800" },
              { name: "Full HD", zoom: "z16", size: "~401 MB", detail: "Every lane & trail", color: "#FF5252" },
            ].map((p) => (
              <div key={p.name} className="p-5 rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-white">{p.name}</span>
                  <span className="text-[10px] font-mono text-white/30 bg-white/5 px-2 py-0.5 rounded">{p.zoom}</span>
                </div>
                <div className="text-2xl font-black" style={{ color: p.color }}>{p.size}</div>
                <p className="text-xs text-white/40">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANUAL DOWNLOAD */}
      <section id="manual-download" className="px-6 py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3">
              Download APK manually
            </h2>
            <p className="text-white/40 max-w-md mx-auto">
              Not on Google Play yet? Download the APK directly for your device architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              {
                arch: "arm64-v8a",
                label: "64-bit ARM",
                desc: "Most phones after 2018",
                badge: "Recommended",
                badgeColor: "#00C853",
                file: "/assets/sl-gps-tracker-arm64-v8a.apk",
              },
              {
                arch: "armeabi-v7a",
                label: "32-bit ARM",
                desc: "Older & budget devices",
                badge: null,
                badgeColor: null,
                file: "/assets/sl-gps-tracker-armeabi-v7a.apk",
              },
              {
                arch: "x86_64",
                label: "64-bit x86",
                desc: "Emulators & Intel phones",
                badge: null,
                badgeColor: null,
                file: "/assets/sl-gps-tracker-x86_64.apk",
              },
            ].map((apk) => (
              <a
                key={apk.arch}
                href={apk.file}
                download
                className="group flex flex-col gap-4 p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.05] transition-all duration-200"
              >
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#00C853]/10 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00C853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17"/>
                    </svg>
                  </div>
                  {apk.badge && apk.badgeColor && (
                    <span
                      className="text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full"
                      style={{ background: `${apk.badgeColor}20`, color: apk.badgeColor }}
                    >
                      {apk.badge}
                    </span>
                  )}
                </div>
                <div>
                  <div className="font-mono text-xs text-white/40 mb-1">{apk.arch}</div>
                  <div className="font-bold text-white text-sm">{apk.label}</div>
                  <div className="text-white/40 text-xs mt-0.5">{apk.desc}</div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#00C853] font-semibold mt-auto group-hover:gap-2.5 transition-all">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 15V3m0 12l-4-4m4 4l4-4"/>
                  </svg>
                  Download .apk
                </div>
              </a>
            ))}
          </div>

          {/* Install instructions */}
          <div className="mt-6 p-5 rounded-2xl border border-white/5 bg-white/[0.02]">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#FFD600]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFD600" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><path d="M12 8v4m0 4h.01"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-white/70 mb-1">How to install a manual APK</p>
                <p className="text-xs text-white/40 leading-relaxed">
                  Go to <span className="text-white/60">Settings → Security → Install unknown apps</span> and allow
                  installs from your browser or file manager. Then open the downloaded{" "}
                  <span className="text-white/60">.apk</span> file and tap Install.
                  Not sure which one? Pick <span className="text-white/60">arm64-v8a</span> — it works on most modern phones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center">
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute inset-0 bg-[#00C853]/10 blur-[80px] rounded-full pointer-events-none" />
          <div className="relative border border-[#00C853]/20 rounded-3xl p-12 bg-[#00C853]/5">
            <div className="text-5xl mb-4">🇱🇰</div>
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Navigate Sri Lanka<br />your way
            </h2>
            <p className="text-white/40 mb-8 text-lg">
              Free to download. Works fully offline.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#00C853] text-black font-bold hover:bg-[#00E676] transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76A1.5 1.5 0 0 1 1.5 22.5V1.5A1.5 1.5 0 0 1 3.18.24l19.5 10.5a1.5 1.5 0 0 1 0 2.52L3.18 23.76z"/>
              </svg>
              Download Free on Google Play
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/30 text-sm">
        <span>© {new Date().getFullYear()} SL GPS Tracker. All rights reserved.</span>
        <div className="flex gap-6">
          <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <a href="mailto:isurusula@gmail.com" className="hover:text-white transition-colors">Contact</a>
        </div>
      </footer>

    </main>
  );
}