//Axios is essentially JQuery's AJAX simplified
//https://www.npmjs.com/package/axios
import axios from 'axios';

// Allows you to re-route the user
import { browserHistory } from 'react-router'

export function addScore(score) {
  console.log("ADDSCORE", score)
      console.log({StudentId: localStorage.getItem('studentId'), AssignmentId: localStorage.getItem('assignmentId'), score: score.score});
      return axios.post('/api/outcome', {StudentId: Number(localStorage.getItem('studentId')), AssignmentId: Number(localStorage.getItem('assignmentId')), score: Number(score.score)})
        .then(function(response){
            console.log(response.data);
            browserHistory.push('/class');
        })
        .catch(function(response){
            console.error(response);
        });
  //};
};