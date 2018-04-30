// Script used to automatically create tables based on models.
// This will re-create the tables, thus erasing any data.

module.exports = function(app) {

  app.dataSources.postgresDB.automigrate();
  app.dataSources.mongoDB.automigrate();

  app.dataSources.postgresDB.automigrate(['AccessToken, ACL'], function(er) {
    if (er) throw er;
    console.log('Loopback tables ['+['AccessToken, ACL']+'] created');
  });

}
