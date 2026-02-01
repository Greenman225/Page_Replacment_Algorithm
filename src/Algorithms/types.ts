export interface SimulationStep {
    step: number;
    reference: number;
    frames: (number | null)[];
    fault: boolean;
    hit: boolean;
    algorithmState?: any;
}

export interface SimulationResult {
    algorithmName: string;
    steps: SimulationStep[];
    totalFaults: number;
    totalHits: number;
    hitRate: number;
    faultRate: number;
}

export interface PageReplacementAlgorithm {
    name: string;
    simulate: (referenceString: number[], frameCount: number) => SimulationResult;
}
