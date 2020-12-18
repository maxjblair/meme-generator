import React from "react"

class MemeCanvas extends React.Component {
    constructor() {
        super()
        this.handleDownloadButton = this.handleDownloadButton.bind(this)
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

    handleDownloadButton(e) {
        e.preventDefault()
        this.props.handleImageDownload()
    }

    render() {
        const src = this.props.img

        return ( 
            <div>
                <div className="meme-img-container">
                    <canvas id="canvas" crossOrigin="anonymous" />
                    <img id="main-image" src={src} className="hidden" crossOrigin="anonymous" />
                    {/*<h2 className="meme-top-text">{this.props.topText}</h2>
                    <h2 className="meme-bottom-text">{this.props.bottomText}</h2>*/}
                </div>
                <button 
                    className={"btn " + this.props.themeClass} 
                    id="btn-download" 
                    onClick={this.handleDownloadButton}
                    >Download Meme
                </button>
            </div>
        )
    }
}

export default MemeCanvas