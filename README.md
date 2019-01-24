#Consuming Rest APi Project.

# adjunto una descripcion de lo que ha pasado con el problema 3

Instalé Angular 6 con angular-CLI en la terminal local para facilitar la creacion de componentes.

la construccion fue de una estructura de ficheros a como sigue 

| App

   |
    
      |-Login
             |login.component.ts    
   |
   
      |-Data
             |data.component.ts
   |
      | Home
      
   | app.module.ts
   | app.component.ts
   | auth.service
   | record.service

en donde construi lo siguiente:

login component -> contiene la funcion para coleccionar las varialbles que proceden del formulario login.html

auth.service -> toma las variables que proceden de login component y las susbcribe a la URL de tuten para obtener la respuesta de la APi REST.

app.component -> cree una funcion de prueba ( es decir , que no impacta en la funcion principal) para cargar una respuesta como Objeto JSON ( localmente ) lograndolo con exito.

app.module -> se encarga de ver la raiz de la app. ( routing, dependencias, proveedores , framework del front).

Que es lo que sucedio...
al intertar subscribir la peticion "PUT" para la URL indicada para obtener el token  ("https://dev.tuten.cl/TutenREST/rest/user/testapis%40tuten.cl") el resultado de la pedicion siempre arrojaba codigo 400 ("bad Request") , incluso si le injectabamos directamente los headers a la peticion y el usuario como parametro. 

en la consola del navegador, los ultimos intentos de obtener una respuesta del tipo 200 (OK), se pueden visualizar que efectivamente están los headers insertados en la peticion. 

a raiz de esto se intento acceder a la API rest mediante un entorno de pruebas como postman , para verficar si el problema esta por parte de los permisos del servior, a lo cual el resultado de postman dio positivo accediendo a el json que contiene el token.

paralelamente , estuve intentando insertar por lo menos 2 plugins para el grid filtrable de la segunda etapa. ( a saber angular 
ui-grid y 
