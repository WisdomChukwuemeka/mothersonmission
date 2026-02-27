"use client";

import { useEffect, useRef, useState, useCallback } from "react";

// ── Core Values data ───────────────────────────────────────────────
const coreValues = [
  { label: "Truth", icon: "✦", color: "#2563eb", light: "#dbeafe", desc: "We speak and live honestly in all we do." },
  { label: "Holiness", icon: "✝", color: "#7c3aed", light: "#ede9fe", desc: "We honour God in every action and word." },
  { label: "Love", icon: "♡", color: "#e11d48", light: "#ffe4e6", desc: "Unconditional love drives every service." },
  { label: "Prayer", icon: "🙏", color: "#d97706", light: "#fef3c7", desc: "We are rooted in prayer and divine guidance." },
  { label: "Discipline", icon: "⚡", color: "#059669", light: "#d1fae5", desc: "Excellence through consistent commitment." },
  { label: "Care", icon: "❤", color: "#0891b2", light: "#cffafe", desc: "Deep, personal care for every mother." },
];

// ── Orbit Node ─────────────────────────────────────────────────────
function OrbitNode({ value, angle, radius, active, onClick }) {
  const rad = (angle * Math.PI) / 180;
  const x = Math.cos(rad) * radius;
  const y = Math.sin(rad) * radius;

  return (
    <button
      onClick={onClick}
      className="absolute flex flex-col items-center gap-1.5 group focus:outline-none"
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        transform: "translate(-50%, -50%)",
        zIndex: 10,
      }}
    >
      {active && (
        <span
          className="absolute w-20 h-20 rounded-full animate-ping opacity-20"
          style={{ backgroundColor: value.color }}
        />
      )}

      <span
        className="relative w-16 h-16 md:w-20 md:h-20 rounded-full flex flex-col items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110"
        style={{
          backgroundColor: active ? value.color : value.light,
          border: `2.5px solid ${value.color}`,
          boxShadow: active ? `0 0 24px ${value.color}55` : "none",
        }}
      >
        <span className="text-lg md:text-xl leading-none" style={{ color: active ? "#fff" : value.color }}>
          {value.icon}
        </span>
      </span>

      <span
        className="text-xs md:text-sm font-bold tracking-wide transition-all duration-300"
        style={{ color: active ? value.color : "#475569" }}
      >
        {value.label}
      </span>
    </button>
  );
}

// ── Main Section ───────────────────────────────────────────────────
export default function CoreValuesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [radius, setRadius] = useState(155);
  const [renderTick, setRenderTick] = useState(0); // Forces re-render every frame
  
  const rotationRef = useRef(0);
  const rafRef = useRef(null);
  const lastTimeRef = useRef(null);
  const isPausedRef = useRef(false);

  // Keep refs in sync
  isPausedRef.current = false; // Will be set by mouse events

  // Handle responsive radius
  useEffect(() => {
    const updateRadius = () => {
      setRadius(window.innerWidth < 640 ? 115 : 155);
    };
    
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  // Animation loop
  useEffect(() => {
    const speed = 0.018;
    const anglePerItem = 360 / coreValues.length;

    const animate = (time) => {
      if (!lastTimeRef.current) {
        lastTimeRef.current = time;
      }

      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;

      // Only update if not paused
      if (!isPausedRef.current) {
        // Update rotation
        rotationRef.current = (rotationRef.current + speed * delta) % 360;
        
        // Calculate active index
        let closest = 0;
        let minDiff = Infinity;

        for (let i = 0; i < coreValues.length; i++) {
          const itemAngle = (i * anglePerItem + rotationRef.current) % 360;
          let diff = Math.abs(itemAngle - 270);
          if (diff > 180) diff = 360 - diff;
          
          if (diff < minDiff) {
            minDiff = diff;
            closest = i;
          }
        }

        // Update active index if changed
        if (closest !== activeIndex) {
          setActiveIndex(closest);
        }
      }

      // Always trigger re-render to update positions
      setRenderTick(t => t + 1);

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
    };
  }, [activeIndex]); // Only re-run if activeIndex changes (rarely)

  const active = coreValues[activeIndex];

  const handleNodeClick = useCallback((index) => {
    isPausedRef.current = true;
    setActiveIndex(index);
    setTimeout(() => {
      isPausedRef.current = false;
    }, 3000);
  }, []);

  const handleMouseEnter = useCallback(() => {
    isPausedRef.current = true;
  }, []);

  const handleMouseLeave = useCallback(() => {
    isPausedRef.current = false;
  }, []);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #1e40af 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Who We Are
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto text-sm leading-relaxed">
            Six pillars that anchor everything we do — from how we serve mothers
            to how we lead our organisation.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 justify-center">
          <div
            className="relative flex-shrink-0"
            style={{ width: 360, height: 360 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 360 360">
              <circle
                cx="180" cy="180" r="155"
                fill="none"
                stroke="#e2e8f0"
                strokeWidth="1.5"
                strokeDasharray="6 6"
              />
              <circle
                cx="180" cy="180" r="155"
                fill="none"
                stroke={active.color}
                strokeWidth="1"
                strokeOpacity="0.2"
              />
              {coreValues.map((v, i) => {
                const anglePerItem = 360 / coreValues.length;
                const a = ((i * anglePerItem + rotationRef.current) % 360) * (Math.PI / 180);
                const x2 = 180 + Math.cos(a) * 155;
                const y2 = 180 + Math.sin(a) * 155;
                return (
                  <line
                    key={i}
                    x1="180" y1="180"
                    x2={x2} y2={y2}
                    stroke={activeIndex === i ? v.color : "#e2e8f0"}
                    strokeWidth={activeIndex === i ? "1.5" : "0.8"}
                    strokeOpacity={activeIndex === i ? "0.5" : "0.3"}
                    strokeDasharray={activeIndex === i ? "none" : "3 4"}
                  />
                );
              })}
            </svg>

            <div
              className="absolute rounded-full flex flex-col items-center justify-center shadow-2xl z-20 transition-all duration-500"
              style={{
                width: 110,
                height: 110,
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                background: `linear-gradient(135deg, ${active.color}ee, ${active.color}99)`,
                boxShadow: `0 0 40px ${active.color}44`,
              }}
            >
              <span className="text-white text-2xl leading-none">{active.icon}</span>
              <span className="text-white font-black text-xs tracking-widest uppercase mt-1 opacity-90">
                Core
              </span>
              <span className="text-white font-black text-xs tracking-widest uppercase opacity-90">
                Values
              </span>
            </div>

            {coreValues.map((v, i) => {
              const anglePerItem = 360 / coreValues.length;
              const angle = (i * anglePerItem + rotationRef.current) % 360;
              return (
                <OrbitNode
                  key={v.label}
                  value={v}
                  angle={angle}
                  radius={radius}
                  active={activeIndex === i}
                  onClick={() => handleNodeClick(i)}
                />
              );
            })}
          </div>

          <div className="max-w-sm w-full">
            <div
              key={active.label}
              className="rounded-2xl p-8 transition-all duration-500 animate-fadeIn"
              style={{
                backgroundColor: active.light,
                border: `2px solid ${active.color}33`,
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 shadow-md"
                style={{ backgroundColor: active.color }}
              >
                <span>{active.icon}</span>
              </div>
              <h3
                className="text-2xl font-black mb-3"
                style={{ color: active.color }}
              >
                {active.label}
              </h3>
              <p className="text-slate-700 leading-relaxed text-sm">
                {active.desc}
              </p>
              <div className="mt-5 h-1 rounded-full overflow-hidden bg-white/60">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{ width: "100%", backgroundColor: active.color, opacity: 0.5 }}
                />
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-2">
              {coreValues.map((v, i) => (
                <button
                  key={v.label}
                  onClick={() => handleNodeClick(i)}
                  className="rounded-xl py-2 px-3 text-xs font-bold transition-all duration-200 hover:scale-105"
                  style={{
                    backgroundColor: activeIndex === i ? v.color : v.light,
                    color: activeIndex === i ? "#fff" : v.color,
                    border: `1.5px solid ${v.color}55`,
                  }}
                >
                  {v.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.4s ease both; }
      `}</style>
    </section>
  );
}