Page Replacement Algorithm Visualizer
📌 Overview
This project implements and compares five classic page replacement algorithms:

FIFO (First-In-First-Out)

LRU (Least Recently Used)

LFU (Least Frequently Used)

Optimal

Clock

The tool accepts arbitrary reference strings and frame sizes, generates execution traces, and calculates page fault rates. Results are displayed through tables and charts for easy comparison.

🚀 Features
Simulation of multiple page replacement strategies.

Visualization of frame states at each step.

Comparison charts and tables for fault/hit rates.

Modular codebase with separate algorithm and component folders.

Built with React + TypeScript + Vite for speed and simplicity.

📂 Project Structure
Code
src/
├── algorithms/        # FIFO, LRU, LFU, Optimal, Clock implementations
├── components/        # UI components (charts, tables, forms, visualization)
├── App.tsx            # Main application entry
├── main.tsx           # React root
⚙️ Installation & Setup
Clone the repository and install dependencies:

bash
git clone https://github.com/<your-username>/page-replacement-algorithm.git
cd page-replacement-algorithm
npm install
npm run dev
Open http://localhost:5173 in your browser.

📊 Usage
Enter a reference string and frame size in the simulation form.

Run the simulation to view step-by-step results.

Compare algorithms using charts and tables.

📘 References
Silberschatz, A., Galvin, P. B., & Gagne, G. (2018). Operating System Concepts (10th ed.). Wiley.

Tanenbaum, A. S., & Bos, H. (2015). Modern Operating Systems (4th ed.). Pearson.

👥 Contributors
Group 10 (Operating Systems Project)

Developed by 
MICHAEL ANARFO_ 22052414
ASIAMAH EMMANUEL DONKOR_22244211
NARH HENRY PADI DROMOR_10905050
OBADIAH DONKOR_22033341
WILLIAM KOFI ADADE_22163445
GYEKYE CHRISTIAN_22236160
GEORGE ASIRIFI FORDJOUR_22099948
PAPA BOYE_22042700
