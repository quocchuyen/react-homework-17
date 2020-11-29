import React from 'react'
import './asset/main.scss'
import Home from './components/Home'
import Project from './components/Project'
import Beadcrumb from './components/Beadcrumb'
import Started from './components/Started'
import Dowload from './components/Download'
class App extends React.Component {
  render() {
    return (
      <div className="bg-menu">
          <ul>
            <Home/>
            <Project/>
            <Beadcrumb/>
            <Started/>
            <Dowload/>
          </ul>
      </div>
    )
  }
}

export default App
