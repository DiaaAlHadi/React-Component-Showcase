import React, {useState, useEffect} from "react";
import Loading from "../loading";
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs";
import "./styles.css";
const FetchDataComponent = ({url, page = 1, limit = 5}) => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${url}?page=${page}&limit=${limit}`);
                const responseData = await response.json();
                setImages(responseData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (url) {
            fetchData();
        }
    }, [url, page, limit]); // Added page and limit as dependencies

    if (loading) return <Loading />;
    if (error) return <div>Error: {error}</div>;

    function handlePrevious() {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    }
    function handleNext() {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    }
    return (
        <div className="images-slider-container">
            <BsArrowLeftCircleFill className="arrow arrow-left" onClick={handlePrevious} />
            {images.length > 0 ? (
                images.map((imageItem, index) => (
                    <img
                        key={imageItem.id || index} // Fallback to index if id is not available
                        alt={imageItem.description || "Image"} // Provide a description if available
                        src={imageItem.download_url}
                        className={index === currentSlide ? "current-image" : "current hide-current-image"}
                    />
                ))
            ) : (
                <div>No Data</div>
            )}
            <BsArrowRightCircleFill className="arrow arrow-right" onClick={handleNext} />
            <span className="circle-indicators">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={
                            index === currentSlide ? "current-indicator" : "current-indicator inactive-indicator"
                        }
                        onClick={() => setCurrentSlide(index)}
                    ></button>
                ))}
            </span>
        </div>
    );
};

export default FetchDataComponent;
