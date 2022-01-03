
import { data } from "./data";
import "./style.css"
import "./script"

export const Btech20 = (props) => {
    // const data = data;
    return (
        <>
            <div id="link-page">
                <header>
                    <nav>
                        <div>
                            <h1>BTech 20</h1>
                        </div>
                        <div className="time">
                            <div id="time"></div>
                            <div id="date"></div>
                        </div>
                    </nav>
                </header>
                <section className="body">
                    <div className="color_code">
                        <h5 className="live text-xs">Running...</h5>
                        <h5 className="leftToday text-xs">Left</h5>
                        <h5 className="today_class text-xs">Todays Class</h5>
                        <h5 className="status text-xs">Not for Today</h5>
                    </div>
                    <h2>Semester 4</h2>

                    <h2 className="running">No Class is Running Now </h2>
                    <div className="card-container">
                        {
                            data.map((val, ind) => {
                                return (
                                    <CourseCard
                                        key={ind}
                                        data={val}
                                        class={"hide"}
                                    />
                                )
                            })
                        }
                    </div>

                    <h2 className="today">No Classes are Left Today</h2>
                    <div className="card-container">
                        {
                            data.map((val, ind) => {
                                return (
                                    <CourseCard
                                        key={ind}
                                        data={val}
                                        class={"hide2"}
                                    />
                                )
                            })
                        }
                    </div>

                    <h2>All Class Timing and Link</h2>
                    <div className="card-container">
                        {
                            data.map((val, ind) => {
                                return (
                                    <CourseCard
                                        key={ind}
                                        data={val}
                                        class={"course status"}
                                    />
                                )
                            })
                        }
                    </div>
                </section>
            </div>
            <footer>
                <div class="source">
                    <a href="https://github.com/mukul-raj/btech20-iitgn" target="blank">{"<PageSource/>"}
                    </a>
                </div>
            </footer>
        </>
    );
};

const CourseCard = (props) => {
    return (<>
        <div className={props.class}>
            <h3 className="text-lg">{props.data.course}</h3>
            {
                props.data.time.map((val, ind) => {
                    return (
                        <Timing
                            key={ind}
                            data={val}
                        />
                    )
                })
            }
        </div>
    </>)
}

const Timing = (props) => {
    return (
        <>
            <h4 className="time text-base">{props.data.time}</h4>
            {
                props.data.section.map((val, ind) => {
                    return (
                        <ClassLink
                            key={ind}
                            data={val}
                        />
                    )
                })
            }
        </>
    )
}

const ClassLink = (props) => {
    return (<>
        <h5 className="text-sm font-medium">
            <a href={props.data.link} target="blank">{props.data.section}</a>
        </h5>
    </>)
}


