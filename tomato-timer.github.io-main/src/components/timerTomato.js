import React from "react";
import '../App.css';


function timerTomato(props){
    return(
        <>
    
        <div className='timer-table'>
        <div className='timer'>
          <div className="tomato-timer-container">
            <h2 className='timer-text'>{props.sessionType === 'Work' ? 'Работа' : 'Перерыв'}</h2>
            <div className="timer-display">{props.formatTime(props.time)}</div>
            <div className="button-group">
              {!props.isActive ? (
                <button className="button" onClick={props.startTimer}>Старт</button>
              ) : (
                <button className="button" onClick={props.pauseTimer}>Пауза</button>
              )}
              <button className="button" onClick={props.resetTimer}>Сброс</button>
            </div>
            <iframe title="music-spotify what lofi girl" src="https://open.spotify.com/embed/playlist/4VN7J0uq62foOhZndwOegy?utm_source=generat&autoplay=1" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
          
        </div>
       
        <div className='button-container'><button className='button-hide' onClick={props.hideTable}>hide</button></div>
        </div>
        
      
      </>
    )
}

export default timerTomato;