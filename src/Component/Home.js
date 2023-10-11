import React from "react";
import { NavLink } from "react-router-dom";
import '../Css/HomeAbout.css';

const Home = () =>{
    return(
        <>
            <div className="mainSection">
                <div className="contentBox">
                    <h1>
                        
                    </h1>
                    <div>
                        <h2>
                            ANDi software solutions makes technology and information work for business :
                        </h2>
                        <p>
                            Use our products to grow, protect, and simplify your business processes. Our tools  enables our users to attract, keep & further increase their end customers.
                        </p>
                        <hr/> 
                        <h2>
                            We help you to grow :
                        </h2>
                        <p>
                            We carefully study markets, trends, emerging practices for industry & region and adds learnings to makes our products to help you to grow globally.
                        </p>
                        <hr/> 
                        <h2>
                            We are united by a strong set of values & focused on client impact.
                        </h2>
                        <p>
                            The quality of our team is the pivot stone in our ability to serve our clients. For this reason, we invest tremendous resources in identifying exceptional people, develop  their skill and create an environment to deliver best in class products to customers.
                        </p>
                        <hr/> 
                        <h2>
                            We help make change happen.
                        </h2>
                        <p>
                            Our experience, tools and hands-on support help clients to achieve their goal by using  our products & services.
                        </p>
                    </div>
                    <div className="btnBox">
                        <div className="btn">
                            <NavLink to="/about" className="readMore">Read More</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;