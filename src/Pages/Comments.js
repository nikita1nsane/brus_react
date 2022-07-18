
import Free from "../components/Free";
import GladComments from "../components/GladComments";

function Comments() {
    return (
      <>
            <div className="Comments custom__container">
            <div className="Page_navigation">Главная / Отзывы</div>
            <div className="Page_title">Отзывы</div>
            <div className="gladComments">
            <GladComments/>
            <GladComments/>
            <GladComments/>
            <GladComments/>
            <GladComments/>
            <GladComments/>
            <GladComments/>
            <GladComments/>
            <GladComments/>
            </div>
                <div className="catalog__button main__button outline__button">
                    Еще отзывы
                </div>
            </div>
            <Free/>
      </>
    );
  }
  
  export default Comments;