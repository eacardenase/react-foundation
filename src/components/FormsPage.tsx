import {useForm} from "react-hook-form";

type FormInput = {
    email: string;
    password: string;
};

export const FormsPage = () => {
    const {register} = useForm<FormInput>({
        defaultValues: {
            email: "eacardenase@gmail.com",
            password: "123456",
        },
    });

    return (
        <>
            <form>
                <h3>Formularios</h3>

                <div style={{display: "flex", flexDirection: "column"}}>
                    <input
                        type="text"
                        placeholder="Email"
                        {...register("email")}
                    />

                    <input
                        type="text"
                        placeholder="Password"
                        {...register("password")}
                    />

                    <button type="submit">Ingresar</button>
                </div>
            </form>
        </>
    );
};
