import React from "react";
import { withTranslation } from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {btnPlaceInfo, inputUser, summaContent} from "../../../redux/actions";
import {NavLink} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function InfoUser(props){
    const { t } = props;
    let phone = React.createRef()
    let email = React.createRef()
    let name = React.createRef()

    const userInfo = useSelector(state => {
        return state;
    })
    const dispatch = useDispatch();

    const handleInput = () => {
        dispatch(inputUser(phone.current.value, email.current.value, name.current.value))
    }

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const btnPlace = () => {
        let summa = userInfo.dayDateReducer.symbol * userInfo.textareaReducer.symbol;
        let emailValidate = validateEmail(userInfo.infoUserReducer.email);
        let mapChannels = userInfo.dayDateReducer.contentTV.map(item => {
            return {
                channel_id: item.id,
                dates: item.day
            }
        })
        dispatch(summaContent(summa))
        if (userInfo.textareaReducer.text === "") {
            toast.error("Заполните текст вашего объявления")
        } else if (mapChannels.length === 0) {
            toast.error("Выберите хотя бы одну дату показа")
        } else if (userInfo.infoUserReducer.phone === "") {
            toast.error("Заполните номер телефона")
        } else if (emailValidate === false) {
            toast.error("Заполните правльно e-mail")
        } else if (userInfo.infoUserReducer.name === "") {
            toast.error("Заполните ФИО")
        } else {
            const place = {
                name: userInfo.infoUserReducer.name,
                last_name: "---",
                phone_number: userInfo.infoUserReducer.phone,
                email: userInfo.infoUserReducer.email,
                image: "https://tipsmake.com/data1/thumbs/how-to-extract-img-files-in-windows-10-thumb-bzxI4IDgg.jpg",
                text: userInfo.textareaReducer.text,
                total_price: summa,
                channels: mapChannels
            }
            postUser(place)
            toast.success("Нажмите еще раз!")
        }
    }

    const postUser = (place) => {
        let options = {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(place)
        }
        fetch("https://natv-apps.herokuapp.com/api/v1/create-order/", options)
            .then(response => response.json())
            .then(data => {
                dispatch(btnPlaceInfo(data, "/create_channel"))
            })
    }

    return(
        <>
            <div className="pd-40">
                <div className="mb-4 mt-5 input-group d-flex justify-content-between">
                    <div className="mbm">
                        <label>{t("user")}</label>
                        <input ref={phone} onChange={handleInput} type="phone" name="phone" className="form-control rounded input-ntv"
                               id="family" placeholder={t("userplac")} value={userInfo.infoUserReducer.phone}/>
                    </div>
                    <div className="mbm">
                        <label>{t("user2")}</label>
                        <input ref={email} onChange={handleInput} type="email" name="name" className="form-control rounded input-ntv"
                               id="email" placeholder={t("userplac2")} value={userInfo.infoUserReducer.email}/></div>
                    <div className="mbm">
                        <label>{t("user3")}</label>
                        <input ref={name} onChange={handleInput} type="text" name="middle" className="form-control rounded input-ntv"
                               id="name" placeholder={t("userplac3")} value={userInfo.infoUserReducer.name}/></div>
                </div>
                <div>
                    <p>

                        {t("userteext")}
                        <br/>
                        {t("userteext2")}
                    </p>
                </div>
                <div className="btn-cont d-flex justify-content-between">
                    <div className="check-text">
                        <div>{t("userraz")}</div>
                    </div>
                    <div className="div-btn mt-3">
                        <div className={props.nameComponets === "ad1" ? "d-block" : "d-none"}>
                         <NavLink to={userInfo.infoUserReducer.nameUrl}>
                                <input onClick={btnPlace} type="button" name="" value={t("userBtn")}
                                       className="btn-ntv"/>
                            </NavLink>
                        </div>

                        <div className={props.nameComponets === "ad2" ? "d-block" : "d-none"}>
                            <NavLink to="glavnaya2">
                                <input type="button" name="" value={t("userBtn")}
                                       className="btn-ntv"/>
                            </NavLink>
                        </div>
                        <ToastContainer/>
                    </div>
                </div>


                <hr/>
            </div>
        </>
    )
}

export default withTranslation() (InfoUser);