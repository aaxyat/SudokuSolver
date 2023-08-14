# SudokuSolver

A comprehensive Sudoku solver that allows users to either manually input numbers or upload a CSV representation of a Sudoku board to get the solution. Built using React for the frontend and Node.js for the backend.

## 📌 Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Docker Deployment](#docker-deployment)
- [Contribution](#contribution)
- [License](#license)

## 🛠 Installation

1. **Clone this repository:**
```

git clone <https://github.com/aaxyat/SudokuSolver.git>

```
2. **Change directory into the project folder:**
```

cd SudokuSolver

```
3. **Install dependencies and start both frontend and backend:**
```

npm install
npm start

```

## 🖥 Usage

1. **Navigate** to `http://localhost:3000` in your web browser.
2. **Fill out** the Sudoku grid or upload a CSV representing the board.
3. **Click** on the "Solve" button to get the solution.

## 🐳 Docker Deployment

1. **Pull the Docker image** from Docker Hub:
```

docker pull aaxyat/SudokuSolver

```
2. **Run the application** using:
```

docker run -p 5000:5000 aaxyat/SudokuSolver

```

📘 For more detailed instructions on Docker, please refer to the [official Docker documentation](https://docs.docker.com/get-started/).

## 🤝 Contribution

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## 📜 License

[MIT License](./LICENSE)