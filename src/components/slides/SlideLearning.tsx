/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

export function Slide5() {
  const [vis, setVis] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVis(true), 100); return () => clearTimeout(t); }, []);
  const days = [
    {
      day: "День 1",
      title: "Экспертный фундамент",
      accent: "Сокращаем издержки с первой смены",
      items: [
        { icon: "Settings", title: "Анатомия оборудования", desc: "Глубокое понимание устройства кальяна: правильная эксплуатация деталей, избежать коррозии и преждевременного износа дорогого парка." },
        { icon: "Flame", title: "Химия табака и управление жаром", desc: "Разбор брендов по жаростойкости и крепости. Мастер знает, почему табак горит, и экономит до 15% сырья за счёт контроля температуры." },
        { icon: "LayoutGrid", title: "Стандарты 5S и гигиена", desc: "Организация рабочего места по японской системе. Идеальная эргономика ускоряет отдачу кальяна на 20% и вызывает доверие гостей." },
      ],
      result: "Сотрудник перестаёт действовать «на ощупь». Он понимает физику процесса и бережёт каждую деталь и каждый грамм табака.",
    },
    {
      day: "День 2",
      title: "Технология вкуса и рост прибыли",
      accent: "Учим не просто «забивать», а продавать и удерживать гостя",
      items: [
        { icon: "Wind", title: "Техники забивки под любой запрос", desc: "Воздушная, Плотная, Оверпак. Мастер подбирает способ под гостя — попадание во вкус и крепость на 100%." },
        { icon: "Timer", title: "Стабильность курения 60+ минут", desc: "Секреты контроля температуры и работы с углями. Довольный гость — это лояльный гость и высокие чаевые." },
        { icon: "TrendingUp", title: "Психология сервиса и Up-sell", desc: "Алгоритм «3 вопроса»: за 30 секунд выявить потребность и нативно предложить премиум-линейки, фруктовые чаши и чайные пары." },
      ],
      result: "Мастер становится экспертным консультантом и приносит заведению на 20–30% больше выручки с каждого стола.",
    },
    {
      day: "День 3",
      title: "Аттестация и готовность к «полной посадке»",
      accent: "",
      items: [
        { icon: "Eye", title: "Сенсорный тест", desc: "Мастер определяет профиль вкуса, крепость и чистоту курения — гость получит именно то, что заказывал." },
        { icon: "Zap", title: "Работа в «запаре» (Speed Test)", desc: "Задача: собрать и вынести 3 разных кальяна за 12 минут без потери качества. Сервис работает даже в жаркую пятницу." },
        { icon: "ShieldCheck", title: "Психологическая устойчивость", desc: "Отработка конфликтных сценариев. Мастер гасит негатив профессионализмом и сохраняет лояльность гостя в любой ситуации." },
        { icon: "ClipboardCheck", title: "Финальный чек-лист (25 параметров)", desc: "Жёсткая приёмка: от стерильности щипцов до манеры общения и сервировки." },
      ],
      result: "Вы получаете сотрудника, в котором уверены на 100%. Он не «поплывёт» в пятницу и грамотно проконсультирует любого гостя.",
    },
  ];
  const [activeDay, setActiveDay] = useState(0);
  const d = days[activeDay];
  return (
    <div className="slide-inner">
      <div style={{ opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(24px)", transition: "all 0.7s" }}>
        <div className="gold-tag">Процесс обучения</div>
        <h1 className="slide-title">3 дня, которые меняют <em>всё</em></h1>
        <p className="slide-sub">Чёткая программа, по которой ваш мастер становится профессионалом</p>
      </div>
      <div style={{ opacity: vis ? 1 : 0, transition: "all 0.5s 0.3s" }} className="flex gap-2 mt-6 mb-4">
        {days.map((dd, i) => (
          <button
            key={i}
            onClick={() => setActiveDay(i)}
            style={{
              padding: "6px 16px",
              borderRadius: "4px",
              fontSize: "0.78rem",
              fontWeight: 600,
              border: activeDay === i ? "1px solid var(--gold)" : "1px solid var(--dark-border)",
              background: activeDay === i ? "var(--gold)" : "transparent",
              color: activeDay === i ? "#0A0A0B" : "var(--text-muted)",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            {dd.day}
          </button>
        ))}
      </div>
      <div style={{ opacity: vis ? 1 : 0, transition: "all 0.5s 0.4s" }}>
        <div style={{ marginBottom: "4px", fontWeight: 700, color: "var(--gold)", fontSize: "1rem" }}>{d.title}</div>
        {d.accent && <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontStyle: "italic", marginBottom: "12px" }}>{d.accent}</div>}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
          {d.items.map((item, i) => (
            <div key={i} className="step-card" style={{ alignItems: "flex-start", gap: "10px" }}>
              <div className="problem-icon" style={{ flexShrink: 0, marginTop: "2px" }}><Icon name={item.icon as any} size={18} /></div>
              <div>
                <div className="step-title">{item.title}</div>
                <div className="step-desc">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4" style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.25)", borderRadius: "6px", padding: "12px 16px", fontSize: "0.82rem", color: "var(--text-muted)" }}>
          <span style={{ color: "var(--gold)", fontWeight: 700 }}>Результат: </span>{d.result}
        </div>
      </div>
    </div>
  );
}
