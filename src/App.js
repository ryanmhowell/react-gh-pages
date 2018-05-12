import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

   class App extends Component {
    constructor(props) { 
      super(props);
      this.goToLastMonth = this.goToLastMonth.bind(this);
      this.goToNextMonth = this.goToNextMonth.bind(this);
      this.goToNextYear = this.goToNextYear.bind(this);
      this.goToLastYear = this.goToLastYear.bind(this);
      this.addHour = this.addHour.bind(this);
      this.minusHour = this.minusHour.bind(this);
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
        hours: 6,
        minutes: 30,
        ampm: "AM",
       appointments: [
         {
           apmtDesc: "dentist appointment",
           dayOfWeek: "Monday",
           apmtMonth: "January",
           dayOfMonth: 12,
           apmtYear: 2018,
           apmtHours: 4,
           apmtMinutes: 30,
           apmtAmpm: "PM"
         }
       ]
     };
    }

    

    goToLastMonth = (props) => {
      let monthNumber = 0;
      for (let i = 0; i < this.state.month.length; i++) {
        if(this.state.month[i] === this.state.currentMonth) {
          monthNumber = i;
        }
      }
      if(monthNumber > 0) {
        this.setState(prevState => ({
          currentMonth: prevState.month[monthNumber - 1]
        }));
      }
    };


    goToNextMonth = (props) => {
      let monthNumber = 0;
      for (let i = 0; i < this.state.month.length; i++) {
        if (this.state.month[i] === this.state.currentMonth) {
          monthNumber = i;
        }
      }
      if(monthNumber < this.state.month.length - 1) {
        this.setState(prevState => ({
          currentMonth: prevState.month[monthNumber + 1]
        }));
      }
    };

    goToLastYear = (props) => {
      this.setState(prevState => ({
        currentYear: prevState.currentYear - 1
      }));
    };

    goToNextYear = (props) => {
      this.setState(prevState => ({
        currentYear: prevState.currentYear + 1
      }));
    };


    addHour = (props) => {
        this.setState(prevState => ({
          hours: prevState.hours + 1
        }));
        if(this.state.hours >= 12) {
          this.setState(prevState => ({
            hours: 1
          }));
        }
      };
    

    minusHour = (props) => {
      if (this.state.hours > 1) {
        this.setState(prevState => ({
            hours: prevState.hours - 1
        }));
      }
    }

    addMinute = (props) => {
      if (this.state.minutes < 59) {
        this.setState(prevState => ({
          minutes: prevState.minutes + 1
        }));
      } else {
        this.setState(prevState => ({
          minutes: 0
        }));
      }
    };

    minusMinute = (props) => {
      if (this.state.minutes > 0) {
        this.setState(prevState => ({
          minutes: prevState.minutes - 1
        }));
      }
    };

    addAppointment = (e, props) => {
      e.preventDefault();
      let newApmt = {
           apmtDesc: document.getElementById("description").value,
           dayOfWeek: "Monday",
           apmtMonth: "January",
           dayOfMonth: 12,
           apmtYear: 2018,
           apmtHours: 4,
           apmtMinutes: 30,
           apmtAmpm: "PM"
    }
    this.setState(prevState => ({
      appointments: prevState.appointments.push(newApmt)
    }));
    console.log(this.state.appointments);
  }

     render() {
       return(
        <div className="text-center">
        <h1>React Calendar</h1>
        <h2>Make a new appointment</h2>
        <Description />
        <MonthSelector currentMonth={this.state.currentMonth}
        month={this.state.month} 
        goToNextMonth={this.goToNextMonth}
        goToLastMonth={this.goToLastMonth}/>
        <YearSelector currentYear={this.state.currentYear} 
        goToNextYear={this.goToNextYear}
        goToLastYear={this.goToLastYear} />
        <Month currentMonth={this.state.currentMonth} 
        currentYear={this.state.currentYear}
        goToLastMonth={this.goToLastMonth}
        goToNextMonth={this.goToNextMonth} />
        <TimeSelector hours={this.state.hours}
        minutes={this.state.minutes} 
        ampm={this.state.ampm} 
        addHour={this.addHour}
        addMinute={this.addMinute}
        minusHour={this.minusHour}
        minusMinute={this.minusMinute} />
        <Button addAppointment={this.addAppointment} />
        <AppointmentList appointments={this.state.appointments} />
      </div>
       )
     }

    


    }



    const Description = (props) => {
      return (
        <div>
          <br />
          <input id="description" type="text" required placeholder="Description" />
          <br />
          <br />
        </div>
      )
    };


    const MonthSelector = (props) => {
      return(
        <div className="container">
            <div className="row">
              <div className="col-3">
                <button className="btn btn-primary" 
                onClick={props.goToLastMonth}>
                  <i className="fa fa-arrow-left" />
                </button>
              </div>
              <div className="col-6">
              <h4>{props.currentMonth} {props.currentYear}</h4>
              </div>
              <div className="col-3">
                <button className="btn btn-primary" 
                onClick={props.goToNextMonth}>
                  <i className="fa fa-arrow-right" />
                </button>
              </div>
            </div>
          </div>
      )
    };

    const YearSelector = (props) => {
      return(
        <div>
          <br />
           <div className="container">
             <div className="row">
               <div className="col-3">
                 <button className="btn btn-primary" 
                 onClick={props.goToLastYear}>
                 <i className="fa fa-arrow-left" />
                 </button>
               </div>
               <h4 className="col-6">{props.currentYear}</h4>
               <div className="col-3">
                 <button className="btn btn-primary" 
                 onClick={props.goToNextYear}>
                 <i className="fa fa-arrow-right" />
                 </button>
               </div>
             </div>
           </div>
          <br />
        </div>
      )
    };


  const Month = (props) => {
      return(
        <div>
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

  const TimeSelector = (props) => {
      return (
        <div>
          <br />
          <button className="btn btn-primary" 
          onClick={props.addHour}>
            <i className="fa fa-arrow-up" />
          </button>
          <button className="btn btn-primary" 
          onClick={props.minusHour}>
            <i className="fa fa-arrow-down" />
          </button>
          <span id="time">
          {props.hours + " : "  
          + (props.minutes < 10 ? "0" : "") + props.minutes 
          + " " + props.ampm}
          </span>
          <button className="btn btn-primary" 
          onClick={props.addMinute}>
            <i className="fa fa-arrow-up" />
          </button>
          <button className="btn btn-primary" 
          onClick={props.minusMinute}>
            <i className="fa fa-arrow-down" />
          </button>
          <br />
        </div>
      )
    }
  

  const Button = (props) => {
      return(
        <div>
          <form onSubmit={props.addAppointment}>
            <br />
            <button className="btn btn-danger">Make Appointment</button>
          </form>
          <br />
        </div>
      )
    }
  


  const AppointmentList = (props) => {
    return(
        <div>
        {props.appointments.map((appointment) => {
          <Appointment 
          dayOfWeek={props.dayOfWeek}
          dayOfMonth={props.dayOfMonth}
          apmtDesc={props.apmtDesc}
          apmtMonth={props.apmtMonth}
          apmtYear={props.apmtYear}
          apmtHours={props.apmtHours}
          apmtMinutes={props.apmtMinutes}
          apmtAmpm={props.apmtAmpm} />
        })}
        </div>
      )
    }
  
  

const Appointment = (props) => {
  return(
    <div>
    <h4>{props.dayOfWeek + ", "
     + props.apmtMonth + " " 
     + props.dayOfMonth + ", "
     + props.apmtYear}</h4>
     <h4>{props.apmtDesc}</h4>
    </div>
  )
};


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
