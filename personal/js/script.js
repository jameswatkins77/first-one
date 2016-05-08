$(document).ready(function(){
	alert("Hello! My name's Jim and this is my website, continue on to learn more about me!");
	var userAnswer;
  $('.button').hover(
    function() {
       $(this).addClass('new');},
    function() {
       $(this).removeClass('new');
   });
	$('.button').click(function(){
		userAnswer = prompt("First you have to answer this question.  Which is the greatest NFL team?\n A. Oakland Raiders\n B. Cleveland Browns\n C. San Francisco 49ers\n D. Denver Broncos").toUpperCase();
		switch(userAnswer) {
    	case 'A':
        	alert("Ugh, really?  Sorry that's incorrect.");
       		break;
    	case 'B':
        	alert("Um, no.  You must not watch football.");
        	break;
    	case 'C':
        	alert("That is correct!!! Go Niners!.");
        	break;
    	case 'D':
    		alert("Sorry they're only 2 for 6 in the Super Bowl.");
    		break;
    	default:
        	alert("I don't think that's an option.");
        }
    });
});
