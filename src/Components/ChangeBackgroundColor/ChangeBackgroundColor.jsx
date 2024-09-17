// import React, { useState } from 'react';
// import './ChangeBackgroundColor.css';

// const colors = ['redColor', 'greenColor', 'blueColor', 'blackColor', 'greyColor'];

// export default function ChangeBackgroundColor() {
//     const [currentIndex, setCurrentIndex] = useState(0); // State to track the current index

//     const handleChange = () => {
//         // Update the class name to the next color
//         document.body.className = colors[currentIndex];
        
//         // Move to the next color, reset to 0 if at the end of the array
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % colors.length);
//     };

//     return (
//         <div>
//             <button onClick={handleChange}>Change background</button>
//         </div>
//     );
// }

//-----------------------------------------------------------------------------

//Set button background color

import React, { useState } from "react";

export default function ColorCycleButton() {
    // Predefined list of colors
    const colors = ["red", "green", "blue", "yellow", "purple"];
    
    // State to hold the current color index
    const [colorIndex, setColorIndex] = useState(0);

    // Function to handle the button click and change the background color
    const handleClick = () => {
        // Update the color index to the next one, cycling back to 0 when reaching the end
        setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    };

    return (
        <button
            onClick={handleClick}
            style={{
                backgroundColor: colors[colorIndex], // Set button background color
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
            }}
        >
            Click me to change color
        </button>
    );
}

