// Holds list of students
//React
import React from 'react';

//Components
import DashboardRightColItem from './M_dashboardRightColItem.jsx';


const DashboardRightCol = ({students}) => {
    return (
        <div className="dashboardRightCol">
            <ul>
                {students.map((student) =>
                    <DashboardRightColItem
                        key={student.id}
                        student={student}
                    />
                )}
            </ul>
        </div>
    );
};

export default DashboardRightCol;


