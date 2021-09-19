import React, { useState, useCallback, useMemo } from 'react'
import AgeButton from './AgeButton';
import SalaryButton from './SalaryButton';

const notMemoizedValue1 = () => {
    // some complex computation work here..
    let i = 0;
    while (i < 2000000000) i++;
    // after while break then do something here
    return i;
}

const Memo1 = () => {
    const [age, setAge] = useState<number>(12);
    const [salary, setSalary] = useState<number>(5000);

    const ageHandler = useCallback((): void => {
        setAge(age + 1);
    }, [age]);

    const salaryHandler = useCallback((): void => {
        setSalary(salary + 500);
    }, [salary]);

    const notMemoizedValue = useMemo(() => {
        // some complex computation work here..
        let i = 0;
        while (i < 2000000000) i++;

        // after while break then do something here
        if (age % 2 === 0) return "Even";
        else return "Odd";
    }, [age])



    return (
        <div>
            <h1>Use CallBack Example</h1>
            <h3>{notMemoizedValue}</h3>
            <h4>{notMemoizedValue1()}</h4>
            <AgeButton clickHandler={ageHandler} age={age} />
            <SalaryButton clickHandler={salaryHandler} salary={salary} />
        </div>
    )
}

export default Memo1
