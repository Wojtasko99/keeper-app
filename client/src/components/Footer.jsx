import React from "react";

function Footer(){
    let year = new Date();
    return(
        <footer><p>Copyrights Damian Wojtal {year.getFullYear()}</p></footer>
        
    );
}

export default Footer;