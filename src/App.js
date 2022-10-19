import React, { useState } from "react";
import "./App.css";
import "./index.css";

function App() {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmi, setBmi] = useState("");
    const [message, setMessage] = useState("");

    let calcBmi = (event) => {
        event.preventDefault();

        if (weight === 0 || height === 0) {
            alert("Please enter a valid weight and height");
        } else {
            let bmi = weight / (height * height);
            setBmi(bmi.toFixed(1));
        }

        //Logic for message
        if (bmi < 18.5) {
            setMessage("You are underweight");
        } else if (bmi > 18.5 && bmi < 25) {
            setMessage("You are a healthy weight");
        } else {
            setMessage("You are overweight");
        }
    };

    //show
    let imgSrc;

    if (bmi < 1) {
        imgSrc = null;
    } else {
        if (bmi < 18.5) {
            imgSrc = require("../src/assets/underweight.jpg");
        } else if (bmi > 18.5 && bmi < 25) {
            imgSrc = require("../src/assets/normalweight.jpg");
        } else {
            imgSrc = require("../src/assets/overweight.jpg");
        }
    }

    let reload = () => {
        window.location.reload();
    };

    return (
        <div className="App">
            <div className="container">
                <h1 className="center">BMI CALCULATOR</h1>
                <form onSubmit={calcBmi}>
                    <div>
                        <label>Weight</label>
                        <input
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Height</label>
                        <input
                            placeholder="height"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                        />
                    </div>
                    <div>
                        <button className="btn" type="submit">
                            Submit
                        </button>
                        <button className="btn" type="submit" onClick={reload}>
                            Reload
                        </button>
                    </div>
                </form>
                <div className="center">
                    <h2>Your BMI is: {bmi} </h2>
                    <p>{message}</p>
                </div>
                <div className="img-container">
                    <img src={imgSrc} alt=""></img>
                </div>
            </div>
        </div>
    );
}

export default App;
