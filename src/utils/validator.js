export const validator = (field, value) => {
    const minLenghtAllowed = 3
    if (field == 'firstName' || field == 'lastName' || field == 'city' || field == 'country' || field == 'stret' || field == 'streetNumber') {
        return value.length < minLenghtAllowed 
    }
}