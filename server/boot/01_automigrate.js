// Script used to automatically create tables based on models.
// This will re-create the tables, thus erasing any data.
module.exports = function(app) {
  app.dataSources.postgresDB.automigrate(['FileUpload']);
  // app.dataSources.mongoDB.automigrate();

  app.dataSources.postgresDB.automigrate(['AccessToken', 'ACL'], function(err) {
    if (err) throw err;
    console.log('Loopback tables  + ' + ['AccessToken', 'ACL'] + '] created');
  });

  app.dataSources.postgresDB.automigrate(['AccessToken', 'ACL'], function(err) {
    if (err) throw err;
    console.log('Loopback tables [' + ['AccessToken', 'ACL'] + '] created');
  });
};
