import React, { useState } from "react";
import 'react-calendar/dist/Calendar.css';
import DayPicker, { DateUtils } from "react-day-picker";
import 'react-day-picker/lib/style.css';
import {useDispatch, useSelector} from "react-redux";
import {contentsChannelsAd2, totalSummaAd2} from "../../redux/actions";




function ModalDate() {
    const [dayDate, setDayDate] = useState([])
    const modalState = useSelector(state => state)
    const MONTHS = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
    ];
    const WEEKDAYS_LONG = [
        'Воскресенье ',
        'Суббота',
        'Пятница',
        'Четверг',
        'Среда',
        'Вторник',
        'Понедельник',
    ];
    const WEEKDAYS_SHORT = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    const dispatch = useDispatch();

    const handleDayClick = (day, {selected}) => {
        let selectedDays = dayDate.concat();
        if (selected) {
            const selectedIndex = selectedDays.findIndex(selectedDay =>
                DateUtils.isSameDay(selectedDay, day)
            );
            selectedDays.splice(selectedIndex, 1);
        } else {
            selectedDays.push(day);
        }
        setDayDate(selectedDays)
    }

    const imagesPriceBtn = () => {
        const formatDate = [];
        const objData = {};
        const formatModal = []
        dayDate.map(item => {
            let resDate = new Date(item);
            let mm = resDate.getMonth() + 1;
            let dd = resDate.getDate();
            let yy = resDate.getFullYear(); //dd-mm-yy
            let myDateString = yy + '-' + mm + '-' + dd;
            formatDate.push(myDateString);
        })

        dayDate.map(item => {
            let resDate = new Date(item);
            let mm = resDate.getMonth() + 1;
            let dd = resDate.getDate();
            let yy = resDate.getFullYear(); //dd-mm-yy
            let myDateString = dd + '/' + mm + '/' + yy;
            formatModal.push(myDateString);
        })
        objData.name = modalState.channelsImagesReducer.saveChannelsImages.name;
        objData.id = modalState.channelsImagesReducer.saveChannelsImages.id;
        objData.summa = modalState.channelsImagesReducer.saveChannelsImages.summa;
        objData.date = modalState.channelsImagesReducer.saveChannelsImages.date;
        objData.price_image_ad = modalState.channelsImagesReducer.saveChannelsImages.price_image_ad;
        objData.day = formatDate;
        objData.formatModal = formatModal
        dispatch(contentsChannelsAd2(objData));
        dispatch(totalSummaAd2())
        setDayDate([])
    }

        return (
            <>
                <div className="modal fade " id="add-modal2" tabIndex="-1" aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div className="d-none">
                    </div>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="calendar">
                                    <DayPicker
                                        selectedDays={dayDate}
                                        months={MONTHS}
                                        weekdaysLong={WEEKDAYS_LONG}
                                        weekdaysShort={WEEKDAYS_SHORT}
                                        onDayClick={handleDayClick}
                                    />
                                </div>
                                <div className="d-flex justify-content-between ">
                                    <div>
                                        <input type="button" value="Отмена" className="btn bg-light text-dark"
                                               data-bs-dismiss="modal"/>
                                    </div>
                                    <div>
                                        <input onClick={imagesPriceBtn} type="button"  id="ok_date"
                                               className="btn bg-danger text-white"
                                               value="Сохранить" data-bs-dismiss="modal"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }

export default ModalDate;