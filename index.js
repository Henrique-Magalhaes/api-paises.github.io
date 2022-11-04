function informacoes(info){

    let resultado = document.getElementById('resultados')

    const imagem = document.getElementById("bandeira")
    imagem.innerHTML = `<img src="${info[0].flags.png}">`    
    
    resultado.innerHTML = `Nome: ${info[0].name.common}`
    resultado.innerHTML += `<br> Capital: ${info[0].capital}`
    resultado.innerHTML += `<br> Idioma Oficial: ${Object.values(info[0].languages).toString().split(",").join(", ")}`
    resultado.innerHTML += `<br> População: ${info[0].population}`
    resultado.innerHTML += `<br> Continente: ${info[0].continents}`
    

    console.log(info)

}

const pais = async() => {
    
    const pais = document.querySelector("#pais").value

    //console.log(pais)

    const url = `https://restcountries.com/v3.1/name/${pais}/`
    
    const dados = await fetch(url);
    const info = await dados.json();

    informacoes(info);

}