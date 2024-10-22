const title = "Vocales en la oración" 
let titleDOM = document.getElementById("titleId")

let vowelPattern = [`a`,`e`,`i`,`o`,`u`]
let sentence = document.getElementById("sentenceInput").values
let btnEnviarDom = document.getElementById("getSentence")



function getSentence(sentence) {
    return sentence;
  }
  
  function searchVocals(sentence) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return sentence.toLowerCase().split('').filter(char => vowels.includes(char));
  }
  
  function deleteDuplicity(list) {
    return [...new Set(list)];
  }
  
  function getVocals(sentence) {
    const uniqueVowels = deleteDuplicity(searchVocals(sentence));
    return uniqueVowels.join(', ');
  }
  
console.log(getSentence)


/*
document.getElementById("outputID").innerHTML =`
        <ol>
            <li>Oracion: ${arraySentence}</li>
            <li>Vocal</li>
            <li>Vocales</li>
            <li>Sin Duplicado</li>
            <li></li>
            <li></li>
</ol>

    `

    






/*
1) getSentence return -> 'la'
2) searchVocals return   -> ['o']
3) searchVocals return  -> ['a','e','i','o','u']
4) deleteDuplicity return  -> ['i']
5) searchVocals return  -> ['a','e','i','o','u']
6) getVocals return  -> 'e,o'
console.log(titleDOM)
*/