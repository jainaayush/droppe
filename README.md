# droppe

## Available Scripts

## Following fixes have been done

1. Used "feature first" acrhitecture for project structure :- Feature-first means that the top-level directories are named after the main features of the app.
2. Created reusable components.
3. Call api's using axios.
4. Add rating field in product add modal.
5. Change logic for add product api. 
6. Add favorite product logic change because title are same of two products but id's not same.
7. Created customs.tsx file in types folder to contain all types and interfaces.
8. Updated add product modal all field update using State.
9. Add validation for rating between 0 to 5.
10. create mobile view of project. 
11. Changed UI of product's list.
12. Used lazy loading and Memo for optimization feature and increase the performance of project.
13. Added Unit test cases in each component folder in jest.
14. Refactored code quality and validations

## Test Case Coverages
1. In Button component i cover statements, branch, functions, lines.
2. In Form component  i mostly focus on statements, functions, lines , branch
3. In Product component i mostly focus on branch, statements, lines, function
4. In ShopApp component i mostly focus on  branch, lines, statements ,functions

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />


### `yarn run test`

To run the test cases you can run above command

### `yarn test --coverage`

To see the test case coverage you can run above commmand

### `yarn build`


### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.