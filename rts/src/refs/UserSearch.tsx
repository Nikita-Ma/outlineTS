import React, {useState, useRef, useEffect} from 'react';

const users = [
    {name: 'Nik', age: 18},
    {name: 'Jane', age: 19},
    {name: 'Polly', age: 20},
]


const UserSearch: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [name, setName] = useState('');
    const [user, setUser] = useState<{ name: string, age: number } | undefined>();

    useEffect(() => {
      inputRef.current?.focus()
    }, []);


    const onClick = () => {
        const foundUser = users.find((user) => {
            return user.name === name
        })
        setUser(foundUser)
    }

    return (
        <>
            <h1>User Search</h1>
            <input ref={inputRef} type="text" value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={onClick}>Find User</button>
            {user && user.name},
            {user && user.age}
        </>
    )
};

export default UserSearch;