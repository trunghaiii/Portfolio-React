import About from "./content/About"
import Home from "./content/Home"
import Project from "./content/Project"
import Skill from "./content/Skill"

interface IProps {
    showLeftPart: boolean
    setShowLeftPart: (value: boolean) => void
}
const RightPart = (props: IProps) => {
    return (
        <div className={props.showLeftPart === true ? "arlo_tm_rightpart" : "arlo_tm_rightpart opened"}>
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