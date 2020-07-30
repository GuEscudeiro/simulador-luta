let exercicios = [
    'jab + direto',
    'agachamento c/ peso',
    'flexão de braços',
    'abd simples',
    'dolio',
    'dolio frontal',
    'TRX',
    'afundo',
    'afundo c/ chute',
    'jab + direto + cruzado',
    'jab + direto + bloqueio',
    'dolio + aptchagui',
    'jab + direto + entrada na perna',
    'dolio + dolio frontal',
    'bandolio',
    'jab / direto + esquiva',
    'jab + direto + bloqueio + jab + direto + esquiva',
    'burpee',
    'jab + direto + dolio D/E',
    'abd canivete',
    'corda naval',
    'dubau',
    'dolio + dubau',
    'abd borboleta',
    'salto + jab + direto',
    'salto + dubau',
    'jab + direto + jab',
    'jab + direto + upper',
    'dolio + joelhada',
    'jab + direto + joelhada',
    'tora furyo',
    'jab + direto c/ halteres',
    'corda espaldar',
    'kankan',
    'abd prancha',
    'chute c/ caneleira',
    'abd inferior',
    'abd perna suspensa',
    'jab + direto + spraw',
    'afundo alternado',
    'jab + direto + dolio',
    'bloqueio + jab + direto'
]

function simular(){
    let numeros = document.getElementById('estacao')
    let resultado = document.getElementById('resultado')
    let data = new Date()
    let dataAtual = data.toDateString()
    
    
    if (numeros.value.length == '0'){
        alert('Dados inválidos! Tente novamente.')
    
    } else {
        resultado.innerHTML = `<p style="text-align:center">${dataAtual}</p>`
        let num = Number(numeros.value)
        
        if (num <= 0 || num > 30){
            alert('Dados inválidos! Valores permitidos  " 1 - 30 ".')
            resultado.innerHTML = ''
        }else {
            for (let cont = 0; cont < num; cont++ ){
                let item = Math.floor(Math.random() * exercicios.length )
                let concat = exercicios[item]
                resultado.innerHTML += `<p>${cont+1}ª  estação:  ${concat}</p>`
            }
        }    
    }    
}