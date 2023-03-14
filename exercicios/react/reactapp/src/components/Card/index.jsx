import "./style.css";

export function Card({name, time}) {
    return (
        <div className="card">
            <strong>{name}</strong>
            <small>{time}</small>
        </div>
    )
}

// Posso exportar aqui ou na function Card()
// export default card;