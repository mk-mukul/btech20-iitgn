// /*

const script = () => {
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let currentDate = new Date();
    let day = currentDate.getDay();
    let hour = currentDate.getHours();
    if (hour.toString().length < 2) {
      hour = "0" + hour;
    }
  
    let minute = currentDate.getMinutes();
    if (minute.toString().length < 2) {
      minute = "0" + minute;
    }
  
    let second = currentDate.getSeconds();
    if (second.toString().length < 2) {
      second = "0" + second;
    }
  
    let date = currentDate.getDate();
    if (date.toString().length < 2) {
      date = "0" + date;
    }
  
    let month = currentDate.getMonth();
  
    // let year = currentDate.getFullYear();
  
    let time = hour + ":" + minute;
  
    let courses = document.querySelectorAll("#link-page .course");
  
    let liveClasses = document.querySelectorAll("#link-page .hide");
  
    let todayClasses = document.querySelectorAll("#link-page .hide2");
  
    // courses.forEach((val, i) => {
    //   val.innerText.split("\n").forEach((val, temp) => {
    //     if (val[val.length - 3] === ":") {
    //       let classTimes = val.split(",");
    //       classTimes.forEach((value, ind) => {
    //         let classTime = value.split(" ");
    //         if (
    //           time < classTime[classTime.length - 3] &&
    //           classTime.indexOf(days[day]) !== -1
    //         ) {
    //           document.querySelectorAll(".today")[0].innerHTML =
    //             "Today's Classes Left";
    //           todayClasses[i].setAttribute("class", "course leftToday");
    //         }
    //         if (
    //           time >= classTime[classTime.length - 3] &&
    //           time < classTime[classTime.length - 1] &&
    //           classTime.indexOf(days[day]) !== -1
    //         ) {
    //           document.querySelectorAll(".running")[0].innerHTML =
    //             "Classes Running...";
    //           liveClasses[i].setAttribute("class", "course live");
    //         }
    //         if (classTime.indexOf(days[day]) !== -1) {
    //           courses[i].setAttribute("class", "course today_class");
    //         }
    //       });
    //     }
    //   });
    // });
  
    const timer = setInterval(() => {
      currentDate = new Date();
      day = currentDate.getDay();
      hour = currentDate.getHours();
      if (hour.toString().length < 2) {
        hour = "0" + hour;
      }
  
      minute = currentDate.getMinutes();
      if (minute.toString().length < 2) {
        minute = "0" + minute;
      }
  
      second = currentDate.getSeconds();
      if (second.toString().length < 2) {
        second = "0" + second;
      }
      try {
        document.getElementById("time").innerText =
          hour + ":" + minute + ":" + second;
        document.getElementById("date").innerText =
          days[day] + ", " + months[month] + " " + date;
      } catch {
        //   console.log("timer timer")
        clearInterval(timer);
      }
  
      if (
        (minute.toString() === "00" || minute.toString() === "30") &&
        second.toString() === "00"
      ) {
        window.location.reload();
      }
    }, 1000);
  
    // console.log("hello")
  };
  
  
  const start = setInterval(() => {
    const load = document.getElementById("time");
    if (load) {
      script();
      clearInterval(start)
    }
  }, 100);
  
  
  // */