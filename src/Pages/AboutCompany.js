
import FirstBlockOptions from "../components/FirstBlockOptions";
import Free from "../components/Free";
import HowWork from "../components/HowWork";
import Img1 from '../images/AboutCompany/aboutCompany1.webp'
import Img2 from '../images/AboutCompany/aboutCompany2.webp'
import Img3 from '../images/AboutCompany/aboutCompany3.webp'
import Modal from '../components/Modal'

function AboutCompany() {
    return (
      <>
        <div className="custom__container AboutCompany">
            <div className="Page_navigation">Главная / О компании</div>
            <div className="Page_title">О компании</div>
            <div className="AboutCompany__topContent">
                <div className="topContent_left"><img src={Img1} alt="" /></div>
                <div className="topContent_right">
                    <div className="topContent_right-top">
                        <div className="topContent_right-top-item">
                            <div className="right-top-item-title">14</div>
                            <div className="right-top-item-subtitle">лет надежной работы<br/> в сфере строительства</div>
                        </div>
                        <div className="topContent_right-top-item">
                            <div className="right-top-item-title">120</div>
                            <div className="right-top-item-subtitle">построенных<br/> объектов</div>
                        </div>
                        <div className="topContent_right-top-item">
                            <div className="right-top-item-title">20</div>
                            <div className="right-top-item-subtitle">профессиональных<br/> строителей</div>
                        </div>
                    </div>
                    <div className="topContent_right-bottom">
                        <p>Строительная компания «БурсДом» трудится в данной сфере с 2003 года. 
                        Основная специализация – строительство монолитных домов. Но так же занимается 
                        возведением блочных и кирпичных зданий в Москве, Московской области, ФЦО. 
                        Есть возможность заказать комплексные работы «под ключ», воспользоваться 
                        услугами на каждом этапе возведения здания: геодезией, геологией, проектированием, 
                        а также наружной коммуникацией, локальной канализацией, водоснабжением. 
                        Квалифицированные, высококлассные специалисты на профессиональном уровне подберут 
                        тип фундамента, дадут ценные рекомендации.</p>

                        <p>Бригады рабочих отличаются огромным опытом работы. Они возведут строение в максимально сжатые сроки. Важным 
                        преимуществом обращения в компанию относят то, что специалисты регулярно проходят обучение, повышают 
                        квалификацию. Заключив договор, вы сможете рассчитывать на то, что проектирование будет выполнено 
                        бесплатно. Дом, созданный из монолита, наделен такими важными качествами, как долговечность, 
                        теплоизоляционные свойства. Кроме того, обойдется дешевле аналогов. Но коттедж подлежит обязательному утеплению.</p>
                    </div>
                </div>
            </div>
            <div className="AboutCompany__bottomContent">
                <div className="bottomContent_left">
                    <p>Специалисты применяют собственный высокотехнологичный материал, технику, опалубку, 
                    инновационный инструмент. В арсенале имеются бетононасосы, подъемные краны, а также 
                    чаши для подачи бетона на разные этажи. Заказать строительство можно по индивидуальному 
                    или типовому проекту. Ознакомьтесь с примерами работ, которые представлены ниже.</p>
                    <div className="Page_title">При сотрудничестве вы сможете рассчитывать на следующие привилегии:</div>
                    <ul>
                        <li>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5" r="4" stroke="#CC6B0B" stroke-width="2"/>
                        </svg>
                        Соблюдение сроков
                        </li>
                        <li>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5" r="4" stroke="#CC6B0B" stroke-width="2"/>
                        </svg>
                        Работа по официальному договору
                        </li>
                        <li>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5" r="4" stroke="#CC6B0B" stroke-width="2"/>
                        </svg>
                        Гарантии на материалы, работы
                        </li>
                        <li>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5" r="4" stroke="#CC6B0B" stroke-width="2"/>
                        </svg>
                        Фиксированная смета, прозрачные условия сотрудничества
                        </li>
                        <li>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5" r="4" stroke="#CC6B0B" stroke-width="2"/>
                        </svg>
                        Видеоотчеты, предоставление фотоматериалов о проделанной работе
                        </li>
                    </ul>
                    <img src={Img2} alt="" />
                    <p>В бригаде трудятся инженеры, а также квалифицированные прорабы, которые имеют не только 
                    внушительный опыт, но и профильное образование. В студии разработана ни одна сотня готовых 
                    проектов. Во время выполнения заказа учитываются потребности, предпочтения, требования 
                    заказчика, а потому результат вас устроит на 100%.</p>
                    <div className="Page_title">Плюсы монолитных домов</div>
                    <ul>
                        <li>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5" r="4" stroke="#CC6B0B" stroke-width="2"/>
                        </svg>
                        Прочное, надежное и долговечное строение
                        </li>
                        <li>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5" r="4" stroke="#CC6B0B" stroke-width="2"/>
                        </svg>
                        Небольшая стоимость по сравнению с аналогичными вариантами
                        </li>
                        <li>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5" r="4" stroke="#CC6B0B" stroke-width="2"/>
                        </svg>
                        Экологическая чистота
                        </li>
                        <li>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5" r="4" stroke="#CC6B0B" stroke-width="2"/>
                        </svg>
                        Не гниет
                        </li>
                        <li>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5" r="4" stroke="#CC6B0B" stroke-width="2"/>
                        </svg>
                        Стоимость дома зависит от различных факторов: наличия опалубки, какой проект решили заказать 
                        (типовой или индивидуальный), метража. Узнать окончательную цену можно у замерщика, который 
                        выезжает на объект в наиболее удобное для вас время
                        </li>
                    </ul>
                </div>
                <div className="bottomContent_right">
                    <img src={Img3} alt="" />
                    <Modal text="Вызвать замерщика"/>
                </div>
            </div>

            <FirstBlockOptions/>
            <HowWork/>
        </div>
        <Free/>
      </>
    );
  }
  
  export default AboutCompany;