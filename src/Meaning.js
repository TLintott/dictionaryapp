import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props){
//console.log(props.meaning);
    return (
        <div className="Meanings">
        <h3>{props.meaning.partOfSpeech}</h3>
            <div>
               
              <div className="definition">
                {props.meaning.definition}
                </div>
                
                <div className="example">
                {props.meaning.example}</div>
               
                <Synonyms synonyms={props.meaning.synonyms}/>
             
            </div>
            </div>
    
    );


}