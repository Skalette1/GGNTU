
import React, { useState } from 'react';
import '../Wrapper.css';
import { universityStatsMock } from '../model/wrapperMocks';

export const Wrapper = () => {
  const [active, setActive] = useState(1);

  const handleActive = (id: number) => {
    setActive(id);
  };

  const activeSection = universityStatsMock.find(section => section.id === active);

  return (
    <div className="wrapper">
      <div className="wrapper-left">
        {universityStatsMock.map(section => (
          <div
            key={section.id}
            className={`wrapper-selection ${active === section.id ? 'active' : ''}`}
            onClick={() => handleActive(section.id)}
          >
            <h3>{section.title}</h3>
          </div>
        ))}
        {activeSection && (
          <div className="wrapper-stats">
            {activeSection.stats.map((item, index) => (
              <div className="wrapper-cart" key={index}>
                <h5>{item.value}</h5>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
