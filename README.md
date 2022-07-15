# front-end-test

## Componentes

### Actions
El componente actions es el que permite al usuario seleccionar color y almacenaje. Para ello se utiliza react-hook-form que genera un objeto (data) y lo pasa a la funci'on PostCart.

En este componente tambi'en se setean los cartPorducts en un contexto para poder almacenarlos en el local storage.


### Breadcrums
Utilizamos FetchContext en este componente para traenos los items, el urlParams y configurar breadcumb.

El useEffect filtra los resultados cada vez que cambia urlParams y configura breadcrumbs con setBreadcrums. Si no hay resultados no se muestran los breadcrums(como pasa en la p'agina list)


### Descripcion
Este componente recibe props y se utiliza esta informaci'on para crear los elementos.


### Header
Header contiene al logo con enlace al home del proyecto y el icono del carrito de compras. Para este 'ultimo icono se utiliz'o MUI.

Cuando se renderiza por primera vez, el useEffect realiza la consulta para saber si el cart products est'a guardado en el local storage. Si es as'i configura el cartProducts con esta informaci'on. Tambi'en dispara un set interval para volver a ralizar esa consulta cada hora.


### Image
Recibe props y utliza la informaci'on para los atributos src y alt.


### Item
Este componente tambi'en recibe datos por props y utiliza los mismos para crear los elementos que se muestran en la home. Para la maquetaci'on se utiliz'o MUI.


### search
El componente search recibe filters y setFilters a trav'es de FetchContext. El input es el encargado de contener la informaci'on insertada por el usuario a trav'es del handleChange y esto es lo que se pasa a filters con setFilters.



## Context
Para faciliatar la transferencia de datos a trav'es de componentes se crea un context.




## Hooks

### GetItems
GetItems es el encargado de realizar la consulta a la api para traer todos los productos. Para realizar esta llamda se utiliza axios y el resultado es almacenado en items. Es el useEffect el encargado de lanzar la funcion getAll una vez que se renderiza y tambi'en ejecuta un setInterval de 1 hora para actualizar el stock.


### GetOnlyOne
GetOnlyOne recibe el id del producto y utiliza el mismo para realizar la consulta a la api. Si tenemos respuesta, actualiza el product. Esto es ejecutado por un useEffect al renderizar.


### PostCart
Este Hook recibe (data) que es enviada a trav'es del componente Actions y env'ia esto con un POST a la api. 


## Pages

### Details
Es la p'agina que muestra los detalles del producto. En ella se importan 3 componentes (Image, Description y Actions) y se ejecuta el Hook GetOnlyOne, del cual extraemos product y product.options para enviarlas por props a estos componentes.


### List
Es la p'agina que esena los productos. En ella traemos items, filters y setBreadcrums.

Cada vez que se renderice, vaciaremos el valor de los breadcrums.

Aqui el useEffect es el encargado de pasar el valor a filteredStock en cuanto se renderiza, pasara el stock completo. 

En caso de existir un filtro, se crea una variable que contendr'a el stock filtrado de acuerdo a la informacion ingresada por el usuario.

La funcion finalmente devuelve un map de lo que encuentre en filterStock donde solo pasamos la info que se muestra en el objeto info.


## App
En este fichero importamos el FetchContext y pasamos todos los estados con los cual trabajaremos a trav'es de FetschContext.provider value={...}.

Aqui tambi'en se establecen cu'ales ser'an las rutas del proyecto.
