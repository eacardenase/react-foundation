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

interface Options {
    initialValue: JSONPlaceholderUserResponse[];
}

export const useUsers = ({initialValue = []}: Options) => {
    const [users, setUsers] =
        useState<JSONPlaceholderUserResponse[]>(initialValue);
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

    return {
        users,
        nextPage,
        prevPage,
    };
};
