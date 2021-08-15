const test_removeOdds = () => {
    const tests = [
        {
            "input": array_1,
            "expected_result": [8, 2, 4, 12, 1444, 18]
        },
        {
            "input": array_2,
            "expected_result": [0, 8, 4, 0, 0, 2]
        },
        {
            "input": array_3,
            "expected_result": [-10, -8, 20, 0, -10, -44, -10]
        },
        {
            "input": array_4,
            "expected_result": []
        },
        {
            "input": array_5,
            "expected_result": [-30]
        }
    ]

    tests.forEach((test) => console.assert(JSON.stringify(removeOdds(test.input)) === JSON.stringify(test.expected_result),
                                            {
                                                "Function": "removeOdds",
                                                "expected": test.expected_result,
                                                "got": removeOdds(test.input),
                                                "tested": test.input
                                            }))
}
test_removeOdds()


const test_findMinValue = () => {
    const tests = [
        {
            "input": array_1,
            "expected_result": 2
        },
        {
            "input": array_2,
            "expected_result": 0
        },
        {
            "input": array_3,
            "expected_result": -44
        },
        {
            "input": array_4,
            "expected_result": -15
        },
        {
            "input": array_5,
            "expected_result": -33
        }
    ]

    tests.forEach((test) => console.assert(JSON.stringify(findMinValue(test.input)) === JSON.stringify(test.expected_result),
                                            {
                                                "Function": "findMinValue",
                                                "expected": test.expected_result,
                                                "got": findMinValue(test.input),
                                                "tested": test.input
                                            }))
}
test_findMinValue()

const test_countConsecutiveNumber = () => {
    const tests = [
        {
            "input": {
                "list": array_1,
                "number": 9
            },
            "expected_result": 0
        },
        {
            "input": {
                "list": array_2,
                "number": 0
            },
            "expected_result": 2
        },
        {
            "input": {
                "list": array_3,
                "number": -10
            },
            "expected_result": 1
        },
        {
            "input": {
                "list": array_4,
                "number": 3
            },
            "expected_result": 1
        },
        {
            "input": {
                "list": array_5,
                "number": 13
            },
            "expected_result": 0
        }
    ]

    tests.forEach((test) => console.assert(JSON.stringify(countConsecutiveNumber(test.input.list, test.input.number)) === JSON.stringify(test.expected_result),
                                            {
                                                "Function": "countConsecutive",
                                                "expected": test.expected_result,
                                                "got": countConsecutiveNumber(test.input.list, test.input.number),
                                                "tested": test.input.list
                                            }))
}
test_countConsecutiveNumber()


const test_totalShoppingList = () => {
    //implementar testes, arrays para simular a lista de compras encontram-se na pasta helpers.js
    //utilizar as variaveis globais: shopList_1, shopList_2 e shopList_3 
}
test_totalShoppingList()

const test_totalShoppingListPerSection = () => {

}
test_totalShoppingListPerSection()

const test_totalShoppingListWithDiscount = () => {

}
test_totalShoppingListWithDiscount()
