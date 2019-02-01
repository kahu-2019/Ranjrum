import React from 'react'

const sound = {
    "Q": {
        track: '/sounds/bassdrum.mp3',
        desc: "BassDrum"
    },
    "W": {
        track: "/sounds/hi-hat.mp3",
        desc: "Hi-hat"
    },
    "E": {
        track: "/sounds/im-thinking.mp3",
        desc: "I'm-thinking"
    },
    "A": {
        track: "/sounds/snare.mp3",
        desc: "Snare"
    },
    "S": {
        track: "/sounds/array-from.mp3",
        desc: "Array.from()"
    },
    "D": {
        track: "/sounds/arpo.mp3",
        desc: "Arpo"
    }
}

const Title = (props) => {
    return (
        <div className="title">
            <div className="titleContainer">
                <h1>{props.text}</h1>
                <h5>{props.subtext}</h5>
            </div>
        </div>
    );
};

const Display = (props) => {
    return (
        <div id="display">
            {props.output}
        </div>
    );
};

class DrumPad extends React.Component {
    constructor(props) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(event) {
        const id = event.target.id.slice(-1);
        const ref = event.target.children[0];
        ref.pause();
        ref.currentTime = 0;
        ref.play();
        window.display.setOutput(id);
    }

    render() {
        return (
            <div className="grid-container">
                <button id={this.props.drumPadId} className="grid-item" onClick={this.handleOnClick}>

                    <audio className="clip" src={this.props.sndSrc} id={this.props.clipId}>
                        Your browser does not support the audio element.
                </audio>
                    {this.props.text}
                </button>
            </div>

        );
    }
}

const ids = ["Q", "W", "E", "A", "S", "D"];
const pads = ids.map((desc) => <DrumPad key={"pad_" + desc}
    drumPadId={"uid" + desc}
    clipId={desc}
    sndSrc={sound[desc].track}
    text={desc} />);

class Grid extends React.Component {

    constructor(props) {
        super(props);
        this.state = { output: "" };
        window.display = this;
        this.setOutput = this.setOutput.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.playDrum = this.playDrum.bind(this);
        this.playSound = this.playSound.bind(this);
    }

    setOutput(id) {
        this.setState({ output: sound[id].desc });
    }

    handleKeyDown(event) {

        let keyPressed = event.key;
        keyPressed = keyPressed.toUpperCase();

        if (keyPressed === "q" || "Q" || "w" || "W"
            || "e" || "E" || "a" || "A"
            || "s" || "S" || "d" || "D") {

            this.playDrum(keyPressed);


        }
    }

    playDrum(k) {
        switch (k) {
            case "Q":
                var elem = document.getElementById("Q");
                this.playSound(elem);
                this.setState({ output: sound["Q"].desc });
                break;
            case "W":
                var elem = document.getElementById("W");
                this.playSound(elem);
                this.setState({ output: sound["W"].desc });
                break;
            case "E":
                var elem = document.getElementById("E");
                this.playSound(elem);
                this.setState({ output: sound["E"].desc });
                break;
            case "A":
                var elem = document.getElementById("A");
                this.playSound(elem);
                this.setState({ output: sound["A"].desc });
                break;
            case "S":
                var elem = document.getElementById("S");
                this.playSound(elem);
                this.setState({ output: sound["S"].desc });
                break;
            case "D":
                var elem = document.getElementById("D");
                this.playSound(elem);
                this.setState({ output: sound["D"].desc });
                break;
        }
    }

    playSound(el) {
        el.pause();
        el.currentTime = 0;
        el.play();
    }

    render() {
        return (
            <div id="drum-machine" onKeyDown={this.handleKeyDown} tabIndex="0" >
                <Title text="Ranjrum Machine"
                    subtext="" />
                <div className="grid container">
                    <div className="grid-container">
                        <Display output={this.state.output} />
                        {pads}
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        const app = document.getElementById("drum-machine");
        app.focus();
    }
}


// class Grid extends React.Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         return (
//             <div className="grid-container">
//                 <button onClick={() => PubSub.publish('drum', { action: 'play' })} className="grid-item" >Bass Drum</button>
//                 <button onClick={() => PubSub.publish('drum', { action: 'stop' })} className="grid-item">Hi-hat</button>
//                 {/* <button className="grid-item">I'm thinking</button>
//                 <button className="grid-item">Snare</button>
//                 <button className="grid-item">Array.from()</button>
//                 <button className="grid-item">Arpo</button> */}
//                 <DrumMachine song={song} />
//             </div>
//         )
//     }
// }



export default Grid