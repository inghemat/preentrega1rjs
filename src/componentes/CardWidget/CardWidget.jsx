import './CardWidget.css';

const CardWidget = () => {
    const imgCarrito = "https://i.pinimg.com/736x/32/6a/8c/326a8c1ab229ba145d14e3e6df999a66.jpg";
    return (
        <div>
            <img className='imgCarrito' src={imgCarrito} alt='Carrito Maleta'></img>
            <strong>5</strong>
        </div>
    )
}

export default CardWidget