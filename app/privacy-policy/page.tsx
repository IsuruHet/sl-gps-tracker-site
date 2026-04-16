import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — SL GPS Tracker",
  description: "Privacy policy for SL GPS Tracker Android app.",
};

export default function PrivacyPolicy() {
  const lastUpdated = "April 16, 2026";

  return (
    <main
      className="min-h-screen bg-[#080D0A] text-white"
      suppressHydrationWarning
    >
      {/* NAV */}
      <nav className="px-6 py-4 flex items-center gap-3 border-b border-white/5">
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-70 transition-opacity"
        >
          <div className="w-7 h-7 rounded-lg bg-[#00C853]/20 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 17l4-8 4 4 4-6 4 10H3z"
                stroke="#00C853"
                strokeWidth="1.5"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>
          <span className="font-bold text-sm tracking-widest text-white/70 uppercase">
            SL GPS Tracker
          </span>
        </Link>
        <span className="text-white/20">/</span>
        <span className="text-sm text-white/40">Privacy Policy</span>
      </nav>

      {/* CONTENT */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-white/40 text-sm">
            Last updated: <span className="text-white/60">{lastUpdated}</span>
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-10 text-white/70 leading-relaxed">
          <Section title="Overview">
            <p>
              SL GPS Tracker (&quot;we&quot;, &quot;our&quot;, or &quot;the
              app&quot;) is a GPS navigation and map-based application designed
              for use in Sri Lanka. This Privacy Policy explains how we handle
              your information when you use our Android application.
            </p>
            <p>
              We are committed to protecting your privacy. SL GPS Tracker stores
              user data locally on your device. Some features require an
              internet connection, such as downloading map data.
            </p>
          </Section>

          <Section title="Information We Collect">
            <p>SL GPS Tracker collects the following information:</p>
            <SubSection title="Location Data">
              <p>
                The app collects and processes your device's location data to
                provide navigation, GPS tracking, route display, and waypoint
                features.
              </p>
              <p>
                Location data is used only within the app and is stored locally
                on your device. We do not transmit or share your location data
                with external servers or third parties.
              </p>
            </SubSection>
            <SubSection title="Track & Waypoint Data">
              <p>
                Tracks you record and waypoints you save are stored locally on
                your device using Hive, an embedded NoSQL database. This data
                never leaves your device unless you explicitly choose to export
                it (e.g. via GPX file share).
              </p>
            </SubSection>
            <SubSection title="Map Tile Cache">
              <p>
                When you download offline map packages, map tile images are
                stored locally on your device. These map tiles do not contain
                personal user information.
              </p>
            </SubSection>
          </Section>

          <Section title="Information We Do NOT Collect">
            <p>
              SL GPS Tracker does <strong className="text-white">not</strong>{" "}
              collect, store, or transmit:
            </p>
            <ul>
              <li>Your name, email address, or any account information</li>
              <li>
                Real-time or historical location data to any external server
              </li>
              <li>Device identifiers or advertising IDs</li>
              <li>Usage analytics or crash reports</li>
              <li>Any personally identifiable information</li>
            </ul>
            <p>
              We have no user accounts, no backend servers, and no databases.
              The app works entirely on your device.
            </p>
          </Section>

          <Section title="Permissions">
            <p>The app requests the following Android permissions:</p>
            <table className="w-full text-sm border-collapse mt-4">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-2 pr-4 text-white/50 font-semibold">
                    Permission
                  </th>
                  <th className="text-left py-2 text-white/50 font-semibold">
                    Why it&apos;s needed
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  [
                    "ACCESS_FINE_LOCATION",
                    "Precise GPS for navigation and track recording",
                  ],
                  [
                    "ACCESS_COARSE_LOCATION",
                    "Fallback location when GPS signal is weak",
                  ],
                  [
                    "ACCESS_BACKGROUND_LOCATION",
                    "Continue recording track when screen is off",
                  ],
                  ["INTERNET", "Download map tiles and offline map packages"],
                  [
                    "FOREGROUND_SERVICE",
                    "Keep GPS active during track recording",
                  ],
                  [
                    "WRITE_EXTERNAL_STORAGE",
                    "Export GPX files to your device storage",
                  ],
                ].map(([perm, reason]) => (
                  <tr key={perm}>
                    <td className="py-3 pr-4 font-mono text-xs text-[#00C853] align-top">
                      {perm}
                    </td>
                    <td className="py-3 text-white/50 text-sm">{reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Section>

          <Section title="Internet Access & Map Downloads">
            <p>
              The app requires an internet connection to download map tiles and
              map packages. These are retrieved from Google Maps and Google
              Drive services.
            </p>
            <p>
              After map data is downloaded, some features may be available with
              limited or no internet connectivity.
            </p>
            <p>
              Map requests may include general location coordinates required to
              fetch map tiles. No personally identifiable information is
              transmitted by the app.
            </p>
          </Section>

          <Section title="Third-Party Services">
            <p>SL GPS Tracker uses map data from:</p>
            <ul>
              <li>
                <strong className="text-white">Google Maps</strong> — for online
                tile rendering and offline map packages.
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00C853] ml-1 hover:underline"
                >
                  Google Privacy Policy →
                </a>
              </li>
            </ul>
            <p>
              Google Maps may log standard server access logs (IP address,
              request time, tile coordinates) per their own privacy policy. We
              have no control over this data.
            </p>
          </Section>

          <Section title="Data Storage & Security">
            <p>
              All app data — tracks, waypoints, settings, and cached map tiles —
              is stored locally on your Android device in the app&apos;s private
              storage directory. This data is protected by Android&apos;s
              standard app sandbox security model.
            </p>
            <p>
              We do not back up your data to any cloud service. If you uninstall
              the app, all locally stored data is deleted from your device.
            </p>
          </Section>

          <Section title="Children's Privacy">
            <p>
              SL GPS Tracker does not knowingly collect any information from
              children under the age of 13. The app contains no features that
              require personal information from any user, regardless of age.
            </p>
          </Section>

          <Section title="Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be reflected in the &quot;Last updated&quot; date at the top
              of this page. We encourage you to review this policy periodically.
            </p>
          </Section>

          <Section title="Contact Us">
            <p>
              If you have any questions about this Privacy Policy or the app,
              please contact us:
            </p>
            <div className="mt-4 p-4 rounded-xl border border-white/10 bg-white/[0.02] text-sm">
              <p className="text-white/60">
                Email:{" "}
                <a
                  href="mailto:isurusula@gmail.com"
                  className="text-[#00C853] hover:underline"
                >
                  isurusula@gmail.com
                </a>
              </p>
            </div>
          </Section>
        </div>

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-white/5">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-white border-l-2 border-[#00C853] pl-4">
        {title}
      </h2>
      <div className="space-y-4 pl-4">{children}</div>
    </div>
  );
}

function SubSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider">
        {title}
      </h3>
      <div>{children}</div>
    </div>
  );
}
