import React from "react";

export default function Meaning(props){
console.log(props.meaning);
    return (
        <div className="Meanings">
        <h3>{props.meaning.partOfSpeech}</h3>
            <div>
                <p>
                {props.meaning.definition}
                <br/>
                <em>
                {props.meaning.example}
                </em>
                </p>
            </div>
            </div>
    
    );


}