import React from 'react'
import Tabs from './Tabs'
import Service from './Body/Service'

function Detail() {
    return (
        <>

            <div className=''>
                <div className='pt-5'>
                    <Tabs />
                </div>

                <div>
                    < Service />
                </div>
                <div>Map</div>
                <div>Availability</div>
                <div>Reviews</div>
                <div>Update</div>
                <div>Any Query</div>
                <div>FAQ</div>
            </div>

        </>
    )
}

export default Detail