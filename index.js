var Buttons=document.querySelectorAll("button");
for(var i=0;i<Buttons.length;i++)
{
Buttons[i].addEventListener("click",handClick);
}
function handClick()
{
    
   var buttonInnerHTML=this.innerHTML;
   
   keyboardKlick(buttonInnerHTML);
   animationKey(buttonInnerHTML);
   backgroundK(buttonInnerHTML);
}
document.addEventListener("keydown",function(event)
{keyboardKlick(event.key) 
    animationKey(event.key)
    backgroundK(event.key);})
function keyboardKlick(key)
{

   var sounds={
    w: "tom-1.mp3",
    a: "tom-2.mp3",
    s: "tom-3.mp3",
    d: "tom-4.mp3",
    j: "snare.mp3",
    k: "crash.mp3",
    l: "kick-bass.mp3"
   }
   if(sounds[key])
   {
   var audio= new Audio("./sounds/"+sounds[key]);
   audio.play();
   }
}
function animationKey(currentKey)
{

    var activKey=document.querySelector("."+currentKey);

    activKey.classList.add("pressed");
    document.body.style.backgroundColor="purple";
    
    setTimeout(function(){
        activKey.classList.remove("pressed");
        document.body.style.backgroundColor="#283149";
        
    },100)
}

