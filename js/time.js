function helloWorld() {
    document.getElementById("hworld").innerHTML = "Hello World";
  }

function myTime() {
    document.getElementById('time').innerHTML = Date();
  }

/*

I would also like to the scripts through this header:

<!--
<script src="css/alert.js"></script>
<script src="css/time.js"></script>
-->

To call the above functions this is what I'd add into HTML Document
<p id="hworld"></p>
<p id="time"></p>
<button onclick="helloWorld()">Try It</button>
<button onclick="myTime()">Time?</button>

*/