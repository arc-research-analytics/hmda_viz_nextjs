import HighchartsDrilldownMap from "@/components/HighchartsDrilldownMap";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-2xl">HMDA Explorer</h1>
      <div className="mt-4">
        <HighchartsDrilldownMap />
      </div>
    </div>
  );
};

export default HomePage;
