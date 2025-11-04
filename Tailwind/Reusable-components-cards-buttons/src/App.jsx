import Card from "./components/Card";
import Button from "./components/Button";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-10 space-y-10">
      <h1 className="text-3xl font-bold text-center">Reusable Components 🚀</h1>

      <div className="flex justify-center gap-4">
        <Button text="Primary" color="blue" />
        <Button text="Success" color="green" />
        <Button text="Danger" color="red" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card
          title="Mountain View"
          description="Beautiful scenery of nature with Tailwind magic."
          image="https://picsum.photos/300/200"
        />
        <Card
          title="City Lights"
          description="Experience the modern world in style."
          image="https://picsum.photos/301/200"
        />
        <Card
          title="Calm Ocean"
          description="Peaceful vibes with reusable UI components."
          image="https://picsum.photos/302/200"
        />
      </div>
    </div>
  );
}

export default App;

