
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('players').del()
    .then(function () {
      // Inserts seed entries
      return knex('players').insert([
        { name: 'David De Gea', jersey_number: '10', position: 'Goalkeeper', games_played: '20', goals: '10' },
        { name: 'Dani Carvajal', jersey_number: '12', position: 'Defender', games_played: '100', goals: '40' },
        { name: 'Sergio Ramos', jersey_number: '15', position: 'Defender', games_played: '10', goals: '20' },
        { name: 'David Alaba', jersey_number: '33', position: 'Defender', games_played: '2', goals: '1' },
        { name: 'Luka Modric', jersey_number: '20', position: 'Midfielder', games_played: '40', goals: '50' },
        { name: 'David Silva', jersey_number: '90', position: 'Midfielder', games_played: '11', goals: '10' },
        { name: 'Sadio Mane', jersey_number: '1', position: 'Forward', games_played: '53', goals: '50' },
        { name: 'Lionel Messi', jersey_number: '9', position: 'Forward', games_played: '41', goals: '100' },
        { name: 'Harry Kane', jersey_number: '5', position: 'Striker', games_played: '12', goals: '60' },
        { name: 'Mia Hamm', jersey_number: '14', position: 'Forward', games_played: '19', goals: '30' },
        { name: 'Carli Lloyd', jersey_number: '22', position: 'Midfielder', games_played: '20', goals: '20' },
        { name: 'Adrianna Franch', jersey_number: '3', position: 'Goalkeeper', games_played: '66', goals: '10' },
        { name: 'Tobin Heath', jersey_number: '4', position: 'Forward', games_played: '4', goals: '15' },
        { name: 'Emily Sonnett', jersey_number: '24', position: 'Defender', games_played: '39', goals: '13' },
        { name: 'Becky Sauerbrunn', jersey_number: '40', position: 'Defender', games_played: '229', goals: '22' },
        { name: 'Rose Lavelle', jersey_number: '21', position: 'Midfielder', games_played: '21', goals: '100' },
        { name: 'Ali Krieger', jersey_number: '23', position: 'Defender', games_played: '44', goals: '40' }
      ])
    })
}
