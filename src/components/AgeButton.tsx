import React from 'react'


interface Props {
    clickHandler: () => void;
    age: number
}

const AgeButton = ({ clickHandler, age }: Props) => {
    console.log("Age Button Rendered Age = " + age)
    return (
        <div>
            <button onClick={clickHandler} >Increment Age</button>
        </div>
    )
}

export default React.memo(AgeButton);
