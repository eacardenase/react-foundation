export const BasicTypes = () => {
    const name: string = "Edwin";
    const age: number = 30;
    const isActive: boolean = true;

    const powers: string[] = ["Swift", "iOS", "React", "React Native"];

    return (
        <>
            <h3>Tipos básicos</h3>
            {name} {age} {isActive ? "true" : "false"}
            <br />
            {powers.join(", ")}
        </>
    );
};
