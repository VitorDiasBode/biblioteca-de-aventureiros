async function getPersonagens() {
    const requestUrl = "https://raw.githubusercontent.com/VitorDiasBode/biblioteca-de-aventureiros/refs/heads/main/personagens.json"
    const request = new Request(requestUrl);

    const response = await fetch(request);
    const personagens = await response.json();
    
    console.log(personagens)
}

getPersonagens();