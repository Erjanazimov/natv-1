import React from "react";
import { withTranslation } from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {btnPlaceInfo, infoUser2, inputUser, summaContent} from "../../../redux/actions";
import {NavLink} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function InfoUser(props){
    const { t } = props;
    let phone = React.createRef();
    let email = React.createRef();
    let name = React.createRef();
    let errorPhone = React.createRef();
    let errorEmail = React.createRef();
    let errorFio = React.createRef();
    const userInfo = useSelector(state => {
        return state;
    })
    const dispatch = useDispatch();

    const handleInput = () => {
        dispatch(inputUser(phone.current.value, email.current.value, name.current.value))
        if(!userInfo.infoUserReducer.phone) {
            phone.current.classList.remove("errorPhone");
            errorPhone.current.innerHTML = ""
        } else if(!userInfo.infoUserReducer.email){
            email.current.classList.remove("errorPhone");
            errorEmail.current.innerHTML = ""
        } else if (!userInfo.infoUserReducer.name){
            name.current.classList.remove("errorPhone");
            errorFio.current.innerHTML = ""
        }
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
        } else if (userInfo.dayDateReducer.symbol * userInfo.textareaReducer.symbol === 0) {
            toast.error("Выберите хотя бы одну дату показа")
        } else if (userInfo.infoUserReducer.phone === "") {
            phone.current.className += " errorPhone";
            errorPhone.current.innerHTML = "Заполните номер телефона";
            toast.error("Заполните номер телефона")
        } else if (emailValidate === false) {
            email.current.className += " errorPhone";
            errorEmail.current.innerHTML = "Заполните правильно е-маил";
            toast.error("Заполните правльно e-mail")
        } else if (userInfo.infoUserReducer.name === "") {
            name.current.className += " errorPhone";
            errorFio.current.innerHTML = "Заполните ФИО";
            toast.error("Заполните ФИО")
        } else {
            const place = {
                name: userInfo.infoUserReducer.name,
                last_name: "ad1",
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

    function postUser(place){
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
                if(place.last_name === "ad1"){
                    dispatch(btnPlaceInfo(data, "/create_channel"))
                } else if(place.last_name === "ad2"){
                    dispatch(infoUser2(data, "/create_channelBanner"))
                }
            })
    }

    function isValidImageURL(str){
        if ( typeof str !== 'string' ) return false;
        return !!str.match(/\w+\.(jpg|jpeg|gif|png|tiff|bmp)$/gi);
    }

    const btnPlace2 = () => {
        let emailValidate = validateEmail(userInfo.infoUserReducer.email);
        if ( isValidImageURL(userInfo.imgInputReducer.images) === false) {
            toast.error("Добавьте ссылку на фотографию")
        } else if (userInfo.channelsImagesReducer.total === 0) {
            toast.error("Выберите хотя бы одну дату показа")
        } else if (userInfo.infoUserReducer.phone === "") {
            phone.current.className += " errorPhone";
            errorPhone.current.innerHTML = "Заполните номер телефона";
            toast.error("Заполните номер телефона")
        } else if (emailValidate === false) {
            email.current.className += " errorPhone";
            errorEmail.current.innerHTML = "Заполните правильно е-маил";
            toast.error("Заполните правльно e-mail")
        } else if (userInfo.infoUserReducer.name === "") {
            name.current.className += " errorPhone";
            errorFio.current.innerHTML = "Заполните ФИО";
            toast.error("Заполните ФИО")
        } else {
            const placeBanner = {
                name: userInfo.infoUserReducer.name,
                last_name: "ad2",
                phone_number: userInfo.infoUserReducer.phone,
                email: userInfo.infoUserReducer.email,
                image: userInfo.imgInputReducer.images,
                text: "none",
                total_price: userInfo.channelsImagesReducer.total,
                channels: userInfo.channelsImagesReducer.contentsChannels.map(item => {
                    return {
                        channel_id: item.id,
                        dates: item.day
                    }
                })
            }
            postUser(placeBanner)
           urlPost()
            toast.success("Нажмите еще раз!")
        }
    }

    const urlPost = () => {
        return (
            <NavLink to="/urlPost"/>
        )
    }
    return(
        <>
            <div className="pd-40">
                <div className="mb-4 mt-5 input-group d-flex justify-content-between">

                    <div className="mbm">
                        <label>{t("user")}</label>
                        <input ref={phone} required  onChange={handleInput} type="number" name="phone" className="form-control rounded input-ntv"
                               id="family" placeholder={t("userplac")} value={userInfo.infoUserReducer.phone}/>
                        <p ref={errorPhone} className="textrd"></p>
                    </div>
                    <div className="mbm">
                        <label>{t("user2")}</label>
                        <input ref={email} onChange={handleInput} type="email" name="name" className="form-control rounded input-ntv"
                               id="email" placeholder={t("userplac2")} value={userInfo.infoUserReducer.email}/>
                        <p ref={errorEmail} className="textrd"></p>
                    </div>
                    <div className="mbm">
                        <label>{t("user3")}</label>
                        <input ref={name} onChange={handleInput} type="text" name="middle" className="form-control rounded input-ntv"
                               id="name" placeholder={t("userplac3")} value={userInfo.infoUserReducer.name}/>
                        <p ref={errorFio} className="textrd"></p>
                    </div>
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
                             <button onClick={btnPlace} type="button" className="btn-ntv">
                                 {t("userBtn")}
                             </button>
                            </NavLink>
                        </div>

                        <div className={props.nameComponets === "ad2" ? "d-block" : "d-none"}>
                            <NavLink to={userInfo.infoUser2Reducer.url}>
                                <button onClick={btnPlace2} type="button" className="btn-ntv">
                                    {t("userBtn")}
                                </button>
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