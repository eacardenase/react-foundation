import axios from "axios";
import {useEffect} from "react";

export const UsersPage = () => {
    useEffect(() => {
        // fetch("https://jsonplaceholder.typicode.com/users")
        //     .then((res) => res.json())
        //     .then((data) => console.log(data));

        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => console.log(res.data));
    });

    return (
        <>
            <h3>Usuarios:</h3>
            <table>
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>avatar</td>
                        <td>nombre</td>
                        <td>email</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};
