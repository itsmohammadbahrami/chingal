# Chingal

A simple user management app

## Technologies

-  Core: `react`, `react-dom`, `react-router`, `Typescript`, `redux`, `redux-saga`, `redux-persist`, `axios`
-  Dev: `yarn`, `react-scripts`, `sass`
-  UI: `antd`, `tailwind`

## Scripts

> Install **yarn** from [here](https://classic.yarnpkg.com/en/docs/install/#windows-stable). Try to not using **npm** anymore!

### `yarn ... [packages]`

-  **`install`** Install all dependencies
-  **`add`** Add dependencies
-  **`remove`** Remove dependencies
-  **`upgrade`** Upgrade dependencies
-  **`outdated`** Show a list of out-dated dependencies.

### `yarn ...`

-  **`start`** Starts app in development mode.
-  **`build`** Creates an optimized production build.
   <br />Note: Use node version >= 16 to build the project.
-  **`analyze`** Analyzes app's bundle size.

## Naming Conventions

> Files with different types named this way: [fle_name].[type].[extension], e.g. `foo.test.js`, `foo.container.js`, `foo.reducer.js`, `foo.ac.js` (action creators), `foo.module.scss`.

-  Folders, css file and routes are **kebab-case**.
-  JS files and variables that are not component are **camelCase**.
-  Components and class names are **PascalCase**.

## Imports

> Try to use absolute paths, e.g. `'src/redux/actions'` instead of `'../../actions'`.

**Note**: Most paths should refrence to directories and not files. So all folders should have an `index.ts` file which re-exports everything needed from there.

Order of imports:

```js
// node_modules
import React from 'react';
import React, { useState, useEffect, useRef } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

// other: components, utils, actions, ...
import { fetchHumanResources } from 'src/redux/actions';

import Calendar from './calendar';

// assets
import { ReactComponent as Icon } from 'src/assets/icons/icon.svg';

// css
import css from './styles.module.scss';
```

## CSS

With help of babel-plugin for react-css-modules we can use stylesheets and classes in a better way.

```js
import css from './app.module.scss';

const App = () => {
   return (
      <>
         <div className={css.Container}></div>
      </>
   );
};
```

## Functional Components Structure

> Any variable that is not depend on component state or props should be outside of on it!

Following is the order of logics inside component:

1. Expressions and Computations
2. useRefs, useContexts and useDispatch
3. Local State: useState and useReducer
4. Global State: useSelector
5. Side Effects: useEffect
6. Functions and Handlers
7. return (`<Element />`)

#### `Component.tsx`

```ts
const obj = {
    title: 'foo'
}

interface Props {
   foo: string;
   arr: any[];
};

const Component:React.FC<Props> = ({foo, arr}) => {
    const x = ()=> { };
    const y = useMemo(() => /* computations */, [])

    const ref = useRef(null);
    const { value } = useContext(context);
    const dispatch = useDispatch();

    const [state, state] = useState(false);
    const [state2, dispatchLocal] = useReducer(reducer, initialState);

    const { ... } = useSelector(selector);

    useEffect(() => /* side effects */, []);

    const clickHandler = e => {}

    return (
        <div onClick={clickHandler} foo={foo}>
            Hello World!
        </div>
    )
}

export default Component;
```
