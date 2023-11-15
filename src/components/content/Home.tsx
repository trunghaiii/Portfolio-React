import { TypeAnimation } from 'react-type-animation';

const Home = () => {

    const handleScrolling = () => {
        const section = document.querySelector('#about');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
    return (
        <div className="arlo_tm_section" id="home">
            <div className="arlo_tm_hero_header_wrap">
                <div className="arlo_tm_universal_box_wrap">
                    <div className="bg_wrap">
                        <div className="overlay_image hero jarallax" data-speed="0.1"></div>
                        <div className="overlay_color hero"></div>
                    </div>
                    <div className="content hero">
                        <div className="inner_content">
                            <div className="image_wrap">
                                <img src="img/hero/avatar.jpg" alt="hero" />
                            </div>
                            <div className="name_holder">
                                <h3>Hai <span>Tran</span></h3>
                            </div>
                            <div className="text_typing">
                                <p>I'm a
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
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="arlo_tm_arrow_wrap bounce anchor">
                        <a
                            //href="#about"
                            onClick={() => handleScrolling()}
                        ><i className="xcon-angle-double-down"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home