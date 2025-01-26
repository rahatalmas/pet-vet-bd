import { Outlet } from 'react-router';
import '../App.css';
//import vethospitalImg from '../assets/vethospital.png';

function App() {

  return (
    <>
      <div className='home-page'>

        <div className='welcome-banner'>
            <div className='banner-data'>
              <h1 className='banner-title'>What is Lorem Ipsum</h1>
              <p className='banner-para'>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
              <button className='banner-btn'>Download App</button>
            
            </div>
            <div className='banner-img'>
               <img className='banner-img-file' src="/assets/vethospital.png"/>
            </div>
        </div>
        

        <div className='section-header'>
            <h1 className='header'>Services</h1>
        </div>

        {/* service  cards sections */}
        
        <div className='service-section-wrapper'>
            <div className='service-section'> 
                
            <div className='service-card-container'>
                    <div className='service-image-section'>
                        <img className='service-card-img' src='/assets/hamsterrun.gif'/>
                    </div>
                    <div className='text-section'>
                          <h3>Order foods</h3>
                          <p className="service-card-description">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          </p>
                    </div>
                </div>

                <div className='service-card-container'>
                    <div className='service-image-section'>
                        <img className='service-card-img' src='/assets/hamsterrun.gif'/>
                    </div>
                    <div className='text-section'>
                          <h3>Order foods</h3>
                          <p className="service-card-description">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          </p>
                    </div>
                </div>

                <div className='service-card-container'>
                    <div className='service-image-section'>
                        <img className='service-card-img' src='/assets/hamsterrun.gif'/>
                    </div>
                    <div className='text-section'>
                          <h3>Order foods</h3>
                          <p className="service-card-description">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          </p>
                    </div>
                </div>

                <div className='service-card-container'>
                    <div className='service-image-section'>
                        <img className='service-card-img' src='/assets/hamsterrun.gif'/>
                    </div>
                    <div className='text-section'>
                          <h3>Order foods</h3>
                          <p className="service-card-description">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          </p>
                    </div>
                </div>


            </div>
        </div>
        {/* service section end */}
      </div>
    </>
  )
}

export default App;
