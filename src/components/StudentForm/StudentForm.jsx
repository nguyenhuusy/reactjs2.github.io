import React, { Component } from 'react';
import TextInput from '../Forms/TextInput';
import { getDataFromLocalStorage, saveDataToLocalStorage } from '../../utils/common';
import validator from '../../validations/studentForm';
import './StudentForm.scss';

class StudentForm extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        name: '',
        gender: '',
        math: '',
        english: ''
      },
      errors: {}
    }
  }

  handleChange = e => {
    const { data } = this.state;
    data[e.target.name] = e.target.value;
    this.setState({ data });
  }

  insertStudent = () => {
    const { isValid, errors } = validator(this.state.data);

    if (!isValid) {
      return this.setState({ errors });
    }

    const { students, updateStudentList } = this.props;
    const data = getDataFromLocalStorage('students') || students;
    const updatedData = [ ...data, this.state.data ];
    saveDataToLocalStorage('students', updatedData);
    updateStudentList(updatedData);
    this.setState({ errors: {}, data: {} });
  }

  render() {
    const { errors, data: { name, gender, math, english } } = this.state;

    return (
      <div className="student-form">
        <h2>Student form</h2>
        <div className="student-form-content">
          <TextInput name="name" label="Student Name" value={ name } onChange={ this.handleChange } error={ errors.name } />
          <TextInput name="gender" label="Gender" value={ gender } onChange={ e => this.handleChange(e) } error={ errors.gender } />
          <TextInput name="math" label="Math" value={ math } onChange={ this.handleChange }  error={ errors.math } />
          <TextInput name="english" label="English" value={ english } onChange={ this.handleChange }  error={ errors.english } />
          <button className="button" onClick={ this.insertStudent }>Insert Student</button>
        </div>
      </div>
    )
  }
}

export default StudentForm;