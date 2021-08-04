const userRoutes = (app, fs) => {
  // variables & analyze the json file and data
  const dataPath = './data/users.json';

  // READ folder data and there is the json file & readfile function
  app.get('/users', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }
      res.send(JSON.parse(data, null, 2));
    });
  });
  
};

module.exports = userRoutes;
