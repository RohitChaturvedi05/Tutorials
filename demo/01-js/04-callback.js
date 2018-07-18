function getSalary(empName, callbackFn) {
    console.log("Please Wait Fetching result....");

    setTimeout(function () {
        var result = {
            name: empName,
            salary: 100000
        }

        if (callbackFn && typeof (callbackFn) === "function") {
            callbackFn(result);
        }
    }, 2000);
}
