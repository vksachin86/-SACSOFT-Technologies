import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

class ErrorBoundary extends React.Component {
  state = { error: null }
  static getDerivedStateFromError(error) { return { error } }
  render() {
    if (this.state.error) {
      return <div style={{ padding: 24, fontFamily: 'sans-serif', color: '#fff' }}><h1>Something went wrong</h1><pre style={{ whiteSpace: 'pre-wrap', color: '#f87171' }}>{String(this.state.error?.stack || this.state.error)}</pre></div>
    }
    return this.props.children
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <ErrorBoundary><HashRouter><App /></HashRouter></ErrorBoundary>
)
