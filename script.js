const isEven = (number) => number % 2 === 0

const removeOdds = (list) => {
    const result = list.filter(number => isEven(number))
    return result
}

const findMinValue = (list) => {
    let result = 0
    
    list.forEach(number => {
        if (number < result) {
            result = number
        }
    })

    return result
}

const countConsecutiveNumber = (list, numberToCount) => {
    let result = 0

    list.forEach(number => {
        if (number === numberToCount) {
            result++
        }
    })

    return result
}

const totalShoppingList = (productsList) => {
    // Implementar uma funcao que recebe uma lista de compras com objetos da seguinte forma: 
    // {
    //     "id": 3,
    //     "product": "Leite",
    //     "price": 3.80,
    //     "quantity": 3,
    //     "section": "Derivados de Leite"
    // }
    // E retorna o total da compra

    // Tente utilizar o metodo reduce para encontrar o total dos produtos
}

const totalShoppingListPerSection = (productsList, section) => {
    // Implementar uma funcao que recebe uma lista de objetos na mesma estrutura da anterior
    // Porem ira somar apenas os valores da seccao passada como parametro

    // Tente utilizar o filter para esta funcao
}

const totalShoppingListWithDiscount = (productsList, minQuantity, discountPercentage) => {
    // Implementar uma funcao que encontre o total com descontos para produtos que tenham mais quantidade que minQuantity
    // O desconto por padrao e de 10% porem tambem pode ser passado um valor novo no parametro discountPercentage
}