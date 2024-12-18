/* stateless functional component: component nhưng không sử dụng state */
import React, { useState } from "react";
import "./ToggleStyle.css";
/* stateful functional component: component sử dụng state */

function Toggle() {
    const [on, setOn] = useState(false);

    const handleToggle = () => {
        setOn((on) => {
            console.log(on);
            return !on
        });
    }

    // 1. enabling state useState(initialize value)
    // 2. initialize state: useState(false)
    // 3. reading state: 
    // 4. update state

    return (
        <div>
            <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
                <div className={`spinner ${on ? "active" : ""}`}></div>
            </div>

            {/* <div className="toggle-control">
                <div className="toggle-on" onClick={() => setOn(true)}>On</div>
                <div className="toggle-on" onClick={() => setOn(false)}>Off</div>
            </div> */}
        </div>
    )
}

export default Toggle;


