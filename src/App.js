import React from "react"
import Header from "./Header"
import MemeGenerator from "./MemeGenerator"
import AllImages from "./AllImages"
import Footer from "./Footer"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currImgIndx: '',
      themeClass: 'ole',
      activeImg: '',
      allMemeImgs: [],
    }
    this.handleClassChange = this.handleClassChange.bind(this)
    this.handleRandomImageChange = this.handleRandomImageChange.bind(this)
    this.handleStaticImageChange = this.handleStaticImageChange.bind(this)
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data
        // generate a random image
        const randNum = Math.floor(Math.random() * memes.length)
        const randMemeImg = memes[randNum].url
        this.setState({
          currImgIndx: randNum,
          activeImg: randMemeImg,
          allMemeImgs: memes 
        })
      })
  }

  handleRandomImageChange() {
    const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
    const randMemeImg = this.state.allMemeImgs[randNum].url
    this.setState({ activeImg: randMemeImg })
  }

  handleStaticImageChange(src) {
    this.setState({ activeImg: src })
  }

  handleClassChange() {
    let tmpState = this.state.themeClass

    if (tmpState === 'ole') {
      this.setState(prevState => ({
        themeClass: "pony"
      }))
    } else {
      this.setState(prevState => ({
        themeClass: "ole"
      }))
    }
  }

  render() {
    const tmpClass = this.state.themeClass
    return (

      <div>
        <Header themeClass={tmpClass} />
        <MemeGenerator
          themeClass={tmpClass}
          handleImageChange={this.handleRandomImageChange}
          activeImg={this.state.activeImg}
          allMemeImgs={this.state.allMemeImgs}
        />
        <AllImages
          currImgIndx={this.state.currImgIndx}
          allMemeImgs={this.state.allMemeImgs}
          themeClass={tmpClass}
          handleImageChange={this.handleStaticImageChange}
        />
        <Footer 
          themeClass={tmpClass} 
          handleThemeChange={this.handleClassChange} 
        />
      </div>
    )
  }
}

export default App