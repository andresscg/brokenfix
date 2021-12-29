import React from 'react'

const WorkerCard = (props) => {
  const {_id, name, lastName, img, services, schedule} = props.data;

  return (
    <div className="worker-card" key={_id}>
      <div className="worker-container">
        <div className="worker-info">
          <img src={`/asstes/workers/${img}`} alt={img} className="worker-picture"/>
          <h3 className="worker-name">
            {name} {lastName}
          </h3>
          <h4 className="worker-service">
            {services.name}
          </h4>
          <div className="worker-schedule">
            {schedule.map(day => {
              return(
                <div className="schedule-day">
                  <p className="day">
                    {day.day}
                  </p>
                  <p className="availability">
                    7am-12pm: {day.morning ? 'Available' : 'Not Available'}
                  </p>
                  <p className="availability">
                    1pm-7pm: {day.afternoon ? 'Available' : 'Not Available'}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
        <div className="worker-reviews">

        </div>
      </div>
    </div>
  )
}

export default WorkerCard
