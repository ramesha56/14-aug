// import React, { useEffect, useMemo, useRef, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Sparkles, Flag, PartyPopper, Download, Heart, Clock } from "lucide-react";
// import "./IndependenceDayHero.css";


// // === Utility: time left until next Aug 14 ===
// function getNextIndependenceDay(now = new Date()) {
//   const year = now.getFullYear();
//   const targetThisYear = new Date(year, 7, 14, 0, 0, 0); // August is 7 (0-indexed)
//   return now <= targetThisYear
//     ? targetThisYear
//     : new Date(year + 1, 7, 14, 0, 0, 0);
// }

// function useCountdown(targetDate) {
//   const [timeLeft, setTimeLeft] = useState(() => Math.max(0, targetDate - new Date()));
//   useEffect(() => {
//     const id = setInterval(() => {
//       setTimeLeft(Math.max(0, targetDate - new Date()));
//     }, 1000);
//     return () => clearInterval(id);
//   }, [targetDate]);
//   const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
//   const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
//   const seconds = Math.floor((timeLeft / 1000) % 60);
//   return { timeLeft, days, hours, minutes, seconds };
// }

// // === Decorative Firework component ===
// const Firework = ({ x, y, delay = 0 }) => (
//   <div
//     className="pointer-events-none absolute"
//     style={{ left: x, top: y, animationDelay: `${delay}ms` }}
//   >
//     <div className="firework size-2 rounded-full bg-white/90" />
//   </div>
// );

// // === Main Component ===
// export default function IndependenceDayHero() {
//   const target = useMemo(() => getNextIndependenceDay(new Date()), []);
//   const { days, hours, minutes, seconds } = useCountdown(target);
//   const [showConfetti, setShowConfetti] = useState(true);
//   const caption = `Happy Independence Day Pakistan! 🇵🇰\n#PakistanZindabad #14August #AzadiMubarak`;

//   const copiedRef = useRef(false);

//   const copyCaption = async () => {
//     try {
//       await navigator.clipboard.writeText(caption);
//       copiedRef.current = true;
//       alert("Caption copied! Paste anywhere ✨");
//     } catch (e) {
//       console.error(e);
//       copiedRef.current = false;
//       alert("Couldn't copy. Select the text manually.");
//     }
//   };

//   return (
//     <div className="min-h-screen w-full bg-gradient-to-b from-emerald-900 via-emerald-950 to-black text-white relative overflow-hidden">
//       {/* Animated Stars background */}
//       <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:24px_24px]" />

//       {/* Fireworks layer */}
//       <AnimatePresence>
//         {showConfetti && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="pointer-events-none absolute inset-0 overflow-hidden"
//           >
//             {/* sprinkle a few fireworks */}
//             <Firework x="10%" y="20%" delay={0} />
//             <Firework x="80%" y="25%" delay={300} />
//             <Firework x="25%" y="70%" delay={600} />
//             <Firework x="70%" y="60%" delay={900} />
//             <Firework x="45%" y="35%" delay={1200} />
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Header */}
//       <header className="relative z-10 flex items-center justify-between px-6 md:px-10 py-5">
//         <div className="flex items-center gap-3">
//           <motion.div
//             initial={{ rotate: -8, scale: 0.8 }}
//             animate={{ rotate: 0, scale: 1 }}
//             transition={{ type: "spring", stiffness: 200, damping: 10 }}
//             className="grid place-items-center rounded-2xl bg-white/10 p-2 backdrop-blur"
//           >
//             <Flag className="size-6" />
//           </motion.div>
//           <span className="text-lg font-semibold tracking-wide">Azadi Day • 14 August</span>
//         </div>
//         <button
//           onClick={() => setShowConfetti((s) => !s)}
//           className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2 text-sm hover:bg-white/20 transition"
//         >
//           <PartyPopper className="size-4" /> {showConfetti ? "Hide" : "Show"} Fireworks
//         </button>
//       </header>

//       {/* Hero */}
//       <main className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2 md:gap-14 md:px-10">
//         <section className="py-6 md:py-14">
//           <motion.h1
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.6 }}
//             className="text-4xl font-extrabold leading-tight md:text-6xl"
//           >
//             Happy <span className="text-emerald-300">Independence</span> Day
//             <br /> Pakistan <span className="inline-block">🇵🇰</span>
//           </motion.h1>

//           <motion.p
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="mt-4 max-w-xl text-base text-white/80 md:text-lg"
//           >
//             14 August ko Azadi ka jashn, unity aur ummeed ke saath manayein. Is ready‑to‑use React hero ko apni website ya project me seedha drop‑in karein.
//           </motion.p>

//           {/* Countdown */}
//           <motion.div
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="mt-6 flex w-full flex-wrap items-center gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur"
//           >
//             <Clock className="size-5 shrink-0" />
//             <span className="text-sm md:text-base">Countdown to next 14 August:</span>
//             <div className="ml-auto grid grid-flow-col gap-3 text-center">
//               {[{ label: "Days", v: days }, { label: "Hours", v: hours }, { label: "Min", v: minutes }, { label: "Sec", v: seconds }].map(({ label, v }) => (
//                 <div key={label} className="rounded-xl bg-black/30 px-3 py-2">
//                   <div className="text-xl font-bold tabular-nums md:text-2xl">{String(v).padStart(2, "0")}</div>
//                   <div className="text-[10px] uppercase tracking-widest text-white/70">{label}</div>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           {/* CTA Buttons */}
//           <div className="mt-6 flex flex-wrap items-center gap-3">
//             <button
//               onClick={copyCaption}
//               className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-emerald-950 shadow-lg shadow-emerald-900/30 transition hover:brightness-110"
//             >
//               <Sparkles className="size-4" /> Copy Instagram Caption
//             </button>
//             <a
//               href="#poster"
//               className="inline-flex items-center gap-2 rounded-2xl border border-white/30 px-5 py-3 text-sm font-semibold hover:bg-white/10"
//             >
//               <Download className="size-4" /> View Poster Template
//             </a>
//           </div>
//         </section>

//         {/* Waving Flag (SVG) */}
//         <section className="relative h-[320px] w-full md:h-[420px]">
//           <motion.div
//             initial={{ rotate: -2, y: 10 }}
//             animate={{ rotate: [0, -1.8, 0, 1.2, 0], y: [0, -6, 0, 6, 0] }}
//             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//             className="absolute inset-0 grid place-items-center"
//           >
//             <svg viewBox="0 0 900 600" className="h-full w-full drop-shadow-2xl">
//               {/* White stripe */}
//               <rect x="0" y="0" width="180" height="600" fill="#FFFFFF" />
//               {/* Green field */}
//               <rect x="180" y="0" width="720" height="600" fill="#115e59" />
//               {/* Crescent */}
//               <circle cx="520" cy="300" r="120" fill="#FFFFFF" />
//               <circle cx="560" cy="300" r="120" fill="#115e59" />
//               {/* Star */}
//               <g transform="translate(600,300)">
//                 <polygon fill="#FFFFFF" points="0,-70 16,-22 66,-22 26,6 42,54 0,26 -42,54 -26,6 -66,-22 -16,-22" />
//               </g>
//             </svg>
//           </motion.div>
//         </section>
//       </main>

//       {/* Poster Template */}
//       <section id="poster" className="relative z-10 mx-auto max-w-6xl px-6 py-12 md:px-10">
//         <h2 className="mb-4 text-2xl font-bold md:text-3xl">Printable Poster Template</h2>
//         <div className="grid gap-6 md:grid-cols-2">
//           <div className="rounded-2xl border border-white/20 p-5 backdrop-blur">
//             <div className="aspect-[3/4] overflow-hidden rounded-xl bg-gradient-to-br from-emerald-700 via-emerald-900 to-black p-6">
//               <div className="flex h-full flex-col">
//                 <div className="flex items-center gap-2">
//                   <Flag className="size-5" />
//                   <span className="text-sm tracking-wide">14 August • Pakistan</span>
//                 </div>
//                 <div className="mt-auto">
//                   <div className="text-3xl font-extrabold leading-tight md:text-4xl">
//                     Azadi Mubarak
//                   </div>
//                   <div className="mt-2 max-w-[20ch] text-sm text-white/80">
//                     Unity • Faith • Discipline
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <p className="mt-3 text-xs text-white/70">Tip: Right‑click → Print to save as PDF.</p>
//           </div>

//           <div className="flex flex-col justify-between rounded-2xl border border-white/20 p-5 backdrop-blur">
//             <div>
//               <h3 className="text-lg font-semibold">How to use</h3>
//               <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/80">
//                 <li>Add this component anywhere in your React or Next.js app.</li>
//                 <li>Tailwind recommended; styles also work with plain CSS.</li>
//                 <li>Click “Copy Instagram Caption” for ready caption + hashtags.</li>
//                 <li>Toggle fireworks from the top‑right button.</li>
//               </ul>
//             </div>
//             <div className="mt-6 flex items-center gap-2 text-sm text-white/80">
//               <Heart className="size-4" /> Made with pride for Pakistan
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="relative z-10 mx-auto max-w-6xl px-6 pb-10 md:px-10">
//         <div className="text-xs text-white/60">© {new Date().getFullYear()} Rameesha • Independence Day Hero</div>
//       </footer>

//       {/* Local CSS for fireworks animation */}

//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import { Flag } from "lucide-react";
import "./IndependenceDayHero.css";

export default function IndependenceDayHero() {
  const [showFireworks, setShowFireworks] = useState(true);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date(new Date().getFullYear(), 7, 14); // 14 August
    const timer = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-container">
      {/* Header */}
      <header className="hero-header">
        <div className="logo-box">
          <Flag className="flag-icon" />
        </div>
        <button
          className="fireworks-btn"
          onClick={() => setShowFireworks(!showFireworks)}
        >
          {showFireworks ? "Hide Fireworks" : "Show Fireworks"}
        </button>
      </header>

      {/* Main content */}
      <main className="hero-content">
        <h1 className="hero-title">
          Happy <span className="highlight">Independence</span> Day Pakistan 🇵🇰
        </h1>
        <p className="hero-text">
          14 August — Let’s celebrate freedom, unity, and the spirit of Pakistan.
        </p>

        {/* Countdown */}
        <div className="countdown">
          <div className="time-box">{timeLeft.days}d</div>
          <div className="time-box">{timeLeft.hours}h</div>
          <div className="time-box">{timeLeft.minutes}m</div>
          <div className="time-box">{timeLeft.seconds}s</div>
        </div>
      </main>

      {/* Fireworks */}
      {showFireworks && (
        <>
          <div className="firework"></div>
          <div className="firework delay1"></div>
          <div className="firework delay2"></div>
        </>
      )}

      {/* Footer */}
      <footer className="hero-footer">
        © {new Date().getFullYear()} Pakistan Zindabad
      </footer>
    </div>
  );
}
