import React from "react";
import "./Footer.css"

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className="footer-footer">
            © {year} ООО<span className="bar">&nbsp;«КулинарЪ»&nbsp;</span>ИНН 7805575597
        </div>
    )
}

export default Footer;