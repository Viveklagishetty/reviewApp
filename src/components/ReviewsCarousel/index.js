import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    reviewNum: 0,
  }

  previousReview = () => {
    const {reviewNum} = this.state

    if (reviewNum - 1 >= 0) {
      this.setState(prevState => ({
        reviewNum: prevState.reviewNum - 1,
      }))
    }
  }

  nextReview = () => {
    const {reviewNum} = this.state
    const {reviewsList} = this.props

    const lengthOfReviewList = reviewsList.length

    if (reviewNum + 1 < lengthOfReviewList) {
      this.setState(prevState => ({
        reviewNum: prevState.reviewNum + 1,
      }))
    }
  }

  render() {
    const {reviewNum} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[reviewNum]

    return (
      <div className="app-container">
        <h1 className="heading">Reviews</h1>
        <div className="carousel-container">
          <button
            className="arrow-button"
            type="button"
            onClick={this.previousReview}
            data-testId="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              className="left-arrow"
              alt="left arrow"
            />
          </button>
          <div className="review-container">
            <img src={imgUrl} alt={username} className="user-img" />
            <p className="user-name">{username}</p>
            <p className="company-name">{companyName}</p>
            <p className="description">{description}</p>
          </div>
          <button
            className="arrow-button"
            type="button"
            onClick={this.nextReview}
            data-testId="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              className="right-arrow"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
