import { useState } from "react"

function Contact(){
    const[name,setName]=useState("Shankar");
    return(
        <div>
            <h1>Contact details</h1>
            <h2>The owner of this page is {name}</h2>
        </div>
    )
}
export default Contact