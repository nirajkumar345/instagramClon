import {Component} from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
  ],
}

class StoriesList extends Component {
  renderSlider = data => (
    <Slider {...settings}>
      {data.map(eachLogo => {
        const {userName, storyUrl, userId} = eachLogo
        return (
          <div className="slick-item" key={userId}>
            <img className="logo-image" src={storyUrl} alt="user story" />
            <p className="story-name">{userName}</p>
          </div>
        )
      })}
    </Slider>
  )

  render() {
    const {storiesList} = this.props

    return (
      <div className="main-container">
        <div className="slick-container">
          {this.renderSlider(storiesList.usersStories)}
        </div>
      </div>
    )
  }
}

export default StoriesList