import {useState} from "react";

export default function Comments(addnewComment){
    let [formData,setFormData]=useState({
        username:"",
        remarks:"",
        rating:""
    });

    let handleInput=(event)=>{
        setFormData((currData)=>{
           
            return{...currData,[event.target.name]: event.target.value};
        })
    }
 
   let handleSubmit=(event)=>{
   
    addnewComment(formData)
    event.preventDefault();
   }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h4>Give a comment</h4>
                <label htmlFor="username">User name</label>
                <input placeholder="user name" type="text" value={formData.userName} onChange={handleInput}
                 id="username"
                 name="username"
                />
                <br/>
                <br/>
                <label htmlFor="remarks">Remarks</label>
                <textarea placeholder="remarks "value={formData.remarks} onChange={handleInput} id="remarks"
                 name="remarks"></textarea>
                <br></br>
                <label htmlFor="rating">Rating</label>
                <input placeholder="rating" type="number" min={1} max={5} value={formData.rating} onChange={handleInput}
                id="rating"
                 name="rating"
                ></input>
                <br></br>
                <button>Add comment</button>
            </form>
        </div>
    )
}
