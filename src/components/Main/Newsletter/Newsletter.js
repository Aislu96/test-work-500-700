import "../Newsletter/Newsletter.css";
import useFormValidation from "../../../hooks/useFormValidation.js";
import React from 'react';
import { useMask } from '@react-input/mask';

function Newsletter({ref}) {
    const inputRef = useMask({ mask: '+7 (___) ___-__-__', replacement: { _: /\d/ } });
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
        <section className="newsletter" id='newsletter' ref={ref}>
            <div className="newsletter__block">
                <h2 className="newsletter__title">Подпишись на рассылку</h2>
                <p className="newsletter__subtitle">Отправляем анонсы новых статей, выпусков и трансляций</p>
            </div>
            <form className="newsletter__form" name="form-newsletter" onSubmit={handleSubmit}>
                <input name="email" className="newsletter__input" type="email" placeholder="Электронная почта"
                       minLength="6" maxLength="40" onChange={handleChange} value={values.email || ''} required/>
                <input type="data" placeholder="Дата (например, 01.01.1990)" onChange={handleChange}
                       className="newsletter__input"
                       name="data"
                       value={values.data || ''} required/>
                <input type="text" ref={inputRef}
                       className="newsletter__input"
                       name="phone" placeholder="Телефон" onChange={handleChange} value={values.phone || ''} required/>
                <input type="text" placeholder="Время (например, 10:00)" onChange={handleChange} name="time"
                       className="newsletter__input"
                       value={values.time || ''} required/>
                <div className="newsletter__group">
                    <div className="newsletter__checkbox">
                        <label htmlFor="newsletter__check" className="newsletter__label">
                            <input type="checkbox" className="newsletter__input-check" id="newsletter__check"/>
                                <div className="newsletter__input-div"></div>
                        </label>
                        <p className="newsletter__text">Я согласен (-а) на обработку персональных данных</p>
                    </div>
                    <button type="submit" className="newsletter__button" onSubmit={handleSubmit}>Подписаться</button>
                </div>
            </form>
        </section>

    )
}

export default Newsletter;
