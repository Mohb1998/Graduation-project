import React from "react";

function Features(props)
{
    return(

          <div className = {props.classname}>
            <div class="featuresContainer">
                <h1 featuresTitle>{props.title}</h1>
                <img class="myimage" width="300" height="300" src={props.source} alt=""/>
                <p class="featuresText">
                  {props.content}
                </p>
              </div>
          </div>
    )
}

export default Features;
