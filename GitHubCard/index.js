import axios from 'axios'

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

let followersArray = [];

axios.get('https://api.github.com/users/sam-lalli')
  .then(res => {    
    axios.get(res.data.followers_url).then(res2 =>{
      followersArray = [...res2.data]
      followersArray.map(item =>( 
        entryPoint.appendChild(gitHubCard(item))
      ))
    })
    entryPoint.appendChild(gitHubCard(res.data))
  })
  .catch(err =>{
    console.log(err)
  })


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
 const entryPoint = document.querySelector('.cards')

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/





/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function gitHubCard( {avatar_url, name, login, location, html_url, followers, following, bio} ){
  //instantiating the elements
  const mainCard = document.createElement('div')
  const picture = document.createElement('img')
  const info = document.createElement('div')
  const h3 = document.createElement('h3')
  const userName = document.createElement('p')
  const city = document.createElement('p')
  const profile = document.createElement('p')
  const link = document.createElement('a')
  const fans = document.createElement('p')
  const friends = document.createElement('p')
  const aboutMe = document.createElement('p')
  //class names and attributes
  mainCard.classList.add("card")
  picture.src = avatar_url
  info.classList.add("card-info")
  h3.classList.add("name")
  h3.textContent = name
  userName.classList.add('username')
  userName.textContent = login
  city.textContent = `Location: ${location}`
  profile.textContent = 'Profile:'
  link.href = html_url
  link.textContent = html_url
  fans.textContent = `Followers: ${followers}`
  friends.textContent = `Following: ${following}`
  aboutMe.textContent = `Bio: ${bio}`
  //creating structure
  mainCard.appendChild(picture)
  mainCard.appendChild(info)
  info.appendChild(h3)
  info.appendChild(userName)
  info.appendChild(city)
  info.appendChild(profile)
  profile.appendChild(link)
  info.appendChild(fans)
  info.appendChild(friends)
  info.appendChild(aboutMe)

  return mainCard
}



