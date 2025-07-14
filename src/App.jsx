import { Button } from "react-bootstrap"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"


function App() {

  return (
    <div className="container-fluid">
      {/* Header */}
      <div className="row">
        <Header />
      </div>

      {/* Sidebar/main */}
      <div className="row">
        <Sidebar />
      </div>
    </div>
  )
}

export default App
