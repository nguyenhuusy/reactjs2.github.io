import React, { Component } from 'react';
import StudentRow from './StudentRow';
import './StudentList.scss';

class StudentList extends Component {
  render() {
    const { students } = this.props;
    const tableHeads = Object.keys(students[0]);

    return (
      <div className="student-list">
        <h2 className="student-list__heading">Students</h2>
        <table>
          <thead>
            <tr>
              {tableHeads.map((head, idx) =>
                <td key={ idx }>{ head }</td>
              )}
            </tr>
          </thead>
          <tbody>
            {students.map((student, idx) =>
              <StudentRow 
                key={ idx }
                { ...student }
                test="test"
              />
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

export default StudentList;