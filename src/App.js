import Video from './components/Video';
import './styles/App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get('http://localhost:4000/v2/posts');
      setVideos(response.data.dbVideos);
      return response;
    }
    fetchPosts();
  }, [])

  console.log(videos);


  return (
    <div className="app">
      <div className="app_videos">
        {videos.map(({ url, channel, description, song, likes, messages, shares, _id }) => (
          <Video
            key={_id}
            url={url}
            channel={channel}
            description={description}
            song={song}
            likes={likes}
            shares={shares}
            messages={messages}
          />
        ))}
        {/* <Video url={v1} channel={"Hassaam"} description={"This MERN Tik tok Clone"} song={"Ha ha"} likes={1234} shares={2} messages={23} /> */}
        {/* <Video url={v1} channel={"Hassaam"} description={"This MERN Tik tok Clone"} song={"Ha ha"} likes={1234} shares={2} messages={23} /> */}
      </div>
    </div>
  );
}

export default App;
