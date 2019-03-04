(() => {
    console.log("Fired! Ready to jam!");

    function playDrumKitSound(event) {
      // debugger;
      // select the corresponding audio element and make it play
      let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
      // console.log(audio);

      // debugging / error handling
      // if we don't have a matching audio element, then kill the function

      if (!audio) { return; } //return stops code execution (!audio is making the audio value none as in 'if no audio')

      // rewind audio on every click and make it play
 
      
      audio.currentTime = 0;
      audio.play();

    }

    window.addEventListener("keydown", playDrumKitSound);


})();