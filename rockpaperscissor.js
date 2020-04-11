//class  play is the class that creates randon values for the player .
class play {
    //This function is used to create a random value that is R(rock) or S(scissor) or P(paper) .
    fun() {
        const inte = Math.floor(Math.random() * 3) //this Math.random returns any of three random value which is R or S or P .
        if (inte === 0) {
            return 'R' // return R which is rock.
        } else if (inte === 1) {
            return 'S' // return S which is scissor.
        } else {
            return 'P' // return P which is paper.
        }
    }

}

//four objects of class play which act as four players.
const player1 = new play()
const player2 = new play()
const player3 = new play()
const player4 = new play()




//player point intiated.
var player1point = 0
var player2point = 0
var player3point = 0
var player4point = 0


//this for loop  does 50 round or iteration.
for (var j = 1; j <= 50; j++) {

    console.log('round :', j)


    //four choice which takes returned value of fun
    //funtions which will be the random choices
    //the 4 players will be making.
    var player1choice = player1.fun()
    var player2choice = player2.fun()
    var player3choice = player3.fun()
    var player4choice = player4.fun()


    //This is the arrays which holds the players who the player has to play(check) with.
    var playerch1 = [player2choice, player3choice, player4choice]
    var playerch2 = [player1choice, player3choice, player4choice]
    var playerch3 = [player1choice, player2choice, player4choice]
    var playerch4 = [player1choice, player2choice, player3choice]

    //player 1 checks the other 3 player and point is awarded accordingly 
    for (var i = 0; i < 3; i++) {
        if (player1choice === 'R' && playerch1[i] === 'S') {
            player1point++
        } else if (player1choice === 'S' && playerch1[i] === 'P') {
            player1point++
        } else if (player1choice === 'P' && playerch1[i] === 'R') {
            player1point++
        }
    }

    //player 2 checks the  other 3 player and point is awarded accordingly
    for (var i = 0; i < 3; i++) {
        if (player2choice === 'R' && playerch2[i] === 'S') {
            player2point++
        } else if (player2choice === 'S' && playerch2[i] === 'P') {
            player2point++
        } else if (player2choice === 'P' && playerch2[i] === 'R') {
            player2point++
        }
    }
    //player 3 checks the  other 3 player and point is awarded accordingly
    for (var i = 0; i < 3; i++) {
        if (player3choice === 'R' && playerch3[i] === 'S') {
            player3point++
        } else if (player3choice === 'S' && playerch3[i] === 'P') {
            player3point++
        } else if (player3choice === 'P' && playerch3[i] === 'R') {
            player3point++
        }
    }
    //player 4 checks the  other 3 player and point is awarded accordingly
    for (var i = 0; i < 3; i++) {
        if (player4choice === 'R' && playerch4[i] === 'S') {
            player4point++
        } else if (player4choice === 'S' && playerch4[i] === 'P') {
            player4point++
        } else if (player4choice === 'P' && playerch4[i] === 'R') {
            player4point++
        }
    }


//prints points of each round or iteration(summing up of previous round)
    console.log('player 1 choice:', player1choice, ' player 1 point:', player1point)
    console.log('player 2 choice:', player2choice, ' player 2 point:', player2point)
    console.log('player 3 choice:', player3choice, ' player 3 point:', player3point)
    console.log('player 4 choice:', player4choice, ' player 4 point:', player4point)

}
//print the total point at the end
console.log('Total point after round 50')
console.log('player 1: ', player1point)
console.log('player 2: ', player2point)
console.log('player 3: ', player3point)
console.log('player 4: ', player4point)