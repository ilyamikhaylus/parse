var fs = require('fs');
var path = 'output.txt';

var webpage = require('webpage').create();
webpage
  .open('http://hotline.ua/mobile-mobilnye-telefony-i-smartfony/apple-iphone-5s-32gb-gold/') 
  .then(function(){ 
	var someContent = webpage.evaluate(function () {
		return document.querySelector('a.range-price > strong').textContent.toString();
    });
	var range = someContent.split(" – ");
	var range[0] = parseInt(range[0].replace(/\D/g,''));
	var range[1] = parseInt(range[1].replace(/\D/g,''));
	var avrgPrice = ((range[0]+range[1])/2).toFixed(); 
	console.log(avrgPrice);
	
	fs.write(path, avrgPrice, 'w');

	phantom.exit();
	slimer.exit();
  });
