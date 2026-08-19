interface Address {
    country: string;
    houseNo: number;
}

interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address: Address;
    isActive?: boolean;
}

export const ObjectLiterals = () => {
    const person: Person = {
        firstName: "Edwin",
        lastName: "Cardenas",
        isActive: true,
        age: 30,
        address: {
            country: "Colombia",
            houseNo: 504,
        },
    };

    return (
        <>
            <h3>Objetos literales</h3>
            <pre>{JSON.stringify(person, null, 2)}</pre>
        </>
    );
};
