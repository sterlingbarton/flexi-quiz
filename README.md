# Flexi-Path Parent View

Welcome to the Parent View of Flexi-Path.

## How to start

After cloning the repository to your local device,

1. cd into the flexi-path directory
2. run `npm install`
3. run `npm run dev` to start the server and view the project locally


## QA Process

For the dev
1. PR needs to have been approved and merged into dev
2. We have added a subsection to the description of the task with detailed information of the expected behavior for the feature we worked on
3. Moved our task in ClickUp to the QA column
4. Add a comment saying that the feature is ready to be tested.
5. If testing was successful, move task to the complete column.
6. If testing failed, move task back to the In Progress column and debug the issues provided by the tester.
    a. Once fixed, repeat steps 1-4.

For the tester:
1. Please read the description thoroughly. If you have questions, please reach out to the dev for further clarification.
2. Pull latest from the dev branch.
3. Run the project locally while on the dev branch (the goal is to eventually have some sort of testing environment without having to run it locally).
4. Perform your testing.
4. Add comments to the task in ClickUp describing what you tested, how it was tested and if it passed or not. If not, list out the issues you saw.
5. Notify the dev of your results.
