import React, { useState } from 'react'
import '../today.css'
import level from '../../../../public/signal.png'
import development from '../../../../public/development.png'
import microscope from '../../../../public/microscope.png'
import infrastructure from '../../../../public/infrastructure.png'
import { today } from '../model/todayText'

export const Today = () => {
  const [selectedId, setSelectedId] = useState(1)

  const turnText = (id: number) => setSelectedId(id)

  const current = today.find(item => item.id === selectedId)

  return (
    <div className="section">
      <h2>«Нефтяной» сегодня</h2>
      <div className="section--ggntu-today">
        <div className="section--ggntu-today-left">
          <div className={`about__section ${selectedId === 1 ? 'active' : ''}`} onClick={() => turnText(1)}>
            <img src={level} alt="level" />
            <p>Многоуровневая система образования</p>
          </div>
          <div className={`about__section ${selectedId === 2 ? 'active' : ''}`} onClick={() => turnText(2)}>
            <img src={microscope} alt="microscope" />
            <p>Собственные научные лаборатории</p>
          </div>
          <div className={`about__section ${selectedId === 3 ? 'active' : ''}`} onClick={() => turnText(3)}>
            <img src={infrastructure} alt="infrastructure" />
            <p>Современная инфраструктура</p>
          </div>
          <div className={`about__section ${selectedId === 4 ? 'active' : ''}`} onClick={() => turnText(4)}>
            <img src={development} alt="development" />
            <p>Устойчивое развитие</p>
          </div>
        </div>

        <div className="section--ggntu-today-right">
          {current && (
            <div className="right-text-content">
              <p className="main-tittle">{current.tittle}</p>
              <div className="details-grid">
                <div className="detail-item"><strong>{current.centre.quantity}</strong></div>
                <div className="detail-item">{current.centre.prosperity}</div>
                <div className="detail-item">{current.centre.all}</div>
                {current.centre.projects && (
                  <div className="detail-item">{current.centre.projects}</div>
                )}
                {current.centre.partners && (
                  <div className="detail-item">{current.centre.partners}</div>
                )}
                {current.centre.payload && (
                  <div className="detail-item">{current.centre.payload}</div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
