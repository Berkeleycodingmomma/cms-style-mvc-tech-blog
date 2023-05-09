# cms-style-mvc-tech-blog
#
# Interactive Full-Stack Project
#
## Description 
#

#
## Visual images of Deployed site
- This is the Home page
<img width="723" alt="Screen Shot 2023-05-09 at 1 05 21 AM" src="https://user-images.githubusercontent.com/127444682/237026132-56e0b08c-dd48-4fd5-9dd6-9cb9d4572b48.png">

- This is the sign-up page
<img width="724" alt="Screen Shot 2023-05-09 at 1 06 02 AM" src="https://user-images.githubusercontent.com/127444682/237027205-a90ad11c-ef38-4224-bc72-cc2cef4e16f5.png">

#
## Built With:
- JSON:[ JSON](https://www.npmjs.com/package/json)
- Dynamic JavaScript
- Node.js [Version 16.18.1](https://nodejs.org/en/blog/release/v16.18.1/)
- Express.js:[Express.js](https://expressjs.com/en/starter/installing.html)
- Bcryptjs: [2.4.3](https://www.npmjs.com/package/bcryptjs)
- Connect Session Store using Sequelize: [7.0.4](https://www.npmjs.com/package/connect-session-sequelize)
- Dotenv: [8.6.0](https://www.npmjs.com/package/dotenv)
- Express: [4.17.1](https://www.npmjs.com/package/express)
- Express Handlebars: [5.2.0](https://www.npmjs.com/package/express-handlebars)
- Express-Session: [1.17.1](https://www.npmjs.com/package/express-session)
- Handlebars.js: [4.7.6](https://www.npmjs.com/package/handlebars)
- Node MySql2: [2.3.3](https://www.npmjs.com/package/mysql2)
- Sequelize: [6.29.3](https://www.npmjs.com/package/sequelize)
- License Badge: [Shields.io](https://shields.io/)
- Visual Studio Code: [Website](https://code.visualstudio.com/)
- Heroku: [Website](https://id.heroku.com/login)

#
## Technology/Research Data Used 

|         |         | 
| ------------- |:-------------:| 
Handlebars info: https://waelyasmina.medium.com/a-guide-into-using-handlebars-with-your-express-js-application-22b944443b65
How to use middleware: https://expressjs.com/en/guide/using-middleware.html
Explaining bcrypt: https://www.npmjs.com/package/bcrypt
Query Selectors info: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
Format a date in javaScript: https://isotropic.co/how-to-format-a-date-as-dd-mm-yyyy-in-javascript/

#

## Code examples of the project

#
--------------------------------------------------------------------------------------------------------------------------------------------------------

 ```sh

const newEquinePostFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title-new-equine-post').value.trim();
    const content = document.querySelector('#content-new-equine-post').value.trim();

    if (title && content) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({
                title,
                content
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        // When successful, load the dashboard page
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create a new post.'); // When unsuccessful, show alert
        }
    }
};




```

**(ABOVE)- This allows the user to create a new post 

--------------------------------------------------------------------------------------------------------------------------------------------------------

```sh
    
const newEquinePostForm = document.querySelector('.new-equine-post-form');
if (newEquinePostForm) {
    newEquinePostForm.addEventListener('submit', newEquinePostFormHandler);
}
 
```

**(ABOVE)- Here is an example of using event listners in the project in new-post.js

--------------------------------------------------------------------------------------------------------------------------------------------------------

```sh


const withAuth = (req, res, next) => {

    if (!req.session.logged_in) {
        res.redirect("/login");
    } else {

        next();
    }
};

module.exports = withAuth;

    
```

**(ABOVE)- This is the middleware function to check if user is logged in

--------------------------------------------------------------------------------------------------------------------------------------------------------

```sh
  
<main class="container mt-5">
  <h1 class="mb-4">Edit Post</h1>
  <form class="update-equine-post-form" class="mb-3">
    <div class="mb-3">
      <label for="title-update-equine-post" class="form-label">Title</label>
      <input
        type="text"
        class="form-control"
        id="title-update-equine-post"
        placeholder="Enter post title"
        value="{{title}}"
      />
    </div>
    <div class="mb-3">
      <label for="content-update-equine-post" class="form-label">Content</label>
      <textarea
        class="form-control"
        id="content-update-equine-post"
        rows="3"
        placeholder="Enter post content"
      >{{content}}</textarea>
    </div>
    <button type="submit" id="update-equine-post" class="btn btn-primary">Update Post</button>
    <button type="button" id="delete-equine-post" class="btn btn-danger">Delete Post</button>
  </form>
</main>



```
**(ABOVE)- This allows the user to go back and edit their post in editpost.handlebars

--------------------------------------------------------------------------------------------------------------------------------------------------------

## Author Info

### Amanda Gray

* [Linkedin](https://www.linkedin.com/in/amanda-gray-831a65254/)
* [Github]()
* [Heroku](https://mysterious-fortress-89318.herokuapp.com/)

## Credits

Shout out to all the TA's and Google Search!

GOOGLE!  Seriously, thank you google search!





© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.






