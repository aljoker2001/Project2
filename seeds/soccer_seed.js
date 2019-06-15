
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('players').del()
    .then(function () {
      // Inserts seed entries
      return knex('players').insert([
        { image: 'https://premierleague-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p51940.png', name: 'David De Gea', jersey_number: '10', position: 'Goalkeeper' },
        { image: 'https://image.ibb.co/ccBXgd/2014.jpg', name: 'Dani Carvajal', jersey_number: '12', position: 'Defender' },
        { image: 'https://tmssl.akamaized.net/images/portrait/originals/25557-1413190249.jpg', name: 'Sergio Ramos', jersey_number: '15', position: 'Defender' },
        { image: 'https://b.fssta.com/uploads/application/soccer/players/505358.vresize.350.425.medium.64.png', name: 'David Alaba', jersey_number: '33', position: 'Striker' },
        { image: 'https://i.pinimg.com/236x/0d/0a/40/0d0a40fb3e5442d2ff72dc226c3d397d--soccer-players-real-madrid.jpg', name: 'Luka Modric', jersey_number: '20', position: 'Midfielder' },
        { image: 'https://premierleague-static-files.s3.amazonaws.com/premierleague/photos/players/110x140/p20664.png', name: 'David Silva', jersey_number: '90', position: 'Midfielder' },
        { image: 'https://premierleague-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p110979.png', name: 'Sadio Mane', jersey_number: '1', position: 'Forward' },
        { image: 'http://ssref.net/scripts/image_resize.cgi?min=200&url=https://d6rt22vwfyr3i.cloudfront.net/req/201810311/images/headshots/d70ce98e_2018.jpg', name: 'Lionel Messi', jersey_number: '9', position: 'Forward' },
        { image: 'https://premierleague-static-files.s3.amazonaws.com/premierleague/photos/players/250x250/p78830.png', name: 'Harry Kane', jersey_number: '5', position: 'Striker' },
        { image: 'https://static1.squarespace.com/static/595547789de4bbe39224b04a/t/596e36ebcd39c31f2df8d3a7/1500475961007/2006_Mia+Hamm.jpg', name: 'Mia Hamm', jersey_number: '14', position: 'Forward' },
        { image: 'https://playerswiki.com/uploads/thumb/xcarli-lloyd-300-300.jpeg.pagespeed.ic.UcHh3gWfSM.jpg', name: 'Carli Lloyd', jersey_number: '22', position: 'Midfielder' },
        { image: 'https://marriedbiography.com/wp-content/uploads/2017/12/Adrianna-Franch.jpg', name: 'Adrianna Franch', jersey_number: '3', position: 'Goalkeeper' },
        { image: 'http://hollywoodmask.com/uploads/images/tobin-heath(1).jpg', name: 'Tobin Heath', jersey_number: '4', position: 'Forward' },
        { image: 'https://marriedbiography.com/wp-content/uploads/2017/12/Emily-Sonnett.jpg', name: 'Emily Sonnett', jersey_number: '24', position: 'Midfielder' },
        { image: 'https://i8.lisimg.com/8840318/280full.jpg', name: 'Becky Sauerbrunn', jersey_number: '40', position: 'Forward' },
        { image: 'https://washingtonspirit.com/wp-content/uploads/2018/01/rose-lavelle.jpg', name: 'Rose Lavelle', jersey_number: '21', position: 'Midfielder' },
        { image: 'http://bloximages.chicago2.vip.townnews.com/insidenova.com/content/tncms/assets/v3/editorial/7/ab/7aba8345-9bc3-5c8e-8a46-60efa597485c/50f433cff3c05.image.jpg', name: 'Ali Krieger', jersey_number: '23', position: 'Defender' }
      ])
    })
}
