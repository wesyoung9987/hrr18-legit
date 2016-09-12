//Should probably be broken down into further compnents, but working for now

//React
import React from 'react';

// Components
import UnauthHeader from '../../headers/unauthorized_header.jsx';

const Welcome = () => {
    return (
        <div>
            <UnauthHeader />
            <main className="logoBg">
                <div className="welcomeWrapper">
                    <div className="intro">
                        <h1>Legit</h1>
                        <h2>Excel no more.</h2>
                        <h2>Track your classes, attendance, and student outcomes.</h2>
                    </div>
                    <div id="about" className="about">
                        <h3><i className="fa fa-info" aria-hidden="true"></i> About </h3>
                        <div>
                            <p>Our product simplifies the process of student outcomes tracking, providing the user with an intuitive, intelligent and customizable interface that takes away the pain associated with using spreadsheet software.</p>
                        </div>
                    </div>
                    <div id="team" className="team">
                        <h3><i className="fa fa-users" aria-hidden="true"></i> Meet the Team</h3>
                        <ul className="teamUl clearfix">
                            <li>
                                <img src="http://yadayadacreative.com/projects/jfritz.png" alt=""/>
                                <h5>John F.</h5>
                                <h6>Lead Engineer</h6>
                                <p>Lorem ipsum some really quick, short description here.</p>
                            </li>
                            <li>
                                <img src="http://yadayadacreative.com/projects/yara.png" alt=""/>
                                <h5>Yara TP</h5>
                                <h6>Lead Engineer</h6>
                                <p>Programmer | Traveler | Little Sister | Geographically Confused | Dog Parent.</p>
                            </li>
                            <li>
                                <img src="http://yadayadacreative.com/projects/aman.png" alt=""/>
                                <h5>Aman T.</h5>
                                <h6>Lead Engineer</h6>
                                <p>Lorem ipsum some really quick, short description here.</p>
                            </li>
                            <li>
                                <img src="http://yadayadacreative.com/projects/graham.png" alt=""/>
                                <h5>Graham W.</h5>
                                <h6>Lead Engineer</h6>
                                <p>Lorem ipsum some really quick, short description here.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Welcome;