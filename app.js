let form = document.getElementById("form");
let form2 = document.getElementById("form2");
let javascriptCode = document.getElementById("javascriptCode");
let lockDomains = document.getElementById("lockDomains");
let output = document.getElementById("output");
let obfuscateAnotherCode = document.getElementById("obfuscateAnotherCode");
let copyBtn = document.getElementById("copyBtn");

form.onsubmit = function (event) {
  event.preventDefault();

  let domainLockArray = lockDomains.value.split(",");

  var obfuscationResult = JavaScriptObfuscator.obfuscate(javascriptCode.value, {
    domainLock: domainLockArray,
  });

  // Generate timestamp
  let now = new Date();
  let timestamp = now.toLocaleString(); // Format: "MM/DD/YYYY, HH:MM:SS"

  // Create message
  let message = `<!-- Obfuscated at ${timestamp} on https://bj-javascript-obfuscator.vercel.app/ ( Powered By Mr,BaBlU ) -->`;

  // Set the message above the obfuscated code
  output.value = message + '\n\n' + obfuscationResult.getObfuscatedCode();

  form2.classList.remove("d-none");
  form.classList.add("d-none");

  javascriptCode.value = "";
  lockDomains.value = "";
};

obfuscateAnotherCode.onclick = function () {
  form2.classList.add("d-none");
  form.classList.remove("d-none");
};

copyBtn.onclick = function () {
  navigator.clipboard.writeText(output.value);
  alert("The output has been copied!");
};
