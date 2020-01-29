import React from 'react';

const MetronomeSound = ({ sounds, handleSoundSelected }) => {

    const soundMap = sounds.map(({ name, audio }, index) => {
    return (
        <option
            value={index}
            key={name}
            >
            {name}
        </option>
    )})

    function handleSelect(e) {
        handleSoundSelected(e.target.value);
    }

    return (
        <select className="metronome-select" onChange={handleSelect}>
            {soundMap}
        </select>
    )
}

export default MetronomeSound;