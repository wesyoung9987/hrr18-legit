//Form to add student
//React
import React from 'react';

//Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addScore } from '../../actions/addStudentScore.js';


class StudentForm extends React.Component {
    constructor(props) {
        super(props);

        //Passing through classId when calling addStudent so that
        //student can be associated to that class right after it is created
        let classId = localStorage.getItem('classId')

        this.state = {
            first: '',
            last: '',
            classId: classId
        };
    }

    onScoreChange(event){
        //As user types in name input, update the state
        //Once state updates the input value is updated to match the state
        this.setState({ score: event.target.value })
    }

    onFormSubmit(event){
        //Need to preventDefault, because without it, once the user hits
        //enter or submit it would send an http request. This being a single
        //page app, that's not needed and handled in the front-end
        event.preventDefault();
        // Call our action, addStudent, which will send a POST request to the api
        // see actions/addStudent.js
        this.props.addScore(this.state);
        //Reset our form fields to empty
        this.setState({
            score: ''
        })
    }

    render(){
        return (
            <div className="formWrapper">
                <h3>Student Score</h3>
                <form  onSubmit={this.onFormSubmit.bind(this)}>
                    <label htmlFor="score">Score on {localStorage.getItem('assignmentName')} by {localStorage.getItem('studentName')}:</label>
                    <input
                        name="score"
                        type="number"
                        placeholder="Score..."
                        onChange={this.onScoreChange.bind(this)}
                    />
                    <button>Save Score</button>
                </form>
            </div>
        );
    }
};

// gives us access to this.props.addUser within component
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addScore }, dispatch);
}

export default connect(null, mapDispatchToProps)(StudentForm);