import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";
import axios from "axios";  

export default function Dictionary(){
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  
  function handResponse(response){
    console.log(response.data);
    setResults(response.data);
  }


  function search(event){
    event.preventDefault();
    
//documentation: https://api.shecodes.io/dictionary/v1/define?word=word&key=4b123t
let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=4b123t2611cd046f6e3o15d4a0230eef`;
axios.get(apiUrl).then(handResponse);   
//console.log(apiUrl);
  }


  function handleKeywordChange(event){
    setKeyword(event.target.value);
  }

return <div className="Dictionary">
    <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange}/>
    </form>
    <Results results={results}/>
</div>;


 
}