import React, { useState } from "react";
import 'react-calendar/dist/Calendar.css';
import DayPicker, { DateUtils } from "react-day-picker";
import 'react-day-picker/lib/style.css';
import {useDispatch, useSelector} from "react-redux";
import {channelsTvContent, content_channels, summaTV, textJob} from "../../redux/actions";

function ModalDate() {
    const [dayDate, setDayDate] = useState([])
    const dispatch = useDispatch()
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

    const date = useSelector(state => {
        return state
    })
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

    const saveDate = () => {
        let obj = {};
        let formatDay = [];
        let formatDate = []
        let texts = date.textareaReducer.text;
        dayDate.map(item => {
            let resDate = new Date(item);
            let mm = resDate.getMonth() + 1;
            let dd = resDate.getDate();
            let yy = resDate.getFullYear(); //dd-mm-yy
            let myDateString = yy + '-' + mm + '-' + dd;
            formatDay.push(myDateString);
        })
        dayDate.map(item => {
            let resDate = new Date(item);
            let mm = resDate.getMonth() + 1;
            let dd = resDate.getDate();
            let yy = resDate.getFullYear(); //dd-mm-yy
            let myDateString = dd + '/' + mm + '/' + yy;
            formatDate.push(myDateString);
        })
        obj.id = date.dayDateReducer.saveChannels.id;
        obj.name = date.dayDateReducer.saveChannels.name;
        obj.price_text_ad = date.dayDateReducer.saveChannels.price_text_ad;
        obj.image = date.dayDateReducer.saveChannels.image;
        obj.summaInput = date.dayDateReducer.saveChannels.summaInput;
        obj.day = formatDay;

        dispatch(content_channels(obj, formatDay));
        dispatch(channelsTvContent(obj, texts));
        date.dayDateReducer.saveChannels.dateSave.innerHTML = `<span>${formatDate}</span>`;
        dispatch(summaTV());
        setDayDate([]);
    }

        return (
            <>
                <div className="modal fade " id="add-modal" tabIndex="-1" aria-labelledby="exampleModalLabel"
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
                                        <input onClick={saveDate} type="button"  id="ok_date"
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