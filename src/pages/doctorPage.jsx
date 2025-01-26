import '../css/doctorPage.css';
import { useState, useRef } from 'react';

function DoctorsPage() {
  const sliderRef = useRef(null);
  const doctors = [
    { name: "Dr. John Doe", specialization: "Cardiologist" },
    { name: "Dr. Jane Smith", specialization: "Dermatologist" },
    { name: "Dr. Alex Brown", specialization: "Neurologist" },
    { name: "Dr. Emily White", specialization: "Pediatrician" },
    { name: "Dr. Michael Green", specialization: "Orthopedic" },
    { name: "Dr. Sarah Black", specialization: "Oncologist" },
  ];

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 460; // Scroll left by card width + margin
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 460; // Scroll right by card width + margin
    }
  };

  return (
    <div className="doctor-page">
      <div className="banner-wrapper">
        <div className="banner-content">
          <div className="text-left">
            <h1>Your Header Here</h1>
            <p>Some descriptive text goes here. It can span multiple lines to describe your product or service.</p>
            <button className="cta-button">Click Me</button>
          </div>
          <div className="image-right">
            <img src="./assets/vet.jpg" alt="Banner Image" />
          </div>
        </div>
      </div>

      <div className='menu-wrapper'>
           <h1 className='menu-name'>Doctor List</h1>
           <h1 className='menu-btn'>View All~</h1>
        </div>

      <div className="doctor-slider-wrapper">
        <button className="slider-btn left" onClick={handlePrev}>❮</button>
        <div className="doctor-list-container" ref={sliderRef}>
          {doctors.map((doctor, index) => (
            <div key={index} className="doctor-card">
              <div className="card-content">
                <div className="card-image-sec"></div>
                <div className="card-info-sec">
                  <h3>{doctor.name}</h3>
                  <p>{doctor.specialization}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="slider-btn right" onClick={handleNext}>❯</button>
      </div>
      {/* <div className="slider-dots">
        {doctors.map((_, index) => (
          <span key={index} className="dot"></span>
        ))}
      </div> */}
      <div>
        Hello world
      </div>
    </div>
  );
}

export default DoctorsPage;
