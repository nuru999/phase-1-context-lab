function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {
        firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    };
}

function createEmployeeRecords(employeeData) {
    return employeeData.map(createEmployeeRecord);
}

function createTimeInEvent(dateTime) {
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(dateTime.split(" ")[1]),
        date: dateTime.split(" ")[0]
    });
    return this;
}

function createTimeOutEvent(dateTime) {
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(dateTime.split(" ")[1]),
        date: dateTime.split(" ")[0]
    });
    return this;
}

function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(event => event.date === date).hour;
    const timeOut = this.timeOutEvents.find(event => event.date === date).hour;
    return (timeOut - timeIn) / 100;
}

function wagesEarnedOnDate(date) {
    const hours = hoursWorkedOnDate.call(this, date);
    return hours * this.payPerHour;
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(record => record.firstName === firstName);
}

function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((total, record) => total + allWagesFor.call(record), 0);
}

function wagesEarnedOnDate(employee, date) {
    const timeIn = employee.timeInEvents.find(event => event.date === date);
    const timeOut = employee.timeOutEvents.find(event => event.date === date);
  
    if (timeIn && timeOut) {
      const hoursWorked = (timeOut.hour - timeIn.hour) / 100;
      return hoursWorked * employee.payPerHour;
    }
  
    return 0;
  }
  
  function allWagesFor(employee) {
    const datesWorked = employee.timeInEvents.map(event => event.date);
    const totalWages = datesWorked.reduce((total, date) => {
      return total + wagesEarnedOnDate(employee, date);
    }, 0);
  
    return totalWages;
  }
  
  function calculatePayroll(employees) {
    return employees.reduce((total, employee) => {
      return total + allWagesFor(employee);
    }, 0);
  }
  
  const employee1 = {
    payPerHour: 10,
    timeInEvents: [
      { date: "2023-10-16", hour: 800 },
      { date: "2023-10-17", hour: 900 },
    ],
    timeOutEvents: [
      { date: "2023-10-16", hour: 1600 },
      { date: "2023-10-17", hour: 1700 },
    ],
  };
  
  const employee2 = {
    payPerHour: 10,
    timeInEvents: [
      { date: "2023-10-16", hour: 800 },
      { date: "2023-10-17", hour: 900 },
    ],
    timeOutEvents: [
      { date: "2023-10-16", hour: 1600 },
      { date: "2023-10-17", hour: 1700 },
    ],
  };
  
  const employees = [employee1, employee2];
  
  console.log(allWagesFor(employee1)); 
  console.log(calculatePayroll(employees));