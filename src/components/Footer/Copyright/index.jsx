import { Divider } from 'antd';
import React from 'react'

const Copyright = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <Divider className='m-0' style={{ borderColor: '#130D29' }} />
            <div className="container py-3 ">
                <div className="row">
                    <div className="col">
                        <p className='text-center text-black mb-0 ' >&copy; 2017-{year} Malik Rehman. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Copyright