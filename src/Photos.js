import React from "react";
import "./Photos.css";

export default function Photos(props){
//console.log(props.photos);
if (props.photos){
return (
    <section className="Photos">
        <div className="row">
        {props.photos.map(function(photo, index){
            //console.log(props.photo);
            return(
              <div className="col-sm-4" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
              <img src={photo.src.landscape} className="img-fluid" alt=""  />
              </a>
              </div>
            )
            })}
        </div>
    </section>
);    
}else {
return null;

}
}