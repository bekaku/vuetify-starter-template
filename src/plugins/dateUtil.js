export const getDateWithFormat = () => {
    const today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!
  
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    return dd + "." + mm + "." + yyyy;
  };
  export const getDateWithDefaultFormat = () => {
    const today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!
  
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    return yyyy + "-" + mm + "-" + dd;
  };
  export const getCurrentDateTime = () => {
    return new Date();
  };
  
  export const getCurrentTime = () => {
    const now = new Date();
    return now.getHours() + ":" + now.getMinutes();
  };
  export const getCurrentTimeStamp = () => {
    return new Date().getTime();
  };
  export const strToDate = (dateStr, timeStr) => {//YYYY-MM-DD , HH:MM:SS
    let d = dateStr + 'T' + timeStr;
    let dateTry = new Date(d);
    if (!dateTry.getTime()) {
      // throw new Exception("Bad Date! dateStr: " + dateStr);
      alert("Bad Date! dateStr: " + d);
    }
  
    let tz = d.trim().match(/(Z)|([+-](\d{2})\:?(\d{2}))$/);
  
    if (!tz) {
      const newTzOffset = dateTry.getTimezoneOffset() / 60;
      const newSignStr = (newTzOffset >= 0) ? '-' : '+';
      const newTz = newSignStr + ('0' + Math.abs(newTzOffset)).slice(-2) + ':00';
  
      d = d.trim() + newTz;
      dateTry = new Date(d);
  
      if (!dateTry.getTime()) {
        // throw new Exception("Bad Date! dateStr: " + dateStr);
        alert("Bad Date! dateStr: " + dateTry);
      }
    }
    return dateTry;
  }
  export const convertDateThForMatToEn = (dateString) => {
    if (!dateString) {
      return null
    }
    const d = dateString.split('-');
    return d.length > 0 ? d[2] + '-' + d[1] + '-' + d[0] : null;
  }
  export const convertDateToThaiFormat = (dateString) => {
    if (!dateString) {
      return null
    }
    const d = dateString.split('-');
    const y = d.length > 0 ? parseInt(d[0], 0) : 0;
    return d.length > 0 ? d[2] + '/' + d[1] + '/' + (y + 543) : null;
  }
  export const getDateFromDateString = (dateString) => {
    if (!dateString) {
      return null
    }
    const d = dateString.split(' ');
    return d.length > 0 ? d[0] : null;
  }
  export const converDateToTimeStamp = (dateString) => {
    const date = strToDate(dateString, '00:00:00')
    return date.getTime();
  };
    /*
    
  {{ someDate | moment("dddd, MMMM Do YYYY") }}
  {{ someDate | moment("from") }}
  use Moment in method
  // return this.$moment(d).fromNow()
      return this.$moment(d).format('H:mm');
      return this.$moment(d).format('h:mm:ss a');
      return this.$moment(d).format('DD/MM/YYYY');
      
  */
  