import '../styles/App.css'
import '../styles/components/button.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login, Register, ForgotPassword, NotFound, Dashboard } from './views'

const App = () => {
    return (
        <Router>
            <Main />
        </Router>
    );
}

const Main = () => {
    return(
        <main className="main">
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/forgot" element={<ForgotPassword />} />
                <Route exact path="/notfound" element={<NotFound />} />
                <Route exact path="/home" element={<Dashboard />} />
            </Routes>
        </main>
    );
}

export default App