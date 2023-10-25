import React, { useState, useEffect } from 'react';
import './App.css';


import TimerTomato from './components/timerTomato';


function App() {
 
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(1500); // 25 минут в секундах (25 * 60)
  const [sessionType, setSessionType] = useState('Work'); // 'Work' или 'Break'

  const [active, setActive] = useState(true);

  
  useEffect(() => {
    let interval = null;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      // Смена типа сессии при окончании времени
      if (sessionType === 'Work') {
        setSessionType('Break');
        setTime(300); // 5 минут перерыва (5 * 60)
      } else {
        setSessionType('Work');
        setTime(1500); // 25 минут работы (25 * 60)
      }
    }

    return () => clearInterval(interval);
  }, [isActive, time, sessionType]);


  


  const showTable = () => {
    setActive(true);
  };

  const hideTable = ()=>{
    setActive(false);
  }
  const startTimer = () => {
    setIsActive(true);
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setSessionType('Work');
    setTime(1500);
  };

  // Функция для отображения времени в формате "мм:сс"
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, '0');
    const seconds = (timeInSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <div>
      <div className='timer-show'>
      <div className="timer-display-show">{formatTime(time)}</div>
      <div className="button-group">
              {!isActive ? (
                <button className="button" onClick={startTimer}>Старт</button>
              ) : (
                <button className="button" onClick={pauseTimer}>Пауза</button>
              )}
              <button className="button" onClick={resetTimer}>Сброс</button>
            </div>
      </div>
      {active ? (
      <TimerTomato 
      isActive={isActive}
          showTable={showTable}
          hideTable={hideTable}
          startTimer={startTimer}
          pauseTimer={pauseTimer}
          resetTimer={resetTimer}
          formatTime={formatTime}
          sessionType={sessionType}
          time={time}/>
          
      ): (
        
        <div className='button-container'>
          <button className='button-show' onClick={showTable}>show</button>
        </div>
        
      )}
      <div>
        
        
          <div className="youtube-player">
          <iframe width="887" height="499" src="https://www.youtube.com/embed/K69tbUo3vGs?autoplay=1&mute=1" title="Lord of The Rings | The Shire - Music from the Soundtrack - Visual Escape" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        
        
        
      </div>
    </div>
  );
}

export default App;