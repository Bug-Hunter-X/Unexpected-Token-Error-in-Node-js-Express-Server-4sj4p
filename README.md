# Unexpected Token Error in Node.js Express Server

This repository demonstrates a subtle and uncommon bug in a Node.js Express server. The server throws an `Unexpected token` error, but the error message doesn't clearly indicate the source of the problem. The bug is caused by a small syntax error, often hidden within the code. 

## Bug Description
The bug manifests as an `Unexpected token` error during the execution of the Express server. The error message points to a seemingly correct line of code. However, the actual cause is a subtle syntax error somewhere else in the file. This kind of bug can be difficult to track down because the error message is misleading. 

## Solution
The solution involves carefully examining the code for syntax errors. These can be easily overlooked, particularly when working with long files or complex logic. Common causes include missing semicolons, incorrect use of brackets, or typos in keywords. 

## How to Reproduce
1. Clone this repository.
2. Navigate to the directory containing `bug.js`.
3. Run `node bug.js`.  The server will throw the `Unexpected token` error.
4. Examine `bugSolution.js` to see the corrected code and the location of the error.