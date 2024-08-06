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

  if (type.value === 'js64') {
    const encodedString = btoa(inputString); // Base64 encode the input string
    output.value = `${obfuscationComment}<script>document.write(atob("${encodedString}"));</script>`;
  } else if (type.value === 'jsc') {
    const charCodesArray = stringToCharCodes(inputString); // Convert to char codes array
    output.value = `${obfuscationComment}<script>var y="";var x=[${charCodesArray}];x.forEach(function(char){y+=String.fromCharCode(char);});document.write(y);</script>`;
  }
});

function stringToCharCodes(inputString) {
  return Array.from(inputString).map(char => char.charCodeAt(0));
}
