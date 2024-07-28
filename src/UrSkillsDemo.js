import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [showDescription, setShowDescription] = useState(false);

  const handleToggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="app">
      <header className="app-header">
        <img src="./src/assets/urskillslogo2.png" alt="UrSkills Logo" className="logo" />
        <div className="button-container">
          <a href="https://t.me/UrSkillsBot/UrSkillsApp" className="button_demo">Демонстрация UrSkills</a>
          <a href="https://t.me/elielieli_d" className="button_connect">Связаться</a>
        </div>
        <div className="description-toggle">
          <button className="toggle-button" onClick={handleToggleDescription}>
            Показать описание
          </button>
        </div>
        {showDescription && (
          <div className="description">
            <strong>UrSkills App</strong> — маркетплейс курсов и образовательная платформа на блокчейне TON в Telegram.
            <br />
            Децентрализованые оплаты обучающий курсов через TON: Автор продает продукты - Покупатель покупает продукты - Платформа получает комиссию.
            <br />
            Монетизация обучения: Ученики получают кэшбэк в TON за прохождения курсов. Учись и зарабатывай!
            <br />
            Новаторский маркетинг: Продавцам курсов больше не надо придумывать десятки сложных воронок продаж с большим количеством этапов на разных платформах
            <br />
            Текущая версия MVP: 0.9.0-alpha (релиз 27.07.2024)
          </div>
        )}
      </header>
    </div>
  );
};

export default App;