#Consuming Rest APi Project.

# adjunto una descripcion de lo que ha pasado con el problema 3

Instalé Angular 6 con angular-CLI en la terminal local para facilitar la creacion de componentes.

la construccion fue de una estructura de ficheros a como sigue 
app-
   |
   |
   
      |-Login
             |
             |login.component.ts
           
   |
      |-Data
             |data.component.ts
   |
       | Home
   |
   |
   |
   app.module.ts
   app.component.ts
   auth.service
   |
   |
   record.service

en donde construi lo siguiente:

login component -> contiene la funcion para coleccionar las varialbles que proceden del formulario login.html
auth.service -> toma las variables que proceden de login component y las susbcribe a la URL de tuten para obtener la respuesta de la APi REST.

app.component -> cree una funcion de prueba ( es decir , que no impacta en la funcion principal) para cargar una respuesta como Objeto JSON ( localmente ) lograndolo con exito.


