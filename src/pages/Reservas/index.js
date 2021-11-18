import './style.css'
import { MdAddCircle, MdDelete, MdRemoveCircle } from 'react-icons/md'

export default function Reservas() {
  function handleRemove(id) {
    console.log(id)
  }

  function decrementAmount(trip) {
    console.log(trip)
  }

  function incrementAmount(trip) {
    console.log(trip)
  }

  return (
    <div>
      <h1 className="title">Você solicitou 1 reservas</h1>

      <div className="reservas">
        <img src="https://sujeitoprogramador.com/wp-content/uploads/2019/12/maceio.jpg" alt="Viagem Maceió 7 noites" />
        <strong>Viagem Maceió 7 noites</strong>
        <div id="amount">
          <button type="button" onClick={() => decrementAmount(1)}>
            <MdRemoveCircle size={25} color="#191919" />
          </button>
          <input type="text" readOnly value={1} />
          <button type="button" onClick={() => incrementAmount(1)}>
            <MdAddCircle size={25} color="#191919" />
          </button>
        </div>
        <button
          type="button"
          onClick={() => handleRemove(1)}
        >
          <MdDelete size={20} color="#191919" />
        </button>
      </div>


      <footer>
        <button
          type="button"
        >
          Solicitar Reservas
        </button>
      </footer>
    </div>
  )
}
