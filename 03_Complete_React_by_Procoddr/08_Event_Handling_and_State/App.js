import AppleCounter from "./components/AppleCounter"
import Counter from "./components/Counter"

// ? Make Component by function declaration

// export default function App(){
//     return <h2>Hello App</h2>
// }


// ? Make Component by Using Arrow Function
const App = () => {
    return (
        <div>
            <Counter />
            <AppleCounter />
        </div>
        )
} 

export default App