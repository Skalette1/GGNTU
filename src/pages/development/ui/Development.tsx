
import React from 'react';
import '../development.css';

export const Development = () => {
  return (
    <div className="development-container">

      <div className="development">
        <div className="development-card">
          🎓 Наш университет активно внедряет современные образовательные технологии.
        </div>
        <div className="development-card">
          🧪 Мы развиваем научные исследования и поддерживаем студенческие инициативы в инновациях.
        </div>
      </div>

      <div className="target">
        <p>Центр развития</p>
        <p>Объединяем образование, науку и практику<br />в реальном времени</p>
      </div>

      <div className="development">
        <div className="development-card">
          🌍 Сотрудничаем с ведущими вузами и компаниями по всему миру.
        </div>
        <div className="development-card">
          📚 Предоставляем студентам возможности для стажировок, обменов и участия в грантах.
        </div>
      </div>

    </div>
  );
};
