import React from 'react'


const slowNthFibCalulator = (n: number) => {
    var result = 0;
    if (n <= 2) {
        return n - 1;
    }
    result = slowNthFibCalulator(n - 1) + slowNthFibCalulator(n - 2);
    return result;
};

const UpdateValue = () => {
    const [username, setUsername] = React.useState("John");
    const [position, setPosition] = React.useState(35);

    const fibonacciNumber = React.useMemo(() => slowNthFibCalulator(position), [position]);

    const handleChange = ({ target: { name, value } }: { target: { name: string, value: string } }) => {
        if (name === "username") {
            setUsername(value);
        } else {
            setPosition(parseInt(value, 10));
        }
    };
    return (
        <div>
            Username:{" "}
            <input
                type="text"
                name="username"
                value={username}
                onChange={handleChange}
            />
            <br /> <br />
            Position of the fibonnaci number:{" "}
            <input
                type="number"
                // Disabled so that you don't accidentally
                // crash the sandbox by increasing it rapidly
                // feel free to enable it if you want to experiment
                disabled
                name="position"
                value={position}
                onChange={handleChange}
            />
            <br /> <br />
            Hey {username} your Fibonacci number is {fibonacciNumber}
        </div>
    )
}

export default UpdateValue
