// komponenta je funkce, která vrací JSX (javascriptový kód, který vypadá jako HTML)
// komponenta má stejný název jako je název souboru
// komponenta obsahuje return
// na konci souboru musí být řádek s exportem
// v return musí něco být
// return dokáže vrátit pouze jeden element
import Movie from "./components/Movie";

const App = () => {
    return (
        <Movie />
    );
}

export default App;