import React from "react";
import Logo from "../../assets/logo.png"
import { 
    InboxIcon,
    PhoneIcon,
    LocationMarkerIcon,
    LoginIcon,
    UsersIcon,
    LinkIcon,
} from "@heroicons/react/outline";
import css from './Footer,module.css';


const Footer = () => {
    return (
        <div className={css.cFooterWrapper}>
        <hr />

        <div className={css.cFooter}>
            <div className={css.logo}>
                <img src={Logo} alt="" />
                <span>amazon</span>
            </div>

            <div className={css.block}>
                <div className={css.detail}>
                    <span>Contact Us</span>
                    <span className={css.pngline}>
                        <LocationMarkerIcon className={css.icon}/>
                        <span>111 north avenue Orlanda, FL 32801</span>

                    </span>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Footer