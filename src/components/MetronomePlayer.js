import React from 'react';
import MetronomeBox from '../containers/MetronomeBox';

const MetronomePlayer = ({onPlay, handleSlide, metronomeSpeed}) => {

    function onChange(e) {
        handleSlide(e.target.value);
    }

    return(
        <>
        <button onClick={onPlay}>Click</button>
        <input type="range" min="40" max="218" onChange={onChange}></input>
        <p>{metronomeSpeed}</p>
        </>
    )

}

export default MetronomePlayer;