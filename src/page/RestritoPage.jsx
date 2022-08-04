export default function RestritoPage() {


    let token = localStorage.getItem('Token');

    if(token){
        return <h1> Area restrita</h1>
    } else {
        return <h1> Você não tem acesso</h1>
    }

}