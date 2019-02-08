# Practice of using the React Hooks - Hookux!

This is a tiny example using the React Hooks working like Redux Reducers

- `useHookux()` is matching redux store and reducers
- global state management with `useContext`
- custom hooks to exract the reusable state logic - `useHandleInput()`

### Hookux

- `useHookux()`

```javascript
const useHookus = () => {
  // set initial values
  const [isLogIn, setLogIn] = useState(false);
  const [token, setToken] = useState("");

  // set reducer
  const reducer = (dispatch, value) => {
    switch (dispatch) {
      case "setLogIn":
        setLogIn(value);
        break;
      case "setToken":
        setToken(value);
        break;
      default:
        break;
    }
  };

  const value = { isLogIn, token, reducer };

  return value;
};
```

- Using React.Context API

```javascript
// MyContext.js
const MyContext = React.createContext();

// App.js
const value = useHookus();

return (
  <MyContext.Provider value={value}>
    <Header />
    <LogIn />
  </MyContext.Provider>
);
```

- `useContext(MyContext)` enables to use the context in any other components

```javascript
// Header.js
const { isLogIn, token, reducer } = useContext(MyContext);
```

### Local State management

- Custom Hooks for handling input element

```javascript
// useHandleInput.js
const useHandleInput = initialValue => {
  const [input, setInput] = useState(initialValue);

  return [input, setInput];
};

// Login.js
const [email, setEmail] = useHandleInput("");

return (
  <input
    type="text"
    name="email"
    value={email}
    onChange={e => setEmail(e.target.value)}
  />
);
```
