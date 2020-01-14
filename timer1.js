
if(process.argv.length === 2) return;

let input = process.argv.slice(2);
for(let i = 0; i < input.length; i++) {
	if(input[i] < 0 || isNan(input[i])) {continue;}
	setTimeout(() => {
		//process.stdout.write(i + 'hi');
		process.stdout.write('.');
	}, input[i]);

}


