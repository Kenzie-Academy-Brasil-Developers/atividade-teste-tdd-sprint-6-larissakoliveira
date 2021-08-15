# Atividade

Nesta atividade vamos utilizar do TDD para nos auxiliar a identificar erro em algumas funções e vamos também criar testes para novas funções a serem criadas. Para dar inicio faça o clone deste [repositório](https://classroom.github.com/a/KcUJalok). Perceba que algumas variáveis utilizadas para rodar os testes estão dentro da pasta \_\_test__/helpers.js.

A função **findMinValue** deve encontrar o menor valor de um array qualquer porem ela esta com um erro em seu código, utilize dos testes para identificar e corrigir.

```js
const findMinValue = (list) => {
    let result = 0
    
    list.forEach(number => {
        if (number < result) {
            result = number
        }
    })

    return result
}
```

**countConsecutiveNumber** também tem um erro em sua estrutura, ela e uma função que recebe dois parâmetros, sendo o primeiro um array de números e o segundo o número que desejamos avaliar. Ela deve retornar a maior quantidade de vezes que um número aparece consecutivo. Ex:
`countConsecutiveNumber([2,2,3,7,5,0,2,2,2], 2)` deve retornar 3. Pois o número 2 aparece 3 vezes consecutivo ao final.

```js
const countConsecutiveNumber = (list, numberToCount) => {
    let result = 0

    list.forEach(number => {
        if (number === numberToCount) {
            result++
        }
    })

    return result
}
```

Em seguida implemente testes que façam sentido para as funções descritas no _script.js_ e para entao implementa-las. Pegue como exemplo as funções anteriores e seja criativo. Para auxiliar, no arquivo _helpers.js_ tem algumas listas de compras disponíveis como exemplo.
