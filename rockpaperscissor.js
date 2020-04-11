//class  play is the class that creates randon values for the player 
class play {
    //This function is used to create a random value that is 0(stone) or 1(scissor) or 2(paper) 
    fun() {
        const inte = Math.floor(Math.random() * 3)
        if (inte === 0) {
            return 0 // return 0 which is stone
        } else if (inte === 1) {
            return 1 // return 1 which is scissor
        } else {
            return 2 // return 2 which is paper
        }
    }

}

const point = 0

//four objects of class play which act as four players
const player1 = new play() 
const player2 = new play()
const player3 = new play()
const player4 = new play()

//four choice which take returned value of fun funtions which will be the
//random choices the 4 players will be making
const player1choice = player1.fun()
const player2choice = player2.fun()
const player3choice = player3.fun()
const player4choice = player4.fun()


// if (player1choice === 1){
//     constchoice ==
// }

console.log(player1choice)
console.log(player2choice)
console.log(player3choice)
console.log(player4choice)