import React, { Component } from 'react';
import App from './login';
import "./givefeedback.css"

function SeeFeedback() {
    const questions = [
        { name: "Rating 1", type: "rating", id: 1, response: 5 },
        { name: "Rating 2", type: "rating", id: 2, response: 4 },
        { name: "Rating 3", type: "rating", id: 3, response: 3 },
        { name: "Open Ended 1", type: "open", id: 4, response: "Answer 1" },
        { name: "Open Ended 2", type: "open", id: 5, response: "Answer 2" },
    ]
    return (
        <div class="feedback-form">
            {questions.filter((question) => { return question.type == "rating" }).map((question) => (
                <div class="rating-form"><h2>{question.name}</h2>
                    <div class="rating">
                        <p{if (question.response > 4) { return " class=\"checked\""}}>&#9733;</p>
                        <p{if (question.response > 3) { return " class=\"checked\""}}>&#9733;</p>
                        <p{if (question.response > 2) { return " class=\"checked\""}}>&#9733;</p>
                        <p{if (question.response > 1) { return " class=\"checked\""}}>&#9733;</p>
                        <p class="checked">&#9733;</p>
                    </div>
                </div>))}
            {questions.filter((question) => { return question.type == "open" }).map((question) => (
                <div class="comment">
                    <p>{question.response}</p>
                </div>))}
        </div>
    );
}

export default SeeFeedback;

