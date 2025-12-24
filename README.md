# Test Assignment Code

   This is the test assignment code for evaluation.

## Getting Started

 Clone Repository 

```bash
#clone github repository
git clone <repo>

#after successful clone
npm install
```

Download Chrome and Firefox webdrivers
E.g. Chrome :  https://googlechromelabs.github.io/chrome-for-testing/ ( Choose Appropriate version for desired platform)

Add drivers in the PATH variable.

```bash
 PATH = <driver_path>:$PATH
```

Run test with following command:
```bash
npm run test #run tests using browser specified in tests file
ex. TEST_USERNAME=standard_user TEST_PASSWORD=secret_sauce npm test -- --grep "Add three items by name to cart and verify customer is able to successfully checkout"
#or
npm run test:chrome #run tests using chrome headless browser
#or
npm run test:firefox #run tests using firefox headless browser
```

## Folder Structure

```
.
├── ...
|── config/index.ts             # Test config (baseUrl, username, password, etc)
├── lib/
│     ├── browser.ts            # Builds WebDriver object for tests
|── pages/                      # Page Object Models
|── reports/                    # Test Report for the tests executed
|── tests/                      # Test Suites and Test Cases
```

