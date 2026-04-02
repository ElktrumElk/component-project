import Home from "./pages/home";
import Header from "./components/fixed_head";

async function App() {
    return [
        await Home(),
    ]
}

export default App;


