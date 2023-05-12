import ListGroup from './components/ListGroup';

function App() {
  let items = ['Niway', 'Batwan', 'San Barbs', 'Pabie', 'Har', 'HiloHilo'];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}
export default App;
