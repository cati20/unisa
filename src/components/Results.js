import React from 'react';
import '../App.css';


const Results = ({results}) => {

    return(
        <div className="row">
        
        { results.map((result) => {
            if (result.length > 0) {
                console.log("true")
            }
            return (
              <div key={result.course} className="col-sm-12 col-lg-5 h-75 text-center">
                  {showResults(result)} 
              </div>
            );
         
        })}
        
    </div>
    )
}
    
//this function returns JSX that will be displayed 
const showResults = (result) =>{
       
    return (
    
        <div   className="card-group h-100">
        <div className="card mb3">
            <div className="card-body bg-dark text-light">
            <h5 className="card-title text-center text-light">{result.course}</h5>
            <h5 className="card-title text-center"><span className="span">Results: </span>{result.description}</h5>
            <h5 className="card-title text-center"><span className="span">Final Mark: </span>{result.finalMark}</h5>
            <h5 className="card-title text-center"><span className="span">Exam Mark: </span>{result.examMark}</h5>
            <h5 className="card-title text-center"><span className="span">Year Mark: </span>{result.yearMark}</h5>
            <p className="card-text"><small className="text-muted">{getDate()}</small></p>
            </div>
        </div>
    </div>
    );
}

const getDate = () =>{
   const date = new Date()
   const hour = date.getHours()
   const minutes = date.getMinutes()
   const seconds = date.getSeconds()
   return  hour + " :"  + minutes + " :" + seconds
}

const errors = () =>{
    return(
        <div>Could not get results</div>
    )
}

export default Results;