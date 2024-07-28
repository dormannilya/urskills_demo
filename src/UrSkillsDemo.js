import React, { useState } from 'react';
import './UrSkillsDemo.css';
import urSkillsLogo from './assets/urskillslogo2.png';

const UrSkillsDemo = () => {
  const [showDescription, setShowDescription] = useState(false);

  const handleToggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="container">
      <img src={urSkillsLogo} alt="UrSkills Logo" className="logo" />
      <div className="button-container">
        <a href="https://t.me/UrSkills/4" className="button_demo">Видео-демонстрация</a>
        <a href="https://t.me/elielieli_d" className="button_connect">Связаться</a>
      </div>
      <div className="description-toggle">
        <button className="toggle-button" onClick={handleToggleDescription}>
          {showDescription ? 'Скрыть описание' : 'Показать описание'}
        </button>
      </div>
      {showDescription && (
        <div className="description">
          <strong>UrSkills App</strong> — маркетплейс курсов и образовательная платформа на блокчейне TON в Telegram.
          <br />
          Текущая версия MVP: 0.9.0-alpha (от 27.07.2024)
          <br />
          <strong>Запуск UrSkills 1.0.0-release очень скоро...</strong>
          <br />
          Децентрализованые оплаты обучающих курсов через TON: Автор продает продукты - Покупатель покупает продукты - Платформа получает комиссию.
          <br />
          Монетизация обучения: Ученики получают кэшбэк в TON за прохождение курсов. Учись и зарабатывай!
          <br />
          Новаторский маркетинг: Продавцам курсов больше не надо придумывать десятки сложных воронок продаж с большим количеством этапов на разных платформах
        </div>
      )}
    </div>
  );
};

export default UrSkillsDemo;
