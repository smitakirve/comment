
import { useState } from "react"
import "./comment.css";
import Comments from "./comment";

export default function Comment(){
    let [comment,setComment]=useState([{
        username:"@sk",
        remarks:"great job",
        rating:4
    }])

    let addNewComment=(comment,event)=>{
        setComment((currComment)=>[...currComment,comment])
        console.log("added new comment")
        event.preventDefault();
      
    }
    return(
        <div>
            <h3>All comments</h3>
             {comment.map((comment,idx)=>(
               <div className="comment" key={idx}>
               <span>{comment.remarks}</span>
               &nbsp;
               <span>[rating={comment.rating}]</span>
               <p>-{comment.username}</p>
               </div>
             ))
             }
            
            <hr></hr>
            <Comments addNewComment={addNewComment}/>
        </div>
    )
}