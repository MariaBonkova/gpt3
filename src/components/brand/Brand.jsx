import React from "react";
import './brand.css'
import { google,slack,altassian,dropbox,shopify} from './import'

const Brand = () => {
    return (
        <div className='gp3__brand section__padding'>
            <div className=''>
                <img src={google} alt="google"/>
            </div>
            <div className=''>
                <img src={slack} alt="slack"/>
            </div>
            <div className=''>
                <img src={altassian} alt="altassian"/>
            </div>
            <div className=''>
                <img src={dropbox} alt="dropbox"/>
            </div><div className=''>
                <img src={shopify} alt="shopify"/>
            </div>
        </div>
    )
}
export default Brand