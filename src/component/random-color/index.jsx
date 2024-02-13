import {useState} from "react";
import "./styles.css";
export default function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState("hex");
    const [color, setColor] = useState("#000000");

    function randomColorUtility(length) {
        return Math.floor(Math.random() * length);
    }
    function handleCreateRandomHexColor() {
        // #000000
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#";
        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)];
        }
        setColor(hexColor);
    }
    function handleCreateRandomRGBColor() {
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);
        setColor(`rgb(${r},${g},${b})`);
    }
    return (
        <div className="random-color-component" style={{background: color}}>
            <div className="buttons-container">
                <button
                    onClick={() => {
                        setTypeOfColor("hex");
                    }}
                    className={typeOfColor === "hex" ? "selected" : ""}
                >
                    Hex Color
                </button>
                <button
                    onClick={() => {
                        setTypeOfColor("rgb");
                    }}
                    className={typeOfColor !== "hex" ? "selected" : ""}
                >
                    RGB Color
                </button>
                <button onClick={typeOfColor === "hex" ? handleCreateRandomHexColor : handleCreateRandomRGBColor}>
                    Generate
                </button>
            </div>
            <div>
                <h3 className="current-color">{color}</h3>
            </div>
        </div>
    );
}
