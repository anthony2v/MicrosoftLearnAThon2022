/**
 * This application is a backend server developed for the fictional company
 * Tailwind Traders. Each store sends various information to this server for
 * processing.
 */

const { findSalesFiles } = require("./utilities/file-access");
const path = require("path");

async function main() {
    console.log('Welcome to the Tailwind Traders backend server application');

    // find all paths to all available sales files
    const salesFiles = await findSalesFiles(path.join(__dirname, "stores"));
    console.log(salesFiles);
}

main();