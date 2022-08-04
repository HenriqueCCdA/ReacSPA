export default function Logout() {

    localStorage.removeItem('Token');

    return (
        <h1>Token deletado</h1>
    )
}