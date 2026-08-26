import axios from "axios";
import {useEffect, useRef, useState} from "react";
import type {JSONPlaceholderUserResponse} from "../interfaces";

const loadUsers = async (
    page: number = 1,
): Promise<JSONPlaceholderUserResponse[]> => {
    try {
        const {data} = await axios.get<JSONPlaceholderUserResponse[]>(
            "https://jsonplaceholder.typicode.com/users",
            {
                params: {
                    page: page,
                },
            },
        );

        return data;
    } catch (error) {
        console.log(error);

        return [];
    }
};

export const UsersPage = () => {
    const [users, setUsers] = useState<JSONPlaceholderUserResponse[]>([]);
    const currentPageRef = useRef(1);

    const nextPage = async () => {
        currentPageRef.current++;

        const users = await loadUsers(currentPageRef.current);

        if (users.length > 0) {
            setUsers(users);

            return;
        }

        currentPageRef.current--;
    };

    const prevPage = async () => {
        if (currentPageRef.current <= 1) return;

        currentPageRef.current -= 1;

        const users = await loadUsers(currentPageRef.current);

        setUsers(users);
    };

    useEffect(() => {
        loadUsers(currentPageRef.current).then(setUsers);
    }, []);

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

            <div>
                <button onClick={prevPage}>Prev</button>
                <button onClick={nextPage}>Next</button>
            </div>
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
