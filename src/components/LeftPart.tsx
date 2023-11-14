import logoImage from "./../assets/img/logo/ReactJss.png"

interface IProps {
    showLeftPart: boolean
    setShowLeftPart: (value: boolean) => void
}
const LeftPart = (props: IProps) => {
    return (
        <div className={props.showLeftPart === true ? "arlo_tm_leftpart_wrap" : "arlo_tm_leftpart_wrap opened"}>
            <div className="leftpart_inner">
                <div className="logo_wrap">
                    <a href="#"><img src={logoImage} alt="desktop-logo" /></a>
                </div>
                <div className="menu_list_wrap">
                    <ul className="anchor_nav">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#services">Projects</a></li>
                    </ul>
                </div>
                <a
                    onClick={() => props.setShowLeftPart(!props.showLeftPart)}
                    className={props.showLeftPart === true ? "arlo_tm_resize" : "arlo_tm_resize opened"}
                    href="#">
                    <i className={props.showLeftPart === true ? "xcon-angle-left" : "xcon-angle-left opened"}></i>
                </a>
            </div>
        </div>
    )
}

export default LeftPart