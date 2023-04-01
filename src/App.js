import "./App.css";
import Video from "./pages/Video"; //letra maiuscula

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video
          likes={100}
          messages={300}
          shares={200}
          name="Isabeli"
          description="Gato fofinho"
          music="Música engraçada"
          url="https://firebasestorage.googleapis.com/v0/b/jornada2-eb156.appspot.com/o/ZqU6oFX6.mp4.mp4?alt=media&token=9839e872-2d5e-4da3-9299-17eb2949831d"
        />
        <Video
          likes={111}
          messages={222}
          shares={333}
          name="Isabelirk"
          description="LOL"
          music="Música engraçada2"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
        />
      </div>
    </div>
  );
}

export default App;
