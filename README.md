# Mean Courses
![Mean Courses](meancourses.png)

Simple course application developed using the MEAN Stack. In this application you can login and create new users, manage these users using a *Admin* account and create and view the courses.

This project is a web application developed for didactic purposes, being its main objective to study the [MEAN](http://mean.io/) Stack([MongoDB](https://www.mongodb.org/), [Express](http://expressjs.com), [AngularJS](https://angularjs.org/) and [Node.js](https://nodejs.org/)) and related technologies.

### Used technologies

Although this project is a simple application, many technologies were used to develop it.

And the main were:

#### Client-side

* [AngularJS](https://angularjs.org/) -  the frontend part of the MEAN stack used to extend the HTML vocabulary for the application using a **[MV*](http://www.sitepoint.com/anatomy-javascript-mv-framework/)** architecture.
* [Bootstrap](http://getbootstrap.com/) - a front end web framework used to help create web apps in a faster and easier way.

#### Server-side
* [Node.js](https://nodejs.org) - an open-source, cross-platform runtime environment for developing server-side Web applications.
* [Express](http://expressjs.com) - a Node.js web application server framework, designed for building single-page, multi-page, and hybrid web application
* [Jade](http://jade-lang.com) - a terse language for writing HTML templates.
* [Stylus](http://stylus-lang.com) - a revolutionary new language, providing an efficient, dynamic, and expressive way to generate CSS.
* [Passport](http://passportjs.org) - a authentication middleware for Node.js. Used to create the login interface in the server.
* [Mongoose](http://mongoosejs.com) - MongoDB object modeling tool designed to work in an asynchronous environment.

#### Database
* [MongoDB](https://www.mongodb.org/) - a cross-platform document-oriented NoSQL database.

#### Testing
* [Karma](http://karma-runner.github.io) - a simple and flexible tool for executing JavaScript tests.
* [Mocha](https://mochajs.org/) - A test framework running on node.js and the browser which runs tests serially, mapping uncaught exceptions to the correct test cases.

## Testing on Heroku

You can test this application on [Heroku](https://www.heroku.com/) using this link: https://mean-courses.herokuapp.com

To login with the admin account use the email **admin@meancourses.com** and the password **root**.

You can also login using a default account using the email **default@meancourses.com** and the password **default**.



## How to use

Download and install the Node.Js  and NPM from the [Node.js](https://nodejs.org/en/download/) site.

Install the MongoDB using this [tutorial](https://docs.mongodb.org/manual/installation/).

Clone the repository and install the node modules.

`npm install`

Install the Bower globally:

`npm install -g bower`

Install the Bower components:

`bower install`

After this, you can run the application.

***

### Running the application

If you are using Linux machine use the terminal to go to the root of the project and run the command `node server.js`.

If you are on a windows machine, install the bash shell.  Optionally you may run server.bat.  Note that
after you stop your server, you must change directory back to the root of the project.

Then navigate your browser to `http://localhost:<port>` to see the app running in your browser.  The port may be configured in the server/config/config.js file. The default port is 3030.

#### Logging in

To login, you can use the default created users *admin* and *default* using  the **admin@meancourses.com** and the password **root** and the email **default@meancourses.com** and the password **default**.

You can create your own user using signup page.

## Running the tests

To run the test, you need to configure your environment. To do this you need to install [Karma](https://karma-runner.github.io) and install all the node modules and bower components modules needed to run this application as shown above.

#### Unit tests

I created a article in my blog of how to configure the Karma for tests in the WebStorm IDE and how to run Unit tests that you can see in this [link](http://coderade.in/configure-karma-webstorm).

***

## Deploying on Heroku

This application is configured for your deployment on Heroku. First you need to create a MongoDB database on the [MongoLab](https://mlab.com/) site.

#### Creating a MongoDB database on MongoLab

To create your account and mongoDB database on MongoLab we can use follow this tutorial: [Getting Started with Mongolab](http://www.sitepoint.com/getting-started-with-mongolab/).

After create your database on MongoLab, you need to change the option `production.db` on the file `server/config/config.js` like this example:

```
production: {
        rootPath: rootPath,
        db:'mongodb://user:password@mongolab.host:port/database',
        port: process.env.PORT || 80
    }
```

After do this. We can deploy.

#### Deploying

To deploy, you can follow this [tutorial](https://devcenter.heroku.com/articles/deploying-nodejs).


***

For more information on Mean Stack please check out [Mean](http://mean.io).

If you have some question about this project, please [contact me](http://coderade.in/contact) and I will try to answer as quickly as possible.
