import React from 'react';


const StudentForm = () => {
    return (
        <div className="formWrapper">
            <h3>Student</h3>
            <form>
                <label htmlFor="first">First Name</label>
                <input name="first" type="text" placeholder="First Name..."/>
                <label htmlFor="last">Last Name</label>
                <input name="last" type="text" placeholder="Last Name..."/>
                <label htmlFor="name">Preferred Name</label>
                <input name="name" type="text" placeholder="Goes by..."/>
                
                <button>Save Student</button>
            </form>
        </div>
    );
};

export default StudentForm;