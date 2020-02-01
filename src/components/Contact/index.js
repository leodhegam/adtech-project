import React from 'react';
import {MdLocationOn,MdEmail,MdStayCurrentPortrait,MdAccessTime} from 'react-icons/md'
import {FaFacebookSquare,FaInstagram} from 'react-icons/fa'
import './styles.css';
export default function Contact() {
  return (
      <>
       
    <div className="background-c" id="">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                    <div className="text-white">
                       <a href="#" className="text-light"><MdLocationOn/></a>
                        <span className="ml-2"> Escola Agrícola de Jundiai. Macaiba, Rio Grande do Norte</span>
                    </div>
                </div>

                <div className="col-lg-4 ml-lg-auto col-md-6">
                    <ul className="d-flex list-unstyled header-socials float-lg-right">
                        <li className="p-1 "><a href="#" className="text-light"> <FaFacebookSquare/></a></li>
                        <li className="p-1"><a href="#" className="text-light"> <MdEmail/> </a></li>
                        <li className="p-1"><a href="#" className="text-light"> <MdStayCurrentPortrait/> </a></li>
                        <li className="p-1"><a href="#" className="text-light"><FaInstagram/></a></li>
                    </ul>
                </div>
            </div>
        </div>
        
    </div>
</>
  );
}
