import React from "react";
import AddItem from "./components/AddItem";
import 'bootstrap/dist/css/bootstrap.min.css'; 

class App extends React.Component {
  render() {
    return (
           <div className="grid-container">
              <AddItem></AddItem>
           </div>
    );
  }
}

export default App;