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
✅ Simulation of multiple page replacement strategies

📊 Visualization of frame states at each step

📈 Comparison charts and tables for fault/hit rates

🧩 Modular codebase with separate algorithm and component folders

⚡ Built with React + TypeScript + Vite for speed and simplicity

📂 Project Structure
Code
src/
├── algorithms/        # FIFO, LRU, LFU, Optimal, Clock implementations
├── components/        # UI components (charts, tables, forms, visualization)
├── App.tsx            # Main application entry
├── main.tsx           # React root

⚙️ Installation & Setup
1. Clone the repository
git clone https://github.com/<your-username>/page-replacement-algorithm.git
cd page-replacement-algorithm
2. Install dependencies
Make sure you have Node.js  (>=18) and npm installed. Then run:
npm install
3. Development server
Start the local dev server:
npm run dev
4. Build for production
To generate a production build:
npm run build
5. Preview production build
npm run preview
📊 Usage
Enter a reference string and frame size in the simulation form.

Click Run Simulation to view step-by-step results.

Compare algorithms using charts and tables.

👥 Collaborator Notes
Ensure Node.js  18+ is installed (older versions may cause PostCSS/Tailwind errors).

If you encounter PostCSS config issues, confirm you have @tailwindcss/postcss installed:
npm install -D @tailwindcss/postcss autoprefixer
The project uses TypeScript, so type definitions are enforced.

All algorithm implementations return both summary stats and step-by-step traces for visualization.
