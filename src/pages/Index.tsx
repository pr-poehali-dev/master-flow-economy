/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useCallback } from "react";
import Icon from "@/components/ui/icon";

const HOOKAH_IMAGE = "https://cdn.poehali.dev/projects/3f34fa13-0b85-4ffe-890b-2ab3dc03eb90/files/ccf1e965-07b0-4afe-91f5-a48432b24bfa.jpg";

const slides = [
  { id: 1, label: "Проблема" },
  { id: 2, label: "Решение" },
  { id: 3, label: "Преимущества" },
  { id: 4, label: "Результаты" },
  { id: 5, label: "Цена" },
  { id: 6, label: "Экономика" },
];

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) { setCount(0); return; }
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

function Slide1() {
  const [vis, setVis] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVis(true), 100); return () => clearTimeout(t); }, []);
  const problems = [
    { icon: "UserX", text: "Каждый мастер делает кальян «по-своему» — гость никогда не знает, что получит" },
    { icon: "TrendingDown", text: "Перерасход табака съедает прибыль — граммовка никем не контролируется" },
    { icon: "Clock", text: "Обучение новичков занимает недели, а результат всё равно непредсказуем" },
    { icon: "Star", text: "Средний чек не растёт — мастера не умеют и не хотят продавать" },
  ];
  return (
    <div className="slide-inner">
      <div style={{ opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(24px)", transition: "all 0.7s" }}>
        <div className="gold-tag">Проблема</div>
        <h1 className="slide-title">Почему ваш кальянный <br /><em>теряет деньги каждый день?</em></h1>
        <p className="slide-sub">Пока вы читаете это, ваши мастера допускают ошибки, которые стоят тысячи рублей</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {problems.map((p, i) => (
          <div key={i} className="problem-card" style={{ transitionDelay: `${200 + i * 120}ms`, opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(24px)", transition: "all 0.5s" }}>
            <div className="problem-icon"><Icon name={p.icon as any} size={22} /></div>
            <p>{p.text}</p>
          </div>
        ))}
      </div>
      <div style={{ opacity: vis ? 1 : 0, transition: "all 0.7s 0.7s" }} className="mt-8 fire-block">
        <span className="fire-text">Итог: нестабильное качество = потеря гостей = падение выручки</span>
      </div>
    </div>
  );
}

function Slide2() {
  const [vis, setVis] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVis(true), 100); return () => clearTimeout(t); }, []);
  const steps = [
    { num: "01", title: "Диагностика", desc: "Анализируем текущий уровень мастеров и точки потерь в вашем заведении" },
    { num: "02", title: "Стандарты", desc: "Внедряем протоколы граммовки, техники забивки и обслуживания гостей" },
    { num: "03", title: "Скрипты продаж", desc: "Обучаем мастеров работать с гостем: апсейл, премиум-линейки, авторский чай" },
    { num: "04", title: "Контроль", desc: "Чек-листы и метрики для владельца — видите результат в цифрах каждый день" },
  ];
  return (
    <div className="slide-inner">
      <div style={{ opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(24px)", transition: "all 0.7s" }}>
        <div className="gold-tag">Решение</div>
        <h1 className="slide-title">Master Flow — <br /><em>система, которая работает</em></h1>
        <p className="slide-sub">Не разовый тренинг, а живая система стандартов, встроенная в ваш бизнес</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {steps.map((s, i) => (
          <div key={i} className="step-card" style={{ transitionDelay: `${150 + i * 120}ms`, opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(24px)", transition: "all 0.5s" }}>
            <div className="step-num">{s.num}</div>
            <div>
              <div className="step-title">{s.title}</div>
              <div className="step-desc">{s.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Slide3() {
  const [vis, setVis] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVis(true), 100); return () => clearTimeout(t); }, []);
  const benefits = [
    { icon: "Award", title: "Стандарт качества", desc: "Каждый кальян — одинаково идеален, в любую смену, от любого мастера" },
    { icon: "Scale", title: "Контроль граммовки", desc: "Работа с весами и техника «без перерасхода» — каждая пачка приносит больше чаш" },
    { icon: "MessageSquare", title: "Мастер-продавец", desc: "Рабочие скрипты превращают мастера из «выносителя» в генератора выручки" },
    { icon: "Heart", title: "Лояльность гостей", desc: "Стабильность создаёт постоянников — гость знает, что получит идеальный кальян" },
    { icon: "Zap", title: "Быстрый старт", desc: "Готовые новички без недель хаотичного обучения — система работает за вас" },
    { icon: "BarChart2", title: "Прозрачная аналитика", desc: "Владелец видит метрики и контролирует результат без погружения в рутину" },
  ];
  return (
    <div className="slide-inner">
      <div style={{ opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(24px)", transition: "all 0.7s" }}>
        <div className="gold-tag">Преимущества</div>
        <h1 className="slide-title">6 причин выбрать <em>Master Flow</em></h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {benefits.map((b, i) => (
          <div key={i} className="benefit-card" style={{ transitionDelay: `${100 + i * 100}ms`, opacity: vis ? 1 : 0, transform: vis ? "scale(1)" : "scale(0.92)", transition: "all 0.4s" }}>
            <div className="benefit-icon"><Icon name={b.icon as any} size={24} /></div>
            <div className="benefit-title">{b.title}</div>
            <div className="benefit-desc">{b.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Slide4() {
  const [vis, setVis] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVis(true), 100); return () => clearTimeout(t); }, []);
  const c1 = useCountUp(47, 1500, vis);
  const c2 = useCountUp(89, 1500, vis);
  const c3 = useCountUp(3, 1200, vis);
  const c4 = useCountUp(15, 1000, vis);
  const results = [
    { count: c1, suffix: "%", label: "владельцев увидели рост выручки в первый месяц" },
    { count: c2, suffix: "%", label: "мастеров успешно внедряют стандарты после обучения" },
    { count: c3, suffix: "x", label: "быстрее обучение новых сотрудников по системе" },
    { count: c4, suffix: "+", label: "заведений уже работают по системе Master Flow" },
  ];
  return (
    <div className="slide-inner">
      <div style={{ opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(24px)", transition: "all 0.7s" }}>
        <div className="gold-tag">Результаты</div>
        <h1 className="slide-title">Цифры говорят <em>за нас</em></h1>
        <p className="slide-sub">Реальные показатели заведений, внедривших систему Master Flow</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {results.map((r, i) => (
          <div key={i} className="result-card" style={{ transitionDelay: `${150 + i * 150}ms`, opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(32px)", transition: "all 0.6s" }}>
            <div className="result-value">{r.count}{r.suffix}</div>
            <div className="result-label">{r.label}</div>
          </div>
        ))}
      </div>
      <div style={{ opacity: vis ? 1 : 0, transition: "all 0.7s 0.8s" }} className="mt-6 quote-block">
        <Icon name="Quote" size={20} className="gold-icon mb-2" />
        <p className="quote-text">«Уже через 10 дней после обучения мастера начали предлагать премиум-линейки сами. Средний чек вырос на 28%.»</p>
        <p className="quote-author">— Владелец кальянной, Москва</p>
      </div>
    </div>
  );
}

function Slide5() {
  const [vis, setVis] = useState(false);
  const [selected, setSelected] = useState(1);
  useEffect(() => { const t = setTimeout(() => setVis(true), 100); return () => clearTimeout(t); }, []);
  const plans = [
    {
      name: "Старт", price: "29 900 ₽", desc: "Для небольших заведений",
      features: ["Аудит работы мастеров", "Базовые стандарты граммовки", "2 дня обучения", "Чек-листы для контроля"],
      highlight: false,
    },
    {
      name: "Профи", price: "59 900 ₽", desc: "Оптимальный выбор",
      features: ["Всё из «Старт»", "Скрипты допродаж", "4 дня обучения + практика", "Метрики и аналитика", "1 месяц поддержки"],
      highlight: true,
    },
    {
      name: "Премиум", price: "от 99 900 ₽", desc: "Полное сопровождение",
      features: ["Всё из «Профи»", "Обучение всей команды", "Внедрение под ключ", "3 месяца поддержки", "Персональный куратор"],
      highlight: false,
    },
  ];
  return (
    <div className="slide-inner">
      <div style={{ opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(24px)", transition: "all 0.7s" }}>
        <div className="gold-tag">Цена</div>
        <h1 className="slide-title">Инвестиция, которая <em>окупается за 2 недели</em></h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {plans.map((plan, i) => (
          <div key={i} onClick={() => setSelected(i)}
            className={`price-card ${selected === i ? "price-card--active" : ""} ${plan.highlight ? "price-card--highlight" : ""}`}
            style={{ transitionDelay: `${100 + i * 120}ms`, opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.5s, transform 0.5s" }}>
            {plan.highlight && <div className="popular-badge">Популярный</div>}
            <div className="price-name">{plan.name}</div>
            <div className="price-value">{plan.price}</div>
            <div className="price-desc">{plan.desc}</div>
            <ul className="price-features">
              {plan.features.map((f, j) => (
                <li key={j} className="flex items-center gap-2">
                  <Icon name="Check" size={14} className="gold-icon flex-shrink-0" />{f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function Slide6() {
  const [vis, setVis] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVis(true), 100); return () => clearTimeout(t); }, []);
  const metrics = [
    { icon: "PackageOpen", label: "Списания табака", value: "−15–20%", desc: "Жёсткий контроль граммовки и техника «без перерасхода» — каждая пачка приносит больше чаш" },
    { icon: "TrendingUp", label: "Средний чек", value: "+25%", desc: "Рабочие скрипты допродаж: переход на премиум-линейки, авторский чай и фруктовые чаши" },
    { icon: "Users", label: "LTV / Возвратность", value: "+30%", desc: "Стабильность превращает случайных гостей в постоянников — гость уверен в качестве" },
    { icon: "Clock", label: "Время владельца", value: "+15 ч/мес", desc: "Полное освобождение от рутины обучения — система Master Flow выдаёт готовый результат" },
  ];
  return (
    <div className="slide-inner">
      <div style={{ opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(24px)", transition: "all 0.7s" }}>
        <div className="gold-tag">Экономика Master Flow</div>
        <h1 className="slide-title">Экономика вашего заведения: <em>До и После</em></h1>
        <p className="slide-sub">Почему Master Flow окупается уже за первые 2 недели?</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {metrics.map((m, i) => (
          <div key={i} className="econ-card" style={{ transitionDelay: `${150 + i * 130}ms`, opacity: vis ? 1 : 0, transform: vis ? "translateX(0)" : "translateX(-20px)", transition: "all 0.5s" }}>
            <div className="econ-icon"><Icon name={m.icon as any} size={22} /></div>
            <div className="flex-1">
              <div className="econ-label">{m.label}</div>
              <div className="econ-value">{m.value}</div>
              <div className="econ-desc">{m.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(16px)", transition: "all 0.7s 0.7s" }} className="mt-5">
        <div className="conclusion-block">
          <p className="conclusion-text">Master Flow — это не траты на персонал. Это инвестиция, которая начинает приносить прибыль с первого дня после обучения.</p>
        </div>
        <div className="mt-4 text-center">
          <button className="cta-btn">
            Внедрить Master Flow на этой неделе
            <Icon name="ArrowRight" size={18} className="ml-2 inline" />
          </button>
          <p className="cta-sub">Давайте выведем ваш сервис на новый уровень уже сейчас</p>
        </div>
      </div>
    </div>
  );
}

const slideComponents = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6];

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