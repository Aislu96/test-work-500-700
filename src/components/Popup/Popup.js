import React from "react";
import useFormValidation from "../../hooks/useFormValidation";
import './Popup.css';
import cross from "../../images/cross.svg";
import {useMask} from "@react-input/mask";

function Popup({popup, onClickPopupOpen, onClickOverlay}) {
    const inputRef = useMask({mask: '+7 (___) ___-__-__', replacement: {_: /\d/}});
    const {values, errors, handleChange, setValues, resetValidation, isValid} = useFormValidation({});
    React.useEffect(() => {
        resetValidation();
        const values = {};
        setValues(values);
    }, [setValues, resetValidation]);


    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className={`popup  ${popup ? `popup_opened` : ""}`} onClick={onClickOverlay}>
            <div className="popup__body">
                <div className="popup__group">
                    <h2 className="popup__title">СВЯЗАТЬСЯ С НАМИ</h2>
                    <button className="popup__button-img" onClick={() => onClickPopupOpen(!popup)}><img src={cross}
                                                                                                        alt="Картинка крестика"
                                                                                                        className="popup__img"/>
                    </button>
                </div>
                <form className="popup__form" name="form__popup" onSubmit={handleSubmit}>
                    <input name="text" className="popup__input" type="name" placeholder="Имя"
                           minLength="6" maxLength="40" onChange={handleChange} value={values.name || ''} required/>
                    <input type="text" ref={inputRef}
                           className="popup__input"
                           name="phone" placeholder="Телефон"
                           onChange={handleChange} value={values.phone || ''} required/>
                    <div className="popup__block">
                        <div className="popup__checkbox">
                            <label htmlFor="popup__check" className="popup__label">
                                <input type="checkbox" id="popup__check" className="popup__input-check"/>
                                <div className="popup__input-div"></div>
                            </label>
                            <p className="popup__text">Я согласен (-а) на обработку персональных данных</p>
                        </div>
                        <button type="submit" className="popup__button" onSubmit={handleSubmit}>Отправить
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Popup;

