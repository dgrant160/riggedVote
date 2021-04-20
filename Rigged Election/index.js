var trollUp = false;

let voteCount = {
    nixon: 60,
    mcgovern: 40,
    nixonVote() {
        if(this.nixon >= 100){
            this.nixon = 100
            var audio = new Audio('US.mp3');
            audio.play();
            document.getElementById("flagBg").style.opacity += 1
            document.getElementById("flagBg").style.cssFloat = "initial"
            var myobj = document.getElementById("mcGovern");
            myobj.remove();
        } else{
        this.nixon++
        this.mcgovern--
        }
    },
    mcgovernVote(){
        this.nixon = 100
        this.mcgovern = 0
    },
    updateVote() {
        document.getElementById("nixonBar").style.width = this.nixon + "%"
        document.getElementById("nixonBar").innerHTML = this.nixon + "% Nixon";
        document.getElementById("mcgovernBar").style.width = this.mcgovern + "%"
        document.getElementById("mcgovernBar").innerHTML = this.mcgovern +"% McGovern";
    },
}
function troll(){
    if(trollUp != false){
        window.location.replace("https://www.youtube.com/watch?v=QtBDL8EiNZo");
    }else{
    voteCount.mcgovernVote()
    voteCount.updateVote()
    document.getElementById("troll").style.opacity += 1
    document.getElementById("troll").style.cssFloat = "initial"
    document.getElementById('trollFrame').src='dancing_troll.gif'}
    trollUp = true
    document.getElementById("troll").style.cursor.url = 'loading.gif' 
    var audio = new Audio('US.mp3');
        audio.play();
}
function vote(){
    alert("You should vote for Nixon unless you want something terrible to happen this is a promise not a threat")
}
function dancingTroll(){
    document.getElementById('trollFrame').src='dancing_troll.gif'
}
function normal(){
    if (trollUp != false) {
        document.getElementById('trollFrame').src='dancing_troll.gif'
    } else{
    document.getElementById('trollFrame').src='mcgovern.png'}
}
function correctVote(){
    voteCount.nixonVote()
    voteCount.updateVote() 
}
document.addEventListener("mousemove", function(){
    var button = document.getElementById('cardGovern');
        var x = instanceOfMouseEvent.clientX;
        var y = instanceOfMouseEvent.clientY;
        console.log(x)
          button.style.display = 'block';
          button.style.top = y + 100 + "px";
          button.style.left = x + 100 + "px";
        button.style.display='none';
  });

