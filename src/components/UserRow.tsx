import type {JSONPlaceholderUserResponse} from "../interfaces";

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
