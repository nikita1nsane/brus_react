import React from 'react'

function ModalForm() {
  return (
    <>
                    <form action="">
                        <input type="text" placeholder='Как к вам обращаться?'/>
                        <input type="tel" placeholder='Телефон для закрепления бонуса'/>
                        <select name="text" id="services">
                            <option value="default" disabled selected>Интересующие услуги</option>
                            <option value="1">Строительство домов</option>
                            <option value="2">Отделка</option>
                            <option value="3">Возведение фундамента</option>
                        </select>
                        <button className='main__button'>Отправить</button>
                    </form>
                    <div className="policy">Нажимая на кнопку, я принимаю <a href="/">условия соглашения</a></div>
    </>
  )
}

export default ModalForm