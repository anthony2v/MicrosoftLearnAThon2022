/**
 * This application is a backend server developed for the fictional company
 * Tailwind Traders. Each store sends various information to this server for
 * processing.
 */

const { findSalesFiles } = require("./file-access");

async function main() {
    console.log('Welcome to the Tailwind Traders backend server application');
    const salesFiles = await findSalesFiles("../stores");
    console.log(salesFiles);
}

main();