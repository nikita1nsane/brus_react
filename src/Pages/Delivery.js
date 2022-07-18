import CustomLi from "../components/CustomLi";


function Delivery() {
    return (
      <>
            <div className="Delivery custom__container">
            <div className="Page_navigation">Главная / О компании / Доставка и оплата</div>
            <div className="Page_title">Доставка и оплата</div>
            <div className="Page_subtitle">Оплата</div>
            <div className="Page_text">
                <div className="Page_text-bold">При заказе дома из бруса естественной влажности</div>
                <ul>
                    <CustomLi text="Перед проектированием – 30 000 рублей"/>
                    <CustomLi text="При заезде машины с материалом и бригады на место проведения работ – 70-75 %"/>
                    <CustomLi text="При сдаче объекта – 25-30 %"/>
                </ul>
            </div>
            <div className="Page_text">
                <div className="Page_text-bold">При заказе дома из бруса камерной сушки</div>
                <ul>
                    <CustomLi text="Перед проектированием – 30 000 рублей"/>
                    <CustomLi text="При подписании договора подряда – 10-15 %"/>
                    <CustomLi text="При заезде машины с материалом и бригады на место проведения работ – 60-65 %"/>
                    <CustomLi text="При сдаче объекта – 25-30 %"/>
                </ul>
            </div>
            <div className="Page_text">
                <div className="Page_text-bold">При заказе дома из бруса в «Чашу»</div>
                <ul>
                    <CustomLi text="Перед проектированием – 30 000 рублей"/>
                    <CustomLi text="При подписании договора подряда – 20-25 %"/>
                    <CustomLi text="При заезде машины с материалом и бригады на место проведения работ – 50-55 %"/>
                    <CustomLi text="При сдаче объекта – 25-30 %"/>
                </ul>
            </div>
            <div className="Page_afterText">Оплата фундамента производится по отдельной калькуляции</div>
            <div className="Page_subtitle">Доставка</div>
            <div className="Page_text Delivery_last">Доставка в радиусе 500 км от производства входит в стоимость. Адрес 
            производства – Костромская обл., Галичский р-н, д. Лопарево. При перерасходе стоимость 1 километра – 110 рублей.</div>

            </div>
      </>
    );
  }
  
  export default Delivery;