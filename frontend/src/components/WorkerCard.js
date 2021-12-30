import React from "react";
import "../styles/WorkerCard.css";
import Reviews from "./Reviews";
import {toast} from 'react-toastify'; 

const WorkerCard = (props) => {
  const { _id, name, lastName, img, services, schedule, reviews } = props.data;

  return (
    <div className="worker-card" key={_id}>
      <div className="worker-container">
        <div className="worker-info">
          <div className="worker-info-active">
            <h3 className="worker-name">
              {name} {lastName}
            </h3>
              <div className="worker-picture-active">
                <div
                  style={{ backgroundImage: `url(${img})` }}
                  className="worker-picture"
                ></div>
              <button
                className="get-in-touch"
                style={{border: 'none', 
                padding: '5px 15px', 
                backgroundColor: '#15a530', 
                color: '#fff', 
                cursor: 'pointer', 
                borderRadius: '.3rem', 
                marginTop: '.5rem'}}
                onClick={() => {
                  toast.success("The worker will contact you soon!", {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                }}
              >
                Get in touch
              </button>
            </div>
            <div>
              <h3 className="worker-service">{services.name}</h3>
            </div>
          </div>
          <div className="worker-schedule">
            {schedule.map((day, index) => {
              return (
                <div key={index} className="schedule-day">
                  <p className="day">{day.day}</p>
                  <p className="availability">
                    7am - 12pm: {day.morning ? "Available" : "Not Available"}
                  </p>
                  <p className="availability">
                    1pm - 7pm: {day.afternoon ? "Available" : "Not Available"}
                  </p>
                </div>
              );
            })}
            <div className="worker-reviews">
              <Reviews workerId={_id} workerReviews={reviews} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkerCard;
