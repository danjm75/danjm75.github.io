function PlaySound(soundobject) {
     var thissound=document.getElementById(soundobject);
     thissound.play();
}

function StopSound(soundobject)) {
     var thissound=document.getElementById(soundobject);
     thissound.pause();
     thissound.currentTime = 3;
}

