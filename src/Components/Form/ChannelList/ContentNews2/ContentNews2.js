import React from "react";
import { withTranslation } from "react-i18next";
import {useDispatch} from "react-redux";
import { contentsAdSave2} from "../../../../redux/actions";

function ContentNews2(props) {
    const summa = React.createRef();
    const date = React.createRef();
    const dispatch = useDispatch();

    const contentsAdSave = () => {
        let objContentsAd2 = {
            id: props.id,
            name: props.name,
            price_image_ad: props.price_image_ad,
            summa: summa.current,
            date: date.current
        }
        dispatch(contentsAdSave2(objContentsAd2))
    }
        return(
                <div onClick={contentsAdSave} data-bs-toggle="modal" data-bs-target="#add-modal2" >
                    <div id="idTV" >
                        <div className="d-flex justify-content-between mt-3 flex-wrap" >
                            <div className="d-flex align-items-center news" >
                                <div className="img" >
                                    <img src={props.image}/>
                                </div>
                                <span className="one-title" >{props.name}</span>
                            </div>
                            <div className="d-flex align-items-center mt-3 wid" >
                                <p id="summa" ref={date} className="show-dates rounded-start"></p>
                                <span className="img-calen" >
								</span>
                            </div>
                            <div className="d-flex align-items-center mx" >
                                <span ref={summa} className="price-real" id="suma"> 0 сом</span>
                            </div>
                        </div>
                    </div>
                    <div className="border_end" > </div>
                </div>


        )

}

export default withTranslation() (ContentNews2);