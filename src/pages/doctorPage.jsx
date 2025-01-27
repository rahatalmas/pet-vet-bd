import '../css/doctorPage.css';
import { useState, useRef } from 'react';

function DoctorsPage() {
  const sliderRef = useRef(null);
  const doctors = [
    { name: "Dr. Uzumaki Naruto", specialization: "Cardiologist",picture:"./assets/naruto1.jpg" },
    { name: "Dr. Itachi Uchiha", specialization: "Dermatologist",picture:"./assets/itachi.jpg" },
    { name: "Dr. Sakura Haruno", specialization: "Neurologist",picture:"./assets/sakura1.jpg" },
    { name: "Dr. Goku", specialization: "Pediatrician",picture:"./assets/goku.jpg" },
    { name: "Dr. Uchiha Madara", specialization: "Orthopedic",picture:"./assets/madara.jpg" },
    { name: "Dr. Uchiha Sarada", specialization: "Oncologist",picture:"./assets/naruto1.jpg" },
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
            <h1>Find Best Pet Doctors</h1>
            <p>Some descriptive text goes here. It can span multiple lines to describe your product or service.</p>
            <button className="cta-button">Click Me</button>
          </div>
          <div className="image-right">
            <img src="./assets/vet.jpg" alt="Banner Image" />
          </div>
        </div>
      </div>

      <div className='menu-wrapper'>
           <h1 className='menu-name'><i className="fa fa-list"></i>
           Doctor List</h1>
           <h1 className='menu-btn'>
            View All
           <i className="fa fa-arrow-right"></i>

           </h1>
        </div>

      <div className="doctor-slider-wrapper">
        <button className="slider-btn left" onClick={handlePrev}>❮</button>
        <div className="doctor-list-container" ref={sliderRef}>
          {doctors.map((doctor, index) => (
            <div key={index} className="doctor-card">
              <div className="card-content">
                <div className="card-image-sec">
                  <img src={doctor.picture} style={{height:'176px',width:"100%",objectFit:"cover",borderRadius:"4px"}}/>
                </div>
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
      <div className='something'>
      </div>
    </div>
  );
}

export default DoctorsPage;
