import React from "react";

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Read more about this hook at -
 * https://www.joshwcomeau.com/snippets/react-hooks/use-random-interval
 */
const useRandomInterval = (callback, minDelay, maxDelay) => {
    const timeoutId = React.useRef(null);
    const savedCallback = React.useRef(callback);
    React.useEffect(() => {
        savedCallback.current = callback;
    });
    React.useEffect(() => {
        let isEnabled =
            typeof minDelay === "number" && typeof maxDelay === "number";
        if (isEnabled) {
            const handleTick = () => {
                const nextTickAt = getRandomInt(minDelay, maxDelay);
                timeoutId.current = window.setTimeout(() => {
                    savedCallback.current();
                    handleTick();
                }, nextTickAt);
            };
            handleTick();
        }
        return () => window.clearTimeout(timeoutId.current);
    }, [minDelay, maxDelay]);
    const cancel = React.useCallback(function () {
        window.clearTimeout(timeoutId.current);
    }, []);
    return cancel;
};

/**
 *  This is just a demo hook that mimicks the response
 *  of a realtime API that returns popularity and stats
 *  of a pokemon
 */
const usePokemon = (id) => {
    const [cravers, setCravers] = React.useState(() => getRandomInt(1, 100));
    const [owners, setOwners] = React.useState(() => getRandomInt(1, 100));

    const delay = [500, 3000];

    // Randomly increase cravers and owners to illustrate realtime effect
    useRandomInterval(
        () => setCravers((prevCravers) => prevCravers + getRandomInt(3, 15)),
        ...delay
    );
    useRandomInterval(
        () => setOwners((prevOwners) => prevOwners + getRandomInt(1, 5)),
        ...delay
    );

    return {
        id,
        name: "Bulbasaur",
        weight: 69,
        abilities: "Overgrow and Chlorophyll",
        image: "https://i.ibb.co/LdR9Z4Q/bulbasaur.png",
        cravers,
        owners
    };
};

export default usePokemon;
