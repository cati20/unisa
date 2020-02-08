import React from 'react';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css"




const Students = (props) => {
  
        return (

            <div className="col-lg-6 col-sm-12 col-md-12 ">
                <div className= "text-black ">
                <h3>Unisa Student Results</h3>
                <p>Title : {props.title} </p>
                <p>Surname : {props.surname}</p>
                <p>Name : {props.name}</p>
                <p>StudentNumber : {props.studentNo}</p>
                <p>dateOfBirth : {props.dateOfBirth == undefined ?  console.log(""): msToDate(props.dateOfBirth)} </p>
                <p>Qualification : {props.qualification}</p>
                <p>Status : {props.qualification_status}</p>
                <p>Exam center : {props.exam_center}</p>

                </div>
            </div>
        );

  }

  const msToDate = (sec)=>{
      var date = new Date(sec)
      return date.toDateString("yyyy-mm-d")
  }

/*   const msToTime =(duration) => {
    var milliseconds = parseInt((duration%1000)/100)
        , seconds = parseInt((duration/1000)%60)
        , minutes = parseInt((duration/(1000*60))%60)
        , hours = parseInt((duration/(1000*60*60))%24);
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    return hours + ":" + minutes + ":" + seconds //+ "." + milliseconds;
  } */

  const getExamPeriod = (examprd) =>{
    switch(true){
      case examprd === 1:
        return "January";
        break;
        case examprd ===6:
        return "May/June";
        break;
        case examprd ===10:
        return "Oct/Nov";
        break;
        default:
          return ""
    }    
  }


  /* const getMonth = (month) =>{
    switch(true){
      case month == 0:
        return "January";
        break;
        case month == 1:
          return "February";
          break;
          case month == 2:
        return "March";
        break;
        case month == 3:
        return "April";
        break;
        case month == 4:
        return "May";
        break;
        case month == 5:
        return "June";
        break;
        case month == 6:
        return "July";
        break;
        case month == 7:
        return "August";
        break;
        case month == 8:
        return "September";
        break;
        case month == 9:
        return "October";
        break;
        case month == 10:
        return "November";
        break;
        case month == 11:
        return "December";
        break;
            default:
              return this.getWeatherIcon.Clouds;

    } //end of case and switch
  } // end of function */



export default Students;