import React from "react";
import "./page.css"

const page = ()=>{
    return(
        <>
        <div className="login">
            
            <img src="self-discover1.jpg" alt="" />
            <div className="log-section-card">
                <form action="">
                    <h1 className = "login-heading">SIGN UP</h1>
                 <input type="text" name="firstname" id="" placeholder=" Enter First name"/>
                 <br />
                 <input type="text" name="lastname" id="" placeholder=" Enter Last Name"/>
                 <br />
                 <input type="text" name="email" id="" placeholder=" Enter Gmail"/>
                  <br />
                 <input type="text" name="password"  placeholder=" Enter password"/>
                 <br />
                 <br />
                 <a href="/" className="button">Sign Up</a> 
                
                
            </form>
            

            </div>
            
        </div>

        </>
    )
}
export default page;