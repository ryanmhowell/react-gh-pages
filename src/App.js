import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Description from "./components/Description.js";
import MonthSelector from "./components/MonthSelector.js";
import YearSelector from "./components/YearSelector.js";
import Month from "./components/Month.js";
import TimeSelector from "./components/TimeSelector.js";
import Button from "./components/Button.js";
import AppointmentList from "./components/AppointmentList.js";
import AMPMSelector from './components/AMPMSelector';



   class App extends Component {
    constructor(props) { 
      super(props);
      this.goToLastMonth = this.goToLastMonth.bind(this);
      this.goToNextMonth = this.goToNextMonth.bind(this);
      this.goToNextYear = this.goToNextYear.bind(this);
      this.goToLastYear = this.goToLastYear.bind(this);
      this.addHour = this.addHour.bind(this);
      this.minusHour = this.minusHour.bind(this);
      this.setAM = this.setAM.bind(this);
      this.setPM = this.setPM.bind(this);
      this.handleDayChange = this.handleDayChange.bind(this);
      this.state = {
        week1: [1,2,3,4,5,6,7],
        week2: [8,9,10,11,12,13,14],
        week3: [15,16,17,18,19,20,21],
        week4: [22,23,24,25,26,27,28],
        week5: [29,30,31],
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
        day: 7, 
        hours: 6,
        minutes: 30,
        ampm: "AM",
        description: "",
       appointments: [
         {
           apmtDesc: "dentist appointment",
           apmtMonth: "January",
           apmtDay: 12,
           apmtYear: 2018,
           apmtHours: 4,
           apmtMinutes: 30,
           apmtAmpm: "PM"
         },
         {
           apmtDesc: "house party",
           apmtMonth: "June",
           apmtDay: 23,
           apmtYear: 2019,
           apmtHours: 6,
           apmtMinutes: 15,
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


    setDesc = (e,props) => {
      e.preventDefault();
      this.setState( ({
        description: e.target.description.value
      }));
    }

    handleDayChange = (dayNumber) => {
      this.setState({
        day: dayNumber
      });
      console.log(dayNumber);
    }



    addAppointment = (e, props) => {
      e.preventDefault();
      if(this.state.description) {
      const newApmt = [
        {
           apmtDesc: this.state.description,
           apmtDay: this.state.day,
           apmtMonth: this.state.currentMonth,
           dayOfMonth: this.state.day,
           apmtYear: this.state.currentYear,
           apmtHours: this.state.hours,
           apmtMinutes: this.state.minutes,
           apmtAmpm: this.state.ampm
    }
  ]
    this.setState(prevState => ({
      appointments: prevState.appointments.concat(newApmt)
    }));
    console.log(this.state.description);
  } else {
    alert("A description of the appointment is required.");
  }
  }


    setAM = (props) => {
      this.setState(prevState => ({
        ampm: "AM"
      }));
    }


    setPM = (props) => {
      this.setState(prevState => ({
        ampm: "PM"
      }));
    }



     render() {
       return(
        <div className="text-center">
        <h1>React Calendar</h1>
        <h2>Make a new appointment</h2>
        <Description setDesc={this.setDesc} />
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
        goToNextMonth={this.goToNextMonth}  
        day={this.state.day} 
        handleDayChange={this.handleDayChange}
        week1={this.state.week1}
        week2={this.state.week2}
        week3={this.state.week3}
        week4={this.state.week4}
        week5={this.state.week5}/>
        <TimeSelector hours={this.state.hours}
        minutes={this.state.minutes} 
        ampm={this.state.ampm} 
        addHour={this.addHour}
        addMinute={this.addMinute}
        minusHour={this.minusHour}
        minusMinute={this.minusMinute} />
        <AMPMSelector ampm={this.state.ampm}
        setAM={this.setAM}
        setPM={this.setPM} />
        <Button addAppointment={this.addAppointment} 
        currentMonth={this.state.currentMonth}
        currentYear={this.state.currentYear}
        day={this.state.day}
        hours={this.state.hours}
        minutes={this.state.minutes}
        ampm={this.state.ampm}
        description={this.state.description}/>
        <AppointmentList appointments={this.state.appointments} 
        apmtMonth={this.state.currentMonth}
        apmtDay={this.state.day}
        apmtYear={this.state.currentYear}
        apmtHours={this.state.hours}
        apmtMinutes={this.state.minutes}
        apmtAmpm={this.state.ampm}
        apmtDesc={this.state.description} 
        />
      </div>
       )
      }


    }




export default App;



// async  await

// Promise

// fetch

