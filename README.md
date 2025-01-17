# Yumm Cart 🛒

**Yumm Cart** is a food ordering application built using React, Redux Toolkit, and Vite. It features a cart, a checkout form, and integrates with a dummy backend to manage food items and orders.

The backend includes a predefined list of foods and images.
This project is created using Vite for a fast and modern development experience.

## Features

- **Food List**: Display a predefined list of foods.
- **Add to Cart**: Allow users to add items to a cart with dynamic quantity updates.
- **Cart Overview**: View selected items, their quantities, and total price.
- **Checkout Form**: Submit user information for checkout.
- **Success Page**: Display a success message upon completing the checkout process.
- **State Management**: Efficient state management with Redux Toolkit.

## Technology Stack

- **Frontend Framework**: React.js
- **State Management**: Redux Toolkit
- **Styling**: CSS Modules

## Prerequisites
- Node.js installed on your system.
- NPM or Yarn for package management

## Installation and Setup
Clone the repository:
```bash
git clone https://github.com/dev-sammy/yumm-cart.git
cd yumm-cart
```

### Backend
Navigate to the backend folder:
```bash
cd backend
```
Install dependencies:
```bash
npm install
```
Start the backend server:
```bash
npm start
```
The backend will run on `http://localhost:3000` by default.

### Frontend
Install dependencies:
```bash
npm install
```
Create a `.env` file in the root of the project with the following content:
```bash
VITE_API_BASE_URL=http://localhost:3000
```
Start the development server:
```bash
npm run dev
```
The application will run on `http://localhost:5173` by default.

## Usage
1. Browse the list of available food items.
2. Add desired items to the cart.
3. Open the cart and proceed to checkout.
4. Submit the form to simulate order placement.
5. View a success message upon order completion.

## Folder Structure
```plaintext
.
├── backend/             # Dummy backend server
│   ├── data/            # JSON files for meals and orders
│   ├── public/          # Static assets (e.g., food images)
│   └── server.js        # Express server code
├── src/                 # Frontend source code
│   ├── components/      # React components
│   ├── constants/       # Constant files
│   ├── store/           # Redux slices and store configuration
│   ├── util/            # Utility functions
│   └── App.jsx          # Main React component
├── package.json         # Frontend dependencies
└── vite.config.js       # Vite configuration
```

## Local Backend Notes
- The dummy backend is powered by Node.js and Express.
- It provides:
  - GET `/meals`: Returns a list of available meals.
  - POST `/orders`: Accepts order data and validates input.

## Contributions
Feel free to fork this repository and submit pull requests. Contributions and suggestions are welcome!

## License
This project is licensed under the MIT License. See the `LICENSE` file for details

## Acknowledgments
Dummy backend and the predefined list of foods and images are derived from the [Udemy course](https://www.udemy.com/course/react-the-complete-guide-incl-redux/).


