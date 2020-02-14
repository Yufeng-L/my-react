import React, {Component} from 'react';
import './App.css';

class Course{
  constructor(college,department,number,section,professor,key) {
    this.college = college;
    this.department = department;
    this.number = number;
    this.section = section;
    this.professor = professor;
    this.key = key;
  }
}

class App extends Component {
  render() {
    let courses = [
      new Course('CAS', 'CS','112','B1','Sullivan',0),
      new Course('CAS', 'CS','332','B1','Bun',1),
      new Course('CAS', 'CS','350','B1','Sarkar',2),
      new Course('ENG','EC','602','A2','Carruthers',3),
      new Course('CAS', 'CS','542','A1','Sarah',4),
      ];
    return(
        <div className = "App">
          {courses.map(function(item) {
            return (
                <div identifier = {item.key}>
                <table>
                  <thead>
                  <tr>
                    <th>College</th>
                    <th>Department</th>
                    <th>Number</th>
                    <th>Section</th>
                    <th>Professor</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                  <td>{item.college}</td>
                  <td>{item.department}</td>
                  <td>{item.number}</td>
                  <td>{item.section}</td>
                  <td>{item.professor}</td>
                  </tr>
                  </tbody>
                </table>
                </div>

            );
          })}

        </div>
    )

  }

}
export default App;

