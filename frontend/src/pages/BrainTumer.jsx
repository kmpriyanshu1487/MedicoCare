import React, { useState } from 'react';
import '../style/BrainTumer.css';
import Result from '../pages/Result'

const BrainTumer = () => {
    const [imagePreview, setImagePreview] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="braintumer-hero">
            <div className="hero-content">
                <h1> What our model <span style={{ color: 'rgb(252, 70, 100)' }}> Do</span>
                </h1>
            <p>Our model leverages advanced machine learning algorithms to detect and diagnose brain tumors and Alzheimer’s disease early. By analyzing medical images such as MRI and CT scans, the model identifies abnormalities in the brain that could indicate a tumor or signs of Alzheimer’s. Additionally, it helps predict disease progression by studying patterns in brain activity. Early detection allows for timely intervention, improving patient outcomes and treatment efficacy. Our solution aids healthcare professionals in making accurate diagnoses and enhances personalized care for patients, contributing to better management of neurological health.</p>
           
            </div>
            <div className="image-display">
                {imagePreview ? <img src={imagePreview} alt="Uploaded Preview" className="preview-image" /> : 'No image uploaded'}
            </div>
            <div className="upload-image">
                <input
                    type="file"
                    onChange={handleImageUpload}
                    accept="image/*"
                />
                <button className="hero-btn">Upload</button>
            </div>
            <Result/>
        </div>
          
    );
};

export default BrainTumer;
