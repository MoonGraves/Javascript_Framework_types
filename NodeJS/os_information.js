const os = require ('os');

//platform
console.log(os.platform());
//input: linux / dawin

//CPU Arch
console.log(os.arch());
//input: x64

//CPU core info & Moniytimellisyys prosessori
console.log(os.cpus());
//input: (JSON tiedosto)

//Free memory
console.log(os.freemem());
//input: 335216640

//Total memory
console.log(os.totalmem());
//input: 27335340032

//Home dir (polku)
console.log(os.homedir());
//input: /home/runner

//uptime (sekuntti)
console.log(os.uptime());
