import React from 'react';

// Components
import Header from '../../headers/authorized_header.jsx';
import DashboardSummary from './C_dashboardSummary.jsx';
import DashboardLeftCol from './C_dashboardLeftCol.jsx';
import DashboardRightCol from './C_dashboardRightCol.jsx';

const DashboardClass = () => {
    return (
        <div>
            <Header />
            <main>
                <div className="dashboardWrapper">
                    <DashboardSummary />
                    <div className="dashboardCols">
                        <div>
                            <h3>Students <a href="/studentForm"><i className="fa fa-plus" aria-hidden="true"></i></a></h3>
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

export default DashboardClass;