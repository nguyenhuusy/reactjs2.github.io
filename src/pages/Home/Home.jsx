import React, { Component } from 'react';
import { connect } from 'react-redux';
import { testRedux } from '../../redux/actions/testActions';
import StudentForm from '../../components/StudentForm';
import StudentList from '../../components/StudentList';
import ContentSection from '../../components/ContentSection';
import { getDataFromLocalStorage } from '../../utils/common';
import students from '../../utils/data/studentData';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      stds: getDataFromLocalStorage('students') || students,
      showContent: true
    }
  }

  componentDidMount() {
    this.props.testRedux('test data');
  }

  render() {
    const { stds } = this.state;
    console.log('home', this.props);
    return(
      <div className="home">
        <div className="content">
          <div className="content-section">
            <StudentForm 
              updateStudentList={ data => this.setState({ stds: data }) } 
              students={ stds } 
            />
            <StudentList students={ stds } />
          </div>
          <button onClick={ () => this.setState({ showContent: false }) }>Hide content</button>
          {this.state.showContent && <ContentSection/>}
        </div>
      </div>
    )
  }
}

export default connect(null, { testRedux })(Home);