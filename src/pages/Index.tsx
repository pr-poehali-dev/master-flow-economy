 
import { useState, useEffect, useCallback } from "react";
import Icon from "@/components/ui/icon";
import { Slide1, Slide2, Slide3, Slide4 } from "@/components/slides/SlidesContent";
import { Slide5 } from "@/components/slides/SlideLearning";
import { Slide6Price, Slide7 } from "@/components/slides/SlidePriceEconomy";

const HOOKAH_IMAGE = "https://cdn.poehali.dev/projects/3f34fa13-0b85-4ffe-890b-2ab3dc03eb90/files/ccf1e965-07b0-4afe-91f5-a48432b24bfa.jpg";

const slides = [
  { id: 1, label: "Проблема" },
  { id: 2, label: "Решение" },
  { id: 3, label: "Преимущества" },
  { id: 4, label: "Результаты" },
  { id: 5, label: "Обучение" },
  { id: 6, label: "Цена" },
  { id: 7, label: "Экономика" },
];

const slideComponents = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6Price, Slide7];

export default function Index() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [animating, setAnimating] = useState(false);
  const [renderKey, setRenderKey] = useState(0);

  const goTo = useCallback((idx: number) => {
    if (animating || idx === current) return;
    setDirection(idx > current ? "next" : "prev");
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setRenderKey(k => k + 1);
      setAnimating(false);
    }, 350);
  }, [animating, current]);

  const goNext = useCallback(() => { if (current < 5) goTo(current + 1); }, [current, goTo]);
  const goPrev = useCallback(() => { if (current > 0) goTo(current - 1); }, [current, goTo]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") goNext();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);

  const SlideComponent = slideComponents[current];

  return (
    <div className="pres-root">
      <div className="smoke-bg" style={{ backgroundImage: `url(${HOOKAH_IMAGE})` }} />
      <div className="smoke-overlay" />
      <div className="grid-lines" />

      <header className="pres-header">
        <div className="pres-logo">MASTER <span className="gold-text">FLOW</span></div>
        <div className="pres-counter">{String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</div>
      </header>

      <nav className="side-nav">
        {slides.map((s, i) => (
          <button key={i} onClick={() => goTo(i)} className={`nav-dot ${i === current ? "nav-dot--active" : ""}`} title={s.label}>
            <span className="nav-label">{s.label}</span>
            <span className="nav-circle" />
          </button>
        ))}
      </nav>

      <main
        key={renderKey}
        className="slide-content"
        style={{
          animation: animating
            ? `${direction === "next" ? "slideExitLeft" : "slideExitRight"} 0.35s ease forwards`
            : "slideEnter 0.4s ease forwards"
        }}
      >
        <SlideComponent />
      </main>

      <footer className="pres-footer">
        <button onClick={goPrev} disabled={current === 0} className="nav-btn">
          <Icon name="ChevronLeft" size={20} />
        </button>
        <div className="pres-progress">
          <div className="pres-progress-fill" style={{ width: `${((current + 1) / slides.length) * 100}%` }} />
        </div>
        <button onClick={goNext} disabled={current === 5} className="nav-btn">
          <Icon name="ChevronRight" size={20} />
        </button>
      </footer>
    </div>
  );
}
