import {useRef} from 'react'

// assets
import avatar from '../../assets/img/avatar.jpg'
import Lock_open from '../../assets/img/lock_open.svg'
import Logout from '../../assets/img/logout.svg'
import Person from '../../assets/img/person.svg'



export default function UserAvatar(){
    const expand = useRef(null)
    const onClickAvatar = () => {
        expand.current.classList.toggle('avatar-expand-on')
    }
    return(
     <div className='position-relative'>
        <div className='btn_avatar'>
            <img src={avatar} alt="avatar" className='avatar-img' onClick={onClickAvatar} />
        </div>
        <div className='avatar-expand over-top' ref={expand}>
            <div className='d-flex py-3 px-3 border-bottom'>
                <div className='btn_avatar'>
                    <img src={avatar} alt="avatar" className='avatar-img' />
                </div>
                <div className='ml-3 ms-3'>
                    <strong>Neng Lidiawati</strong>
                    <p className='text-secondary m-0'>Gamers</p>
                </div>
            </div>
            <div className='avatar_menu'>
                <div className='avatar_link'>
                    <img src={Person} alt="person" />
                    <p className='my-auto'>My Profile</p>   
                </div>
                <div className='avatar_link'>
                    <img src={Lock_open} alt="person" />
                    <p className='my-auto'>Change Password</p>   
                </div>
                <div className='avatar_link'>
                    <img src={Logout} alt="person" />
                    <p className='my-auto'>Logout</p>   
                </div>
            </div>
        </div>
    </div>
    )
}