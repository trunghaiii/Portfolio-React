import developerImage from "./../../assets/img/about/developer.png"
import Resume from "./../../assets/Hai Tran-Resume.pdf"
import { TypeAnimation } from 'react-type-animation';


const About = () => {
    return (
        <div className="arlo_tm_section relative" id="about">
            <div className="arlo_tm_about_wrapper_all">
                <div className="container">
                    <div className="arlo_tm_title_holder">
                        <h3>About Me</h3>
                        <span>Main informations about me</span>
                    </div>
                    <div className="arlo_tm_about_wrap">
                        <div className="author_wrap">
                            <div className="leftbox">
                                <div className="about_image_wrap parallax" data-relative-input="true">
                                    <div className="image layer" data-depth="0.1">
                                        <img src="img/about/550x640.jpg" alt="550x640" />
                                        <div className="inner" data-img-url={developerImage}></div>
                                    </div>
                                    <div className="border layer" data-depth="0.2">
                                        <img src="img/about/550x640.jpg" alt="550x640" />
                                        <div className="inner"></div>
                                    </div>
                                </div>

                            </div>
                            <div className="rightbox">
                                <div className="arlo_tm_mini_title_holder">
                                    <h4>I'm Hai Tran and
                                        &nbsp;
                                        <TypeAnimation
                                            sequence={[
                                                // Same substring at the start will only be typed once, initially
                                                'Former Computer Science Student',
                                                2000,
                                                'Web Developer',
                                                2000,
                                                'Problem Solver',
                                                2000,

                                            ]}
                                            wrapper="span"
                                            speed={50}
                                            style={{ fontSize: '1em' }}
                                            repeat={Infinity}
                                        />
                                    </h4>
                                </div>
                                <div className="definition">
                                    <p>Hi! My name is <strong>Hai Tran</strong>. I am a Highly adaptable, goal-driven problem solver loving web development and seeking to build programs that make people’s lives easier.</p>
                                </div>
                                <div className="about_short_contact_wrap">
                                    <ul>
                                        <li>
                                            <span><label>Birthday:</label> 24.02.2001</span>
                                        </li>
                                        <li>
                                            <span><label>City:</label>Brampton, Ontario</span>
                                        </li>
                                        <li>
                                            <span><label>Study:</label> Algoma University</span>
                                        </li>
                                        <li>
                                            <span><label>Degree:</label> Bachelor of Computer Science</span>
                                        </li>
                                        <li>
                                            <span><label>Linkedin:</label> <a href="https://www.linkedin.com/in/hai01/">https://www.linkedin.com/in/hai01/</a></span>
                                        </li>
                                        <li>
                                            <span><label>Email:</label> <a href="">haitran022001&#64;gmail.com</a></span>
                                        </li>

                                    </ul>
                                </div>
                                <div className="buttons_wrap">
                                    <ul>
                                        <li>
                                            <a href={Resume}><span>Download CV</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default About