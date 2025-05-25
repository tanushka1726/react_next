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
                        <h1 className="login-heading">LOGIN</h1>
                        <input type="text" name="email" placeholder=" Enter Email" />
                        <br />
                        <input type="text" name="password" placeholder=" Enter password" />
                        <br />
                        <div className="new_reader">
                            <p>New to Reader</p> <Link href="/sign-up">Sign Up</Link>
                        </div>
                        <input type="submit" className="button" value="Login"/>
                        

                    </form>


                </div>

            </div>

        </>
    )
}
export default page;