const getGithubProfile = () =>
  fetch('https://api.punkapi.com/v2/beers/?beer_name=brown')

  getGithubProfile()
  .then(response => response.json())
  .catch(e => console.error('Failed while fetching github user profile'))
  .then(function(response) {
    console.log(JSON.stringify(response));
    document.getElementById("demo").innerHTML = JSON.stringify(response);
  })