const type = document.getElementById('type');
const input = document.getElementById('input');
const output = document.getElementById('output');
const submit = document.getElementById('submit');

submit.addEventListener('click', () => {
  if (!input.value.trim()) {
    alert('Please Provide Code');
    return;
  }

  const inputString = input.value;
  const date = new Date();
  const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  const formattedTime = `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;
  const obfuscationComment = `<!-- Obfuscated at ${formattedDate} ${formattedTime} on https://bj-javascript-obfuscator.vercel.app/ ( Powered By Mr,BaBlU ) -->\n`;

  if (type.value == 'js64') {
    output.value = `${obfuscationComment}<script>document.write(atob("${btoa(inputString)}"));</script>`;
  } else if (type.value == 'jsc') {
    const charCodesArray = stringToCharCodes(inputString);
    output.value = `${obfuscationComment}<script>var y="";var x=[${charCodesArray}];x.forEach(char=>{y+=String.fromCharCode(char)});document.write(y);</script>`;
  }
});

function stringToCharCodes(inputString) {
  const charCodes = [];
  for (let i = 0; i < inputString.length; i++) {
    charCodes.push(inputString.charCodeAt(i));
  }
  return charCodes;
}
