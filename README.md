# Playwright_Tutorial
Playwright Test was created specifically to accommodate the needs of end-to-end testing. It supports all modern rendering engines including Chromium, WebKit, and Firefox. Test on Windows, Linux, and macOS, locally or on CI, headless or headed.
## Installation & setup :
### Prerequisites
1.Node js : Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a web browser. It allows developers to use JavaScript to write server-side applications.
https://nodejs.org/en/download

2.Visual studio code (Best for Java script / Typescript) https://code.visualstudio.com/
Create a folder for playwright
Open Vs code
Open playwright folder in Vs code
npm init playwright , write this command in terminal . This command will create a new node project    in playwright structure and install all playwright dependencies

3. Playwright dependencies , reference : https://playwright.dev/docs/intro

After “ npm init playwright “ this cmd , it will ask you will language you choose Java script / Typescript
## Playwright Structure :
- Playwright configuration file : It is the test runner for all our test cases
- Package file : Default file which gets created for every node project, here it will have information about playwright dependencies
- Tests Folder : sample test file
Create test files , filename.spec.js
- Node modules : all playwright related jars
  ## Planning :
- Plan the type of of testcases and configurations needed for tests
### Writing a test :
```const {test, expect} = require('@playwright/test'); // to import test & expect from playwright ```
  
