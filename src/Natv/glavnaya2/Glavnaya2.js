import React from "react";
import Header from "../../Components/Header/Header";
import ChannelList from "../../Components/Form/ChannelList/ChannelList";
import InfoUser from "../../Components/Form/InfoUser/InfoUser";
import BlockFile from "./BlockFile/BlockFile";
import Footer from "../../Components/Footer/Footer";
import { withTranslation } from "react-i18next";
import {NavLink} from "react-router-dom";

const Glavnaya2 = (props) => {
    const { t } = props;

    let resultText;
    if(t("TextbanerB") == t("TextbanerB")){
        resultText = t("TextbanerB");
    } else{
        resultText = t("TextbanerB");
    }

    return(
        <div className="wrapper">
            <div className="container-natv content-natv">
                <nav className="topMenu d-flex justify-content-around">
                    <NavLink to="/" className="active-2">{t("navstr")}</NavLink>
                    <NavLink to="/glavnaya2" className="active">{t("navbar")}  </NavLink>
                </nav>
        <Header TextBanner={t("TextbanerB")}/>
                <form className="form">
                    <BlockFile/>
                    <ChannelList nameComponents="ad2"/>
                    <InfoUser nameComponets="ad2"/>
                </form>
                <Footer/>
            </div>
        </div>
    )
}


export default withTranslation() (Glavnaya2);