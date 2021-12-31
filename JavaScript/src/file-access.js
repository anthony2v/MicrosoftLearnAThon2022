const fs = require("fs").promises;

exports.readDirectory = async function(directoryName) {
    const items = await fs.readdir(directoryName);
    console.log(items);
}

exports.readDirectoryWithFileTypes = async function(directoryName) {
    const items = await fs.readdir(directoryName, { withFileTypes: true });
    for (let item of items) {
        const type = item.isDirectory() ? "folder" : "file";
        console.log(`${item.name}: ${type}`);
    }
}