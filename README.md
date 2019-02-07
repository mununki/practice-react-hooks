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

- `useState()`

```javascript
const [email, setEmail] = useState("");
```
