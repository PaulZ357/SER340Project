import React, { Component } from 'react';
import "./home.css"

function Home() {
    return (
        <div className="app-container">
            <div class="full">
                <div class="left-sidebar">
                    <nav>
                        <a class="btn btn-secondary">Home</a><br/>
                        <a class="btn btn-secondary">Give Feedback</a><br/>
                        <a class="btn btn-secondary">Log Out</a>
                    </nav>
                </div>
                <div class="right">
                    <p>Welcome to the course</p>
                </div>
            </div>
        </div>
    )
}

export default Home;