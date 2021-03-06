import React, {Component} from "react"

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleImageChange = this.handleImageChange.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({ 
            [name]: value 
        })
    }
        
    handleSubmit(event) {
        event.preventDefault()
    }
    
    handleImageChange() {
        this.props.handleImageChange()
    }

    render() {
        return (
            <div className="row meme-setup-container">
                <div className="col-xs-12 col-lg-6">
                    <form className="meme-form" onSubmit={this.handleSubmit}>
                        <div>
                            <label>Text at top of image:</label>
                            <input
                                type="text"
                                name="topText"
                                placeholder="Top Text"
                                value={this.state.topText}
                                onChange={this.handleChange}
                            /> 
                        </div>
                        <div>
                            <label>Text at bottom of image:</label>
                            <input 
                                type="text"
                                name="bottomText"
                                placeholder="Bottom Text"
                                value={this.state.bottomText}
                                onChange={this.handleChange}
                            /> 
                        </div>
                    </form>
                    <div className="meme-button-container">
                        <button className={"btn " + this.props.themeClass} onClick={this.handleImageChange}>New Random Image</button>
                    </div>
                </div>
                <div className="col-xs-12 col-lg-6 meme">
                    <div className="meme-img-container">
                        <img className="img-fluid" src={this.props.randomImg} alt="" />
                        <h2 className="meme-top-text">{this.state.topText}</h2>
                        <h2 className="meme-bottom-text">{this.state.bottomText}</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default MemeGenerator