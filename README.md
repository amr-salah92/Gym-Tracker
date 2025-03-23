# Gym Tracker Web App

## Description

Gym Tracker is a web application designed to help users track and analyze their workout progress. The app features a modern, responsive design with light and dark mode options. Users can log workouts, view detailed logs, generate reports, and manage training exercises.

## Features

- **Workout Section**: Select muscle groups, add exercises, and log workout details.
- **Log Page**: View and manage previously saved workout data.
- **Reports Section**: Visualize progress with interactive charts and graphs.
- **Training Management**: Add, edit, and manage training exercises.
- **Step Counter**: Track steps and calories burned in real-time.
- **Measurements & Calculations**: Input and update physical measurements, with automatic calculations for BMI, muscle, and fat percentages.
- **Offline Mode**: Store data locally and sync with the database when online.
- **Responsive Design**: Works seamlessly on both web and mobile platforms.

## Technologies Used

- **Frontend**: React, CSS
- **Backend**: Node.js, Express
- **Database**: Supabase
- **Offline Support**: Service Workers, IndexedDB

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/gym-tracker-app.git
   ```

2. Navigate to the project directory:
   ```sh
   cd gym-tracker-app
   ```

3. Set up environment variables:
   ```sh
   cp .env.example .env
   ```

4. Build and run the Docker containers:
   ```sh
   docker-compose up --build
   ```

5. The app will be accessible at `http://localhost:3000` and the backend API at `http://localhost:5000`.

## Usage

- Navigate to `http://localhost:3000` in your web browser to access the Gym Tracker app.
- Use the navigation bar to switch between Workout, Log, and Reports sections.
- Add and manage workouts, view logs, and generate reports to track progress.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.