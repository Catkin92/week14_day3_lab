import React from 'react';
import MetronomeBox from '../containers/MetronomeBox';

const MetronomePlayer = ({onPlay, handleSlide, metronomeSpeed, imgSrc}) => {

    function onChange(e) {
        handleSlide(e.target.value);
    }

    return(
        <div className="player">
            <button onClick={onPlay}><img src={imgSrc}></img></button>
            <div className="metro-slider">
                <input type="range" min="40" max="218" value={metronomeSpeed} onChange={onChange} className="slider"></input>
                <p>{metronomeSpeed}</p>
            </div>
        </div>
    )

}

export default MetronomePlayer;