const play = document.getElementById("play");

const pause = document.getElementById("pause");


const mysong = new Audio ();

mysong.src="comando.mp3";


play.addEventListener("click", function (){


mysong.play();

alert("vocÊ está ouvindo G-EAZY!!");



});

pause.addEventListener("click", function (){


mysong.pause();

alert("a musica foi pausada!");


});