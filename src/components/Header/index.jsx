import React from 'react'
import { Button, Image } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { MdArrowOutward } from "react-icons/md";
import systemsity from '../../assets/systemsity.svg';

const Header = () => {
    const navigate = useNavigate()
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-secondary shadow py-2" style={{ fontWeight: '600' }} >
                <div className="container" >
                    <Link to='/' className="navbar-brand" ><Image src={systemsity} alt="Systemsity" width="30" height="24" preview={false} /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/' className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/about' className="nav-link active" aria-current="page">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/contact' className="nav-link active" aria-current="page">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/careers' className="nav-link active" aria-current="page">Careers</Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <Button type='primary' variant='solid' size='large' shape='round' style={{ backgroundColor: '#130D29', borderColor: '#130D29' }} onClick={()=>navigate('/contact')} >Contact Us<MdArrowOutward /></Button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header