import { createContext, Component } from 'react'

export const RootContext = createContext()
const Provider = RootContext.Provider


// Provider
export default function Context(Children){
    return(
        class child extends Component{
            state = {
                table: null,
                tb_page_info: {
                    end: 0,
                    length: 0,
                    recordsDisplay: 0,
                    recordsTotal: 0,
                    pages: 0,
                    page: 0
                },
                pageBtn: []
            }

            dispatch = (type, value) => {
                if(type === 'SET_TABLE'){
                    let buttons = []
                    for(let i = 0; i < value.page.info().pages; i++){
                        if(value.page.info().page == i){
                            buttons.push(<button className='button-paginate button-paginate-active' value={i} key={i} >{i +1}</button>)
                        }else{
                            buttons.push(<button className='button-paginate' value={i} key={i} >{i +1}</button>)
                        }
                    }

                    this.setState({
                        table: value,
                        tb_page_info: {
                            end: value.page.info().end,
                            length: value.page.info().length,
                            recordsDisplay: value.page.info().recordsDisplay,
                            recordsTotal: value.page.info().recordsTotal,
                            pages: value.page.info().pages,
                            page: value.page.info().page,
                            start: value.page.info().start
                        },
                        pageBtn: buttons
                    })
                }
                if(type === 'SET_PAGE_INFO'){
                    let buttons = []
                    for(let i = 0; i < value.pages; i++){
                        if(value.page == i){
                            buttons.push(<button className='button-paginate button-paginate-active' value={i} key={i} >{i +1}</button>)
                        }else{
                            buttons.push(<button className='button-paginate' value={i} key={i} >{i +1}</button>)
                        }
                    }

                    this.setState({
                        ...this.state,
                        tb_page_info: {
                            end: value.end,
                            length: value.length,
                            recordsDisplay: value.recordsDisplay,
                            recordsTotal: value.recordsTotal,
                            pages: value.pages,
                            page: value.page,
                            start: value.start
                        },
                        pageBtn: buttons
                    })
                }
            }

            render(){
                return(
                    <Provider value={
                        {
                            state: this.state,
                            dispatch: this.dispatch
                        }
                    }>
                        <Children {...this.props} />
                    </Provider>
                )
            }
        }
    )
}

// Consumer
const Consumer = RootContext.Consumer
export function ContextConsumer(Children){
    return(
        class childConsumer extends Component{
            render(){
                return (
                    <Consumer>
                        {
                            value => {
                                return(
                                    <Children {...this.props} {...value} />
                                )
                            }
                        }
                    </Consumer>
                )
            }
        }
    )
}