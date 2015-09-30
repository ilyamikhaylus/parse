
	var fs = require('fs');

	var path = 'output.txt';

var webpage = require('webpage').create();
webpage
  .open('http://hotline.ua/mobile-mobilnye-telefony-i-smartfony/apple-iphone-5s-32gb-gold/') 
  .then(function(){ 
	var someContent = webpage.evaluate(function () { // после того как динамический контент подгружен, можно его спарсить
		return document.querySelector('a.range-price > strong').textContent.toString();
    });
	var s = someContent.replace(/\D/g,'');
	var b = someContent.split(" – ");
	var c1 = parseInt(b[0].replace(/\D/g,''));
	var c2 = parseInt(b[1].replace(/\D/g,''));
	var c = ((c2+c1)/2).toFixed(); 
	console.log(c);
	
	fs.write(path, c, 'w');

	phantom.exit();
	slimer.exit();
  });