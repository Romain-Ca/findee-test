import "./App.css";
import React, { useState } from "react";

function App() {
  // states
  const [number, setNumber] = useState("");
  const [speed, setSpeed] = useState();
  const [point, setPoint] = useState();
  const [limitNumber, setLimitNumber] = useState("");
  const [multipleNumber, setMultipleNumber] = useState();
  const [stars, setStars] = useState();
  const [primeNumber, setPrimeNumber] = useState();
  const [multiple, setMultiple] = useState();

  // functions
  const numbersSubmit = () => {
    let randomNumberOne = Math.floor(Math.random() * 100);
    let randomNumberTwo = Math.floor(Math.random() * 100);
    alert(randomNumberOne + " et " + randomNumberTwo);
  };

  const fozzBezzSubmit = () => {
    if (Number.isInteger(number / 3) && Number.isInteger(number / 5)) {
      alert("FozzBezz");
    } else if (Number.isInteger(number / 5)) {
      alert("Bezz");
    } else if (Number.isInteger(number / 3)) {
      alert("Fozz");
    } else {
      alert(number);
    }
  };

  const policeFlash = () => {
    if (speed <= 83 && speed >= 0) {
      setPoint("OK");
    } else if (speed < 0) {
      setPoint("Nice try 😎");
    } else if (speed >= 84 && speed <= 127) {
      setPoint(Math.floor((speed - 80) / 4));
    } else if (speed >= 128) {
      setPoint("Licence suspended");
    }
  };

  const showNumbers = () => {
    for (let i = 0; i <= limitNumber; i++) {
      if (Number(i) % 2 === 0) {
        alert(i + " EVEN");
      } else {
        alert(i + " ODD");
      }
    }
  };

  const multipleSubmit = () => {
    let sum = 0;

    for (let j = 0; j <= multipleNumber; j++) {
      if (Number.isInteger(j / 3) || Number.isInteger(j / 5)) {
        sum += j;
        setMultiple(sum);
      }
    }
  };

  const showStars = () => {
    let str = "";
    for (let i = 1; i <= stars; i++) {
      str += i + " ";
      let newStr = str.replace(/[0-9]/g, "*");
      console.log(newStr);
    }
  };

  const primeNumbers = () => {
    for (let i = 0; i <= primeNumber; i++) {
      let notPrimeNumber = false;
      for (let j = 2; j <= primeNumber; j++) {
        if (i % j === 0 && j !== i) {
          notPrimeNumber = true;
        }
      }
      if (notPrimeNumber === false) {
        console.log(i);
      }
    }
  };

  return (
    <section>
      <div>
        <h1>1. Write a function that returns the maximum of 2 numbers</h1>
        <button
          onClick={() => {
            numbersSubmit();
          }}
        >
          Generate 2 random numbers
        </button>
      </div>
      <div>
        <h1>2. Write a function called fozz_bezz</h1>
        <textarea
          placeholder="Write a number"
          style={{ textAlign: "center", fontSize: 15 }}
          value={number}
          onChange={(event) => {
            setNumber(event.target.value);
          }}
        ></textarea>
        <div>
          <button
            onClick={() => {
              fozzBezzSubmit();
            }}
          >
            What is the answer ?
          </button>
        </div>
      </div>
      <div>
        <h1>3. Write a function to check the speed of drivers...</h1>
        <textarea
          placeholder="You have been flashed at ?"
          style={{ textAlign: "center", fontSize: 15 }}
          value={speed}
          onChange={(event) => {
            setSpeed(event.target.value);
          }}
        ></textarea>
        <div>
          <button
            onClick={() => {
              policeFlash();
            }}
          >
            How many points did you loose ?
          </button>
          <p
            style={{
              border: "solid black 1px",
              height: 40,
              width: 80,
              borderRadius: 5,
              textAlign: "center",
            }}
          >
            {point}
          </p>
          <div>
            <button
              onClick={() => {
                setPoint(0);
                setSpeed("");
              }}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
      <div>
        <h1>4. Write a function called showNumbers ...</h1>
      </div>
      <textarea
        placeholder="Write a number"
        style={{ textAlign: "center", fontSize: 15 }}
        value={limitNumber}
        onChange={(event) => {
          setLimitNumber(event.target.value);
        }}
      ></textarea>
      <div>
        <button
          onClick={() => {
            showNumbers();
          }}
        >
          Click to check
        </button>
      </div>
      <div>
        <h1>5. Write a function that returns the sum ...</h1>
        <textarea
          placeholder="Write a number again"
          style={{ textAlign: "center", fontSize: 15 }}
          value={multipleNumber}
          onChange={(event) => {
            setMultipleNumber(event.target.value);
          }}
        ></textarea>
        <div>
          <button
            onClick={() => {
              multipleSubmit();
            }}
          >
            Click to check
          </button>
        </div>

        <p
          style={{
            border: "solid black 1px",
            height: 30,
            width: 500,
            borderRadius: 5,
            textAlign: "center",
          }}
        >
          {multiple}
        </p>
      </div>
      <div>
        <h1>6. Write a function called showStars(rows)...</h1>
        <textarea
          placeholder="How many stars do you want ?"
          style={{ textAlign: "center", fontSize: 15 }}
          value={stars}
          onChange={(event) => {
            setStars(event.target.value);
          }}
        ></textarea>
        <div>
          <button
            onClick={() => {
              showStars();
            }}
          >
            Check the console
          </button>
        </div>
      </div>
      <div>
        <h1>7. Write a function that prints all the prime number ...</h1>
        <textarea
          placeholder="Write a number again again"
          style={{ textAlign: "center", fontSize: 15 }}
          value={primeNumber}
          onChange={(event) => {
            setPrimeNumber(event.target.value);
          }}
        ></textarea>
        <div>
          <button
            onClick={() => {
              primeNumbers();
            }}
          >
            Check the console
          </button>
        </div>
      </div>
    </section>
  );
}

export default App;
