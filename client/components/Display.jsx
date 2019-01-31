import React from 'react'

class Display extends React.Component {
    constructor(props) {
        super(props)

        this.randomHexColor = () =>
        `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
    
        this.state = {
            style: { 
            backgroundColor: this.randomHexColor ()
            }
        }
    }
    render() {
 
        const clickHandler = (evt) => {

            this.setState({
                style: {backgroundColor: this.randomHexColor ()}
            
            })
        }

        return(
            <div className="display-container">
             <div className="display-item" style={this.state.style} onClick={clickHandler}>effects</div> 
             
            
            </div>
        )
    }

}

export default Display
