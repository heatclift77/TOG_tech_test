import Components from '../../components'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

export default function MainLayout(props){
    return(
        <div>
            <Components.Navbar />
            <Components.Sidebar />
            <div className='content-pages container'>
                <Breadcrumb>
                    <Breadcrumb.Item href="#">Master Data Management</Breadcrumb.Item>
                    <Breadcrumb.Item active>Data</Breadcrumb.Item>
                </Breadcrumb>
                {props.children}
            </div>
        </div>
    )
}