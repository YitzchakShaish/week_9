 import fs from "fs";
 import os from "os";
// Exercise 1: File Reader with Stats
console.log(`Exercise 1: File Reader with Stats`);


function readFileWithStats(filePath) {
fs.stat(filePath , (err, stats) => {
    if (err){
        console.error(`Error getting file stats: ${err}`);
    }
    else {
        console.log(`File size: ${stats.size} bytes`);
        console.log(`File created at: ${stats.birthtime}`);
        console.log(`File modified at: ${stats.mtime}`);
    }
})
fs.readFile(filePath , 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
})
};
readFileWithStats('./myName.txt');


// Exercise 2: Directory Files Only;
console.log(` Exercise 2: Directory Files Only;`);

function listFilesInDirectory(directoryPath) {
  fs.readdir(directoryPath, { withFileTypes: true }, (err, files) => {
    if (err) {
     console.error(`Error reading directory: ${err}`);
      return;
    }
    //console.log(files);

    const fileNames = files.filter((file) => file.isFile()).map((file) => file.name);
    console.log('Files in directory:', fileNames);
  });
}
listFilesInDirectory("./");

//Exercise 3: Countdown Timer;
console.log(`Exercise 3: Countdown Timer;`);

function CountdownTimer(seconds) {
    if (seconds > 0) {
        console.log(seconds);
        setTimeout(() => CountdownTimer(seconds - 1), 1000);
    } else {
        console.log("Countdown finished!");
    }
}
CountdownTimer(5);

//Exercise 4: Random Line from File
console.log(`Exercise 4: Random Line from File`);

function getRandomLineFromFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        }
        //console.log(data)
        const lines = data.split('\n').filter((line) => line)
        console.log(lines);
        const randomIndex = Math.floor(Math.random() * lines.length);

        const line = lines[randomIndex];
        console.log(`**************`);

        console.log(`line:   ` + line)
    })


}
getRandomLineFromFile("./myName.txt");

// Exercise 5: System Free Memory Logger
console.log(`Exercise 5: System Free Memory Logger`);

function logFreeMemory(interval) {
    let counter = 0;
    const maxRuns = 2;
    const intervalId = setInterval(() => {
        //const memoryUsage = process.memoryUsage();
        const heapFree =(os.freemem() / os.totalmem() * 100);
        console.log(`Free memory: ${(heapFree).toFixed(2)} %`);
        counter++;
        if (counter >= maxRuns) {
            clearInterval(intervalId);
            console.log(`Stopped logging after ${maxRuns} runs.`);
        }
    }, interval);
}
logFreeMemory(5000); 
