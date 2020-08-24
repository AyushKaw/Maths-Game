var playing = false;
var score;
var action;
var timeRemaining;
var correctAns;
document.getElementById("start-reset").onclick = function() {
    if(playing === true) {
        location.reload();
    }
    else {
        playing = true;
        score = 0;
        document.getElementById("scorevalue").innerHTML = score;

        show("time-rem");

        timeRemaining = 30;

        document.getElementById("time").innerHTML = timeRemaining;

        hide("gameover");

        document.getElementById("start-reset").innerHTML = "Reset Game";

        startCountdDown();

        genarateQA();
    }
}

for(var j=1; j<5; j++) {
    document.getElementById("box-" + j).onclick = function() {
        if(playing == true) {
            if(this.innerHTML == correctAns) {
                score++;
                document.getElementById("scorevalue").innerHTML = score;
                show("correct");
                hide("wrong");
                setTimeout(function() {
                    hide("correct");
                },1000);
    
                genarateQA();
            }
            else {
                show("wrong");
                hide("correct");
                setTimeout(function() {
                    hide("wrong");
                },1000);
            }
        }
    }
}

function startCountdDown() {
    action = setInterval(function() {

        timeRemaining -= 1;

        document.getElementById("time").innerHTML = timeRemaining;

        if(timeRemaining === 0) {
            stopCountDown();
            show("gameover");
            document.getElementById("gameover").innerHTML = "<p>game over!</p><p>Your score is: " + score + "</p>";
            hide("time-rem");
            hide("coreect");
            hide("wrong");
            playing = false;
            document.getElementById("start-reset").innerHTML = "Start Game";

        }

    }, 1000);
}

function stopCountDown() {
    clearInterval(action);
}

function show(id) {
    document.getElementById(id).style.display = "block";
}

function hide(id) {
    document.getElementById(id).style.display = "none";
}

function genarateQA() {
    var x = 1 + Math.round(9*Math.random());
    var y = 1 + Math.round(9*Math.random());
    correctAns = x*y;
    document.getElementById("question").innerHTML = x + "x" + y;

    var correctPos = 1 + Math.round(3*Math.random());

    document.getElementById("box-"+correctPos).innerHTML = correctAns;

    var answers = [correctAns];
    
    for(var i=1; i<5; i++)
    {
        if(i !== correctPos) {
            
            var wrongAns;

            do {
                wrongAns = (1 + Math.round(9*Math.random()))*(1 + Math.round(9*Math.random()));
            }
            while(answers.indexOf(wrongAns)> -1) 

            document.getElementById("box-" + i).innerHTML = wrongAns;
            answers.push(wrongAns);
        }
    }
}