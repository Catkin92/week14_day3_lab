import React, { Component } from 'react';
import MetronomePlayer from '../components/MetronomePlayer';
import MetronomeSound from '../components/MetronomeSound';
import Sounds from '../audios';

class MetronomeBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            intervalID: 0,
            metronomeSpeed: 100,
            sounds: Sounds,
            selectedSound: 0
        }
        this.onPlay = this.onPlay.bind(this);
        this.beep = this.beep.bind(this);
        this.handleSlide = this.handleSlide.bind(this);
        this.handleSoundSelected = this.handleSoundSelected.bind(this);
    }

    onPlay() {
        if (!this.state.intervalID) {
            this.setState({ intervalID: setInterval(this.beep, (60000 / this.state.metronomeSpeed)) });
        }
        else {
            clearInterval(this.state.intervalID);
            this.setState({ intervalID: 0 });
        }
    }

    handleSlide(speed) {
        this.setState({ metronomeSpeed: speed })
        if (this.state.intervalID) {
            clearInterval(this.state.intervalID);
            this.setState({ intervalID: setInterval(this.beep, (60000 / speed)) });
        }
        
    }

    beep() {
        var snd = new Audio(this.state.sounds[this.state.selectedSound].audio);
        snd.play();
    }

    handleSoundSelected(index) {
        this.setState({ selectedSound: index });
    }



    render() {
        return (
            <div className="metronome">
                <h1>METRONOME BY CAT AND PAOLO</h1>
                <MetronomePlayer 
                    onPlay={this.onPlay} 
                    handleSlide={this.handleSlide} 
                    metronomeSpeed={this.state.metronomeSpeed}
                    imgSrc={!this.state.intervalID ? "./play.png" : "./pause.png"}
                    speed={this.state.metronomeSpeed}/>
                <MetronomeSound sounds={this.state.sounds} handleSoundSelected={this.handleSoundSelected}/>
            </div>
        )

    }

}

export default MetronomeBox;