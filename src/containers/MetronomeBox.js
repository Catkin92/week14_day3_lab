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
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
    }

    onPlay() {
        !this.state.intervalID ? this.play(this.state.metronomeSpeed) : this.pause();
    }

    handleSlide(speed) {
        this.setState({ metronomeSpeed: speed })
        if (this.state.intervalID) {
            this.pause();
            this.play(speed);
        }
    }

    play(speed) {
        this.setState({ intervalID: setInterval(this.beep, (60000 / speed)) });
    }

    pause() {
        clearInterval(this.state.intervalID);
        this.setState({ intervalID: 0 });
    }

    beep() {
        const snd = new Audio(this.state.sounds[this.state.selectedSound].audio);
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
                    imgSrc={!this.state.intervalID ? "./play.png" : "./pause.png"} />
                <MetronomeSound sounds={this.state.sounds} handleSoundSelected={this.handleSoundSelected} />
            </div>
        )

    }

}

export default MetronomeBox;