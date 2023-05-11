
function superbowlWin(array) {
    function wins(array) {
       return array.result === "W"
    }
    let win = array.find(wins)
    if (win === undefined) {
        return undefined
    }
    return win.year
}
