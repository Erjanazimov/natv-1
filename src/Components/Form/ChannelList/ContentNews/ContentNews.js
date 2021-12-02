import React from "react";
import { withTranslation } from "react-i18next";
import {useDispatch} from "react-redux";
import {saveContent} from "../../../../redux/actions";

function ContentNews(props) {
    const dispatch = useDispatch();
    const sumaChnannels = React.createRef();
    const data_save = React.createRef();
    const saveChannels = () => {
        let channelsSave = {};
        channelsSave.id = props.id
        channelsSave.name = props.name;
        channelsSave.price_text_ad = props.price_text_ad;
        channelsSave.image = props.image;
        channelsSave.summaInput = sumaChnannels.current
        channelsSave.dateSave = data_save.current;
        dispatch(saveContent(channelsSave))
    }

        return(
                <div onClick={saveChannels} data-bs-toggle="modal" data-bs-target="#add-modal" >
                    <div id="idTV" >
                        <div className="d-flex justify-content-between mt-3 flex-wrap" >
                            <div className="d-flex align-items-center news" >
                                <div className="img" >
                                    <img src={props.image}/>
                                </div>
                                <span className="one-title" >{props.name}</span>
                            </div>
                            <div className="d-flex align-items-center mt-3 wid" >
                                <p id="summa" ref={data_save} className="show-dates rounded-start"></p>
                                <span className="img-calen" >
								</span>
                            </div>
                            <div className="d-flex align-items-center mx" >
                                <span className="price-real" ref={sumaChnannels} id="suma"> 0 сом</span>
                            </div>
                        </div>
                    </div>
                    <div className="border_end" > </div>
                </div>


        )

}

export default withTranslation() (ContentNews);