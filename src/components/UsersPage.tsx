import axios from "axios";
import {useEffect, useState} from "react";
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
    const [users, setUsers] = useState<JSONPlaceholderUserResponse[]>([]);

    useEffect(() => {
        loadUsers().then(setUsers);
    });

    return (
        <>
            <h3>Usuarios:</h3>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <UserRow key={user.id} user={user} />
                    ))}
                </tbody>
            </table>
        </>
    );
};

interface Props {
    user: JSONPlaceholderUserResponse;
}

export const UserRow = ({user}: Props) => {
    const {username, name, email} = user;

    return (
        <tr>
            <td>{username}</td>
            <td>{name}</td>
            <td>{email}</td>
        </tr>
    );
};
