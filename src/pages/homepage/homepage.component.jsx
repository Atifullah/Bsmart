import React from "react";
import './homepage.styles.scss';
import Directory from "../../components/manu-item/directory/directory.component";
import Sliders from "../../components/slider/slider";
const Homepage = () =>
(
    <div className='homepage'>
        <div style={{margintop:'80px'}}>
        <Sliders/>
        </div>
       
        <Directory />
    </div>



);
export default Homepage