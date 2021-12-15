import React from "react";
import Header from "../Header/Header";
import {withTranslation} from "react-i18next";
import RekvisityBanner from "./RekvisityBanner";
import Footer from "../Footer/Footer";
import {useSelector} from "react-redux";


function Create_channelBanner(props){
const { t } = props;
    const error = useSelector(state => state.infoUser2Reducer.infoUserBanner.payment_code)
    return (
        <div className="wrapper">
            <div className="container-natv content-natv">
                <nav className="topMenu d-flex justify-content-around">
                    <a href="/" className="active-2">{t("navstr")}</a>
                    <a href="/glavnaya2" className=" active">{t("navbar")} </a >
                </nav>
                <Header TextBanner="ВСЕГО 1 ШАГ ДО РАЗМЕЩЕНИЯ БЕГУЩЕЙ СТРОКИ! ОПЛАТИТЕ ЛЮБЫМ УДОБНЫМ ДЛЯ ВАС СПОСОБОМ!"/>
                <div className="pd-40 bg-white order">
                    <h2 className="page-title pt-4">Заявка зарегистрирована</h2>
                    <div className="d-flex justify-content-between flexW">
                        <div className="jik">

                            <p>Вы успешно зарегистрировали заявку на размещение бегущей строки. Вам необходимо запомнить или
                                записать код оплаты, сумму к оплате, срок до которого необходимо оплатить и
                                внести оплату любым удобным для Вас способом.</p>
                            <hr/>
                            {error === undefined ? <div> <h1>Ошибка</h1>
                                    <h3>И за перезагрузки сайта, заполните занова данные!!!</h3>
                                </div> :
                                <RekvisityBanner/>
                            }

                        </div>
                        <div className="summad">
                            <div><h3>Уважаемый Рекламодатель</h3>
                                <ul>
                                    <li>Оплатите выбранные даты заранее и размещение будет Вам гарантировано.<br/>Количество
                                        объявлений для размещения ограничено. </li>
                                    <li>Внесите сумму не менее указанной в стоимости объявления. В противном случае мы
                                        не сможем принять Ваше объявление к размещению. Учитывайте то, что при оплате в
                                        терминале может взыматься комиссия.
                                    </li>
                                    <li>В случае оплаты позже указанного срока, дата начала размещения рекламы смещается
                                        соответственно на день, следующий за днем оплаты и сроки исполнения заказа могут
                                        быть изменены.
                                    </li>
                                    <li>Произвести оплату можно через платежные терминалы: МТС, Terem Pay, Quickpay,
                                        О!Деньги, Balance.kg, QIWI, Кыргыз Почтасы, Элсом, Optima Bank, Optima24, UMAI,
                                        MegaPay
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default withTranslation() (Create_channelBanner);