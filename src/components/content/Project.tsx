
import quizAppImg from "./../../assets/img/projects/quizApp.jpeg"
import bookStoreImg from "./../../assets/img/projects/bookstore.jpeg"

const Project = () => {
    return (
        <div className="arlo_tm_section" id="services">
            <div className="arlo_tm_services_wrap">
                <div className="container">
                    <div className="arlo_tm_title_holder">
                        <h3>Personal Projects</h3>
                        <span>Meet my amazing projects</span>
                    </div>
                    <div className="list_wrap">
                        <ul>
                            <li>
                                <div className="inner">
                                    <div className="icon">
                                        <img
                                            width={"100%"}
                                            className="svg"
                                            src={quizAppImg} alt="camera-diaphragm" />
                                    </div>
                                    <div className="title_service">
                                        <h3>QuizApp-Front-End</h3>
                                    </div>
                                    <div className="text">
                                        <p>Front End of the full stack QuizApp was developed by using React Js Framework with Javascript, UI was designed by Bootstrap/React-bootstrap, and Scss. Deployed on Heroku!</p>
                                    </div>
                                    <div className="button">
                                        <a href="https://github.com/trunghaiii/QuizApp-Front-End"><button style={{ backgroundColor: "blue", color: "white", width: "100%" }}>source code</button></a>
                                        <a href="https://quizapp242-cf395539f6a6.herokuapp.com/"><button style={{ backgroundColor: "red", color: "white", width: "100%" }}>demo watch</button></a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="inner">
                                    <div className="icon">
                                        <img
                                            width={"100%"}
                                            className="svg"
                                            src={quizAppImg} alt="camera-diaphragm" />
                                    </div>
                                    <div className="title_service">
                                        <h3>QuizApp-Backend</h3>
                                    </div>
                                    <div className="text">
                                        <p>Back End of the full stack QuizApp was developed by using Express Js(Node js platform) Framework with JavaScript. Manage database with PostgreSQL and query database via Knex library. Deployed on Heroku!</p>
                                    </div>
                                    <div className="button">
                                        <a href="https://github.com/trunghaiii/QuizApp-Backend-API"><button style={{ backgroundColor: "blue", color: "white", width: "100%" }}>source code</button></a>
                                        <a href="https://quizapp242-cf395539f6a6.herokuapp.com/"><button style={{ backgroundColor: "red", color: "white", width: "100%" }}>demo watch</button></a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="inner">
                                    <div className="icon">
                                        <img
                                            width={"100%"}
                                            className="svg"
                                            src={bookStoreImg} alt="camera-diaphragm" />
                                    </div>
                                    <div className="title_service">
                                        <h3>BookStoreApp-Front-End</h3>
                                    </div>
                                    <div className="text">
                                        <p>Front End of the full stack e-commerce BookStore App was developed by using React Js Framework with TypeScript, UI was designed by using Ant Design library and Scss. Deployed on Vercel with real domain name!</p>
                                    </div>
                                    <div className="button">
                                        <a href="https://github.com/trunghaiii/BookStoreApp-Front-End"><button style={{ backgroundColor: "blue", color: "white", width: "100%" }}>source code</button></a>
                                        <a href="https://hai.bookstorenow.store/"><button style={{ backgroundColor: "red", color: "white", width: "100%" }}>demo watch</button></a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="inner">
                                    <div className="icon">
                                        <img
                                            width={"100%"}
                                            className="svg"
                                            src={bookStoreImg} alt="camera-diaphragm" />
                                    </div>
                                    <div className="title_service">
                                        <h3>BookStoreApp-Backend</h3>
                                    </div>
                                    <div className="text">
                                        <p>Back End of the full stack e-commerce BookStore App was developed by using Express Js(Node js platform) Framework with TypeScript. Manage database with MongoDB and query database via Mongoose library. Deployed on Heroku!</p>
                                    </div>
                                    <div className="button">
                                        <a href="https://github.com/trunghaiii/BookStoreApp-Backend_Api"><button style={{ backgroundColor: "blue", color: "white", width: "100%" }}>source code</button></a>
                                        <a href="https://hai.bookstorenow.store/"><button style={{ backgroundColor: "red", color: "white", width: "100%" }}>demo watch</button></a>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project