export const handler = async(event) => {
    try{
        if (!event.groups) {
            throw new Error('Missing groups')
        }
        if (typeof event.groups !== 'string') {
            throw new Error('groups must be a string')
        }
        if (event.groups.length === 0) {
            throw new Error('groups must not be empty')
        }
        const regex = /^([0-9]+,)*[0-9]+$/
        if (!regex.test(event.groups)) {
            throw new Error('groups must be a string of numbers separated by commas')
        }
    }catch(e){
        return {
            statusCode: 400,
            body: e.message
        }
    }
    let groups = event.groups;
    groups = groups.split(',').map(Number)
    let result = []

    const totalPasajeros = groups.reduce((a, b) => a + b, 0)
    const groupMax = Math.max(...groups)
 

    for (let i = 1; i <= totalPasajeros; i++) {
        if (totalPasajeros % i === 0) {
            if (i >= groupMax) {
                result.push(i)
            } else {
                continue
            }
        }
    }
    
    // TODO implement
    const response = {
        size: JSON.stringify(result),
    };
    return response;
};