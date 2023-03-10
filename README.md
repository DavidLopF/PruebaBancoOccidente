# Prueba - Banco de Occidente


## Descripción

Se realizo una funcion llamada **sizeOfGroup** y toma como argumento un array llamado group. La función calcula el número total de pasajeros en el grupo sumando todos los valores en el array usando la función reduce de JavaScript. Luego, la función encuentra el número máximo de personas en el grupo utilizando la función Math.max de JavaScript.


La función luego itera sobre cada número del 1 al número total de pasajeros. Si el número total de pasajeros es divisible por el número actual en el ciclo, la función verifica si el número actual es mayor o igual que el número máximo de personas en el grupo. Si el número actual es mayor o igual que el número máximo de personas en el grupo, se agrega a un array llamado **result**. Si no es así, se omite el número actual y se continúa con el siguiente número en el ciclo.

Finalmente, la función devuelve el array **result**, que contiene todos los números que son divisibles por el número total de pasajeros y que son mayores o iguales que el número máximo de personas en el grupo.


## Documentación Postman

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/9a9d4b0d9c9c1d7f9d7a)