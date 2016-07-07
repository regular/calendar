// jshint esnext: true
const width = 32;
const height = 16;

function schedule(x, y) {
    if (x == 2) {
        return true;
    } else {
        return false;
    }
}

// output dot matrix
for (var row = 0; row < height; row++) {
    for (var column  = 0; column < width; column++) {
        if ( schedule(column, row)) {
            process.stdout.write("\u2022 ");
        } else {
            process.stdout.write("x ");
        }
    }
    console.log();
}
