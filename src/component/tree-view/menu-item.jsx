import {useState} from "react";
import MenuList from "./menu-list";

import {FaMinus,FaPlus} from 'react-icons/fa';

import "./styles.css";
export default function MenuItem({item}) {
    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

    function handleToggleChildren(getCurrentLabel) {
        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
        });
    }
    // console.log(displayCurrentChildren);
    return (
        <ul className="menu-item-list-container">
            <li className="menu-item">
                <div className="menu-item-content">
                    {item && item.children && item.children.length > 0 ? (
                        <span
                            onClick={() => {
                                handleToggleChildren(item.label);
                            }}
                            className="expand-collapse-sign"
                        >
                            {displayCurrentChildren[item.label] ? <FaMinus/> : <FaPlus/>}
                        </span>
                    ) : null}
                    <p>{item.label}</p>
                </div>
                {item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ? (
                    <MenuList list={item.children} />
                ) : null}
            </li>
        </ul>
    );
}
