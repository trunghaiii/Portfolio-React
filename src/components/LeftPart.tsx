import logoImage from "./../assets/img/logo/ReactJss.png"

const LeftPart = () => {
    return (
        <div className="arlo_tm_leftpart_wrap">
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
                <a className="arlo_tm_resize" href="#"><i className="xcon-angle-left"></i></a>
            </div>
        </div>
    )
}

export default LeftPart