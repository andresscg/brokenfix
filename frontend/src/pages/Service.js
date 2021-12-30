import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import servicesActions from "../redux/actions/servicesActions";
import workersActions from "../redux/actions/workersActions";
import WorkerCard from "../components/WorkerCard";

const Service = (props) => {
  const service = useSelector((state) => state.services.newService);
  const services = useSelector((state) => state.services.allServices);
  const workers = useSelector((state) => state.workers.workersByService);

  const location = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!services.length) {
      navigate("/services");
    }
    try {
      dispatch(servicesActions.getOneService(location.id));
      dispatch(workersActions.getWorkersByService(location.id));
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="main-services service-section p-5">
      <h1 className="services-title pt-3 pb-3">
        Here you can find all workers offering {service.name} services
      </h1>
      <div className="workers-cards">
        {workers.map((worker) => {
          return <WorkerCard data={worker} key={worker._id} />;
        })}
      </div>
    </div>
  );
};

export default Service;
