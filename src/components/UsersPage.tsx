import axios from "axios";
import {useEffect} from "react";
import type {JSONPlaceholderUserResponse} from "../interfaces";

const loadUsers = async (): Promise<JSONPlaceholderUserResponse[]> => {
    try {
        const {data} = await axios.get<JSONPlaceholderUserResponse[]>(
            "https://jsonplaceholder.typicode.com/users",
        );

        return data;
    } catch (error) {
        console.log(error);

        return [];
    }
};

export const UsersPage = () => {
    useEffect(() => {
        loadUsers().then((users) => console.log(users));
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
