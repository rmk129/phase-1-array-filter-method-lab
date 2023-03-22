// Code your solution here
function findMatching(drivers, name) {
    let dNames = drivers.filter(function(driver) {
        return driver.toLowerCase() === name.toLowerCase();
    })

   return dNames
}

function fuzzyMatch(drivers, name) {
    let dNames = drivers.filter(function(driver) {
        return driver.slice(0,2).toLowerCase() === name.toLowerCase();
    })
    return dNames
}

function matchName(drivers, names){
    let dNames = drivers.filter(function(driver){
        if (driver.name.toLowerCase() === names.toLowerCase()){
            return driver;
        }
    })
    return dNames;
}