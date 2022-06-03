// Create a function that takes two dates and returns the number of days between the first and second date.


// getDays(

//     new Date("June 14, 2019"),
  
//     new Date("June 20, 2019")
  
//   ) ➞ 6
  
  
  
  
//   getDays(
  
//     new Date("December 29, 2018"),
  
//     new Date("January 1, 2019")
  
//   ) ➞ 3
  
//   // Dates may not all be in the same month/year.
  
  
  
  
//   getDays(
  
//     new Date("July 20, 2019"),
  
//     new Date("July 30, 2019")
  
//   ) ➞ 10
  
  // creating a function that lets us get 2 dates.
  //arrow func, start-fin params , 
  //create var for first date, and for end date. ---> have em equal to new Date objects.
    // 
  let numberDate = (start,finish) => {
      // created two date objects ---> 
    let firstDate = new Date (start);
    let endDate = new Date (finish);
    // using milliseconds with it. 
    let timeInMs = 1000 * 60 * 60 * 24;
    //.getTime() grabs the time in milliseconds
    // subtracting MS - MS -- for difference
    let difference = endDate.getTime() - firstDate.getTime();
    // divides the difference with timeInMs 
    let daysBetween = (difference / timeInMs);
    // return what we got in days 
    return daysBetween;
  }

  console.log(numberDate("April/16/2018", "May/16/2018"));
  console.log(numberDate("April/10/2018", "April/10/2019"));
  console.log(numberDate("July/20/2019", "July/30/2019"));

