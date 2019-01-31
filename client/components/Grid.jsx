import React from 'react'
import DrumMachine from 'react-drum-machine'

const song = {
    "title": "example",
    "beatpermeasure": 4,
    "bpm": 79,
    "divisionperbeat": 4,
    "instruments": [
        {
            "title": "hihat",
            "image": "img/hihat.png",
            "sound": "https://content.dropboxapi.com/1/files/auto/CyCdh_K3ClHat-01.wav",
            "bearer": "JfnDpAnZcQ8AAAAAAAABYbt6Zvq6-U10DeFgzcZEbz7XYZrTv9ugPuuRl0ai9BFR",
            "bits": [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1]
        },
        {
            "title": "snare",
            "image": "http://i.imgur.com/NwDw9lZ.png",
            "sound": "https://content.dropboxapi.com/1/files/auto/snare.mp3",
            "bearer": "JfnDpAnZcQ8AAAAAAAABYbt6Zvq6-U10DeFgzcZEbz7XYZrTv9ugPuuRl0ai9BFR",
            "bits": [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1]
        },
        {
            "title": "kick",
            "image": "http://i.imgur.com/CmsdE9k.png",
            "sound": "https://content.dropboxapi.com/1/files/auto/kick.mp3",
            "bearer": "JfnDpAnZcQ8AAAAAAAABYbt6Zvq6-U10DeFgzcZEbz7XYZrTv9ugPuuRl0ai9BFR",
            "bits": [1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1]
        }
    ]
}

class Grid extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="grid-container">
                <button onClick={() => PubSub.publish('drum', { action: 'play' })} className="grid-item" >Bass Drum</button>
                <button onClick={() => PubSub.publish('drum', { action: 'stop' })} className="grid-item">Hi-hat</button>
                {/* <button className="grid-item">I'm thinking</button>
                <button className="grid-item">Snare</button>
                <button className="grid-item">Array.from()</button>
                <button className="grid-item">Arpo</button> */}
                <DrumMachine song={song} />
            </div>
        )
    }
}

export default Grid