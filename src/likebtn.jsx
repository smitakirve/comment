import {useState} from "react";

export default function Likebutton(){
    let [isLiked,setIsLiked] = useState(false);
    let [clicks,setClicks] = useState(0);
    let toggleLike =() =>{
        setIsLiked(!isLiked);
        setClicks(clicks+1);
    };
    let styles={color:"red"}
    return(
        <div>
            <p>clicks={clicks}</p>
            <h2>States in react</h2>
            <p onClick={toggleLike} style={styles}>
                {isLiked ?(
                     <i className="fa-solid fa-heart"></i>
                    ) :(
                    <i className="fa-regular fa-heart"></i>
                )

                }
            </p>    
        </div>
    )
}