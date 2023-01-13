// code your solution here

  function superbowlWin(array) {
    let winArray = array.find((element) => element.result === "W")
    if (winArray === undefined) {
        return undefined
    }
    else {
        return winArray.year
    }

  
}


