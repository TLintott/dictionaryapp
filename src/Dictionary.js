import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";
import axios from "axios";  

export default function Dictionary(props){
  let [keyword, setKeyword] = useState(props.defaultKeyword); 
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  
  function handResponse(response){
    //console.log(response.data);
    setResults(response.data);
  }

  function search(){
//documentation: https://api.shecodes.io/dictionary/v1/define?word=word&key=4b123t
let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=4b123t2611cd046f6e3o15d4a0230eef`;
axios.get(apiUrl).then(handResponse);   

  }

  
  function handleSubmit(event){
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event){
    setKeyword(event.target.value);
  }

  function load(){
    setLoaded(true);
    search();
  }

if(loaded){
return (<div className="Dictionary">
  <section>
    <h2>Look up a word</h2>
    <form onSubmit={handleSubmit}>
        <input type="search" onChange={handleKeywordChange}
        defaultValue={props.defaultKeyword}/>
    </form>
    <div className="hint"> examples: rainbow, book, cake... </div>
    </section>
    <Results results={results}/>
</div>);
 
}else{
  load();
  return "Loading"
}

}

