var value =5;
for (var i = 1; i <= value; i++) {
    if (i == 3) {
        console.log('loop over');
        break;
    }
    console.log(i);
}
for (var i = 1; i <= value; i++) {
    if (i == 3) {
        console.log('loop over');
        continue;
    }
    console.log(i);

}

