
import './App.css'
import { ComponentB } from './components/ComponentB'
import { Counter } from './components/Counter'
import CounterCtxProvider from './context/CounterContext'
import NameCtxProvider from './context/NameContext'

function App() {

  return (

    <div className="App">
      <h1>Context API</h1>
      <CounterCtxProvider>
        <Counter />
        <NameCtxProvider >
          <ComponentB />
        </NameCtxProvider>
      </CounterCtxProvider>
    </div>
  )
}

export default App
