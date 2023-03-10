const groups = [1,2,1,1,1,2,1,3]
let result = []

function sizeOfGroup(group) {
    const totalPasajeros = group.reduce((a, b) => a + b, 0)
    const groupMax = Math.max(...group)
    console.log("el total de pasajeros es " + totalPasajeros)
    console.log("el maximo de personas es " + groupMax)

    for (let i = 1; i <= totalPasajeros; i++) {                                                                           
        if (totalPasajeros % i === 0) {
            if (i >= groupMax) {
                result.push(i)
            }else{
                continue
            }

        }
    }
    return result
}

console.log(sizeOfGroup(groups))
