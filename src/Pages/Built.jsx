import CardList from "../components/CardList";
import Free from "../components/Free";



function Built(props) {
    return (

      <>
            <div className="catalog__bottom__content Built_container custom__container">
            <div className="Page_navigation">{props.text}</div>
            <div className="Page_title">{props.title}</div>
                <div className="catalog__cards">
                    <CardList/>
                </div>
                <div className="catalog__button main__button outline__button">
                    {props.btn}
                </div>
            </div>
            <Free/>
      </>
    );
  }
  
  export default Built;