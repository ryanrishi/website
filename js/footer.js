//	get date for copyright
var date = new Date();
var year = date.getFullYear();

document.write('<div class="container">');
//	left
document.write('<div class="col-md-4">');
//	social
document.write('<a href="http://www.linkedin.com/in/ryanrishi" target="_blank"><img src="ico/linkedin.png"></a>&nbsp;');
document.write('<a href="http://www.github.com/ryanrishi" target="_blank"><img src="ico/github.png"></a>&nbsp;');
document.write('<a href="http://www.twitter.com/rdrishi12" target="_blank"><img src="ico/twitter.png"></a>&nbsp;');
document.write('</div>')
//	middle
document.write('<div class="col-md-4" align="center">');
document.write('<p>&copy; ' + year.toString() + ' Ryan Rishi. All Rights Reserved.</p>');
document.write('<p>Created using <a href="http://www.getbootstrap.com" target="_blank">Bootstrap</a>.</p>');
document.write('</div>');
//	right
document.write('<div class="col-md-4" align="right">');
document.write('<a href="contact.html">Contact</a>');
document.write('</div>');

document.write('</div>');

//	analytics -- after page has loaded
document.write('<script src="js/analytics.js"></script>')