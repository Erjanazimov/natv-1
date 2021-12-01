import React, {useEffect} from "react";
import ContentNews from "./ContentNews/ContentNews";
import { withTranslation } from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {channelsContent, saveContent, summaTV} from "../../../redux/actions";
import ContentNews2 from "./ContentNews2/ContentNews2";
import ModalDate from "../../ModalDate/ModalDate";
import ModalDate2 from "../../ModalDate/ModalDate2";


function ChannelList(props) {
    const {t} = props;
    const adSumma = React.createRef();
    const channelsTv = useSelector(state => {
        return state;
    })
    const dispatch = useDispatch();
    const total = useSelector(state => {
        const {channelsImagesReducer} = state;
        return channelsImagesReducer.total
    })
    useEffect(() => {
        dispatch(channelsContent(adSumma.current))
        if(props.nameComponents === "ad1"){
            dispatch(summaTV(0))
        }

    },[])


        return (
            <div className="pd-40 channel-list-cont" >
                <input id="idd" type="hidden" />
                <h2>{t("tv")}</h2>
                <div className="channel-list">
                    <div className="title">
                        <div className="d-flex justify-content-between mt-4">
                            <div className="@media">
                                <label>{t("tv1")}</label>
                            </div>
                            <div className="@media">
                                <label className="date">{t("tv2")}</label>
                            </div>
                            <div className="@media mx">
                                <label> {t("tv3")}</label>
                            </div>
                        </div>
                    </div>
                    <div className="content-news">
                        { props.nameComponents === "ad1" ? channelsTv.channelsReducer.contentChannels.map(item => {
                              return <ContentNews key={item.id} name={item.name}
                                      image={item.image} id={item.id}
                                      price_text_ad={item.price_text_ad}
                                      price_image_ad={item.price_image_ad}
                              />
                        }) : null }

                        { props.nameComponents === "ad2" ? channelsTv.channelsReducer.contentChannels.map(item => {
                            return <ContentNews2 key={item.id} name={item.name}
                                                image={item.image} id={item.id}
                                                price_image_ad={item.price_image_ad}
                            />
                        }) : null }
                            <div className="total">
                                <div className="more-channel">
                                    <a href="#">{t("tv4")} </a>
                                </div>

                                <div className="total-block">
                                    <div className='floatR'> {t("tv5")}
                                       <span className={props.nameComponents === "ad1" ? "fw-bold" : "d-none"}> {channelsTv.dayDateReducer.symbol * channelsTv.textareaReducer.symbol} сом
                                       </span>
                                        <span ref={adSumma} className={props.nameComponents === "ad2" ? "fw-bold" : "d-none"}> 0 сом
                                       </span>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                { props.nameComponents === "ad1" ? <ModalDate/> : null }
                { props.nameComponents === "ad2" ? <ModalDate2/> : null }

            </div>
        )

}

export default withTranslation() (ChannelList);