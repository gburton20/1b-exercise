import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Main from "./components/Main"
import "./App.css";

function App() {

  return (
    <div className="container-fluid">
      {/* Header */}
      <div className="row">
        <Header />
      </div>

      {/* Sidebar and main content */}
      <div className="row">
        {/* Sidebar content: */}
          <Sidebar/>
        {/* Main content: */}
          <Main />
      </div>
    </div>
  )
}

export default App;
