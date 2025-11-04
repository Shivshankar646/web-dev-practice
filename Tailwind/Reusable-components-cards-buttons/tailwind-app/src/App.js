import React from "react";
import Card from "./components/Card";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-wrap justify-center items-center">
      <Card
        image="https://thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg"
        title="Beautiful Nature"
        description="Experience the serenity of nature and the beauty of landscapes."
      />
      <Card
        image="https://my.alfred.edu/zoom/_images/foster-lake.jpg"
        title="Peaceful Lake"
        description="Enjoy the calm and quiet of a peaceful lakeside view."
      />
      <Card
        image="https://www.pixelstalk.net/wp-content/uploads/2016/07/Download-Free-Pictures-3840x2160.jpg"
        title="Mountain View"
        description="Witness the breathtaking views of mountain peaks."
      />
    </div>
  );
}

export default App;

