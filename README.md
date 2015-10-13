# Benchington

The best transactions reader ever. Built using AngularJS.

install with
```
npm install && bower install
```

then build with
```
gulp build
```

to serve the project for development with
```
gulp
```

## Notes for Bench

This entire application is built using AngularJS.

I started with a Yeoman generator that I've built that creates an AngularJS boilerplate application. It uses bower for front-end dependancies, Gulp as a build system, and SASS as a CSS pre-processor. The generator also creates a folder structure that I've developed over time and believe is very scalable and readable solution when using AngularJS.

After that I created the first component which is the "home" component. It it the main component which displays the list of transactions.

This took about 1-2 hours to complete.

I then continued to make a second component to add the feature for "adding transactions to be stored locally". This presented a large challenge to achieve the user experience intended.

I came up with a few options for how I could impliment this:

* I could sync the entire API database locally using something like CouchDB or WebSql. I believed this to be outside the scope of this exercise and I didn't have access to the API to write a proper sync adapter.

* I could have just tacked on locally stored transactions onto the end of the API data. This was also not ideal because the data was served in pages that were intended to part of pagination. Also, it presented a situation that would make it near impossible to not show duplicate transactions under certain circumstances. However, I did code this and you can find it the "local-storage" branch of the repo.

* The third option and final option was to download the complete data set all at one time and store that locally. This was my least favourite option because it is not a scalable solution at all. It also would require a large chain of promise and resolves that I believe is not good code.

I learned while doing this exercise that it is not a very good idea to try to append locally stored data to data served by an API. It can lead to several conflicts and isn't a scalable solution.
