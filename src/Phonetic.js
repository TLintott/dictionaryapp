import React from "react";

export default function Phonetic(props){
if (props.phonetic){
    console.log(props.phonetic);
return(
    <div className="Phonetic">
        <h3>{props.phonetic}</h3>
        </div>
    );
}else{
    return null;
}


}