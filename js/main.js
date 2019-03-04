(() => {
    console.log("Fired! Ready to jam!");

    function playDrumKitSound(event) {
      // debugger;
      // select the corresponding audio element and make it play
      let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
      // console.log(audio);

      // debugging / error handling
      // if we don't have a matching audio element, then kill the function

      if (!audio) { return; }; //return stops code execution (!audio is making the audio value none as in 'if no audio')

      // rewind audio on every click and make it play
 
      
      audio.currentTime = 0;
      audio.play();

      //grab the div and animate it
      
      let key = document.querySelector(`div[data-key="${event.keyCode}"]`);
      key.classList.add('playing');

    };

    function removePlayingClass(event) {
      // debugger;
      if (event.propertyName !== "transform") {
        return;
      } else {
        console.log('transition is done!'), `${event.propertyName}`;
        event.target.classList.remove('playing');
      }
    };

    const keys = Array.from(document.querySelectorAll('.keys'));

    keys.forEach(key => key.addEventListener("transitionend", removePlayingClass));


    window.addEventListener("keydown", playDrumKitSound);


})();