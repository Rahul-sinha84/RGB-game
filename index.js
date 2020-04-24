var buttons=document.querySelectorAll(".mode");
var length=6;
var random=new Array();
var h2=document.querySelector("h2");
randomColor();
var rgb="rgb("+random[0]+", "+random[1]+", " +random[2]+")";
var h1=document.querySelector("h1");
var square=document.querySelectorAll(".square");
var RGB=document.querySelector("span");
var validator=rgb;
var message=document.querySelector("em");
var newGame=document.querySelector("button");
colors(square);
//for easy and hard buttons
for(var i=0;i<buttons.length;i++){
	buttons[i].addEventListener("click",function(){
		//removing all the selection
		buttons[0].classList.remove("selected");
		buttons[1].classList.remove("selected");
		//adding selection on the clicked button
		this.classList.add("selected");
		//setting length values
		if(this==buttons[0]){
			length=3;
		}
		else{
			length=6;
		}
		reset(length);
	})
}
//for resetting the action
function reset(length){
	//randomize colors of rgb
	randomColor();
	//rgb
    rgb="rgb("+random[0]+", "+random[1]+", " +random[2]+")";
    validator=rgb;
    RGB.textContent=rgb;
    //randomize all the squares with colors
    colors(square);
    //removing the remaining boxes(if any)
    for(var i=length;i<6;i++){
    	square[i].style.background="none";
    }
    //giving one of the squares answer
	square[Math.floor(Math.random()*length)].style.background=validator;
	//changing messages and new button
	newGame.textContent="New game";
	message.textContent="";
	//changing color of background to its original
	h1.style.background="steelblue";
	h2.style.background="steelblue";
	RGB.style.background="steelblue"
}
//for New game button
newGame.addEventListener("click",function (){
			reset(length);
})
//changing of question
RGB.textContent=rgb;
//randomize colors of squares
function colors(square){		
			for(var i=0;i<length;i++){
				square[i].style.background="rgb("+Math.floor(Math.random()*255)+", "+Math.floor(Math.random()*255)+", " +Math.floor(Math.random()*255)+")";
			}
}
//assigning color same as of question on one of the square
square[Math.floor(Math.random()*length)].style.background=validator;
//for checking the condition on clicking on one of the squares
for(var i=0;i<length;i++){
			square[i].addEventListener("click",function(){
				if(this.style.backgroundColor===validator){
					message.textContent="Correct!";
					changeColors();
					newGame.textContent="Play Again?"
					h1.style.background=validator;
					h2.style.background=validator;
					RGB.style.background=validator;
				}
				else{
					this.style.background="#232323";
					message.textContent="Try Again!"
					
				}
			});
}
//changing colors of all the squares with the correct color
function changeColors(){
			for(var i=0;i<length;i++){
						square[i].style.background=validator;
					}
}
//for randomize the rgb value
function randomColor(){
			random[0]=Math.floor(Math.random()*256);
			random[1]=Math.floor(Math.random()*256);
			random[2]=Math.floor(Math.random()*256);
}
