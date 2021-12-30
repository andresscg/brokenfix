import React, {useState, useRef, useEffect} from 'react'
import {useSelector} from 'react-redux';
import '../styles/Review.css'
import Swal from 'sweetalert2'
import {toast} from 'react-toastify'

const Review = (props) => {

  const token = useSelector(state => state.users.token)
  const inputHandler = useRef()
  const [shown, setShown] = useState(false)

  useEffect(() => {
    setShown(false)
  }, [props.render])

  const confirmAlert = () => {
    Swal.fire({
      title: 'Are you sure you want to delete your review?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#a72626',
      cancelButtonColor: '#242424',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if(result.isConfirmed) {
        props.deleteReview(props.worker_id, props.newReview._id, token);
        toast.success("Your review has been deleted", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      }
    })
  }

  return (
    <div className="review-data">
      <div className="user-photo" style={{backgroundImage: `url(${props.newReview.user.img})`}}></div>
      <div className="review-container">
        <div className="user-name">
          <p>{props.newReview.user.name}</p>
        </div>
        <div className="review-data">
            <p className="review-text">
              {props.newReview.comment}
            </p>
            <p className="review-rating">
              {props.newReview.rating}
              <i className="fas fa-star rating-star" style={{color: '#c2b617'}}></i>
            </p>
            {/* {allowReview ? <i className="fas fa-trash-alt delete" onClick={confirmAlert}></i> : null} */}
          </div>
      </div>
    </div>
  )
}

export default Review
