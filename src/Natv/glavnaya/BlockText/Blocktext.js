import React from "react";
import LogoPayment from "../../../Components/Form/LogoPayment/LogoPayment";
import { withTranslation } from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {summaTV, textareaSymbol, updateChannels} from "../../../redux/actions";

function Blocktext(props){
    const { t } = props;
    const channelsContent = useSelector( state => {
        return state;
    })

    const text = useSelector(state => {
        const { textareaReducer } = state;
        return textareaReducer
    })
    const dispatch = useDispatch();
    const textSave = (e) => {
        let textarea = e.target.value;
        dispatch(textareaSymbol(textarea, textarea.replace(/\s/g, '').length));
        let booleanContent = {
            text: textarea.replace(/\s/g, ''),
            channelsContent: channelsContent.dayDateReducer.contentTV,
        };


       if(booleanContent.channelsContent.length){
           dispatch(updateChannels(booleanContent))
           dispatch(summaTV());
       }
    }

        return (
            <>
                <div className="pd-40 mn">
                    <div className="@media textarea-fons">
                        <div className="row">
                            <div className="@media">
                                <div className="text-title">
                                    <div className="row d-flex justify-content-between">
                                        <div className="d-flex justify-content-between">
                                            <h3>{t("TexarayObv")}</h3>
                                            <div className="text-right">
                                                {t("Simvol")} <span>{text.symbol}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <textarea onChange={textSave} className="text-enter" name="text"
                                  placeholder={t("placeholder")} value={text.text}/>
                    </div>

                    <div className="@media cont">
                        <h3>{t("textZapoln")}</h3>
                        <p>{t("textZapoln2")}</p>
                        <ul>
                            <li>
                                {t("textZapoln3")}
                            </li>
                            <li>
                                {t("textZapoln4")}
                            </li>
                            <li>
                                {t("textZapoln5")}
                            </li>
                            <li>
                                {t("textZapoln6")}
                            </li>
                            <li>
                                <a href="#">{t("textZapoln7")}</a>
                            </li>
                        </ul>
                        <LogoPayment/>
                    </div>
                </div>
                <div className="pd-40 mt-5 pdb-40">
                    <div className="dflex">
                        <div className="step d-flex align-items-center">
                            <div className="numb">1</div>
                            <div className="text">
                                <p>
                                    {t("num1")}
                                </p>
                            </div>
                        </div>
                        <div className="step d-flex align-items-center">
                            <div className="numb">2</div>
                            <div className="text">
                                <p>
                                    {t("num2")}
                                </p>
                            </div>
                        </div>
                        <div className="step d-flex align-items-center">
                            <div className="numb">3</div>
                            <div className="text">
                                <p>
                                    {t("num3")}
                                </p>

                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
}

export default withTranslation() (Blocktext);