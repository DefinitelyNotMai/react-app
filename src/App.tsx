import Alert from './components/Alert';
import Button from './components/Button';

function App() {
  return (
    <div>
      <Alert>
        Hello, <span>Mai!</span>
      </Alert>
      <Button color="primary" onClick={() => console.log('You clicked me :D')}>
        Click me please.
      </Button>
    </div>
  );
}
export default App;
