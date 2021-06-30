import React, {useState} from "react";


const GuestList: React.FC = () => {
    const [name, setName] = useState('');
    const [guests, setGuests] = useState<string[]>([]);

    const onClick = () => {
        setGuests([...guests, name])
        setName('')
    }
    return (<>
            <h3>GuestList</h3>
            <ul>
                {guests.map(guest => <li key={guest}>{guest}</li>)}
            </ul>
            <input type="text" value={name} onChange={(e) => setName((e.target.value))}/>
            <button onClick={onClick}>Add Guest</button>
        </>

    )
}
export default GuestList