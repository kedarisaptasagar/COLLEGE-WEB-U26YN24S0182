import React from "react";

 export default function Contact(){

    const submit=async(e)=>{
        e.preventDefault();
        const response=await fetch("http://localhost:3000/contacts",{
            method:"POST",
           headers:{
            "Content-Type":"application/json"
           },
           body:JSON.stringify({
            name:document.getElementById("name").value,
            email:document.getElementById("email").value,
            mobile:document.getElementById("mobile").value

           })
        });
        const result=await response.text
        alert(` Your data submitted successfully`)
        
    };
    return(
        <div>
        <div style={{padding:10,marginLeft:400,}}>
        <h1>This is Contact Page</h1>
        <form onSubmit={submit}>
            <input type="text"  id="name"  placeholder="Enter name"/><br/><br/>
            <input type="email"  id="email"  placeholder="Enter Email"/><br/><br/>
            <input type="number"  id="mobile"  placeholder="Enter Mobile No"/><br/><br/>
            <button type="submit">Submit</button>

        </form>
        </div>
        </div>
    )
 }

