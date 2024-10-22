import { useState } from "react";
import Video from '/code/React Projects/KidsFun/MyReact/src/assets/video.mp4';

function Colors(){


const [Color,setColor]=useState('pink');

const styles={
    backgroundColor:Color,
}
function changeColor(){
    let arrayColors=['red','green','blue','yellow','purple','black','cyan','gray','white','orange','violet','pink'];
let randomColors= Math.floor(Math.random() * arrayColors.length);
setColor(arrayColors[randomColors]);
}

    return(
    <>

    <div className="flex justify-center items-center h-screen"  style={styles}>
   <div className="w-1/2 h-1/2 flex items-center justify-center" >
     <button className="bg-white text-black p-4 w-48 rounded-md shadow-lg text-2xl" onClick={changeColor}>Click Me</button>
   </div>
   <div>
   <video src={Video} className="w-2/3" controls></video>
   </div>
    </div>
    </>
    );
}

export default Colors;