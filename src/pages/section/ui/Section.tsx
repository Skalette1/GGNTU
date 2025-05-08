import React, { useState } from 'react'
import '../section.css'
import arrow from '../../../../public/ARROW2.svg'

import { sectionMock } from '../model/section'

export const Section = () => {
  const [active, setActive] = useState(1)

  const handleActive = (id: number) => {
    setActive(id)
  }

  return (
    <div className='info-container'>
      <h1>ГГНТУ</h1>
      <div className="info">
        {[1, 2, 3, 4].map((id) => {
          const item = sectionMock.find(item => item.id === id)
          if (!item) return null
          return (
            <div
              key={id}
              className={`info-card ${active === id ? 'active' : ''}`}
              onClick={() => handleActive(id)}
            >
           <ul>
  <h2>{item.name}</h2>
  {active === id && (
    <>
      <li className="details-list-item">{item.description}</li>
      <li className="details-list-item">{item.approach}</li>
      <li className="details-list-item">
        <ul className="tag-list">
          {item.tags.map((tag, index) => (
            <li key={index} className="tag">{tag}</li>
          ))}
        </ul>
      </li>
    </>
  )}
</ul>
              <img src={arrow} alt="arrow" id='arrow' />
            </div>
          )
        })}
      </div>
    </div>
  )
}
