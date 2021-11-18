

export default function Input( { inpData, setInpData }) {
    return (
        <input 
        value = {inpData}
        onChange = {event => setInpData(event.target.value)}
        />
    )
}

