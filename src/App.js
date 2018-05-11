import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

   class App extends Component {
    constructor(props) { 
      super(props);
    this.state = {
       currentMonth: "January",
       month: ["January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ],
       currentYear: 2018,
     };
    }

     render() {
       return(
        <div className="text-center">
        <h1>React Calendar</h1>
        <h2>Make a new appointment</h2>
        <Month month={this.state.month} 
        currentMonth={this.state.currentMonth} 
        currentyear={this.state.currentYear}
        goToLastMonth={this.goToLastMonth}/>
        <Time />
      </div>
       )
     }

    goToLastMonth = (prevState) => {
        const monthNumber = prevState.month.indexOf(prevState.currentMonth);
        if (monthNumber > 0) {
          this.setState(prevState => ({
            currentMonth: prevState.month[monthNumber]
          }))
        }
      }


    }




  const Month = (props) => {
      return(
        <div>
          <div className="container">
            <div className="row">
              <div className="col-3">
                <i className="fa fa-arrow-left" onClick={props.goToLastMonth} />
              </div>
              <div className="col-6">
              <h4>{props.month} {props.currentYear}</h4>
              </div>
              <div className="col-3">
                <i className="fa fa-arrow-right" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <Week />
            </div>
            <div className="row">
              <Week />
            </div>
            <div className="row">
              <Week />
            </div>
            <div className="row">
              <Week />
            </div>
            <div className="row">
              <Week />
            </div>
          </div>
        </div>
      )
    }
  


  class Week extends Component {
    render() {
      return(
        <div>
          <div className="container">
          <div className="row">
          <div className="col-3"></div>
          <div className="col-1"><Day /></div>
          <div className="col-1"><Day /></div>
          <div className="col-1"><Day /></div>
          <div className="col-1"><Day /></div>
          <div className="col-1"><Day /></div>
          <div className="col-1"><Day /></div>
          <div className="col-1"><Day /></div>
          </div>
          </div>
        </div>
      )
    }
  }

  const Day = () => {
    return <div>
        1
      </div>
  };

  class Time extends Component {
    render() {
      return (
        <div>
          <br />
          12:00 AM
        </div>
      )
    }
  }
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default App;
