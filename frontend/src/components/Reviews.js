import React, {useRef, useState} from 'react'
import {toast} from 'react-toastify'
import ReactStars from 'react-rating-stars-component'
import {useSelector, useDispatch} from 'react-redux'
import Review from './Review'
import workersActions from '../redux/actions/workersActions'

const Reviews = (props) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.users.token)
  const id = useSelector(state => state.users.user._id)

  const [renderReviews, setRenderReviews] = useState(false)
  const [allReviews, setAllReviews] = useState(props.workerReviews)
  const [ratingValue, setRatingValue] = useState(0);

  const inputHandler = useRef()
  const ratingChanged = newRating => {
    setRatingValue(newRating)
  }

  const checkReview = () => {
    let commentText = inputHandler.current.value;
    let rating = ratingValue;

    if(rating != 0){
      sendReview()
    }else{
      toast.warning("Ups! You can't post a review without a rating!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }

  const sendReview = () => {
    let commentText = inputHandler.current.value;
    let rating = ratingValue;

    let review = {
      rating: rating,
      comment: commentText
    }

    dispatch(workersActions.handleReview(props.workerId, review, token))
      .then(res => {
        setAllReviews(res.reviews)
        toast.info(res.msg, {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      }).catch(err => console.log(err))
  }

  const deleteReview = (workerId, reviewId, token) => {
    dispatch(workersActions.deleteReview(workerId, reviewId, token))
      .then(res => {
        if(res.success) {
          setAllReviews(allReviews.filter(review => review._id !== reviewId))
        }else{
          throw new Error('Problem deleting comment')
        }
      }).catch(err => console.log(err));
  }
  allReviews.map(review =>{
    console.log(review.user)
  })
  return (
    <div className="reviews-section">
      <h4 className="reviews-title">Worker Reviews</h4>
      <div className="display-reviews">
        {allReviews.map(review => {
          return <Review key={review._id} newReview={review} deleteReview={deleteReview} />
        })}
      </div>
      <div className="input-review-container">
        <ReactStars count={5} onChange={ratingChanged} isHalf={false} activeColor="#ffd700" size={25}/>
        <input type="text" ref={inputHandler} className="input-comment" placeholder={!token ? 'You must be signed in to post a review' : ''} />
        <i className="fas fa-paper-plane send" onClick={checkReview} style={{cursor: "pointer"}}></i>
      </div>
      
    </div>
  )
}

export default Reviews
