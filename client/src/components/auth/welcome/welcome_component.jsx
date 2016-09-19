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
                        <h1>Shock</h1>
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
                                <img src="https://puu.sh/rh2Vo/79c66c00cc.png" alt=""/>
                                <h5>Caleb A.</h5>
                                <h6>Lead Engineer</h6>
                                <p>Lorem ipsum some really quick, short description here.</p>
                            </li>
                            <li>
                                <img src="https://puu.sh/rh3kR/1af6371d1f.png" alt=""/>
                                <h5>David T.</h5>
                                <h6>Lead Engineer</h6>
                                <p>Lorem ipsum some really quick, short description here.</p>
                            </li>
                            <li>
                                <img src="https://puu.sh/rh3fB/9ddce5cdfa.png" alt=""/>
                                <h5>Roni V.</h5>
                                <h6>Lead Engineer</h6>
                                <p>Lorem ipsum some really quick, short description here.</p>
                            </li>
                            <li>
                                <img src="https://puu.sh/rh3cN/569be9147a.png" alt=""/>
                                <h5>Wes Y.</h5>
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