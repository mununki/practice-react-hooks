# Practice of the React Hooks - How to replace the React Reduxt

This is a tiny example using the React Hooks working like React Redux.

1. `useHoodux()` = `useState()` + `useContext()`
2. `useReducer()`

## How to replace the Redux with React Hooks

### Create the store (initValue + reducer)

```javascript
// App.js

const initValue = {
  isLogin: false,
  token: ""
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setLogin":
      return { isLogin: action.payload };
    case "setToken":
      return { token: action.payload };
    default:
      throw new Error("wrong action.type");
  }
};
```

### Wrap the top level component(eg. App.js) with Context

```javascript
// App.js

const MyContext = React.createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initValue);

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      <Header />
      <LogIn />
    </MyContext.Provider>
  );
};
```

> You can use the context wrapper component in higher order if you like.

### Pull and use `state` and `dispatch`

```javascript
// Login.js

const { state, dispatch } = useContext(MyContext);

const handleLogin = () => {
  dispatch({ type: "setLogin", payload: true });
};

return <div>{state.isLogin ? "You are logged in" : "Not logged in"}</div>;
```

## Conclusion

`useReducer` make a lot easier to pull and use the `state` and `dispatch` instead of using `connect()` in React Redux. If you're familiar with it, you know how it works. In React Redux,every single component, you want to use `state` or `dispatch`, needs to be connected. But with `useReducer`, you need to call it just once in component if you want it to be.
