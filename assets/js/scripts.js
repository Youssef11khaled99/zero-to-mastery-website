function play(video){
    document.getElementById('vidwrap').innerHTML = '<iframe width="560" height="315" src="' + video + '"frameborder="0"></iframe>';
    document.getElementById("vidwrap").classList.remove("playicon");
  };

  // update the year dinamically with a immediately invoked function expression
(function () {
  // gets the span wrapped around the year
  const year = document.querySelector('.year-footer');
  // updates the year with the current year
  year.innerHTML = new Date().getFullYear();
})();