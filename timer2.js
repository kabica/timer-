// timer2.js 


const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
if (key === '\u0003') {
  process.exit(); 
}
if(key === 'b') {
	process.stdout.write('BEEP!\n');
}
if(!isNaN(key)) {
	process.stdout.write(`Setting timer for ${key} seconds...\n`);
	setTimeout(() => {
		process.stdout.write('BEEP!\n');
	},key * 1000)
}



});



//console.log('after callback');