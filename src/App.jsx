import { ItemList } from './components/ItemList/ItemList';

const items = ["Item", "Another item", "One more item", "Last item"];

function App() {

  return (
    <>
      <ItemList items={items} />
    </>
  )
}

export default App
