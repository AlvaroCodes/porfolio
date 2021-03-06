# Porfolio

# Introduction

This project is a personal portfolio made with the "MERN" stack.

As characteristics that the project will have will be the creation of a Rest API (CRUD) that will feed the web content, NodeJS has been used with the "express" library. For the connection to the database, the “mongoose” library has been used. The security system of the Rest API will be a JWT (JSON Web Token) system, "bcryptjs" has been used to encrypt passwords and "jsonwebtoken" for the creation of Tokens. The web will be a SPA, React and the “React Router (V6)” library will be used.*.* 

**Facilities required**

1. Browser: [https://www.google.com/chrome/](https://www.google.com/chrome/)
2. IDE, for the development of the project Visual studio code has been used. [https://code.visualstudio.com/](https://code.visualstudio.com/)
3. Chrome plugin for component development: [[https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=es](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=es)]([https://chrome.google.com/](https://chrome.google.com/) webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
4. Program to check the API
    1. Postman: [https://www.postman.com/downloads/](https://www.postman.com/downloads/)
    2. Insomnia: [https://insomnia.rest/](https://insomnia.rest/)
5. Have Git installed: [https://git-scm.com/](https://git-scm.com/)
6. Have NodeJS installed: [https://nodejs.org/es/](https://nodejs.org/es/)

**How to deploy?**

1. Download or clone the GitHub repository: [https://github.com/AlvaroCodes/porfolio](https://github.com/AlvaroCodes/porfolio)
- API Deployment (Being in the API root directory):
    
    On line 7 → index.js → Include your MongoDB url
    
    - npm run start. It is executed once, it raises the project (recommended when no changes are going to be made).
    - npm run dev (Using nodemon). It is used when coding so that you are not running npm run start for every change. After saving the changes, it starts the server without having to use any commands.
        - [https://www.npmjs.com/package/nodemon](https://www.npmjs.com/package/nodemon)
- Deployment of the web (Being in the root directory porfolioApp):
    - npm run start or npm start: With this command a server is started and the app is shown. Usually on port 3000.
    
    **To deploy the production project.**
    
    1. Download or clone the GitHub repository: [https://github.com/AlvaroCodes/porfolio](https://github.com/AlvaroCodes/porfolio)
    2. For the Rest API, HEROKU has been used to deploy the project.
        1. [https://www.heroku.com/](https://www.heroku.com/)
    3. For the application it is necessary to execute the npm run build command, this will create a build directory to upload it to production.
        1. Github Pages: It is necessary to change the name of the directory to docs and activate the Github Pages. More information: [https://pages.github.com/](https://pages.github.com/)
        2. Netlify: It is a simple way to upload a website to a remote server. More information: [https://www.adictosaltrabajo.com/2022/03/17/guia-rapida-ci-cd-con-github-actions-y-netlify-para-ingenieros-de-front-end/](https://www.adictosaltrabajo.com/2022/03/17/guia-rapida-ci-cd-con-github-actions-y-netlify-para-ingenieros-de-front-end/)
    
    ## Frond-End
    
    **Code structure:**
    
    ```
    
    / public
    ├── assets 🌈               # Recursos
    └── ...
    
    / src
    ├── component 📦            # Componentes
    ├── pages 📁                # Paginas web
    ├── routers 🧩              # Enrutamiento
    ├── app.js 📃               # Punto central de la lógica de la app
    ├── index.js 🏠             # Punto inicial de la aplicación 
    └── ...
    ```
    
    More: [https://github.com/AlvaroCodes/porfolio/tree/main/porfolioApp](https://github.com/AlvaroCodes/porfolio/tree/main/porfolioApp)
    
    ## Back-End
    
    ```
    // API
    ├── controllers ⚙️         # Acciones de las peticiones 
    ├── models 📁              # Schema Collections
    ├── routes 🎯              # Enrutamiento
    ├── services 🗝️            # servicios como JWT
    ├── middlewares 🧩         # middlewares propios
    ├── app.js 📃              # Punto central de la lógica de la app
    ├── index.js 🏠            # Punto inicial de la aplicación 
    └── ...
    ```
    
    More: [https://github.com/AlvaroCodes/porfolio/tree/main/porfolioApp](https://github.com/AlvaroCodes/porfolio/tree/main/API)