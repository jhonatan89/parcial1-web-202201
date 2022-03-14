const { default: axios } = require("axios");
const res = require("express/lib/response");

const getUser = async (username) => {
  let resp;

  //TODO user logic
  const names = await axios(`https://mauvelous-leopard-5257.twil.io/friends`);
  const userData = await names.data.friends.map((x)=>x.username);

  let user = userData.some(u => username == u);
  if (user == true){
    const servicioPlays = await axios(`https://mauvelous-leopard-5257.twil.io/plays-detail?username=${username}`);
    const plays =servicioPlays.data.plays;
    const nplays = plays.length;

    const servicioFiends = await axios(`https://mauvelous-leopard-5257.twil.io/friend-detail?username=${username}`);
    const friends = servicioFiends.data.friends;
    const nfriends = friends.length;

    resp = {
      "username": username,
      "plays": nplays,
      "friends": nfriends,
      "tracks": [
        plays
      ],
      "uri": `/users/${username}`
    }
  }
  else{
    resp="no existe username";
  }
  
  return { message: resp };
};

module.exports = { getUser };
