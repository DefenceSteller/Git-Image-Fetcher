import { useState } from 'react'


function App() {

  const [username, setUsername] = useState();
  const [photo, setPhoto] = useState('');

  const fetchUser = async() => {
  const result = await fetch(`https://api.github.com/users/${username}`);
  console.log(result)
  const image = await result.json();
  setPhoto(image);

}


  return (
    <>
    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
    <button onClick={fetchUser}>Get image</button>
    <img src={photo.avatar_url} alt="" />
    </>
  )
}

export default App
