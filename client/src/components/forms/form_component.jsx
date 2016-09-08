import React from 'react';

// Components
import Header from '../headers/authorized_header.jsx';
import ClassForm from './classForm_component.jsx';

class Forms extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <main className="logoBg">
                    {this.props.children}
                </main>
            </div>
        )
    }
};

export default Forms;