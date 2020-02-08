import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import '../App.css';
import { AiFillPhone } from "react-icons/ai";
import { IoIosMail } from 'react-icons/io';
import {GiHouse} from 'react-icons/gi';
import {GiCash} from 'react-icons/gi'


const Profile = ({contacts}) => {
    return(
        
        <div className="col-lg-4 col-sm-12 col-md-12 justify-content-around">
            <div className="container" >
                    <div className="row">
                        <div className="col  text-light bg-dark mb-3" >
                            <h3 className="h5" >Contact Details and Balance</h3>
                                <p ><span><IoIosMail sclassName="size" /></span> {contacts.contactInfo.emailAddress}</p>
                                <p ><span><AiFillPhone className="size" /></span> {contacts.contactInfo.cellNumber}</p>
                                <p ><span><GiHouse className="size" /></span> {contacts.postalAddress.addressLine1 } , {contacts.postalAddress.addressLine2 }</p>
                                <p ><span><GiCash  className="size"/></span>R {contacts.accountBalance}</p>
                        </div>
                    </div>
                </div>
        </div>
    )

}


export default Profile
