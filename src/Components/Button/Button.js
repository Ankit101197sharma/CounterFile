import React, { useState } from "react";
import classes from "./Button.module.css"


function Button(){

const [num, setNum]=useState(0)
const incNum = () => {
    setNum(num + 1)
    console.log("increment number")
}
const decNum = () =>{
    if(num>0){
        setNum(num - 1)
    }else{
        setNum(0)
        alert("Stop dear")
    }
    
}

return(
    <div className={classes.main_div}>
        <div className={classes.center_div}>
            <h1>{num}</h1>
            <div className={classes.btn_div}>
                
                <button onClick={decNum}>-</button>
                <button onClick={incNum}>+</button>
            </div>
        </div>
    </div>
)










// const [bgcolor, setbgColor]= useState("white")

//     return(
//         <div  >
//             <h1 style={{backgroundColor:bgcolor}} > Hello</h1>
//             <button  className={classes.buttonStyle} onClick={() => setbgColor("blue")}>Blue</button>
//             <button  className={classes.buttonStyle1} onClick={() => setbgColor('yellow')}>Yellow</button>
//             <button  className={classes.buttonStyle2} onClick={() => setbgColor("red")}>Red</button>
//             <button  className={classes.buttonStyle3} onClick={() => setbgColor("green")}>Green</button>
//             <button  className={classes.buttonStyle4} onClick={() => setbgColor("pink")}>Pink</button>
//         </div>
//     )
}
export default Button;

// import React, { useState } from "react";
// import classes from "./Button.module.css";
// const Button = () => {
// const [style, setStyle] = useState("white");

// const changeStyle = () => {
// 	console.log("you just clicked");

// 	setStyle("blue");
// };
// return (
// 	<>
// 	<div className={classes.App}>CHANGE CSS STYLING WITH ONCLICK EVENT</div>
// 	<div className="style">
// 		<button className={classes.button} onClick={changeStyle}>
// 		Click me!
// 		</button>
// 	</div>
// 	</>
// );
// };
// export default Button;
