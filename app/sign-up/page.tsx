import React from "react";
import "./page.css"
import Link from "next/link";

const page = () => {
    return (
        <>
            <div className="login">

                <img src="self-discover1.jpg" alt="" />
                <div className="log-section-card">
                    <form action="">
                        <h1 className="login-heading">SIGN UP</h1>
                        <input type="text" name="firstname" placeholder=" Enter Name" />
                        <br />
                        <input type="text" name="email" placeholder=" Enter Email" />
                        <br />
                        <input type="text" name="password" placeholder=" Enter password" />
                        <br />
                        <div className="new_reader">
                            <p>Already a user</p> <Link href="/login">Login</Link>
                        </div>
                        <input type="submit" className="button" value="Sign Up"/>
                        

                    </form>


                </div>

            </div>

        </>
    )
}
export default page;