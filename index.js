// Code your solution here
function findMatching(drivers,arr){
    return drivers.filter(match =>
        match.toLowerCase() === arr.toLowerCase()
        )
    }
function fuzzyMatch(drivers,arr2){
    return drivers.filter(match =>
        match.toLowerCase().indexOf(arr2.toLowerCase()) === 0
    )
}

function matchName(drivers,arr3){
    return drivers.filter( record => record.name === arr3)
}
