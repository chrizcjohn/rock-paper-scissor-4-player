//class  play is the class that creates randon values for the player 
class play {
    //This function is used to create a random value that is 0(rock) or 1(scissor) or 2(paper) 
    fun() {
        const inte = Math.floor(Math.random() * 3) //this Math.random returns any of three random value which is 0 or 1 or 2 
        if (inte === 0) {
            return 'R' // return 0 which is rock
        } else if (inte === 1) {
            return 'S' // return 1 which is scissor
        } else {
            return 'P' // return 2 which is paper
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

var player1point = 0
var player2point = 0
var player3point = 0
var player4point = 0

for ( var j = 1 ; j <=50 ;j++){

    console.log('round :', j)
var player1choice = player1.fun()
var player2choice = player2.fun()
var player3choice = player3.fun()
var player4choice = player4.fun()

var playerch1 = [player2choice, player3choice, player4choice]
var playerch2 = [player1choice, player3choice, player4choice]
var playerch3 = [player1choice, player2choice, player4choice]
var playerch4 = [player1choice, player2choice, player3choice]

for (var i = 0; i < 3; i++) {
    if (player1choice === 'R' && playerch1[i] === 'S') {
        player1point++
    } else if (player1choice === 'S' && playerch1[i] === 'P') {
        player1point++
    } else if (player1choice === 'P' && playerch1[i] === 'R') {
        player1point++
    }
}

for (var i = 0; i < 3; i++) {
    if (player2choice === 'R' && playerch2[i] === 'S') {
        player2point++
    } else if (player2choice === 'S' && playerch2[i] === 'P') {
        player2point++
    } else if (player2choice === 'P' && playerch2[i] === 'R') {
        player2point++
    }
}

for (var i = 0; i < 3; i++) {
    if (player3choice === 'R' && playerch3[i] === 'S') {
        player3point++
    } else if (player3choice === 'S' && playerch3[i] === 'P') {
        player3point++
    } else if (player3choice === 'P' && playerch3[i] === 'R') {
        player3point++
    }
}

for (var i = 0; i < 3; i++) {
    if (player4choice === 'R' && playerch4[i] === 'S') {
        player4point++
    } else if (player4choice === 'S' && playerch4[i] === 'P') {
        player4point++
    } else if (player4choice === 'P' && playerch4[i] === 'R') {
        player4point++
    }
}



console.log('player 1 choice:', player1choice,' player 1 point:' ,player1point)
console.log('player 2 choice:', player2choice,' player 2 point:' ,player2point)
console.log('player 3 choice:', player3choice,' player 3 point:' ,player3point)
console.log('player 4 choice:', player4choice,' player 4 point:' ,player4point)

}

