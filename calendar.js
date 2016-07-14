// jshint esnext: true
const width = 32;
const height = 16;
const todayColumn = 2;

function parseTime(input) {
    var m = input.match(/^(\d\d):(\d\d)$/);
    return parseInt(m[1]) + parseInt(m[2]) / 60;
}

//unit test
if (parseTime('09:45') !== 9.75) {
    console.error('parseTime doesn\'t work');
}
if (parseTime('08:00') !== 8.00) {
    console.error('parseTime doesn\'t work');
}
if (parseTime('00:00') !== 0.0) {
    console.error('parseTime doesn\'t work');
}
if (parseTime('99:30') !== 99.50) {
    console.error('parseTime doesn\'t work');
}

function getTime(y) {
    return 0.25 * y + 8.0;
}

function getDate(x) {
    var today = new Date();
    return new Date(today.getYear() + 1900, today.getMonth(), today.getDate() + x - todayColumn);
}

function schedule(x, y) {
    var time = getTime(y); 
    var date = getDate(x);

    // Thurdays between 9:15 and 10:30
    if (time >= 9.25 && time <= 10.5 && date.getDay() == 4) {
        return true;
    } else {
        return false;
    }
}

// output dot matrix
for (var row = 0; row < height; row++) {
    for (var column  = 0; column < width; column++) {
        if ( schedule(column, row)) {
            //process.stdout.write("\u2022 ");
            process.stdout.write("* ");
        } else {
            process.stdout.write(". ");
        }
    }
    console.log();
}
