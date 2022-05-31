function ContactList({ users }) {
    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name} : {user.number}</li>
            ))}
        </ul>
    )
}

export default ContactList;

