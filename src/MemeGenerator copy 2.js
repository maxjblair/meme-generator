import React, {Component} from "react"
import MemeCanvas from './MemeCanvas'

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
        this.handleImageDownload = this.handleImageDownload.bind(this)
    }
    
    componentDidMount() {
        const canvas = document.getElementById('canvas')
        const ctx = canvas.getContext('2d')
        const img = document.getElementById('main-image')

        img.onload = () => {
            canvas.width = img.naturalWidth
            canvas.height = img.naturalHeight
            ctx.drawImage(img, 0, 0)
        }
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({ 
            [name]: value 
        })

        const canvas = document.getElementById('canvas')
        const ctx = canvas.getContext('2d')
        let w = canvas.width - 40
        ctx.rect(20, 20, w, 100)
        ctx.fillStyle = 'white'
        ctx.textAlign = 'center'
        ctx.font = "2em impact, sans serif"
        ctx.fillText(this.state.topText,50,30)
    }
        
    handleSubmit(event) {
        event.preventDefault()
    }
    
    handleImageChange() {
        this.props.handleImageChange()
    }

    handleImageDownload() {
        let imgSrc = document.getElementById('main-image').src
        let link = document.createElement('a');
        let durl = document.getElementById('canvas').toDataURL()
        let fileName = imgSrc.substring(imgSrc.lastIndexOf('/')+1)
        link.download = fileName;
        link.href = durl;
        link.click();
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
                        <button 
                            className={"btn " + this.props.themeClass} 
                            onClick={this.handleImageChange}
                        >New Random Image</button>
                    </div>
                </div>
                <div className="col-xs-12 col-lg-6 meme">
                    <div className="meme-img-container">
                        <canvas id="canvas" crossOrigin="anonymous" />
                        <img id="main-image" src={this.props.randomImg} className="hidden" crossOrigin="anonymous" />
                        <h2 className="meme-top-text">{this.state.topText}</h2>
                        <h2 className="meme-bottom-text">{this.state.bottomText}</h2>
                    </div>
                    <button
                        className={"btn " + this.props.themeClass}
                        id="btn-download"
                        onClick={this.handleImageDownload}
                    >Download Meme
                    </button>
                    {/*<div className="meme-img-container">
                        <MemeCanvas 
                            img={this.props.randomImg} 
                            themeClass={this.props.themeClass}
                            topText={this.state.topText}
                            bottomText={this.state.bottomText}    
                            handleImageDownload={this.handleImageDownload}
                        />
                        {/*}
                        <img className="img-fluid" src={this.props.randomImg} alt="" />
                        <h2 className="meme-top-text">{this.state.topText}</h2>
                        <h2 className="meme-bottom-text">{this.state.bottomText}</h2>
                        
                    </div>*/}
                </div>
            </div>
        )
    }
}

export default MemeGenerator