
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('players').del()
    .then(function () {
      // Inserts seed entries
      return knex('players').insert([
        { name: 'David De Gea', jersey_number: '10', position: 'Goalkeeper', games_played: '0', mins: '0', goals: '0', assists: '0', yel: '0', red: '0', on_team: false },
        { name: 'Dani Carvajal', jersey_number: '12', position: 'Defender', games_played: '0', mins: '0', goals: '0', assists: '0', yel: '0', red: '0', on_team: false },
        { name: 'Sergio Ramos', jersey_number: '15', position: 'Defender', games_played: '0', mins: '0', goals: '0', assists: '0', yel: '0', red: '0', on_team: false },
        { name: 'David Alaba', jersey_number: '33', position: 'Defender', games_played: '0', mins: '0', goals: '0', assists: '0', yel: '0', red: '0', on_team: false },
        { name: 'Luka Modric', jersey_number: '20', position: 'Midfielder', games_played: '0', mins: '0', goals: '0', assists: '0', yel: '0', red: '0', on_team: false },
        { name: 'David Silva', jersey_number: '90', position: 'Midfielder', games_played: '0', mins: '0', goals: '0', assists: '0', yel: '0', red: '0', on_team: false },
        { name: 'Sadio Mane', jersey_number: '1', position: 'Forward', games_played: '0', mins: '0', goals: '0', assists: '0', yel: '0', red: '0', on_team: false },
        { name: 'Lionel Messi', jersey_number: '9', position: 'Forward', games_played: '0', mins: '0', goals: '0', assists: '0', yel: '0', red: '0', on_team: false },
        { name: 'Harry Kane', jersey_number: '5', position: 'Striker', games_played: '0', mins: '0', goals: '0', assists: '0', yel: '0', red: '0', on_team: false },
        { name: 'Mia Hamm', jersey_number: '14', position: 'Forward', games_played: '0', mins: '0', goals: '0', assists: '0', yel: '0', red: '0', on_team: false },
        { name: 'Carli Lloyd', jersey_number: '22', position: 'Midfielder', games_played: '0', mins: '0', goals: '0', assists: '0', yel: '0', red: '0', on_team: false },
        { name: 'Adrianna Franch', jersey_number: '3', position: 'Goalkeeper', games_played: '0', mins: '0', goals: '0', assists: '0', yel: '0', red: '0', on_team: false },
        { name: 'Tobin Heath', jersey_number: '4', position: 'Forward', games_played: '0', mins: '0', goals: '0', assists: '0', yel: '0', red: '0', on_team: false },
        { name: 'Emily Sonnett', jersey_number: '24', position: 'Defender', games_played: '0', mins: '0', goals: '0', assists: '0', yel: '0', red: '0', on_team: false },
        { name: 'Becky Sauerbrunn', jersey_number: '40', position: 'Defender', games_played: '0', mins: '0', goals: '0', assists: '0', yel: '0', red: '0', on_team: false },
        { name: 'Rose Lavelle', jersey_number: '21', position: 'Midfielder', games_played: '0', mins: '0', goals: '0', assists: '0', yel: '0', red: '0', on_team: false },
        { name: 'Ali Krieger', jersey_number: '23', position: 'Defender', games_played: '0', mins: '0', goals: '0', assists: '0', yel: '0', red: '0', on_team: false }
      ])
    })
}
