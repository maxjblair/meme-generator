import React from "react"
import Carousel from 'react-multi-carousel'

class ImageThumb extends React.Component {
    constructor(props) {
        super()
        this.handleImageChange = this.handleImageChange.bind(this)
    }

    handleImageChange(event) {
        const {src} = event.target
        event.preventDefault()
        this.props.handleImageChangeAI(src)
    }

    imageRow() {
        const sIndx = this.props.currImgIndx
        const eIndx = sIndx - 1
        const memesA = this.props.allMemes.slice(0,eIndx)
        const memesB = this.props.allMemes.slice(sIndx, this.props.allMemes.length)
        const memes = memesB.concat(memesA)

        const thumbs = memes.map((img, index) =>
            <div key={index} id={"img-gallery-" + index} className="img-gallery-container">
                <div className="col img-gallery-img">
                    <button className="meme-image-button" onClick={this.handleImageChange}>
                        <img className="img-fluid" src={img.url} alt={img.name} />
                    </button>
                </div>
                <label>{img.name}</label>
            </div>
        )
        return (thumbs)
    }

    render() {
        const headerClass = "col img-gallery-header " + this.props.themeClass
        const responsive = {
            superLargeDesktop: {
                // the naming can be any, depends on you.
                breakpoint: { max: 4000, min: 3000 },
                items: 5,
                partialVisibilityGutter: 40, // this is needed to tell the amount of px that should be visible.
                slidesToSlide: 5
            },
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 4,
                partialVisibilityGutter: 40, // this is needed to tell the amount of px that should be visible.
                slidesToSlide: 4
            },
            tablet: {
                breakpoint: { max: 1023, min: 464 },
                items: 3,
                partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
                slidesToSlide: 3
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
                partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
                slidesToSlide: 1
            }
        };

        return (
            <div className="col img-gallery" id="image-gallery">
                <div className={headerClass}>Image Gallery</div>
                <Carousel
                    swipeable={true}
                    draggable={false}
                    showDots={false}
                    responsive={responsive}
                    partialVisible={true}
                    ssr={true} // means to render carousel on server-side.
                    slidesToSlide={3}
                    infinite={true}
                    //autoPlay={this.props.deviceType !== "mobile" ? true : false}
                    autoPlay={false}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="transform 400ms ease-in-out"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    {this.props.currImgIndx ? this.imageRow() : ""}
                </Carousel>
            </div>
        )
    }
}

export default ImageThumb