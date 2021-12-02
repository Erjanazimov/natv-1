import React from "react";
import {NavLink} from "react-router-dom";
import Header from "../../Components/Header/Header";
import OfertaCom from "../../Components/OfertaCom/OfertaCom";
import Footer from "../../Components/Footer/Footer";
import {withTranslation} from "react-i18next";

const Oferta = (props) => {
    const { t } = props;
    let resultText;
    if(t("Oproekt") == t("Oproekt")){
        resultText = t("Oproekt");
    } else{
        resultText = t("Oproekt");
    }
    return(
        <>

            <div className="wrapper">
                <div className="container-natv content-natv">
                    <nav className="topMenu d-flex justify-content-around">
                        <a href="/" className="active-2">{t("navstr")}</a>
                        <a href="/glavnaya2" className="active">{t("navbar")}  </a>
                    </nav>
                    <Header TextBanner={resultText}/>
                    <OfertaCom/>
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default withTranslation() (Oferta);