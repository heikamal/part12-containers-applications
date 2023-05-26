db.createUser({
  user: 'the_username',
  pwd: 'the_password',
  roles: [
    {
      role: 'dbOwner',
      db: 'the_database',
    },
  ],
});

db.createCollection('people');

db.people.insert({ name: 'Hagrid', number: '050-4097623' });
db.people.insert({ name: 'Jack Bauer', number: '040-2424242' });