import React from 'react'
import "./tutorial.css"
function Tutorial() {
    return (
        <>
            <div className="tutcont">
                <div class="thumbnail-container">
                    <div class="thumbnail-image">
                        <a href="lect1.mp4" target="_blank" rel="noopener noreferrer"> <img src="thumb1.png" alt="Thumbnail Image" /> <div class="views">1.4M+</div></a>
                        <div class="duration">0:45</div>
                    </div>
                    <div class="thumbnail-details">
                        <div class="thumbnail-title">Lec-1: Push Up Tutorial</div>
                        <div class="thumbnail-channel">Shreyash Tiwari</div>
                        <div class="thumbnail-stats">1.4M views • 0 years ago</div>
                    </div>
                </div>
                <div class="thumbnail-container">
                    <div class="thumbnail-image">
                        <a href="lect1.mp4" target="_blank" rel="noopener noreferrer"> <img src="thumb1.png" alt="Thumbnail Image" /> <div class="views">1.4M+</div></a>
                        <div class="duration">0:45</div>
                    </div>
                    <div class="thumbnail-details">
                        <div class="thumbnail-title">Lec-2: Squats Tutorial</div>
                        <div class="thumbnail-channel">Shreyash Tiwari</div>
                        <div class="thumbnail-stats">1.4M views • 0 years ago</div>
                    </div>
                </div>
                <div class="thumbnail-container">
                    <div class="thumbnail-image">
                        <a href="lect1.mp4" target="_blank" rel="noopener noreferrer"> <img src="thumb1.png" alt="Thumbnail Image" /> <div class="views">1.4M+</div></a>
                        <div class="duration">0:45</div>
                    </div>
                    <div class="thumbnail-details">
                        <div class="thumbnail-title">Lec-3: Push Up Tutorial</div>
                        <div class="thumbnail-channel">Shreyash Tiwari</div>
                        <div class="thumbnail-stats">1.4M views • 0 years ago</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tutorial