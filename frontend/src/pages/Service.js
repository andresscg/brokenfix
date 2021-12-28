import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import servicesActions from "../redux/actions/servicesActions";

const Service = (props) => {
  const service = useSelector((state) => state.services.newService);
  const services = useSelector((state) => state.services.allServices);
  const location = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!services.length) {
      navigate('/services')
    }
    try {
      dispatch(servicesActions.getOneService(location.id));
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="service-section">
      <h1>Her you can find all workers offering {service.name} services</h1>
    </div>
  );
};

export default Service;
