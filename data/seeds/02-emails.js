exports.seed = function (knex) {
  return knex('emails').truncate()
    .then(function () {
      return knex('emails').insert([
        { email: 'apple@apple.com', userId: 1 },
        { email: 'orange@orange.com', userId: 2 },
        { email: 'pear@pear.com', userId: 3 },
        { email: 'carrot@carrot.com', userId: 3 },
        { email: 'tomato@tomato.com' },
        { email: 'garlic@garlic.com' },
      ]);
    });
};
