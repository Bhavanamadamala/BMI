import React, { useState } from 'react';
import './App.css';

const App = () => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBMI] = useState(null);

    const calculateBMI = () => {
        const heightMeters = height / 100;
        const bmiValue = weight / (heightMeters * heightMeters);
        setBMI(bmiValue.toFixed(2));
    };

    const resetForm = () => {
        setHeight('');
        setWeight('');
        setBMI(null);
    };

    return (
        <div className="App">
            <h1 className="title">BMI Calculator</h1>
            <div className="form">
                <div>
                    <label>Height (cm):</label>
                    <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
                </div>
                <div>
                    <label>Weight (kg):</label>
                    <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
                </div>
                <button onClick={calculateBMI}>Calculate BMI</button>
                <button onClick={resetForm}>Reset</button>
            </div>
            {bmi && (
                <div className="result">
                    <h2>Your BMI is: {bmi}</h2>
                </div>
            )}
            <div className="creator">
                <p>Created by Bhavana</p>
                <p>Pace University</p>
                <p>Introduction to Programming</p>
            </div>
        </div>
    );
};

export default App;
