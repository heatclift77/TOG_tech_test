import Logo from '../../assets/img/LOGO.svg'
import Components from '../../components'

export default function Navbar(){
    return(
        <nav className='nav'>
            <div className="container">
                <div className='d-flex justify-content-between'>
                    <div>
                        <img src={Logo} alt="Logo" />
                    </div>
                    <div className='d-flex ms-auto ml-auto align-items-center'>
                        <div className="nav-item">
                            <div className='btn-question'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" id="side-nav-icons"><path d="M10.975 15.775q0-1.7.388-2.6.387-.9 1.637-2 .95-.875 1.45-1.575t.5-1.575q0-1.175-.8-1.963-.8-.787-2.2-.787-1.3 0-2.012.687Q9.225 6.65 8.85 7.5l-1.825-.8q.6-1.425 1.825-2.388 1.225-.962 3.1-.962 2.425 0 3.725 1.362 1.3 1.363 1.3 3.238 0 1.175-.512 2.075-.513.9-1.538 1.875-1.3 1.2-1.613 1.887-.312.688-.312 1.988Zm.975 5.725q-.625 0-1.062-.438-.438-.437-.438-1.062t.438-1.062q.437-.438 1.062-.438.6 0 1.05.438.45.437.45 1.062T13 21.062q-.45.438-1.05.438Z"/></svg>
                            </div>
                        </div>
                        <div className="nav-item">
                            <button className='bg-transparent border-0'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M2.5 10q0-2.1.863-3.963.862-1.862 2.412-3.237L6.85 3.85Q5.5 5.025 4.75 6.612 4 8.2 4 10ZM20 10q0-1.8-.75-3.388-.75-1.587-2.1-2.762l1.075-1.05q1.55 1.375 2.413 3.237Q21.5 7.9 21.5 10ZM4.25 18.875v-1.5h2v-7.25q0-2.05 1.263-3.613Q8.775 4.95 10.75 4.5v-.7q0-.525.363-.888.362-.362.887-.362t.887.362q.363.363.363.888v.7q1.975.45 3.238 2.012 1.262 1.563 1.262 3.613v7.25h2v1.5Zm7.75-7.25ZM12 21.8q-.75 0-1.275-.525Q10.2 20.75 10.2 20h3.6q0 .75-.525 1.275-.525.525-1.275.525Zm-4.25-4.425h8.5v-7.25q0-1.775-1.238-3.013Q13.775 5.875 12 5.875T8.988 7.112Q7.75 8.35 7.75 10.125Z"/></svg>
                            </button>
                        </div>
                        <div className='nav-item'>
                            <Components.UserAvatar />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}