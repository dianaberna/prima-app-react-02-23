import "./StampaPost.css";

function StampaPost({ contenuto }) {

    if(contenuto.autore == ""){
        contenuto.autore = "Paperino"
    }

    return (
        <div className="card">
            <h4>{contenuto.titolo}</h4>
            <p>{contenuto.autore}</p>
            <p>{contenuto.testo}</p>
        </div>
    );
}

export default StampaPost;
