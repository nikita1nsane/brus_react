import SchemaItem from "../components/SchemaItem";

function Schema() {
    return (
      <>
            <div className="Schema custom__container">
                <div className="Page_navigation">Главная / О компании / Схема работы</div>
                <div className="Page_title">Схема работы</div>
                <div className="Page_subtitle">По какой схеме мы работаем с каждым клиентом</div>
                <div className="Page_text">График оплаты работ согласовывается и подстраивается под каждого клиента</div>
                <div className="Schema_block howWork__bottomContent">
                <SchemaItem id="1"/>
                <SchemaItem id="2"/>
                <SchemaItem id="3"/>
                <SchemaItem id="4"/>
                <SchemaItem id="5"/>
                <SchemaItem id="6"/>
                <SchemaItem id="7"/>
                <SchemaItem id="8"/>
                <SchemaItem id="9"/>
                <SchemaItem id="10"/>
                <SchemaItem id="11"/>
                <SchemaItem id="12"/>
                </div>
            </div>
      </>
    );
  }
  
  export default Schema;