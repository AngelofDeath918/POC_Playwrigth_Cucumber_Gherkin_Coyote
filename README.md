# POC Coyote_FFW - with Playwright

## Summary

- [Getting started ](#getting-started-in-local-for-creation-or-debug)
- [Run (in local)](#run-in-local)
- [More](#more)
- [What have been changed)](#what-have-been-changed)

## Getting started 

#### Prerequisites

1. yarn global installed (no lower than 1.22.19 recommended)
2. node.js global installed (no lower than 18.7.0 recommended)

#### IDE extensions

- [Playwright](https://open-vsx.org/extension/ms-playwright/playwright) (allows to launch tests in the editor, and more...), is VScode exclusive but use [VScodium](https://payplug-prod.atlassian.net/wiki/spaces/F/pages/128581677/Workspace+setup), it's the same but without microsoft tracking

#### Setup

1. Clone repo with SSH: `git clone https://github.com/AngelofDeath918/coyoteCode.git `
2. Install all dependencies: `yarn`
3. Install npm packages : `npm i`
4. Install Playwright : `npm init playwright@latest`

## Run (in local)
- Try the UI IDE plugin, but you can also use command lines:
- [list of commands](https://playwright.dev/docs/running-tests#command-line)

### Command examples:

#### Run test:

- `yarn test` -> It will run all tests in QA environment
- `yarn test -g "pos"` -> Run all the tests with 'pos' in the title (-g or --grep)

#### Create/debug test:

- `yarn playwright codegen` -> Auto generate tests with Codegen
- `yarn playwright test --debug` -> Run in debug mode ([recommended in order to get robusts locators](https://payplug-prod.atlassian.net/wiki/spaces/F/pages/159285394/Locators+selectors+DOM+elements#Advantage-of---debug-command-on-alternatives-%E2%80%98codegen-or---ui-modes%E2%80%99))
- `yarn playwright test --ui` -> Run in UI mode
- `yarn playwright test --headed` -> Run in headed mode

#### HTML Test Reports:

- `yarn playwright show-report` -> Display the previous run results as a html page
- `yarn playwright show-trace` -> Launch the network/run trace viewern

## More

- Visit the [official doc.](https://playwright.dev/docs/intro) 

## What have been changed
Playwright is a Node. js library that lets you script and automates browsers using the same API, like Chrome, Firefox, and Safari.