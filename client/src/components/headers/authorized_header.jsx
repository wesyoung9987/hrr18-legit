// Header shown when user is authorized and logged in
import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="wrapper clearfix">
                <h1>
                    <a href="/home">
                        <img src="http://yadayadacreative.com/CDA/legitLogo.png" alt=""/>
                    </a>
                </h1>
                <nav className="clearfix">
                    <ul>
                        <li>
                            <a>
                                <i className="fa fa-tachometer" aria-hidden="true"></i> 
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <a>
                                <i className="fa fa-envelope" aria-hidden="true"></i> 
                                Messages
                            </a>
                        </li>
                        <li>
                            <a>
                                <i className="fa fa-angle-down" aria-hidden="true"></i> 
                                yctercero
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            
        </header>
    );
};

export default Header;