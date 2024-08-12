// this is a draft file to test functionalities of upcoming/ongoing algos

function runTest() {
    disableInput();
    var origin = getElements();
    var origin_copy = JSON.parse(JSON.stringify(origin));
    var solution = shell(origin_copy);
    if (solution) {
        try {
            animate(origin, solution);
            console.log(solution);
        } catch (e) {}
    }
}