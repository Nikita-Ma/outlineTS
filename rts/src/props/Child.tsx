interface ChildProps {
    color: string;
    onClick: () => void // func which don't return value
}

export const Child = ({color, onClick}: ChildProps) => {
    return (
        <div>
            {color}
            <button onClick={onClick}>Click me :D</button>

        </div>

    )
}

export const ChildAsFC: React.FC<ChildProps> = ({color, onClick, children}) => {
    return (
        <div>
            {color}
            {children}
            <button onClick={onClick}>Click me :D</button>
        </div>

    )
}
