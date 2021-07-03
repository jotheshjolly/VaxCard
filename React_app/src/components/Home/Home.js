import React from 'react'
import "./Home.scss"
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';

export default function Home() {

    return (
        <div>

            <Flip left>
            </Flip>

            <Fade bottom>
                <div id="about">
                    <h1>About Us</h1>
                    <p>
                    The current pandemic has affected the education system all over the world. Everyone is learning remotely. It is still all right for the senior students but the junior students are the ones who need regular interaction and our current education system is not able to provide this to them.
                    </p>
                    <p>
                    We created an AR-based website EduAR where students from any background can visit the site and learn various concepts with the help of 3D Models, which makes learning fun and effortless. EduAR can help students achieve better results through visualization and full immersion in the subject matter. Interactive AR learning can have a significant positive impact on students. It keeps them engaged throughout the lesson We also created a chatbot and multi-language support in our website which makes it even more convenient for students to learn.
                    </p>

                </div>
            </Fade>

        </div>
    )
}
