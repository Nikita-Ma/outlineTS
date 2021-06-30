import React from 'react'
const EventComponent: React.FC = () => {

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    }
    const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
        console.log(event)
    }

    return (
        <>
            <input type="text" onChange={onChange}/>
            <div draggable onDragStart={onDragStart}></div>
        </>
    )

}
export default EventComponent