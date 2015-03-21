var request = require('request')
  , host = 'https://api.foursquare.com/v2/'
  , endpoint = 'lists/77847188/todos'
  , params = '?' + [ 'oauth_token='
                   , 'v=20150321'
                   ].join("&")
  , uri = host + endpoint + params


function getRandomItem(items){
  return items[ Math.floor(Math.random() * items.length ) ]
}


request.get(uri, function(err, res, body){
  if (err) { throw err }

  data = JSON.parse(body)
  console.log(data.response.list.listItems.items.count) // 197 
  console.log(data.response.list.listItems.items.length) //  only 30 !
  var listItems = data.response.list.listItems.items
  listItems.forEach(function(item){
      console.log(item.venue.name)
  })
  var places = listItems.map(function(item){
    return item.venue.name
  })
  console.log("\n\nYou should go to %s", getRandomItem(places))
})