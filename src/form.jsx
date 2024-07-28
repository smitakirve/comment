import {useState} from "react"

export default function Form(){
// let [fullname,setFullName]=useState("");
// let [userName,setUserName]=useState("");

let [formData,setFormData]=useState({
    fullName:"",
    userName:""
})

// let handleFullName=(event)=>{
//    setFullName(event.target.value);
// }

// let handleUserName=(event)=>{
//    setUserName(event.target.value);
// }
   let handleInput =(event)=>{
     let fieldName =event.target.name;
     let newValue= event.target.value
     
     setFormData ((currData)=>{
       currData[fieldName]=newValue;
       return{...currData}
     })
   }
   let handleSubmit=(event)=>{
       event.preventDefault();
       setFormData({
         fullName:"",
         userName:""
       })
   }
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full name</label>
            <input placeholder="write a name" type="text" value={ formData.fullName} 
            onChange={handleInput}
            id="fullName"
            name="fullName"
            />
            <br/>
            <br/>
            <label htmlFor="userName">User name</label>
            <input placeholder="write a  username" type="text" value={ formData.userName} 
            onChange={handleInput}
            id="userName"
            name="userName"
            />
            <br/>
            <button>Submit</button>
            </form>
        </div>
    )
}