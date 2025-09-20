const { Readable, Writable } = require("stream");
const fs = require("fs");

const inStream = new Readable({ read() { } });

inStream.push("IMS : ");
inStream.push("Internship Management System");
inStream.push(null);

inStream.pipe(process.stdout);


const outStream = new Writable({
    write(chunk, encoding, callback) {
        console.log(" => : " + chunk.toString());
        callback();
    }
});

const data = fs.readFileSync("index.html");

console.log(data.toString());


fs.readFile("index.html", (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data.toString());
});

process.stdin.pipe(outStream);

