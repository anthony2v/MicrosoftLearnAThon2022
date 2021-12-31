/**
 * This application is a backend server developed for the fictional company
 * Tailwind Traders. Each store sends various information to this server for
 * processing.
 */

const { findSalesFiles } = require("./utilities/file-access");
const fs = require("fs").promises;
const path = require("path");

async function main() {
    console.log('Welcome to the Tailwind Traders backend server application');
    
    // try to create the sales totals folder
    const salesTotalsDirectory = path.join(__dirname, "salesTotals");
    try {
        fs.mkdir(salesTotalsDirectory);
    } catch {
        console.log(`${salesTotalsDirectory} already exists`);
    }
    
    // find all paths to all available sales files
    const salesFiles = await findSalesFiles(path.join(__dirname, "stores"));

    // write an empty file called "totals.txt"
    await fs.writeFile(path.join(salesTotalsDirectory, "totals.txt"), String());
}

main();