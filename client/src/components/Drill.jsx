import React from 'react'
import "./drill.css"
import { NavLink } from 'react-router-dom'

function Drill() {
  return (
    <>
      <div className="tutcont1">
        <div class="thumb-container">
          <div class="thumb-image">
            <img src="push.jpg" alt="Thumbnail Image" />
          </div>
          <div class="thumbnail-details">
            <div class="thumbnail-title">About Push Up</div>
            <div class="thumbnail-channel">Push-ups are a classic bodyweight exercise that primarily targets the chest, shoulders, and triceps, but also engages the core and other stabilizing muscles.
              They're a versatile exercise that can be done virtually anywhere, making them a popular choice for building upper body strength and endurance.</div>
            <div class="thum"><NavLink to="/input"> <button>Start</button> </NavLink></div>
          </div>
        </div>
        <div class="thumb-container">
          <div class="thumb-image">
            <img src="running.jpg" alt="Thumbnail Image" />
          </div>
          <div class="thumbnail-details">
            <div class="thumbnail-title">Benefits of Running</div>
            <div class="thumbnail-channel">Running is a fantastic way to improve cardiovascular health, burn calories, and boost your mood. It's a simple, effective exercise that requires minimal equipment and can be done almost anywhere.</div>
            <div class="thum"><NavLink to="/input"> <button>Start</button> </NavLink></div>
          </div>
        </div>

        <div class="thumb-container">
          <div class="thumb-image">
            <img src="yoga.jpg" alt="Thumbnail Image" />
          </div>
          <div class="thumbnail-details">
            <div class="thumbnail-title">Yoga for Beginners</div>
            <div class="thumbnail-channel">Yoga is a practice that combines physical postures, breathing techniques, and meditation. It's great for improving flexibility, strength, and mental well-being. Perfect for beginners!</div>
            <div class="thum"><NavLink to="/input"> <button>Start</button> </NavLink></div>
          </div>
        </div>

        <div class="thumb-container">
          <div class="thumb-image">
            <img src="healthy_food.jpg" alt="Thumbnail Image" />
          </div>
          <div class="thumbnail-details">
            <div class="thumbnail-title">Healthy Eating Tips</div>
            <div class="thumbnail-channel">Discover simple tips for making healthier food choices. Learn about balanced diets, portion control, and how to incorporate more fruits and vegetables into your daily meals.</div>
            <div class="thum"><NavLink to="/input"> <button>Start</button> </NavLink></div>
          </div>
        </div>

        <div class="thumb-container">
          <div class="thumb-image">
            <img src="meditation.jpg" alt="Thumbnail Image" />
          </div>
          <div class="thumbnail-details">
            <div class="thumbnail-title">Meditation for Stress Relief</div>
            <div class="thumbnail-channel">Learn how to meditate and reduce stress in your daily life. Meditation can help calm the mind, improve focus, and promote overall relaxation. Start your journey to inner peace today.</div>
            <div class="thum"><NavLink to="/input"> <button>Start</button> </NavLink></div>
          </div>
        </div>

        <div class="thumb-container">
          <div class="thumb-image">
            <img src="weight.jpg" alt="Thumbnail Image" />
          </div>
          <div class="thumbnail-details">
            <div class="thumbnail-title">Weightlifting for Strength</div>
            <div class="thumbnail-channel">Weightlifting is an excellent way to build muscle and increase strength. Learn proper techniques and exercises to maximize your results and avoid injuries. Start lifting and transform your body.</div>
            <div class="thum"><NavLink to="/input"> <button>Start</button> </NavLink></div>
          </div>
        </div>

        <div class="thumb-container">
          <div class="thumb-image">
            <img src="cycle.jpg" alt="Thumbnail Image" />
          </div>
          <div class="thumbnail-details">
            <div class="thumbnail-title">Cycling for Fitness</div>
            <div class="thumbnail-channel">Cycling is a low-impact exercise that's great for all fitness levels. Explore the benefits of cycling, from improving cardiovascular health to enjoying the outdoors. Get on your bike and start pedaling!</div>
            <div class="thum"><NavLink to="/input"> <button>Start</button> </NavLink></div>
          </div>
        </div>

        <div class="thumb-container">
          <div class="thumb-image">
            <img src="sleep.jpg" alt="Thumbnail Image" />
          </div>
          <div class="thumbnail-details">
            <div class="thumbnail-title">Sleep Better Tonight</div>
            <div class="thumbnail-channel">Discover tips and strategies for improving your sleep quality. Learn about the importance of sleep hygiene, creating a relaxing bedtime routine, and optimizing your sleep environment.</div>
            <div class="thum"><NavLink to="/input"> <button>Start</button> </NavLink></div>
          </div>
        </div>

        <div class="thumb-container">
          <div class="thumb-image">
            <img src="hiking.jpg" alt="Thumbnail Image" />
          </div>
          <div class="thumbnail-details">
            <div class="thumbnail-title">Hiking for Adventure</div>
            <div class="thumbnail-channel">Hiking is a great way to explore nature, get exercise, and relieve stress. Discover beautiful trails, learn about hiking safety, and find out how to prepare for your next outdoor adventure.</div>
            <div class="thum"><NavLink to="/input"> <button>Start</button> </NavLink></div>
          </div>
        </div>

        <div class="thumb-container">
          <div class="thumb-image">
            <img src="strech.jpg" alt="Thumbnail Image" />
          </div>
          <div class="thumbnail-details">
            <div class="thumbnail-title">Stretching for Flexibility</div>
            <div class="thumbnail-channel">Improve your flexibility and prevent injuries with these effective stretching exercises. Learn about different types of stretches and how to incorporate them into your daily routine.</div>
            <div class="thum"><NavLink to="/input"> <button>Start</button> </NavLink></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Drill