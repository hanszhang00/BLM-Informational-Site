# BLM-information-site


[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/) [![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

<!-- project bg image, might want to replace it something more descriptive in the future -->
<p align="center">
  <img
    src="/src/assets/banner.png"
    alt="project readme background"
  />
</p>

<!-- short description -->
<p align="center">
  BLM Information Website ♥️</a>
</p>

<p align="center">
  <strong>
    Live <a href="https://hanszhang00.github.io/blm-resources/"> here</a>
    <br /> ✊🏿 
  </strong>
</p>

## Use

The intention of this website is to hopefully help the audience become **more educated in the BLM movement**, it's history, where it's current at, and where it's leading towards.


## Tech-stack

- **Frontend**: Gatsby
- **Backend**: Only runs in production, Strapi headless CMS

## Join our open-source project

This is a **beginner-friendly** open-source project aimed to support the **BLM movement**. We are always looking for more passionate programmers, like you, to contribute!

  - Open-source project is powerful because it lowers the barriers to adoption and collaboration, allowing people to spread and improve projects quickly. It also is a perfect place for anyone to hone their programming skills and share their visions and ideas with like-minded others. Here are three major reasons as to why you should contribute to our open-source project!

- **Collaboration**: Open-source project can accept changes from anyone in the world.
- **Adoption**: Open source project can be used by anyone for nearly any purpose.
- **Transparency**: Anyone can inspect an open source project for errors and making small and big improvements.

If you are still confused about the concept of open source and would like to learn more, check out the [**Github's official guide!**](https://github.com/open-source)

With that said, I would really encourage you to fork and use this project in **whatever way you want**. Feel free to **redesign it in your own language as well**. Let's keep getting the words out so that more people can become more educated and are able to support the BLM movement.**

## General Setup

1. **Fork and clone the project**.

   - If you are fairly new to Github or Git, please checkout the [**official Github Guide!**](https://guides.github.com/activities/forking/)

2. **Use your favorite text editor**

   - Personally I use VScode. You are welcome to use any of your preferences.

3. **From the root directory of the project, install dependencies with npm**

```javascript
   npm install    
   ```

4. **Setup the backend**

5. Developing
   
   - If everything succeeds, you can open up the project at port 8000
   - The graphQL playground is accessible at **http://localhost:8000/___graphql**

```javascript
    npm start
```


6. Invalidating cache on start
 
   - If you have made big changes to the backend, you might want to restart the server
   - The command will clean up the cache on top of doing `npm start`
  
```javascript
    npm run restart
```
  
7. Building 
```javascript
    gatsby build
```

## Project Flow

In our local development, the Gatsby frontend fetches the project content from the Strapi backend.
    - Make sure you start and run your backend server whenever you run your frontend Gatsby, because the frontend needs to retrieve all of the data from the server using the [**Strapi plugin**](https://www.gatsbyjs.com/plugins/gatsby-source-strapi/?=strapi)

In order to update video, article, or organziation information, directly update them on the strapi backend. In order for the changes to be reflected on the frontend, run `npm run restart` to rebuild the Gatsby server.

**If you make only frotnend changes**, directly run `npm start` should be enough.

**If you would like to submit new content**, you have two options
  - submitting pull requests for the backend Strapi server with the updated content
  - use the production-ready Strapi server and directly add there. These changes will be immediately reflected in the API. I will check whether any content is updated in the production server periodically and add them to the production frontend Gatsby server accordingly. (*This method is preferred and theoretically much easier*)

## Contributing 

The previous parts help you set up the project. Please refer to the [**CONTRIBUTING.md**](/CONTRIBUTING.md) if you would like to take a further step to contribute!

## License 

See the [**LICENSE**](/LICENSE.md) file for license rights and limitations (MIT).
