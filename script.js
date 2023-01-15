// complete the given function

function palindrome(str){
	let newStr = str.toLowerCase();
	let l = str.length;
	let i = 0;
	let j = l - 1;
	while (i<=j) {
		if(newStr[i] === newStr[j])
		{
			i++;
			j--;
		}
		else
		{
			return false;
		}
	}
	return true;
}
module.exports = palindrome
