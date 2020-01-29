import React, {Component} from 'react';
import MetronomePlayer from '../components/MetronomePlayer';

class MetronomeBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            playing: false
        }
        this.onPlay = this.onPlay.bind(this);
    }

    onPlay() {
        this.setState(prevState => {
            return {playing: !prevState.playing}
        })
    }

    render() {
        return (
            <MetronomePlayer onPlay={this.onPlay}/>
        )

    }

}

export default MetronomeBox;