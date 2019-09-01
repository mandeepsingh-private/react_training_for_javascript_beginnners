var weekdays = [
    { 'day': 'Monday', 'sun': "true" },
    { 'day': 'Tuesday', 'sun': "true" },
    { 'day': 'Wednesday', 'sun': "false" },
    { 'day': 'Thursday', 'sun': "true" },
    { 'day': 'Friday', 'sun': "false" },
    { 'day': 'Satday', 'sun': "false" },
    { 'day': 'Sunday', 'sun': "true" }];

var checkSunnydays = (weekdays) => {
    return weekdays.sun == 'true';
}

var goOutside = weekdays.filter(checkSunnydays);

console.log(goOutside);