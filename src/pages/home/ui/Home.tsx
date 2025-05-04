
import React from 'react'
import '../home.css'
import logo from '../../../../public/logo.png'

export const Home = () => {
  return (
    <div className='home'>
      <div className="left">
        <div className="left-top">
          <img src={logo} alt="logo" />
        <h1>ГГНТУ</h1>
        </div>
        <div className="left-bottom">
        <p>Годовой отчет 2023</p>
        <h2>Устойчивость через изменения</h2>
        </div>
      </div>
    </div>
  )
}
