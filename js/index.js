const title = "Vocales en la oración" 
let titleDOM = document.getElementById("titleId")

let vowelPattern = [`a`,`e`,`i`,`o`,`u`,``]
let sentence = document.getElementById("sentenceInput").values
let btnEnviarDom = document.getElementById("btnEnviar")


function getArray(sentence){
    let arraySentence = []
    for(i=0; i<sentence.length; i++) {
        arraySentence.push(sentence.charAt[i])
    }
    return arraySentence;
}

btnEnviarDom.addEventListener(onclick, getArray)
console.log(getArray().values)

document.getElementById("outputID").innerHTML

<ol>
<ol>
            <li>Oracion:</li>
            <li>Vocal</li>
            <li>Vocales</li>
            <li>Sin Duplicado</li>
            <li></li>
            <li></li>
</ol>
    
