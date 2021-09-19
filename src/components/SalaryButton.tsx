import React from 'react'


interface Props {
    clickHandler: () => void;
    salary: number
}

const SalaryButton = ({ clickHandler, salary }: Props) => {
    console.log("Salary Button Rendered Salary = " + salary)
    return (
        <div>
            <button onClick={clickHandler} >Increment Salary</button>
        </div>
    )
}

export default React.memo(SalaryButton);
