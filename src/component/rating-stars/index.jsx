import {useState} from "react";
import {FaStar} from "react-icons/fa";
import "./styles.css";
export default function RatingStars({noOfStars = 5}) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    function handleClick(currentIndex) {
        setRating(currentIndex);
    }
    function handleMouseEnter(currentIndex) {
        setHover(currentIndex);
    }
    function handleMouseLeave() {
        setHover(rating);
    }
    return (
        <div className="rating-stars-container">
            {[...Array(noOfStars)].map((_, index) => {
                index += 1;
                return (
                    <FaStar
                        key={index}
                        className={index <= (hover || rating) ? "active" : "inactive"}
                        onClick={() => {
                            handleClick(index);
                        }}
                        onMouseLeave={handleMouseLeave}
                        onMouseMove={() => handleMouseEnter(index)}
                    />
                );
            })}
        </div>
    );
}
