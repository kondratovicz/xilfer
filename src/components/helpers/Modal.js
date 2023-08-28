import "./Modal.css"
const Modal = ({turnModalStateOff, pokemonData}) => {
console.log(pokemonData)
    return (
        <div className="modal">
        <section className="modal-main">
            <h1>rented succesfully</h1>
            {pokemonData ? <img src={pokemonData} alt="giphy is loading"/> : <div>NO GIF FAUNT</div>}
            <h1 onClick={()=>turnModalStateOff()}>X</h1>
      </section>
      </div>
        )
}

export default Modal;
