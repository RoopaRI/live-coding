// import React, {useEffect, useState} from "react";

// export default function SetTimeout(){
//     const [message, setMessage] = useState('');

//     useEffect(()=>{
//         const timeoutID = setTimeout(()=>{
//             setMessage('Hello!')
//         },3000);

//         return() => clearTimeout(timeoutID);
//     },[])

//     return(
//         <div>
//             {message}
//         </div>
//     );
// }



import React, { useEffect, useState } from "react";

export default function SetTimeout() {
    const [message, setMessage] = useState([]); // Array to hold the messages

    useEffect(() => {
        let count = 0;

        const intervalID = setInterval(() => {
            if (count < 5) {
                setMessage((prevMessage) => [...prevMessage, 'Hello!']); // Append 'Hello!' to the message array
                count++;
            } else {
                clearInterval(intervalID); // Stop the interval after 5 times
            }
        }, 1000);

        return () => clearInterval(intervalID); // Cleanup interval on unmount
    }, []);

    return (
        <div>
            {message.map((msg, index) => (
                <p key={index}>{msg}</p> // Render each 'Hello!' in a <p> tag
            ))}
        </div>
    );
}
