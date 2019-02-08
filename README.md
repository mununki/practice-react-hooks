# Practice of using the React Hooks

This is a tiny example using the React Hooks for managing local state and global state between components

- global state management with `useContext` combining `useState` hooks
- custom hooks to exract the reusable state logic

### Global State management

- Using React.Context API

```javascript
// MyContext.js
const MyContext = React.createContext();

// App.js
const [isLogIn, setLogIn] = useState(false);

const initValue = { isLogIn, setLogIn };

return (
  <MyContext.Provider value={initValue}>
    <Header />
    <LogIn />
  </MyContext.Provider>
);
```

- `useContext(MyContext)` enables to use the context in any other components

```javascript
// Header.js
const { isLogIn, setLogIn } = useContext(MyContext);
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
