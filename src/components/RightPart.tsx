import About from "./content/About"
import Home from "./content/Home"
import Project from "./content/Project"
import Skill from "./content/Skill"


const RightPart = () => {
    return (
        <div className="arlo_tm_rightpart">
            <div className="rightpart_inner">
                <Home />

                {/* <!-- ABOUT --> */}
                <About />
                {/* <!-- /ABOUT --> */}

                {/* <!-- SKILLS --> */}
                <Skill />
                {/* <!-- /SKILLS --> */}

                {/* <!-- PROJECTS --> */}
                <Project />
                {/* <!-- /PROJECTS --> */}

            </div>
        </div>
    )
}

export default RightPart