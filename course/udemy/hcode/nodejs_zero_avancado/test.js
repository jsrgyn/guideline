const crypto = require('crypto');

const start = Date.now();

function logHashTime() {
  crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    console.log(`Hash: ${Date.now() - start}`);
  })
}

function logHashTimeSync() {
  crypto.pbkdf2Sync("a", "b", 100000, 512, "sha512");
  console.log(`Tempo do Hash Sync: ${Date.now() - start}`);
}

logHashTime();
logHashTime();
logHashTime();
logHashTime();
logHashTime();
// logHashTimeSync();
// logHashTimeSync();
// logHashTimeSync();
// logHashTimeSync();
// logHashTimeSync();