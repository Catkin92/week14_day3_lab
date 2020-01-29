import React from 'react';
import MetronomeBox from '../containers/MetronomeBox';

const MetronomePlayer = (props) => {

    return(
        <button onClick={props.onPlay}>Click</button>
    )

}

export default MetronomePlayer;