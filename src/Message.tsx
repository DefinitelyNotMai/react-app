// PascalCasing - expected naming convention for functions.
function Message() {
  // This is JSX (JavaScript XML), not HTML.
  // https://babeljs.io/repl
  const name = "Mai";
  if (name) {
    return <h1>Hello, {name}!</h1>;
  } else {
    return <h1>Hello, User!</h1>;
  }
}

export default Message;
