import DataTable from 'datatables.net'
import 'datatables.net-select-dt' 
import { ContextConsumer } from '../../context/Context'
import { Component } from 'react'
import '../../assets/css/selectDataTables.css'

// data
import data from '../../assets/data/data'
const tb_properties =  {
    data: data,
    columns: [
        {
            data: 'no',
        },
        {
            data: 'name',
        },
        {
            data: 'description',
        },
        {
            data: 'status',
        }
    ],
    destroy: true,
    order: [[ 1, 'asc' ]],
    // columnDefs: [ {
    //     orderable: false,
    //     className: 'select-checkbox',
    //     targets:   0
    // } ],
    
    select: {
        items: 'row'
    },
}


class Table extends Component{
   
    componentDidMount(){
        const table = new DataTable('#table_id', tb_properties)
        this.props.dispatch('SET_TABLE', table)
    }
    
    render(){
        return(
            <table id="table_id" className='stripe custom-table' width={'100%'}>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Destination</th>
                        <th>Transportation</th>
                        <th>Class</th>
                    </tr>
                </thead>
            </table>
        )
    }
}

export default ContextConsumer(Table)