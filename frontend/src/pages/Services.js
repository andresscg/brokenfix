import React, { useState, useEffect } from "react";
import ServiceCard from "../components/ServiceCard";
import { useSelector, useDispatch } from "react-redux";
import servicesActions from "../redux/actions/servicesActions";
import "../App.css";
import { Link } from "react-router-dom";

const Service = () => {
  const services = useSelector((state) => state.services.allServices);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(servicesActions.getServices());
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <>
      <h2 className="services-title">Our Services</h2>
      <div className="services-section">
        {services.map((service) => {
          return (
            <Link
              to={`/services/${service._id}`}
              className="service-link"
              key={`${service._id}`}
            >
              <ServiceCard img={service.img}>{service.name}</ServiceCard>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Service;
