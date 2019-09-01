var weekdays = [
    { 'day': 'Monday', 'sun': "true", 'humidity': 100 },
    { 'day': 'Tuesday', 'sun': "true", 'humidity': 10 },
    { 'day': 'Wednesday', 'sun': "false", 'humidity': 100 },
    { 'day': 'Thursday', 'sun': "true", 'humidity': 20 },
    { 'day': 'Friday', 'sun': "false", 'humidity': 50 },
    { 'day': 'Satday', 'sun': "false", 'humidity': 70 },
    { 'day': 'Sunday', 'sun': "true", 'humidity': 100 }];

var humid = (weekdays) => {
    return weekdays.humidity;
}

var displayHumid = weekdays.map(humid);

console.log(displayHumid);