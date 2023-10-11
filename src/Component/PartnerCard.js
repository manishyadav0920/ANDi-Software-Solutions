import React from "react";
import { Link } from "react-router-dom";

const PartnerCard = (props) =>{
    return(
        <>
            <div className="partnercard">
                    <h2>{props.title1}</h2>
                    <p><b>Location:</b> {props.location1}</p>
                    <p>
                        <b>Link :</b> <Link to={props.desc1}>{props.desc1}</Link>
                    </p>
                </div>
        </>
    )
}

export default PartnerCard;