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

## Motivation for creating this website

The intention of this website is to hopefully help the audience become **more educated in the BLM movement**, it's history, where it's current at, and where it's leading towards.


## Tech-stack

- Frontend: Gatsby
- Backend: Strapi headless CMS

## Join our open-source project

- This is a **beginner-friendly** open-source project aimed to support the **BLM movement**. We are always looking for more passionate programmers, like you, to contribute!

Open-source project is powerful because it lowers the barriers to adoption and collaboration, allowing people to spread and improve projects quickly. It also is a perfect place for anyone to hone their programming skills and share their visions and ideas with like-minded others. Here are three major reasons as to why you should contribute to our open-source project!

- **Collaboration**: Open-source project can accept changes from anyone in the world.
- **Adoption**: Open source project can be used by anyone for nearly any purpose.
- **Transparency**: Anyone can inspect an open source project for errors and making small and big improvements.

If you are still confused about the concept of open source and would like to learn more, check out the [**Github's official guide!**](https://github.com/open-source)

With that said, I would **really really encourage you to fork and use this project in whatever way you want. Feel free to redesign it in your own language as well. Let's keep getting the words out so that more people can have a better understanding about the movement.**

## General Setup

1. **Fork and clone the project**.

   - If you are fairly new to Github or Git, please checkout the [**official Github Guide!**](https://guides.github.com/activities/forking/)

2. **Use your favorite text editor**

   - Personally I use VScode. You are welcome to use any of your preferences.

3. **From the root directory of the project, install dependencies with npm**

```javascript
   npm install    // install dependencies for gatsby
   ```

4. **Setup the backend**

5. Developing

```javascript
    npm start
```
- If everything succeeds, you can open up the project at port 8000
- The graphQL playground is accessible at http://localhost:8000/___graphql


6. Invalidating cache on start
```javascript
    npm run restart
```
- If you have made big changes to the backend, you might want to restart the server
- The command will clean up the cache on top of doing `npm start`
  
7. Building 
```javascript
    gatsby build
```
