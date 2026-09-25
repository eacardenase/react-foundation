import {useForm} from "react-hook-form";

interface FormInput {
    email: string;
    password: string;
}

export const FormsPage = () => {
    const {register, handleSubmit, formState, watch} = useForm<FormInput>({
        defaultValues: {
            email: "eacardenase@gmail.com",
            password: "123456",
        },
    });

    const onSubmit = (myForm: FormInput) => {
        console.log(myForm);
    };

    console.log(watch("email"));

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>Formularios</h3>

                <div style={{display: "flex", flexDirection: "column"}}>
                    <input
                        type="text"
                        placeholder="Email"
                        {...register("email", {required: true})}
                    />

                    <input
                        type="text"
                        placeholder="Password"
                        {...register("password")}
                    />

                    <button type="submit">Ingresar</button>
                </div>
            </form>

            <pre>{JSON.stringify(formState, null, 2)}</pre>
        </>
    );
};
