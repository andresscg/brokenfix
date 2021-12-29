import React, {useState, useRef, useEffect} from 'react'
import {useSelector} from 'react-redux';


const Review = (props) => {

  const userId = useSelector(state => state.users.user._id)
  const token = useSlector(state => state.users.token)
  const inputHandler = useRef()
  const [shown, setShown] = useState(false)
  const allowReview = props.newReview.user._id === userId

  useEffect(() => {
    setShown(false)
  }, [props.render])

  const reviewShowed = 
    <div className="review-container">
      {!shown 
        ? 
          <div className="review-data">
            <p className="review-text">
              {props.newReview.comment}
            </p>
            <p className="review-rating">
              {props.newReview.rating}
            </p>
          </div>
        :
          <div className="edit-box">
            <input type="text" defaultValue={props.newReview.comment} ref={inputHandler} />
            <input type="number" defaultValue={props.newReview.rating} ref={inputHandler} />
            <i className="fas fa-paper-plane send" onClick={() => props.editNewReview(props.newReview._id, inputHandler.current.value, token)}></i>
            <i className="fas fa-trash-alt delete" onClick={confirmAlert}></i>
          </div>
      }
    </div>

  return (
    <div>
      
    </div>
  )
}

export default Review
