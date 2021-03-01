import React from "react";
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import "./footer.css";


function Footer(){
return(
<div className="footer">
<ReplayIcon className="icons" fontSize="large"/>
<CloseIcon className="icons" fontSize="large"/>
<StarBorderIcon className="icons" fontSize="large"/>
<FavoriteIcon className="icons" fontSize="large"/>
<FlashOnIcon className="icons" fontSize="large"/>
</div>
)

};

export default Footer;