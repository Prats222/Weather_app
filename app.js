//jshint esversion:6


const express = require("express");
const request = require("request");
const https = require("https");
const bodyParser = require("body-parser");
const ejs = require("ejs");
var querystring = require('querystring');
const SpotifyWebApi = require('spotify-web-api-node');
require("dotenv").config();
const app = express();
var city, count;
var temperature;
var temp_2;
var temp_3;
var temp_4;
var pressure;
var humidity;
var visibility;
var wind;
var cloud;
var fname = [];
var fartist = [];
var fimg = [];
var fhref = [];
// var user_id = '7c16ae0ab15c404bb748055929b97de6'
var token = "";


const scopes = [
  'ugc-image-upload',
  'user-read-playback-state',
  'user-modify-playback-state',
  'user-read-currently-playing',
  'streaming',
  'app-remote-control',
  'user-read-email',
  'user-read-private',
  'playlist-read-collaborative',
  'playlist-modify-public',
  'playlist-read-private',
  'playlist-modify-private',
  'user-library-modify',
  'user-library-read',
  'user-top-read',
  'user-read-playback-position',
  'user-read-recently-played',
  'user-follow-read',
  'user-follow-modify'
];

// credentials are optional

var clientId = '7c16ae0ab15c404bb748055929b97de6';
var clientSecret = '6a91e71c4e50484db5425dd319667800';
var redirectUri = 'http://localhost:3000/callback';


var generateRandomString = function(length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

var stateKey = 'spotify_auth_state';


app.get('/login', function(req, res) {

  var state = generateRandomString(16);
  res.cookie(stateKey, state);

  // your application requests authorization
  var scope = 'user-read-private user-read-email';
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: clientId,
      scope: scope,
      redirect_uri: redirectUri,
      state: state
    })
  );
});

app.get('/callback', function(req, res) {

  // your application requests refresh and access tokens
  // after checking the state parameter

  var code = req.query.code || null;
  var state = req.query.state || null;
  var storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null) {
    res.redirect('/#' +
      querystring.stringify({
        error: 'state_mismatch'
      }));
  } else {
    res.clearCookie(stateKey);
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: redirectUri,
        grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': 'Basic ' + (new Buffer(clientId + ':' + clientSecret).toString('base64'))
      },
      json: true
    };

    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {

        var access_token = body.access_token,
          refresh_token = body.refresh_token;

        var options = {
          url: 'https://api.spotify.com/v1/me',
          headers: {
            'Authorization': 'Bearer ' + access_token
          },
          json: true
        };

        // use the access token to access the Spotify Web API
        request.get(options, function(error, response, body) {
          console.log(body);
        });

        // we can also pass the token to the browser to make requests from there
        res.redirect('/#' +
          querystring.stringify({
            access_token: access_token,
            refresh_token: refresh_token

          })



        );

        token = "Bearer "+access_token+"&refreshtoken"+refresh_token;
        console.log(token);
      } else {
        res.redirect('/#' +
          querystring.stringify({
            error: 'invalid_token'
          }));
      }
    });
  }
});

app.use(express.urlencoded({
  extended: true
}));
app.set("view engine", "ejs");


app.use(express.static("public"));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/Images', express.static(__dirname + 'public/Images'));


app.get("/", function(req, res) {
  res.render("index", {
    weather: null,
    error: null
  });
})



app.post("/", function(req, res) {
  console.log(req.query);
  city = req.body.cityName;
  const appid = "7c01dabdb9d026e60d33755e166d2d72";
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + appid;
  request(url, function(err, response, body) {

    if (err) {
      console.log("Error!");
      res.render('error', {
        weather: null,
        error: 'Error,please try again!'
      });
    } else {

      var weather = JSON.parse(body);

      console.log(weather);

      if(weather.cod=='404')
      {
        console.log("Hello!");
        res.render('error', {
          weather: null,
          error: weather.message
        });
      }

      else{

        temperature = Math.round(weather.main.temp);
        temp_2 = Math.round(weather.main.feels_like);
        temp_3 = Math.round(weather.main.temp_min);
        temp_4 = Math.round(weather.main.temp_max);
        pressure = weather.main.pressure;
        humidity = weather.main.humidity;
        visibility = weather.visibility;
        wind = Math.round(weather.wind.speed);
        cloud = weather.clouds.all;
        var desc = weather.weather[0].description;
        // console.log(desc);


        res.render('output', {
          weather: weather,
          city: city,
          desc: desc,
          temperature: temperature,
          temp_2: temp_2,
          temp_3: temp_3,
          temp_4: temp_4,
          pressure: pressure,
          humidity: humidity,
          visibility: visibility,
          wind: wind,
          cloud: cloud,
          error: null
        });
      }



    }

  });

})

app.get("/hours", function(req, res) {

  console.log(city);
  const appid = "7c01dabdb9d026e60d33755e166d2d72";
  const url = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=metric&appid=" + appid;
  request(url, function(err, response, body) {

    if (err) {
      res.render('index', {
        weather: null,
        error: 'Error,please try again!'
      });
    } else {

      var weather = JSON.parse(body);

      var list = weather.list;
      // console.log(weather);
      var temperature = [];
      var des = [];
      var humidity = [];
      var pressure = [];
      var time = [];

      for (var i = 0; i < list.length; i++) {
        temperature[i] = (Math.round(list[i].main.temp));
        des[i] = list[i].weather[0].description;
        humidity[i] = list[i].main.humidity;
        pressure[i] = list[i].main.pressure;
        time[i] = list[i].dt_txt;
      }
      count = list.length;


      // console.log(temperature);
      // console.log(des);
      // console.log(temperature);
      // console.log(humidity);
      // console.log(pressure);
      // console.log(time);
      const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + appid;
      request(url, function(err, response, body){
        var weather = JSON.parse(body);
        // console.log(weather);
        var desc = weather.weather[0].description;
        // console.log(desc);
        res.render('48_hours', {
          desc:desc,
          weather: weather,
          temperature: temperature,
          des: des,
          humidity: humidity,
          pressure: pressure,
          time: time,
          count: count,
          city: city
        })
      })




    }
  });
})

app.post('/listen', function(req, res) {
  var playlistName;
  var playlistId;

  var cityMusic = req.body.cityMusic;
  // console.log(cityMusic);
  const appid = "7c01dabdb9d026e60d33755e166d2d72";
  const url3 = "https://api.openweathermap.org/data/2.5/weather?q=" + cityMusic + "&units=metric&appid=" + appid;
  request(url3, function(err, response, body) {
    var weather = JSON.parse(body);

    var desc = weather.weather[0].description;
    // console.log(desc);
    var type = "";
    if(desc=='clear sky'||desc=='few clouds') {
      type = 'Joyful';
    }
    else if(desc=='scattered clouds' || desc=='broken clouds') {
      type = 'Serene';
    }
    else if( desc=='rain'|| desc=='light rain'|| desc=='moderate rain')
    {
      type='Romantic';
    }
    else if(desc=='thunderstorm'|| desc=='thunderstorm with rain'|| desc=='overcast clouds' )
    {
      type='Loud';
    }
    else if(desc=='haze'||desc=='mist')
    {
      type='Sad';
    }
    else {
      type = 'Lo-Fi';
    }
    console.log("Hi");
    console.log(token);
    console.log("Hi");
    var playlists_url = "https://api.spotify.com/v1/users/313uggixka5ccgcoqasz3cdugk2a/playlists";

    request({
      url: playlists_url,
      headers: {
        "Authorization": token
      }
    }, function(err, response,body) {
      if (err) {
        console.log(err);
      }
      if (res) {
        var playlists = JSON.parse(body);
        // console.log(playlists);
        var i = 0;
        playlists.items.forEach(function(track) {
          if (track.name == type) {
            playlistName = track.name,
              playlistId = track.id

          }
        })
        console.log(playlistName);
        console.log(playlistId);
        // console.log(type);

        var playlist_url = "https://api.spotify.com/v1/playlists/" + playlistId + "/tracks";
        request({
          url: playlist_url,
          headers: {
            "Authorization": token
          }
        }, function(err, response,body) {
          if (res) {
            var songName = [];
            var songArtist = [];
            var songImg = [];
            var songHref = [];
            var songs = JSON.parse(body);
            // console.log(songs)
            // console.log("playlist: " + playlist.name);
            var j = 0;
            songs.items.forEach(function(track) {
              songName[j] = track.track.name;
              songArtist[j] = track.track.artists[0].name;
              songImg[j] = track.track.album.images[0].url;
              songHref[j++] = track.track.external_urls.spotify;
            });
            // consol.log(songHref);
            arr = [];
            while (arr.length < 3) {
              var r = Math.floor(Math.random() *(5-0+1) + 0);
              if (arr.indexOf(r) === -1) arr.push(r);
            }
            for (var i = 0; i < 3; i++) {

              console.log(arr);
              fname[i] = songName[arr[i]];
              fartist[i] = songArtist[arr[i]];
              fimg[i] = songImg[arr[i]];
              fhref[i] = songHref[arr[i]];
            }

            // res.render('music_output', {
            //
            //   fname: fname,
            //   fartist: fartist,
            //   fimg: fimg
            // });
          }
          console.log(fhref);
          console.log(fname);
          console.log(fartist);
          console.log(fimg);
          res.render('music_output', {
            desc:desc,
            type:type,
            fname: fname,
            fartist: fartist,
            fimg: fimg
          });
        })


      }
    })


  })
})


app.get('/index', function(req, res) {
  res.render('index');
})

app.get('/About', function(req, res) {
  res.render('About');
})

app.get('/Support', function(req, res) {
  res.render('Support');
})

app.get('/music', function(req, res) {
  res.render('music');
})

app.get('/home', function(req, res) {
  res.render('index');
})

app.listen(3000, function() {
  console.log("Server is running on port 3000");
})
