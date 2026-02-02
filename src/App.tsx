import { useState } from "react";
import { SimulationForm } from "./Component/SimulationForm";
import { ComparisonChart } from "./Component/ComparisonChart";
import { ComparisonTable } from "./Component/ComparisonTable";
import type { SimulationResult } from "./Algorithm/types";

// Import algorithms
import { fifo } from "./Algorithm/fifo";
import { clock } from "./Algorithm/clock";
import { lfu } from "./Algorithm/lfu";
import { lru } from "./Algorithm/lru";
import { optimal } from "./Algorithm/optimal";

function App() {
  const [results, setResults] = useState<SimulationResult[]>([]);

  const handleRun = (referenceString: number[], frameCount: number) => {
    // Run all algorithms
    const fifoResult = fifo.simulate(referenceString, frameCount);
    const clockResult = clock.simulate(referenceString, frameCount);
    const lfuResult = lfu.simulate(referenceString, frameCount);
    const lruResult = lru.simulate(referenceString, frameCount);
    const optimalResult = optimal.simulate(referenceString, frameCount);

    // Store results together
    setResults([fifoResult, clockResult, lfuResult, lruResult, optimalResult]);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">Page Replacement Simulator</h1>

      {/* Simulation Form */}
      <div className="mb-8">
        <SimulationForm onRun={handleRun} />
      </div>

      {/* Chart Visualization */}
      <div className="mb-8">
        <ComparisonChart results={results} />
      </div>

      {/* Table Visualization */}
      <div className="mb-8">
        <ComparisonTable results={results} />
      </div>
    </div>
  );
}

export default App;
