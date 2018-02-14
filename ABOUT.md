# The plan for "Let's go!"
What was at the forefront of my mind when I built this application was to keep it as simple
as possible. This eliminated languages/technologies/platform such as Java/Tomcat.

I decided to go with the simplest languages/technology/platform that I was awre of to get
the job done: **Node.js**.

The main issue I had with this choice is that I'm new to **Node.js**! But I wanted to
learn and try something new. So I chose node and express.

Because Node is asynchronous, I wanted to pack as much functionality (page rendering
and search handling in as little code as possible, and to try to avoide getting tangled
in doing a lot of nested callbacks.

I wantd to keep the implementation of the search feature as simple as possible. Hence,
I kept the names of the search form-fields the same as the names of the search parameters
that the REST API uses. This allowed for passing them through to the REST API with minimal
processing (the are URL encoded) in the application code.

The only error case that was addressed was when the search criteria results in no offers.
In that case, a different page is rendered. The page informs the user that the search did
not return any results. The user is asked to try again by clicking a link that takes them
back to the main application page sans any search parameters.


# What was learned
- Bootstrapping a Node.js/express application.
- Making rest calls and processing their results.
- Setting up a project, deploying, launcing, troubleshooting a project that runs on Heroku.

*The whole tech stack was new to me and I enjoyed the experience!*
