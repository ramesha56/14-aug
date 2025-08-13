
import React, { useState, useEffect } from "react";
import { Flag } from "lucide-react";
import "./IndependenceDayHero.css";

export default function IndependenceDayHero() {
  const [showFireworks, setShowFireworks] = useState(true);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date(new Date().getFullYear(), 7, 14); 
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

      <main className="hero-content">
        <h1 className="hero-title">
          Happy <span className="highlight">Independence</span> Day Pakistan 🇵🇰
        </h1>
        <p className="hero-text">
          14 August — Let’s celebrate freedom, unity, and the spirit of Pakistan.
        </p>

        <div className="countdown">
          <div className="time-box">{timeLeft.days}d</div>
          <div className="time-box">{timeLeft.hours}h</div>
          <div className="time-box">{timeLeft.minutes}m</div>
          <div className="time-box">{timeLeft.seconds}s</div>
        </div>
      </main>

      {showFireworks && (
        <>
          <div className="firework"></div>
          <div className="firework delay1"></div>
          <div className="firework delay2"></div>
           <div className="firework delay3"></div>
        </>
      )}

      <footer className="hero-footer">
        © {new Date().getFullYear()} Pakistan Zindabad
      </footer>
    </div>
  );
}
