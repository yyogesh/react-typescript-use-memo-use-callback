import React from 'react'

const MemoCount = () => {
    return (
        <div className="App">
            <Counter />
            <SomeExpensiveComponent>
                <h2>
                    Assume this component does some heavy lifting and we want it to be
                    memoized
                </h2>
            </SomeExpensiveComponent>
        </div>
    )
}

const Counter = () => {
    const [count, setCount] = React.useState(0);

    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount((previousCount) => previousCount + 1)}>
                Increment count
            </button>
        </>
    );
};

type SomeExpensiveComponentProps = {
    children: React.ReactNode
}


const SomeExpensiveComponent = ({ children }: SomeExpensiveComponentProps) => {
    console.log("Component rendered");
    return (
        <div className="memo">
            <div>{children}</div>
            <h3>But is it memoized? Check console</h3>
        </div>
    );
};

export default MemoCount
