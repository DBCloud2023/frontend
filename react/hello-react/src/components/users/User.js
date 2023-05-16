function User(props) {
    return <tr>
        <td>{props.user.name}</td>
        <td>{props.user.email}</td>
        <td>{props.user.website}</td>
    </tr>;
}

export default User;
