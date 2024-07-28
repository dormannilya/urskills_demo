import React from 'react';
import './UrSkillsDemo.css';
import urSkillsLogo from './assets/urskillslogo2.png';

const UrSkillsDemo = () => {
  return (
    <div className="container">
      <img src={urSkillsLogo} alt="UrSkills Logo" className="logo" />
      <div className="button-container">
        <a href="https://t.me/UrSkills/4" className="button_demo">Видео-демонстрация</a>
        <a href="https://t.me/elielieli_d" className="button_connect">Связаться</a>
      </div>
    </div>
  );
};

export default UrSkillsDemo;
