import React from "react";
import {NavLink} from "react-router-dom";
import Header from "../../Components/Header/Header";
import PaymentCom from "../../Components/PaymentCom/PaymentCom";
import Footer from "../../Components/Footer/Footer";
import { withTranslation } from "react-i18next";

const Payment = (props) => {
    const { t } = props;
    let resultText;
    if(t("Oproekt") == t("Oproekt")){
        resultText = t("Oproekt");
    } else{
        resultText = t("Oproekt");
    }

    return (
        <>
            <div className="wrapper">
                <div className="container-natv content-natv">
                    <nav className="topMenu d-flex justify-content-around">
                        <a href="/" className="active-2">{t("navstr")}</a>
                        <a href="/glavnaya2" className="active">{t("navbar")}  </a>
                    </nav>
                    <Header TextBanner={resultText}/>
                    <PaymentCom/>
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default withTranslation() (Payment);