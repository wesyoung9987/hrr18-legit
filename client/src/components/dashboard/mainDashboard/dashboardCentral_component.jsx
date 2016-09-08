import React from 'react';

// Components
import Header from '../../headers/authorized_header.jsx';
import DashboardSummary from './M_dashboardSummary.jsx';
import DashboardLeftCol from './M_dashboardLeftCol.jsx';
import DashboardRightCol from './M_dashboardRightCol.jsx';

const Dashboard = () => {
    return (
        <div>
            <Header />
            <main>
                <div className="dashboardWrapper">
                    <DashboardSummary />
                    <div className="dashboardCols">
                        <div>
                            <h3>Classes <a href="/classform"><i className="fa fa-plus" aria-hidden="true"></i></a></h3>
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

export default Dashboard;