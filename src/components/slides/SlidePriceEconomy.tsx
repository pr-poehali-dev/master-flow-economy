/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

export function Slide6Price() {
  const [vis, setVis] = useState(false);
  const [selected, setSelected] = useState(1);
  useEffect(() => { const t = setTimeout(() => setVis(true), 100); return () => clearTimeout(t); }, []);
  const plans = [
    {
      name: "Старт", price: "18 700 ₽", desc: "Для небольших заведений",
      highlight: false,
      sections: [
        {
          title: "Сборник «Миксология 20+» (Базовый)",
          items: [
            "Самые ходовые, проверенные временем сочетания (ТОП-продаж)",
            "Разделение на категории: «Сладкое», «Кислое», «Свежее»",
          ],
        },
        {
          title: "Шаблоны продаж (Мини-версия)",
          items: [
            "Скрипт приветствия и первого заказа",
            "Базовый алгоритм выявления вкусовых предпочтений",
            "Простая фраза-предложение: «Желаете чай или напитки к кальяну?»",
          ],
        },
        {
          title: "Карточки для аттестации (База)",
          items: [
            "Проверка знаний: температурные режимы, виды чаш, гигиена",
            "Чек-лист для оценки первой забивки стажера",
          ],
        },
        {
          title: "Методичка и Чек-листы",
          items: [
            "Стандарт внешнего вида и чистоты рабочего места",
            "График открытия и закрытия смены",
          ],
        },
      ],
    },
    {
      name: "Профи", price: "37 400 ₽", desc: "Оптимальный выбор",
      highlight: true,
      sections: [
        {
          title: "Сборник «Миксология 50+» (PRO)",
          items: [
            "Включает базу + сложные авторские миксы (гастрономия, необычные сочетания)",
            "Работа с премиальными и редкими брендами табака",
          ],
        },
        {
          title: "Полные скрипты допродаж (Revenue Boost)",
          items: [
            "Как продать вторую чашу со скидкой, предложить премиум-линейку",
            "Работа с возражениями: «невкусно», «мало дыма», «крепко»",
            "Скрипты удержания гостя (чтобы вернулся именно к этому мастеру)",
          ],
        },
        {
          title: "Система аттестации «Мастер-Шеф»",
          items: [
            "Слепые дегустации (определение табака на вкус)",
            "Экзамен на скорость забивки без потери качества",
            "Тест на знание психологии гостя",
          ],
        },
        {
          title: "Метрики и Аналитика",
          items: [
            "Excel-таблица контроля маржинальности и остатков",
            "Инструкция по отслеживанию эффективности каждого мастера по выручке",
          ],
        },
      ],
    },
  ];
  return (
    <div className="slide-inner">
      <div style={{ opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(24px)", transition: "all 0.7s" }}>
        <div className="gold-tag">Цена</div>
        <h1 className="slide-title">Инвестиция, которая <em>окупается за 2 недели</em></h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-2xl">
        {plans.map((plan, i) => (
          <div key={i} onClick={() => setSelected(i)}
            className={`price-card ${selected === i ? "price-card--active" : ""} ${plan.highlight ? "price-card--highlight" : ""}`}
            style={{ transitionDelay: `${100 + i * 120}ms`, opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.5s, transform 0.5s" }}>
            {plan.highlight && <div className="popular-badge">Популярный</div>}
            <div className="price-name">{plan.name}</div>
            <div className="price-value">{plan.price}</div>
            <div className="price-desc">{plan.desc}</div>
            <div className="price-features">
              {plan.sections.map((sec, s) => (
                <div key={s} className="mb-3">
                  <div className="text-xs font-semibold uppercase tracking-wide opacity-60 mb-1">{sec.title}</div>
                  <ul>
                    {sec.items.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 mb-1">
                        <Icon name="Check" size={13} className="gold-icon flex-shrink-0 mt-0.5" /><span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <a
              href={`https://wa.me/79997998874?text=${encodeURIComponent(`Здравствуйте! Хочу выбрать тариф «${plan.name}» (${plan.price}). Расскажите подробнее.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              className="price-btn"
            >
              Выбрать
              <Icon name="ArrowRight" size={14} className="ml-2 inline" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Slide7() {
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
          <a
            href={`https://wa.me/79997998874?text=${encodeURIComponent("Здравствуйте! Хочу внедрить систему Master Flow. Расскажите подробнее.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn"
          >
            Внедрить Master Flow на этой неделе
            <Icon name="ArrowRight" size={18} className="ml-2 inline" />
          </a>
          <p className="cta-sub">Давайте выведем ваш сервис на новый уровень уже сейчас</p>
        </div>
      </div>
    </div>
  );
}
