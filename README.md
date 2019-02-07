# Practice of using the React Hooks

This is a tiny example using the React Hooks for managing local state and global state between components

### Global State management

- Using React.Context API

```javascript
// MyContext.js
const MyContext = React.createContext();

// App.js
return (
  <MyContext.Provider value={initValue}>
    <Header />
    <LogIn />
  </MyContext.Provider>
);
```

- `useContext(MyContext)`

```javascript
// Header.js
const { isLogIn, setLogIn } = useContext(MyContext);
```

### Local State management

- Custom Hooks for handling input element

```javascript
// useHandlingInput.js
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
