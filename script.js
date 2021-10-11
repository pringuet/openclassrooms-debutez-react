function Banner() {

    let titre = 'La maison jungle';

    return (<h1>{titre.toUpperCase()}</h1>);
}

function Cart() {

    const monstera = {
        libelle: 'Monstera',
        prix: 8
    }

    const lierre = {
        libelle: 'Lierre',
        prix: 10
    }

    const bouquet = {
        libelle: 'Bouquet de fleurs',
        prix: 15
    }

    return (
        <>
            <ul>
                <li>{monstera.libelle} : {monstera.prix} €</li>
                <li>{lierre.libelle} : {lierre.prix} €</li>
                <li>{bouquet.libelle} : {bouquet.prix} €</li>
            </ul>
            <h3>Total : {monstera.prix + lierre.prix + bouquet.prix} €</h3>
        </>
    );
}

ReactDOM.render(<Banner />, document.getElementById("banner"));
ReactDOM.render(<Cart />, document.getElementById("cart"));