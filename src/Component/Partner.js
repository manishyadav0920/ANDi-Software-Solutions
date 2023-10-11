import React from "react";
import '../Css/ServiceStyle.css';
import PartnerData from "./PartnerData";
import PartnerCard from "./PartnerCard";
import '../Css/PartnerStyle.css';

const Partner = () =>{
    return(
        <>
            <h1>
                Our Partner
            </h1>
            <div className="partner">
                {PartnerData.map((values)=>{
                    return(
                        <PartnerCard
                            title1 = {values.Name}
                            location1 = {values.Location}
                            desc1 = {values.link}
                        />
                    ) 
                })}
            </div>
        </>
    )
}

export default Partner;