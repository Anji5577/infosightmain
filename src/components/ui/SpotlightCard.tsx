import { useRef } from "react";

export function SpotlightCard({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode; 
  className?: string;
}) {
  const divRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = divRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);

    // Magnetic tilt physics
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = -((y - centerY) / centerY) * 4;
    const rotateY = ((x - centerX) / centerX) * 4;

    card.style.setProperty("--rotate-x", `${rotateX}deg`);
    card.style.setProperty("--rotate-y", `${rotateY}deg`);
  };

  const handleFocus = () => {
    const card = divRef.current;
    if (!card) return;
    card.style.setProperty("--opacity", "1");
  };

  const handleBlur = () => {
    const card = divRef.current;
    if (!card) return;
    card.style.setProperty("--opacity", "0");
    card.style.setProperty("--rotate-x", "0deg");
    card.style.setProperty("--rotate-y", "0deg");
    card.style.setProperty("--scale", "1");
  };

  const handleMouseEnter = () => {
    const card = divRef.current;
    if (!card) return;
    card.style.setProperty("--opacity", "1");
    card.style.setProperty("--scale", "1.01");
    card.style.setProperty("--transition-duration", "0.1s");
  };

  const handleMouseLeave = () => {
    const card = divRef.current;
    if (!card) return;
    card.style.setProperty("--opacity", "0");
    card.style.setProperty("--rotate-x", "0deg");
    card.style.setProperty("--rotate-y", "0deg");
    card.style.setProperty("--scale", "1");
    card.style.setProperty("--transition-duration", "0.5s");
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const card = divRef.current;
    if (!card || e.touches.length === 0) return;

    const touch = e.touches[0];
    const rect = card.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);

    // Magnetic tilt physics (dampened for touch interactions)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = -((y - centerY) / centerY) * 2;
    const rotateY = ((x - centerX) / centerX) * 2;

    card.style.setProperty("--rotate-x", `${rotateX}deg`);
    card.style.setProperty("--rotate-y", `${rotateY}deg`);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const card = divRef.current;
    if (!card || e.touches.length === 0) return;

    const touch = e.touches[0];
    const rect = card.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
    card.style.setProperty("--opacity", "1");
    card.style.setProperty("--scale", "1.01");
    card.style.setProperty("--transition-duration", "0.1s");
  };

  const handleTouchEnd = () => {
    const card = divRef.current;
    if (!card) return;
    card.style.setProperty("--opacity", "0");
    card.style.setProperty("--rotate-x", "0deg");
    card.style.setProperty("--rotate-y", "0deg");
    card.style.setProperty("--scale", "1");
    card.style.setProperty("--transition-duration", "0.5s");
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: "perspective(1000px) rotateX(var(--rotate-x, 0deg)) rotateY(var(--rotate-y, 0deg)) scale3d(var(--scale, 1), var(--scale, 1), var(--scale, 1))",
        transition: "transform var(--transition-duration, 0.5s) cubic-bezier(0.2, 0.8, 0.2, 1)",
      } as React.CSSProperties}
      className={`relative overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-md shadow-2xl transition-colors duration-500 hover:bg-white/[0.04] will-change-transform ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-500"
        style={{
          opacity: "var(--opacity, 0)",
          background: "radial-gradient(600px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(255,255,255,0.08), transparent 40%)",
        } as React.CSSProperties}
      />
      <div className="relative z-10 w-full h-full flex flex-col">
        {children}
      </div>
    </div>
  );
}
