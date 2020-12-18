import React from "react"
import ImageThumb from "./ImageThumb"

class AllImages extends React.Component {
    constructor(props) {
        super()
        this.handleImageChange = this.handleImageChange.bind(this)
    }

    handleImageChange(src) {
        this.props.handleImageChange(src)
    }

    render() {
        return(
            <div className="row meme-images-all">
                <ImageThumb
                    currImgIndx={this.props.currImgIndx}
                    handleImageChangeAI={this.handleImageChange} 
                    themeClass={this.props.themeClass} 
                    allMemes={this.props.allMemeImgs} 
                />
            </div>
        )
    }
}

export default AllImages