# eCommerceReact
 
Este proyecto es un e-commerce, donde se puede ver los productos, comprar los que desemos en tiempo real y añadirlos al carrito. 
Cuenta con una vista de login, donde se puede ver la página principal, registrar un usuario para crearlo, con el que posteriormente podremos loggearnos en la pestaña de login. 
Así mismo, cuenta con guards que protegen la página de manera que si no estas conectad@ no puedes acceder a ciertas vistas de la página. 
Además tenemos nuestro propio perfil donde podemos ver nuestros datos y nuestros pedidos. 

Tecnologías que he utilizado 🛠️

Mi proyecto esta creado con React en el frontend y ProyectoSequelize como backend. Con Visual Studio como framework, Sequelize como base de datos y Postman para ejecutar los endpoints.

Preview
Vista de home (loggeado):

![Captura de pantalla 2024-12-21 193449](https://github.com/user-attachments/assets/a71018e0-6c9b-46c8-9768-205ce9125062)

Vista products:

![Captura de pantalla 2024-12-21 193613](https://github.com/user-attachments/assets/1110563d-e59d-4614-ac74-69c11185b574)

Aquí puedes buscar productos en tiempo real. En la carta del producto, podemos ver su información mas detallada y añadirlo al carrito, que se mostrará con un número encima de la pestaña Cart.

![Captura de pantalla 2024-12-21 193635](https://github.com/user-attachments/assets/5ac71a97-438d-4e6a-9454-194fa36b7374)

Aquí accedemos al carrito donde podemos consultar la cantidad de productos deseada y eliminar el pedido que no queremos o, por el contrario, confirmar el pedido.

Vista del perfil donde podemos encontrar nuestra información como usuario loggeado y nuestros pedidos:

![Captura de pantalla 2024-12-21 193712](https://github.com/user-attachments/assets/ef92048f-7700-4090-8d4d-6b503d3fc627)


Vista de no loggeado para registrar un nuevo usuario:

![Captura de pantalla 2024-12-21 193748](https://github.com/user-attachments/assets/304a86ae-4bd5-4c90-8ddf-6a034f4f27fa)

Vista de login: 

![Captura de pantalla 2024-12-21 193802](https://github.com/user-attachments/assets/68eeb6a3-80f1-49a7-9f0d-4760bb7d9118)

Pre-requisitos 📋

Para que la aplicación funcione debes tener instalado Visual Studio Code.

Instalación 🔧

Para poder iniciar el proyecto primero haz un clone del frontend:

git clone https://github.com/xavixam/eCommerceReact.git

Y después lo mismo con el backend:

git clone https://github.com/xavixam/ProyectoSequelize.git

Una vez clonado el proyecto, debes instalar los modulos necesarios con npm:

cd eCommerceReact y npm i y cd ProyectoSequelize y npm i

Ya esta listo el proyecto, ahora para iniciarlo situate en la carpeta del proyecto de backend:

node --watch index.js

Y para iniciar el frontend:

npm run dev

Hecho por Xavier Antúnez 😊
