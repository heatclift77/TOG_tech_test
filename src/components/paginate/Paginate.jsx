import { Component } from 'react'
import { ContextConsumer } from '../../context/Context'
class Paginate extends Component{
    state = {
        data: ['1', '2', '3']
    }

    render(){
        return <div></div>
    }
}

export default ContextConsumer(Paginate)