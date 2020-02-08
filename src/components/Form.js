import React from 'react';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {FaRegCalendarAlt} from 'react-icons/fa'
import {FaRegIdCard} from 'react-icons/fa'



const Form = (props) => (
    <div className="row">
        <div className="col-12 justify-content-center ">
            <form class="form-inline " onSubmit={props.doNotDisplay} >
            <label class="sr-only" for="studenNo">Username</label>
            <div class="input-group mb-2 mr-sm-2">
            <div class="input-group-prepend">
            <div class="input-group-text"><FaRegIdCard/></div>
            </div>
            <input type="text" class="form-control" id="studenNo" name="studentNo" placeholder="Student Number" />
            </div>

            <label class="sr-only" for="Year">Username</label>
            <div class="input-group mb-2 mr-sm-2">
            <div class="input-group-prepend">
            <div class="input-group-text"><FaRegCalendarAlt/></div>
            </div>
            <input type="text" class="form-control" id="Year" name="year" placeholder="Year" />
            </div>

            <label class="sr-only" for="Year">Username</label>
            <div class="input-group mb-2 mr-sm-2">
            <div class="input-group-prepend">
            <div class="input-group-text"><FaRegCalendarAlt/></div>
            </div>
            <select name="examPeriod" id="inputexamPeriod" className="form-control" required="required">
                <option value="1" >January</option>
                <option value="6">May/June</option>
                <option value="10">Oct/Nov</option>
            </select>
            </div>
           
            <button type="submit" class="btn btn-info mb-2 mr-sm-2">Submit</button>
            </form>

        </div>
    </div>
);



export default Form;