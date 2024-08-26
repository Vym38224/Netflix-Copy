// komponenta je funkce, která vrací JSX (javascriptový kód, který vypadá jako HTML)
// komponenta má stejný název jako je název souboru
// komponenta obsahuje return
// na konci souboru musí být řádek s exportem
// v return musí něco být
// return dokáže vrátit pouze jeden element

import Book from './components/Book';

function App() {
  return (
    <>
      <h1>Books</h1>
      <Book></Book>
      <Book></Book>
      <Book></Book>
    </>
  );
}


export default App