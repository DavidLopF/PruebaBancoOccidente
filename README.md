


## Descripción

Se realizo una funcion llamada **sizeOfGroup** y toma como argumento un array llamado group. La función calcula el número total de pasajeros en el grupo sumando todos los valores en el array usando la función reduce de JavaScript. Luego, la función encuentra el número máximo de personas en el grupo utilizando la función Math.max de JavaScript.


La función luego itera sobre cada número del 1 al número total de pasajeros. Si el número total de pasajeros es divisible por el número actual en el ciclo, la función verifica si el número actual es mayor o igual que el número máximo de personas en el grupo. Si el número actual es mayor o igual que el número máximo de personas en el grupo, se agrega a un array llamado **result**. Si no es así, se omite el número actual y se continúa con el siguiente número en el ciclo.

Finalmente, la función devuelve el array **result**, que contiene todos los números que son divisibles por el número total de pasajeros y que son mayores o iguales que el número máximo de personas en el grupo.


## Documentación Postman

Adjunto el link del la collecion de postman y igualmente el boton para importar la collecion.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://documenter.getpostman.com/view/21047963/2s93JtPNxB)


## Deploy Amazon

Como se indico en el documento enviado se realizo el deploy en AWS con las herramientas:

* AWS Lambda - Para la creacion de la funcion
* AWS API Gateway - Para la creacion del endpoint

https://1egtebm8dd.execute-api.us-east-1.amazonaws.com/solution/solucion-problem-bus

Dicho endpoint tiene que recibir un array de numeros y retornar un array de numeros.

* Request - POST

```json
{
    "group": [3, 3, 4, 2, 4, 4, 2, 5, 3, 4, 4, 2, 3, 3, 3]
}
```

* Response

```json
{
     "size": "[3,4,6,12]"
}
```


