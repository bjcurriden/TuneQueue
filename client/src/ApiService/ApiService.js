const baseUrl = "http://localhost:3001/queue";
const friendUrl = "http://localhost:3001/friend";

exports.addToQueue = async (item) => {
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(item)
    });
    return response.json()
  } catch (error) {
    console.error(error);
  }
}

exports.getQueue = async (item) => {
  try {
    const result = await fetch(baseUrl);
    const data = await result.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

exports.removeFromQueue = async (name) => {
  try {
  return fetch(`${baseUrl}/${name}`, {method: "DELETE"})
  } catch (error) {
    console.log(error)
  }
}

exports.addFriend =async(item) =>{
  try {
    const response = await fetch(friendUrl, {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(item)
    });
    return response.json()
  } catch (error) {
    console.error(error);
  }
}

exports.getFriends = async() =>{
  try {
    const result = await fetch(friendUrl);
    const data = await result.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

exports.removeFriend = async(name) =>{
  try {
    return fetch(`${friendUrl}/${name}`, {method: "DELETE"})
    } catch (error) {
      console.log(error)
    }
}

