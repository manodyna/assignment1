function JSClock() {
    var time = new Date();
    var day = time.getDate();
    var month = time.getMonth();
    var year = time.getUTCFullYear();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();
    var temp = '' + ((hour > 12) ? hour - 12 : hour);
    if (hour == 0)
      temp = '';
    temp += (day+'/');
    temp += (month+'/');
    temp += (year+'');
    return temp;
  }

  document.write (JSClock());