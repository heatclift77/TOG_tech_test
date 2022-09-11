import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Context from '../context/Context'
import Pages from '../pages'

function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Pages.Dashboard />} />
                <Route path='/dashboard' element={<Pages.Dashboard />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Context(Router)