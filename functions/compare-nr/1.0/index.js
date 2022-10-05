const compareNumber = async ({ leftValue, rightValue, comparator }) => {
    let res = {};

    switch (comparator) {
        case 'eq':
            result = leftValue === rightValue 
        break;
        case 'neq':
            result = leftValue !== rightValue
        break;
        case 'lower':
            result = leftValue < rightValue
        break;
        case 'lowerEq':
            result = leftValue <= rightValue
        break;
        case 'higher':
            result = leftValue > rightValue
        break;
        case 'higherEq':
            result = leftValue >= rightValue
        break;
    }
    
    return { result: res }
}

export default compareNumber;