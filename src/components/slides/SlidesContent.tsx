/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

export function useCountUp(target: number, duration: number, active: boolean) {
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

export function Slide1() {
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
        <h1 className="slide-title">Почему ваша кальянная <br /><em>теряет деньги каждый день?</em></h1>
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

export function Slide2() {
  const [vis, setVis] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVis(true), 100); return () => clearTimeout(t); }, []);
  const steps = [
    { num: "01", title: "Стандарты", desc: "Внедряем протоколы граммовки, техники забивки и обслуживания гостей" },
    { num: "02", title: "Скрипты продаж", desc: "Обучаем мастеров работать с гостем: апсейл, премиум-линейки, авторский чай" },
    { num: "03", title: "Контроль", desc: "Чек-листы и метрики для владельца — видите результат в цифрах каждый день" },
    { num: "04", title: "Аттестация", desc: "Финальный чек из 25 параметров подтверждает готовность мастера к работе" },
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

export function Slide3() {
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

export function Slide4() {
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
