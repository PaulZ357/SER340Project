import React, { Component } from 'react';
import App from './login';
import "./seefeedback.css"

function SeeFeedback() {
    const questions = [
        { name: "How well did you understand the central concepts and ideas in this course?", type: "rating", id: 1, response: 5 },
        { name: "How well could you apply information/skills learned in this course?", type: "rating", id: 2, response: 4 },
        { name: "How much were your critical thinking and/or problem solving abilities enhanced during this course?", type: "rating", id: 3, response: 3 },
        { name: "What are major strengths and/or major areas of improvement for the professor?", type: "open", id: 4, response: "Answer 1" },
        { name: "What are major strengths and/or major areas of improvement for the course?", type: "open", id: 5, response: "Answer 2" },
    ]
    const checked = " class=\"checked\""
    function Star({ isFilled }) {
        if (isFilled) {
            return <p class="checked">&#9733;</p>
        }
        else {
            return <p>&#9733;</p>
        }
    }
    return (
        <div class="feedback-form">
            {questions.filter((question) => { return question.type == "rating" }).map((question) => (
                <div class="rating-form"><h2>{question.name}</h2>
                    <div class="rating">
                        <Star isFilled={question.response > 4}/>
                        <Star isFilled={question.response > 3}/>
                        <Star isFilled={question.response > 2}/>
                        <Star isFilled={question.response > 1}/>
                        <p class="checked">&#9733;</p>
                    </div>
                </div>))}
            {questions.filter((question) => { return question.type == "open" }).map((question) => (
                <div class="open-ended">
                    <h2>{question.name}</h2>
                    <p class="response">{question.response}</p>
                </div>))}
        </div>
    );
}

export default SeeFeedback;

