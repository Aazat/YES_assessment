const fs = require('fs').promises;
const path = require('path');

const directoryName = 'task_automation';
const fileNames = ['file1.txt', 'file2.txt', 'file3.txt'];
const concatenatedFileName = 'concatenated.txt';

// Function to create a directory if it doesn't exist
async function createDirectory(directory) {
    try {
        // creating directory
        await fs.mkdir(directory);
        console.log(`Directory '${directory}' created.`);
    } catch (err) {
        // handling error if any occurs
        if (err.code !== 'EEXIST') {
            console.error(`Error creating directory '${directory}': ${err.message}`);
        }
    }
}

// Function to create text files with content
async function createTextFiles(directory, files) {
    try {
        // for loop to iterator over all files 
        for (const file of files) {
            // creating file path from directory path and file name.
            const filePath = path.join(directory, file);
            
            // creating and writing to a file.
            await fs.writeFile(filePath, `Content of ${file}`);
            console.log(`File '${file}' created.`);
        }
    } catch (err) {
        console.error(`Error creating text files: ${err.message}`);
    }
}

// Function to concatenate content of files into a new file
async function concatenateFiles(directory, files, outputFileName) {
    try {
        const concatenatedContent = await Promise.all(
            files.map(file => fs.readFile(path.join(directory, file), 'utf-8'))
        );

        const outputPath = path.join(directory, outputFileName);
        await fs.writeFile(outputPath, concatenatedContent.join('\n'));
        console.log(`File '${outputFileName}' created with concatenated content.`);
        return outputPath;
    } catch (err) {
        console.error(`Error concatenating files: ${err.message}`);
    }
}

// Function to print the content of a file to the console
async function printFileContent(filePath) {
    try {
        const content = await fs.readFile(filePath, 'utf-8');
        console.log(`Content of '${path.basename(filePath)}':\n${content}`);
    } catch (err) {
        console.error(`Error reading file content: ${err.message}`);
    }
}

// Function to delete files
async function deleteFiles(directory, files) {
    try {
        // Deleting 3 files created
        await Promise.all(files.map(file => fs.unlink(path.join(directory, file))));
        console.log('Files deleted.');
    } catch (err) {
        console.error(`Error deleting files: ${err.message}`);
    }
}

// Main function
async function main() {
    // Main function script to execute Task in order.
    try {
        // Creates a new directory named "task_automation" if it doesn't exist.
        await createDirectory(directoryName);

        // Inside the directory, creates three text files: "file1.txt," "file2.txt," and "file3.txt" with any content.
        await createTextFiles(directoryName, fileNames);

        // Concatenates the content of the three files into a new file named "concatenated.txt" inside the same directory.
        const concatenatedFilePath = await concatenateFiles(directoryName, fileNames, concatenatedFileName);

        // Prints the content of "concatenated.txt" to the console.        
        await printFileContent(concatenatedFilePath);

        // Deletes "file1.txt," "file2.txt," and "file3.txt" from the directory.
        await deleteFiles(directoryName, fileNames);        
    } catch (err) {
        console.error(`Script execution failed: ${err.message}`);
    }
}

// Run the script
main();
