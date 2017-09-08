"use strict";

var search = function search() {
  var text = document.getElementById("name").value;
  var text2 = document.getElementById("food").value;
  if (text == "" && text2 == "") {
    getAll();
  } else if (text == "" && text2 != "") {
    getBeers("food=" + text2);
  } else if (text != "" && text2 == "") {
    getBeers("beer_name=" + text);
  } else {
    getBeers("beer_name=" + text + "&food=" + text2);
  }
};

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

var url = "https://api.punkapi.com/v2/beers/?";

var getBeers = function getBeers(param) {
  fetch("" + url + param).then(function (response) {
    return response.json();
  }).catch(function (e) {
    return console.error('Failed while fetching github user profile');
  }).then(function (response) {
    var beers = document.getElementById("beers");
    beers.innerHTML = "";
    for (var i = 0; i < response.length; i++) {
      console.log(response[i].name);
      var span = createNode('span'),
          div = createNode('div');
      var header = createNode('h2'),
          img = createNode('img');
      header.setAttribute("style", "text-align:center");
      header.innerHTML = "" + response[i].name;
      img.setAttribute("src", "" + response[i].image_url);
      span.innerHTML = "<b>Tagline :  </b>" + response[i].tagline + "<br/><b>First Brewed :  </b>" + response[i].first_brewed + "<br/><b>Description : </b>";
      span.innerHTML += "" + response[i].description;
      span.innerHTML += "<br/><b>Food Pairing :  </b>" + response[i].food_pairing + "<br/><br/>";
      div.setAttribute("class", "w3-panel w3-card");
      img.setAttribute("class", "center");
      append(beers, div);
      append(div, header);
      append(div, img);
      append(div, span);
    }
  });
};

var getAll = function getAll() {
  fetch('https://api.punkapi.com/v2/beers/?').then(function (response) {
    return response.json();
  }).catch(function (e) {
    return console.error('Failed while fetching github user profile');
  }).then(function (response) {
    var beers = document.getElementById("beers");
    beers.innerHTML = "";
    for (var i = 0; i < response.length; i++) {
      console.log(response[i].name);
      var span = createNode('span'),
          div = createNode('div');
      var header = createNode('h2'),
          img = createNode('img');
      header.setAttribute("style", "text-align:center");
      header.innerHTML = "" + response[i].name;
      img.setAttribute("src", "" + response[i].image_url);
      span.innerHTML = "<b>Tagline :  </b>" + response[i].tagline + "<br/><b>First Brewed :  </b>" + response[i].first_brewed + "<br/><b>Description : </b>";
      span.innerHTML += "" + response[i].description;
      span.innerHTML += "<br/><b>Food Pairing :  </b>" + response[i].food_pairing + "<br/><br/>";
      div.setAttribute("class", "w3-panel w3-card");
      img.setAttribute("class", "center");
      append(beers, div);
      append(div, header);
      append(div, img);
      append(div, span);
    }
  });
};

getAll();
