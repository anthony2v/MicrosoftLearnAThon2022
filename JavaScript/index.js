/**
 * This application is a backend server developed for the fictional company
 * Tailwind Traders. Each store sends various information to this server for
 * processing.
 */

const { calculateSalesTotal, findSalesFiles } = require("./utilities/sales-processor");
const fs = require("fs").promises;
const path = require("path");

async function main() {
    console.log('Welcome to the Tailwind Traders backend server application');

    // create the sales totals folder if it doesn't exist
    const salesTotalsDirectory = path.join(__dirname, "salesTotals");
    try {
        await fs.mkdir(salesTotalsDirectory);
    } catch {
        console.log(`${salesTotalsDirectory} already exists`);
    }
    
    // find all paths to all available sales files
    const salesFiles = await findSalesFiles(path.join(__dirname, "stores"));

    // read through each sales file to calculate the sales total
    const salesTotal = await calculateSalesTotal(salesFiles);

    // append to a file called "totals.txt"
    await fs.writeFile(
        path.join(salesTotalsDirectory, "totals.txt"),
        `${salesTotal}\r\n`,
        { flag: "a"}
    );
}

main();