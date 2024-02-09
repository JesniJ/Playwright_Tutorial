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
####Writing a test :
```const {test, expect} = require('@playwright/test'); // to import test & expect from playwright ```
#### Write test function

It should have two arguments “ title “  second argument is the function where you will write the actual code and that will be treated as one test case
### Configure the playwright : 
~~~
headless:false , //so that all tests will run in headed mode (with browser)
    screenshot : 'on',
    trace : 'retry-with-trace' // retain only on failure will be usefull to the tester to trace the failures

//configurations for different browsers and devices
projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome']},
      
    },
    {
    name: 'firefox',
    use: { ...devices['Desktop Firefox'] },
   },

    {
    name: 'webkit',
    ...devices['iphone11'],
    },
    
    {
      name : 'android',
      ...devices['Pixel 4'],
    },
    {
      name : 'Tablet',
      ...devices['iPad (gen 7)'],
    }

~~~
## Record

Testing person can record the test and generate the code automaticaly either using terminal or record new in the playwright testing .

   ![Record_New](https://github.com/JesniJ/Playwright_Tutorial/assets/102143707/8941ec83-f442-4c3e-9372-3c97d740f298)

  Using record new in  playwright
 ![Rcord_Code](https://github.com/JesniJ/Playwright_Tutorial/assets/102143707/8e9948b3-2064-4ffa-853f-793f972c0204)
 Auto-generated code
 ```npx playwright codegen https://vachanonline.com/ ```
 Write this command in terminal to open website and do the actions manualy that will generate code in playwright .
 ## Running tests :
 https://playwright.dev/docs/running-tests 
 1. Create tests in different files , each feature can tested seperately
 2. Testing person can run each files seperate with its files , also run tests in other directories with path name 
 3. To run specific test file run this ```command : npx playwright test your_file.spec.ts```
 4. To run a set of test files from different directories, pass in the names of the directories that you want to run the tests in. 
    
    ```Command : npx playwright test tests/todo-page/ tests/landing-page/```
    
5. To run files that have vachan in the file name, simply pass in these keywords to the CLI.
    
    ```Command : npx playwright test vachan```
    
6. To run a test with a specific title, use the `-g` flag followed by the title of the test.
    
    ```Command : npx playwright test -g "Read Commentary"```
## Debug Tests :
https://playwright.dev/docs/running-tests#debugging-tests
1. Debug tests in UI mode : ```npx playwright test --ui``` using this command you can debugg your tests with [UI Mode](https://playwright.dev/docs/test-ui-mode) for a better developer experience where you can easily walk through each step of the test and visually see what was happening before, during and after each step. UI mode also comes with many other features such as the locator picker, watch mode . 
2. Debug tests with the Playwright Inspector : ```npx playwright test --debug``` This command will open up a Browser window as well as the Playwright Inspector. You can use the step over button at the top of the inspector to step through your test. Or, press the play button to run your test from start to finish. Once the test has finished, the browser window will close. 
    - To debug one test file, run the Playwright test command with the name of the test file that you want to debug followed by the `--debug` flag.
        
        ```npx playwright test example.spec.ts --debug```
        
    1. To debug a specific test from the line number where the `test(..` is defined, add a colon followed by the line number at the end of the test file name, followed by the `--debug` flag.
        
        ```npx playwright test example.spec.ts:10 --debug```
    ## Test Report :
   https://playwright.dev/docs/running-tests#test-reports
   **HTML - report** :The [HTML Reporter](https://playwright.dev/docs/test-reporters#html-reporter) shows you a full report of your tests allowing you to filter the report by browsers, passed tests, failed tests, skipped tests and flaky tests. By default, the HTML report is opened automatically if some of the tests failed, otherwise you can open it with the following command.
   ```npx playwright show-report```

### Allure report :

- Install allure adapter to the playwright .
  ```npm install --save-dev @playwright/test allure-playwright ```
- Add report  in allure  in playwright configuration file .

```
const { allure } = require('allure-playwright');
import { testPlanFilter } from "allure-playwright/dist/testplan";
```

- Run the tests and generate the allure report using command
  ```npx allure serve allure-results```
- Allure report will show the following : Total number of testcases ,Pie chart for the tests , Test Suites : different browsers and different devices used in testing , shows categories from test results : flaky tests, failed tests , and broken tests .
  
