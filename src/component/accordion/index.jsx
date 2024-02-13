import data from "./data";
import {useState} from "react";
import "./styles.css";
export default function Accordion() {
    const [openQuestion, setOpenQuestion] = useState([]);

    function HandleAccordionStatus(id) {
        let tempStatus = [...openQuestion];
        openQuestion.indexOf(id) !== -1 ? tempStatus.splice(openQuestion.indexOf(id), 1) : tempStatus.push(id);
        setOpenQuestion(tempStatus);
    }

    return (
        <>
            {data && data.length > 0 ? (
                <div className="container">
                    {data.map((item, index) => {
                        return (
                            <div className="accordion-item" key={item.id}>
                                <h3
                                    // className={openQuestion === item.id ? "open-accordion-question" : "accordion-question"}

                                    // for multiple open
                                    className={
                                        openQuestion.includes(item.id)
                                            ? "open-accordion-question"
                                            : "accordion-question"
                                    }
                                    onClick={() => {
                                        HandleAccordionStatus(item.id);
                                        // item.id === openQuestion ? setOpenQuestion(0) : setOpenQuestion(item.id);
                                    }}
                                >
                                    {/* for one accordion open at a time */}
                                    {/* {openQuestion !== item.id && "+"} */}

                                    {/* for multiple open */}
                                    {!openQuestion.includes(item.id) && "+"}
                                    {item.question}
                                </h3>
                                {/* for one accordion open at a time */}
                                {/* {item.id === openQuestion && <p className="question-answer">{item.answer}</p>} */}

                                {/* for multiple open */}
                                {openQuestion.includes(item.id) && <p className="question-answer">{item.answer}</p>}
                            </div>
                        );
                    })}
                </div>
            ) : (
                <div>no Data</div>
            )}
        </>
    );
}
