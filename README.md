# React Todo List App

This is a simple React Todo List application built using Redux and RxJS. It allows you to add, edit, delete, and mark tasks as completed. This README file provides an overview of the project, how to set it up locally, and some additional information about the technologies used.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Add new tasks to the list.
- Edit existing tasks.
- Mark tasks as completed.
- Delete tasks.
- Filter tasks by status (All, Active, Completed).
- Clear completed tasks.
- Local storage persistence: Tasks will be saved in the browser's local storage for future visits.

## Technologies Used

- **React**: The front-end user interface is built using React, a popular JavaScript library for building user interfaces.

- **Redux**: Redux is used for managing the state of the application. It provides a predictable way to manage the application's data.

- **RxJS**: RxJS is used for handling asynchronous operations and managing the flow of data in a reactive manner.

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

- Node.js and npm (Node Package Manager) installed on your computer.

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/jorgeolarte/todo-list-redux-rxjs-router.git
   ```

2. Navigate to the project directory:

   ```bash
   cd react-todo-list
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

### Running the Application

Once you've installed the dependencies, you can start the development server.

```bash
npm start
```

The application will be available at `http://localhost:3000/` in your web browser.

## Project Structure

The project follows a standard React project structure with some additional directories for Redux and RxJS integration:

- `src/`: Contains the source code for the React application.
  - `components/`: React components used in the application.
  - `redux/`: Redux-related files (actions, reducers, store configuration).
  - `rxjs/`: RxJS-related files for handling asynchronous operations.
  - `App.js`: The main application component.
  - `index.js`: Entry point for the React application.
- `public/`: Contains static assets and the HTML template.

## Usage

1. **Adding a Task**: Enter a task in the input field and press Enter or click the "Add" button to add it to the list.

2. **Editing a Task**: Double-click on a task to edit its content. Press Enter to save the changes, or Esc to cancel.

3. **Completing a Task**: Click the checkbox next to a task to mark it as completed. Completed tasks will have a line-through style.

4. **Deleting a Task**: Click the "X" button next to a task to delete it from the list.

5. **Filtering Tasks**: Use the filter buttons (All, Active, Completed) to filter tasks based on their completion status.

6. **Clear Completed Tasks**: Click the "Clear Completed" button to remove all completed tasks from the list.

7. **Local Storage**: Tasks are automatically saved in the browser's local storage, so they persist across page refreshes.

## Contributing

If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and test them thoroughly.
4. Submit a pull request with a clear description of your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Thank you for using the React Todo List App! If you have any questions or encounter any issues, please feel free to open an issue on the GitHub repository. Happy coding!
