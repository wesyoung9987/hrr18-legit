import React from 'react';


const ClassForm = () => {
    return (
        <div className="formWrapper">
            <h3>Class</h3>
            <form>
                <label htmlFor="">Class Name</label>
                <input name="class" type="text" placeholder="Class Name..."/>
                <div>
                    <div>
                        <label htmlFor="section">Section</label>
                        <input name="section" type="text" placeholder="Section..."/>
                    </div>
                     <div>
                        <label htmlFor="numberOfStudents">Number of Students</label>
                        <input name="numberOfStudents" type="text" placeholder="# of students..."/>
                    </div>
                </div>
                <label htmlFor="schedule">Schedule</label>
                <div className="daysOfWeekCheckboxes">
                    <input type="checkbox" name="day" value="Mon" /> M
                    <input type="checkbox" name="day" value="Tues" /> T
                    <input type="checkbox" name="day" value="Wed" /> W
                    <input type="checkbox" name="day" value="Thur" /> Th
                    <input type="checkbox" name="day" value="Fri" /> F
                    <input type="checkbox" name="day" value="Sat" /> S
                    <input type="checkbox" name="day" value="Sun" /> Sn
                </div>
               
                
                <button>Save Class</button>
            </form>
        </div>
        
    );
};

export default ClassForm;