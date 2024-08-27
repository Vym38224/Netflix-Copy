import "./Book.css";
import OrderButton from './OrderButton';

const Book = (props) => {
    return (
        <div className="one-book">
            <h2 className="main-heading">{props.mytitle}</h2>
            <img src={props.myimage} alt="" />
            <p>lorem ipsum blablabla</p>
            <OrderButton></OrderButton>
        </div>
    );
};

export default Book;
