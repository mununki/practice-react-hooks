# Practice of using the React Hooks - Hoodux!

This is a tiny example using the React Hooks working like Redux Reducers

- `useHoodux()` is matching redux store and reducers
- global state management with `useContext`
- custom hooks to exract the reusable state logic - `useHandleInput()`

### Global State management

- Hoodux - `useHoodux()`

```javascript
const useHoodux = () => {
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

- `useReducer()` takes reducer type `(state, action) => newState` and returns `state` and `dispatch`

```javascript
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

- Using React.Context API

```javascript
// MyContext.js
const MyContext = React.createContext();

// App.js
const value = useHoodux();
const [state, dispatch] = useReducer(reducer, initValue);

return (
  <MyContext.Provider value={{ ...value, state, dispatch }}>
    <Header />
    <LogIn />
  </MyContext.Provider>
);
```

- `useContext(MyContext)` enables to use the context in any other components

```javascript
// Header.js, Login.js
const { isLogIn, token, reducer, state, dispatch } = useContext(MyContext);
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
