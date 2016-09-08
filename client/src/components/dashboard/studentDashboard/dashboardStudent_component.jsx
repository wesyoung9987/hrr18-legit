import React from 'react';

// Components
import Header from '../../headers/authorized_header.jsx';
import DashboardSummary from './S_dashboardSummary.jsx';
import DashboardLeftCol from './S_dashboardLeftCol.jsx';
import DashboardRightCol from './S_dashboardRightCol.jsx';

const DashboardStudent = () => {
    return (
        <div>
            <Header />
            <main>
                <div className="dashboardWrapper">
                    <DashboardSummary />
                    <div className="dashboardCols">
                        <div>
                            <h3>Assignments <a><i className="fa fa-plus" aria-hidden="true"></i></a></h3>
                            <DashboardLeftCol />
                        </div>
                        <div>
                            <DashboardRightCol />
                        </div>
                    </div>
                </div>
            </main>
        </div>
        
    );
};

export default DashboardStudent;