import React, { Component } from 'react';
import App from './login';
import "./givefeedback.css"

function Feedback() {
    const questions = [
        { name: "Rating 1", type: "rating", id: 1 },
        { name: "Rating 2", type: "rating", id: 2 },
        { name: "Rating 3", type: "rating", id: 3 },
        { name: "Open Ended 1", type: "open", id: 4 },
        { name: "Open Ended 2", type: "open", id: 5 },
    ]
    return (
        <div class="feedback-form">
            {questions.filter((question) => { return question.type == "rating" }).map((question) => (
                <form id={"rating" + question.id} class="rating-form"><h2>{question.name}</h2>
                    <div class="rating">
                        <input type="radio" id={"star5-" + question.id} name="rating" value="5" />
                        <label for={"star5-" + question.id}>&#9733;</label>
                        <input type="radio" id={"star4-" + question.id} name="rating" value="4" />
                        <label for={"star4-" + question.id}>&#9733;</label>
                        <input type="radio" id={"star3-" + question.id} name="rating" value="3" />
                        <label for={"star3-" + question.id}>&#9733;</label>
                        <input type="radio" id={"star2-" + question.id} name="rating" value="2" />
                        <label for={"star2-" + question.id}>&#9733;</label>
                        <input type="radio" id={"star1-" + question.id} name="rating" value="1" />
                        <label for={"star1-" + question.id}>&#9733;</label>
                    </div>
                </form>))}
            {questions.filter((question) => { return question.type == "open" }).map((question) => (
                <div class="comment">
                    <label for={question.name}>{question.name}:</label>
                    <textarea id={question.name} name={question.name}></textarea>
                </div>))}
            <button type="submit" class="submit-btn">Submit</button>
        </div>
    );
}

export default Feedback;

