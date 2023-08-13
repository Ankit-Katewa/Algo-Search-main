const { spawn } = require('child_process');

const childPython = spawn('python', ['main1.py']);

// const takeInput = (question) => {
//     // Send input to the Python script
//     // const input = 'Hello from JavaScript!';
//     const input = question;
//     console.log("INPUT from debugLLM.ejs", input);
//     childPython.stdin.write(input);
//     childPython.stdin.end(); // End the input stream

//     childPython.stdout.on('data', (data) => {
//         console.log(`stdout: ${data}`);
//     });

//     childPython.stderr.on('data', (data) => {
//         console.error(`stderr: ${data}`);
//     });

//     childPython.on('close', (code) => {
//         console.log(`child process exited with code ${code}`);
//     });
// }

const takeInput = (input)=> {
    console.log("Hello", input);
}

module.exports = takeInput;