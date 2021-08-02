// load up our shiny new route for users & allow it will run with express servers and controls something
const userRoutes = require('./users');

const appRouter = (app, fs) => {
  // we've added in a default route here that handles empty routes & will receive consider index.js as server where will set this as default home page
  // at the base API url
  app.get('/', (req, res) => {
    res.send('This is routes path default page');
  });

  // run our user route module here to complete the wire up
  userRoutes(app, fs);
};

// this line is unchanged
module.exports = appRouter;
