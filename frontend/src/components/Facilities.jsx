import React from 'react';
import '../style/Facilities.css';
import TumerImg from '../assets/logo/tumer.jpg';
import TumerImg1 from '../assets/braintumer/image-102.jpg';
import TumerImg2 from '../assets/braintumer/image-103.jpg';
import TumerImg3 from '../assets/braintumer/images-101.jpg';

const Facilities = () => {
  return (
    <div>
      <div className="container">
        <h2 style={{ letterSpacing: '2px' }}>
        We specialize in advanced medical imaging solutions for brain health, including Brain Tumor Detection, Alzheimer's Detection, and other neurological disease diagnostics. Here's a quick overview of what we do.
          <span style={{ color: 'rgb(252, 70, 100)' }}> Do</span>
        </h2>
        <div className="service-list">
          <div className="service-item">
            <div className="card">
              <img
                src={TumerImg}
                alt="Comprehensive Medical Diagnosis"
              />
              <div className="card-content">
                <h2>Comprehensive Medical Diagnosis</h2>
                <p>


                  Our medical facility offers diagnostic services with advanced imaging like MRI, CT scans, and X-rays. Our skilled professionals collaborate with patients to ensure accurate diagnosis and effective treatment plans. Early detection and accurate diagnosis are key to managing health, and we are committed to providing the highest level of care possible.
                </p>
                <div className="project-btns">
                  <a href="/braintumer" className="button">
                    Check
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="service-item">
            <div className="card">
              <img
                src={TumerImg1}
                alt="Brain Tumor Detection"
              />
              <div className="card-content">
                <h2>Brain Tumor Detection</h2>
                <p>
                  Brain tumor detection involves using medical imaging techniques like MRI, CT scans, and PET scans to identify abnormal growths in the brain. These methods help doctors pinpoint the location, size, and type of the tumor, enabling accurate diagnosis and effective treatment planning. Early detection improves patient outcomes.
                </p>
                <div className="project-btns">
                  <a href="/braintumer" className="button">
                    Check
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="service-item">
            <div className="card">
              <img
                src={TumerImg2}
                alt="Brain Tumor Detection"
              />
              <div className="card-content">
                <h2>Alzheimer's Detection</h2>
                <p>
                Alzheimer's detection uses advanced imaging like MRI and PET scans to spot early brain changes, such as shrinkage or abnormal protein buildup. These techniques enable accurate diagnosis and treatment planning, improving patient outcomes and quality of life.
                </p>
                <div className="project-btns">
                  <a href="/alzheimers" className="button">
                    Check
                  </a>
                </div>
              </div>

            </div>
          </div>
          <div className="service-item">
  <div className="card">
    <img
      src={TumerImg3} 
      alt="Hemorrhage Detection"
    />
    <div className="card-content">
      <h2>Hemorrhage Detection</h2>
      <p>
        Hemorrhage detection involves using advanced imaging techniques like CT scans, MRI, and angiography to identify and locate bleeding in the brain. Early diagnosis is critical for managing intracranial hemorrhages, as it helps doctors determine the severity and plan appropriate treatment, potentially saving lives.
      </p>
      <div className="project-btns">
        <a href="/hemorrhage" className="button">
          Check
        </a>
      </div>
    </div>
  </div>
</div>



        </div>
      </div>
    </div>
  );
};

export default Facilities;
