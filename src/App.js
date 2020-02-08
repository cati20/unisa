
import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Form from "./components/Form"
import Students from "./components/Students"
import Profile from "./components/Profile"
import Results from "./components/Results"
import { render } from '@testing-library/react';
import { css } from "@emotion/core";
// First way to import
import {PacmanLoader} from "react-spinners";

const  override = css`
display: block;
margin: 0 auto;
border-color: red;
`;


class App extends React.Component {
  //creating a constructor function and passing it props an an argument and defining the initial state of the application
  constructor(){
    super();
    this.state={
      studentNo: undefined,
      year: undefined,
      exam_period: undefined,
      course_code: undefined,
      module_code:undefined,
      final_mark: undefined,
      results: [],
      studInfo: [],
      year_mark: undefined,
      error: undefined,
      exam_mark: undefined,
      surname: undefined,
      dateOfBirth: undefined,
      contacts: undefined,
      name: undefined,
      title: undefined,
      qualification : undefined,
      qualification_status : undefined,
      exam_center : undefined,
      custom_error : undefined,
      isLoading:false
    };

  }

 // this function validates the form input and call the getDate() when all input values are correct

  doNotDisplay =async (e) =>{
    e.preventDefault();
    const studNon = e.target.studentNo.value
    const year = e.target.year.value
    const examPeriod = e.target.examPeriod.value
    if( isNaN(studNon) || studNon == ""  || studNon == "  " || studNon == 56808453){
        this.setState({
          custom_error : `!!! Enter a valid Student Number.. e.g. 45875896`
        })
        
    }else{
      const api_call = await fetch(`https://myadmin.unisa.ac.za/myadmin-exam-services/services/rest/examresultservice/examresults?academicYear=${year}&academicPeriod=${examPeriod}&studentNumber=${studNon}`);
      const resp = await api_call.json()
      if(resp.message == "This student has no results for this Exam Year and Period." || resp.message == " ** Study Fees outstanding." || resp.examYear){
        this.getData(e,studNon,examPeriod,year)
      }
    }
    const api_call = await fetch(`https://myadmin.unisa.ac.za/myadmin-exam-services/services/rest/examresultservice/examresults?academicYear=${year}&academicPeriod=${examPeriod}&studentNumber=${studNon}`);
      const resp = await api_call.json()

    if(resp.message == "The Exam Year must not be empty." || resp.message == "The student number must not be empty.")
      this.setState({
        custom_error : resp.message
      })
}


// this function fetches data from an API service and set the state variables

  getData =async (e,studNon,examPeriod,year)=>{
    e.preventDefault();
    this.setState({isLoading:true})
    //const student_Number= e.target.studentNo.value
    const student_Number = studNon
    //const year = e.target.year.value
    //const examPeriod = e.target.examPeriod.value
    const api_call = await fetch(`https://myadmin.unisa.ac.za/myadmin-exam-services/services/rest/examresultservice/examresults?academicYear=${year}&academicPeriod=${examPeriod}&studentNumber=${student_Number}`);
    const student_details = await fetch(`https://myadmin.unisa.ac.za/myadmin-student-services/services/rest/studentservice/students/${student_Number}`);
    const moreInfo = await fetch(`https://myadmin.unisa.ac.za/myadmin-financial-services/services/rest/financialservice/accountstatement?studentId=${student_Number}&accountClassification=SF&toolName=financial-details-app`)
    const demographics = await fetch(`https://myadmin.unisa.ac.za/myadmin-student-services/services/rest/studentregistrationservice/student?studentNumber=${student_Number}`)
    //const randStudentNumber = await fetch(`https://cas.unisa.ac.za/cas/status/logging/getAuditLog`);
    const student_data = await student_details.json();
    const data = await api_call.json();
    const info = await moreInfo.json();
    const contact = await demographics.json();
    
    
    
    this.setState({
      studentNo : student_data.studentNumber,
      year: data.examYear,
      exam_period: data.examPeriod,
      course_code: data.examPeriod,
      surname: student_data.surname,
      dateOfBirth: student_data.dateOfBirth,
      results: data.courseResult,
      name: student_data.firstNames,
      error: data.message,
      studInfo: info,
      contacts: contact,
      title : contact.title,
      qualification : contact.qualificationDescription,
      qualification_status : contact.academicRecordStatusDescription,
      exam_center : contact.studentExamCentres[0].currentExamCentreDescription,
      isLoading:false
       
    })
      
  } //end of getDate function

 



//start of render functiom
  render(){
    const {results,status,studentNo,contacts,exam_center,dateOfBirth,name,title,surname,qualification_status,qualification, isLoading} =  this.state;
   
    
    return (
      
      <div className="container mt-3">
       
        <Form doNotDisplay={this.doNotDisplay} />
        <div className="row ">
              <Students
              studentNo={studentNo}
              qualification={qualification}
              qualification_status={qualification_status}
              surname={surname}
              title={title}
              name={name}
              dateOfBirth={dateOfBirth}
              exam_center={exam_center}
              />
            {studentNo  ? <Profile contacts={contacts} /> : <div></div>}
        </div>
        
        {isLoading === true ? 
        <PacmanLoader
        //css={override}
        size={55}
        margin={2}
        //size={"150px"} this also works
        color={"#555"}
        loading={isLoading}
      />
      : console.log('true')}

         {results && studentNo ? <Results results={results} /> : this.state.error}
         {studentNo && contacts && exam_center ?  <div></div> : this.state.custom_error}
      </div>

    )

}; //end of render funtion


} //end of class definition

export default App;