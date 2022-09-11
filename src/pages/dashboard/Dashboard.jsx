import Components from '../../components'
import { ContextConsumer } from '../../context/Context'
import { Component } from 'react'

class Dashboard extends Component{
    render(){
        return(
            <div>
               <Components.MainLayout>
                    <h3>Dashboard</h3>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className="d-flex">
                            <div id="table_id_filter" className='mr-4 me-4'>
                                <Components.Textfield onChange={(e) => { this.props.state.table.search(e.target.value).draw() }} placeholder="Search..." />
                            </div>
                            <div>
                                <Components.Button_expand />
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className='mr-3 me-3'>
                                <Components.ButtonActionCircle type={'file_download'} />
                            </div>
                            <div className='mr-3 me-3'>
                                <Components.ButtonActionCircle type={'printer'} />
                            </div>
                            <div>
                                <Components.ButtonActionCircle type={'delete'} onClick={() => { this.props.state.table.rows( { selected: true } ).remove().draw() }} />
                            </div>
                        </div>
                    </div>
                    <Components.ExpandBoard>
                        <div className="d-flex justify-content-between">
                            <div>
                                <label>
                                    <p className='m-0 mb-2'>
                                        <strong>Class</strong>
                                    </p>
                                    <select name="status" id="status" className='custom_input_field px-3 py-2' onChange={(e) => { 
                                        this.props.state.table.search(e.target.value).draw() 
                                        this.props.dispatch('SET_PAGE_INFO', this.props.state.table.page.info())
                                        console.log(e.target.value)
                                    }}>
                                        <option value="Busines">Busines</option>
                                        <option value="Ekonomi">Ekonomi</option>
                                    </select>
                                </label>
                            </div>
                            <div>
                                <Components.ButtonActionCircle type={'autorenew'} />
                            </div>
                        </div>
                    </Components.ExpandBoard>
                    <Components.Table />
                    <div className='d-flex justify-content-between my-3'>
                        <div className='d-flex align-items-center'>
                            <select name="status" id="status" className='custom_input_field px-3 py-2 mr-3 me-3' onChange={(e) => { 
                                    this.props.state.table.page.len(e.target.value).draw() 
                                    this.props.dispatch('SET_PAGE_INFO', this.props.state.table.page.info())
                                }}>
                                <option value="5">5</option>
                                <option value="10" selected>10</option>
                                <option value="15">15</option>
                                <option value="20">20</option>
                            </select>
                            <div>
                                <p className='m-0'>Showing { this.props.state.tb_page_info.start + 1 } to { this.props.state.tb_page_info.end } of { this.props.state.tb_page_info.recordsTotal }</p> 
                            </div>
                        </div>
                        {/* paginate */}
                        <div className='d-flex'>
                            <button className='button-arrow-paginate' onClick={() => {  
                                    this.props.state.table.page( 'previous' ).draw( 'page')  
                                    this.props.dispatch('SET_PAGE_INFO', this.props.state.table.page.info())

                                }}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M8.375 18.375 0 10l8.375-8.375 1.792 1.792L3.583 10l6.584 6.583Z"/></svg>
                            </button>
                            {this.props.state.pageBtn}
                            <button className='button-arrow-paginate' onClick={ () => { 
                                    this.props.state.table.page( 'next' ).draw( 'page') 
                                    this.props.dispatch('SET_PAGE_INFO', this.props.state.table.page.info())
                                } }>
                                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="m6 18.375-1.792-1.792L10.792 10 4.208 3.417 6 1.625 14.375 10Z"/></svg>
                            </button>
                        </div>
                    </div>
               </Components.MainLayout>
            </div>
        )
    }
}

export default ContextConsumer(Dashboard)