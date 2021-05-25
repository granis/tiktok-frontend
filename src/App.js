import "./App.css";
import Video from "./Video";
import VideoFooter from "./VideoFooter";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video />
        <Video />
      </div>

      {/* app container */}
      {/* videos */}
      {/* <Video /> */}
      {/* <Video /> */}
      {/* <Video /> */}
      {/* <Video /> */}
      {/* <Video /> */}
      <VideoFooter />
    </div>
  );
}

export default App;
