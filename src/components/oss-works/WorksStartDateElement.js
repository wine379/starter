import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const WorksStartDateElement = () => {
  const [state, setState] = useState({ startDate: new Date()});
  const handleChange = (date) => {setState({ startDate: date})}
  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(state.startDate)
  }
  return (
    <div className="page-wrapper">
        <div className="card mb-4">
           <div className="card-body">
               <div className="card-header">
                   <h5 className="card-title" style={{ color: 'blue' }}><b>Works Start Date</b></h5>
               </div>
                <form onSubmit={ onFormSubmit }>
                    <div className="form-group">
                    <DatePicker
                        selected={ state.startDate }
                        onChange={ handleChange }
                        name="startDate"
                        dateFormat="MM/dd/yyyy"
                    />
                    </div>
                        <button className="btn btn-primary">Submit Project Start Date For Household</button>
                    <div>

                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default WorksStartDateElement

