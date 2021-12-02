import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Blocktext from "./BlockText/Blocktext";
import ChannelList from "../../Components/Form/ChannelList/ChannelList";
import InfoUser from "../../Components/Form/InfoUser/InfoUser";
import { withTranslation } from "react-i18next";

const Glavnaya = (props) => {
    const { t } = props;
    let resultText;
    if(t("TextstrBan") == t("TextstrBan")){
        resultText = t("TextstrBan");
    } else{
        resultText = t("TextstrBan");
    }
    return(
        <>
            <div className="wrapper">
                <div className="container-natv content-natv">
                    <nav className="topMenu d-flex justify-content-around">
                        <a href="#" className="active">{t("navstr")}</a>
                        <a href="/glavnaya2" className="active-2">{t("navbar")} </a >
                    </nav>

                <Header TextBanner={resultText}/>
                    <form className="form">
                        <Blocktext/>
                        <ChannelList nameComponents="ad1"/>
                        <InfoUser nameComponets="ad1"/>
                    </form>
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default withTranslation() (Glavnaya);