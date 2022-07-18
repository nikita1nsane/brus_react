
import CustomLi from "../components/CustomLi";
import Free from "../components/Free";
import ImgBlock from "../components/ImgBlock";
import SchemaItem from "../components/SchemaItem";

function Otdelka() {
    return (
      <>
            <div className="Otdelka Buildings custom__container">
            <div className="Page_navigation">Главная / Услуги / Отделка</div>
            <div className="Page_title">Отделка</div>
            <p className="left-border">
                После «усадки» дома из бруса следует производить внутреннюю и внешнюю отделку. В строительстве дома этот этап играет важную роль. Отделка определяет, насколько уютным и комфортным будет Ваше жильё. Благодаря многообразию материалов, представленных сегодня на рынке, есть возможность осуществить любые дизайнерские решения. Чтобы внешний вид дома и интерьер внутренних помещений радовали Вас и Вашу семью, выполнение отделочных работ стоит доверить специалистам.
            </p>
            <p>
                Если Вас интересует отделка дома, то смело обращайтесь в нашу компанию! Мы постоянно внедряем новые технологии и материалы в строительстве и отделке домов для наших Заказчиков. Поэтому наши специалисты смогут осуществить любое Ваше пожелание.
            </p>
            <p className="subtitle">Внутренняя отделка в себя включает:</p>
            <ul>
                <CustomLi text="Утепление полов, потолков, межэтажных перекрытий, мансардного этажа (при его наличии)"/>
                <CustomLi text="Шлифовка стен"/>
                <CustomLi text="Укладка чистового и чернового пола"/>
                <CustomLi text="Подшивка потолка"/>
                <CustomLi text="Установка дверей, окон"/>
                <CustomLi text="Монтаж плинтусов"/>
                <CustomLi text="И множество других работ"/>
            </ul>
            <p className="subtitle">Наружная отделка в себя включает:</p>
            <ul className="lastUl">
                <CustomLi text="Конопатка стен – углы и зазоры между венцами должны быть тщательно заделаны, чтобы образовавшиеся щели не привели к потере тепла"/>
                <CustomLi text="Антисептирование и покрытие стен защитными составами"/>
                <CustomLi text="Обшивка цоколя"/>
                <CustomLi text="Монтаж отмостки"/>
                <CustomLi text="Покрытие стен укрывной или лессирующей краской"/>
                <CustomLi text="И множество других работ"/>
            </ul>
            <div className="Page_title">Примеры отделки</div>
            <ImgBlock/>
            <div className="Schema">
              <SchemaItem/>
              <SchemaItem/>
              <SchemaItem/>
              <SchemaItem/>
            </div>
            </div>
            <Free/>
      </>
    );
  }
  
  export default Otdelka;