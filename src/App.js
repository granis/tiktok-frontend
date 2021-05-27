import "./App.css";
import Video from "./Video";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
          url="http://media.w3.org/2010/05/sintel/trailer.ogv"
          channel="merndude"
          description="mern stack video"
          song="nena - 99 red balloons"
          likes={123}
          messages={333}
          shares={555}
        />
        <Video
          url="http://media.w3.org/2010/05/sintel/trailer.ogv"
          channel="other"
          description="completely different mern stack video"
          song="crazy frog - gangnam style redux"
          likes={1}
          messages={5}
          shares={7}
        />
      </div>

      {/* app container */}
      {/* videos */}
      {/* <Video /> */}
      {/* <Video /> */}
      {/* <Video /> */}
      {/* <Video /> */}
      {/* <Video /> */}
    </div>
  );
}

export default App;
