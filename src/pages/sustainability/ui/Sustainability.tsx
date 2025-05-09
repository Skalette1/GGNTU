
import React, { useState } from 'react'
import '../sustainability.css'
import { sustainability } from '../model/sustansibility'
import PieChart from '../../../shared/components/Pie'

export const Sustainability = () => {
  const [selectedId, setSelectedId] = useState(1);

  const turnText = (id: number) => setSelectedId(id);

  const current = sustainability.find(item => item.id === selectedId);

  return (
    <div className={`sustainability bg-${selectedId}`}>
      <div className="sustainability-left">
        <h1>Устойчивость через изменения</h1>
        <ul>
          <li onClick={() => turnText(1)}>Наш университет</li>
          <li onClick={() => turnText(2)}>Наши сотрудники</li>
          <li onClick={() => turnText(3)}>Наши студенты</li>
        </ul>
      </div>
  
      {current && (
        <div className="sustainability-right">
          <div className="sustainability-right-text-content">
            <ul key={current.id}>
              <li>{current.strategy}</li>
              <h2>{current.limit}</h2>
              <li>{current.approach}</li>
            </ul>
            <h3>{current.approach}</h3>
            {selectedId === 1 && (
              <div className="sustainability-chart">
                <PieChart />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};