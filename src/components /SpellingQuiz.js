"use client"

import { useState } from "react";

export default function SpellingQuiz() {
    const correctWord = []
    let score = 0
    const [userInput, setUserInput] = useState("");
    const [feedback, setFeedback] = useState(""); 

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    }

    const checkAnswer = () => { 
        if (userInput === correctWord) {
            setFeedback("This is corect")
            score += 1 
            console.log(score)
        } else {
            setFeedback("You are wrong")
        }
    };

    return (
        <div>
        <h1>Spelling Quiz</h1>
        <p>Hint: (Your hint here)</p>
        <input 
            type="text"
            value={userInput}
            onChange={handleInputChange}
            placeholder="Word Goes Here"
        />
        <button onClick={checkAnswer}>Check Answer</button>
        <p>{feedback}</p>
      </div>
    )
}