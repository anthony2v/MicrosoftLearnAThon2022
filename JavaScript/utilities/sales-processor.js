const fs = require("fs").promises;
const path = require("path");

exports.calculateSalesTotal = async function(salesFiles) {
    let salesTotal = 0;
    // loop over each file path in the salesFiles array
    for (file of salesFiles) {
        // read the file and parse the contents as JSON
        const data = JSON.parse(await fs.readFile(file));
        // Add the amount in the data.total field to the salesTotal variable
        salesTotal += data.total;
    }
    return salesTotal;
}

exports.findSalesFiles = async function(folderName) {
    // this array will hold sales files as they are found
    const salesFiles = [];

    async function findFiles(folderName) {
        // read all items in the given folder
        const items = await fs.readdir(folderName, { withFileTypes: true });

        // iterate over each found item
        for (item of items) {
            if (item.isDirectory()) {
                // this is a folder, so call this method again and pass in
                // the path to the folder
                await findFiles(`${folderName}/${item.name}`);
            } else {
                // check if the found item is a sales file
                if (path.extname(item.name) === ".json") {
                    // store the file in the sales files array
                    salesFiles.push(`${folderName}/${item.name}`);
                }
            }
        }
    }

    // find and return all sales files
    await findFiles(folderName);
    return salesFiles;
}
