# React Payment Integration with Protected Routes

This project demonstrates a React application that integrates with the SabPaisa payment service. It shows a payment page initially and redirects to a protected route (TodoApp) only after a successful payment.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Setup](#setup)
- [Usage](#usage)
- [Components](#components)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Overview

This application consists of a payment gateway integration using SabPaisa and a protected route that becomes accessible only after a successful payment. The status of the payment is determined by checking the URL parameters for `status=SUCCESS`.

## Features

- Integration with SabPaisa Payment Gateway
- Checks for payment success based on URL parameters
- Conditionally renders a protected route (TodoApp) after successful payment
- Utilizes local storage to manage payment status

## Deployed Links
[Backend service](https://www.genome.gov/)
 - <h4 style="color:red">please wait for the backend service to spin up for atleast 50 seconds</h4>
 
[Front end app](https://rentkar.vercel.app/payment)


### Prerequisites

- Node.js (>=14.x)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/react-payment-protected-route.git
   cd react-payment-protected-route
   ```

2. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Application

1. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

2. Open your browser and navigate to `http://localhost:3000`.

## Usage

1. **Payment Process:**
   - The application initially displays the `PaymentPage` component.
   - Fill out the payment details and submit the form to process the payment through SabPaisa.
   - <h5 style="color:green">JUST CLICK ON PROCEED WITHOUT ANY NEED TO FILL ADDITIONAL DETAILS<h3>

2. **Payment Success:**
   - Upon successful payment, SabPaisa redirects back with a URL containing `status=SUCCESS`.
   - The `CheckPaymentStatus` component detects this status and updates local storage.

3. **Accessing the Protected Route:**
   - After a successful payment, the protected route (`TodoApp`) is accessible.
   - Navigate to `/todo` to access the protected route.

## Components

### 1. `CheckPaymentStatus`

A component that checks the URL parameters for `status=SUCCESS` and stores this status in local storage.

### 2. `PaymentPage`

A component that handles the SabPaisa payment integration.

### 3. `TodoApp`

The protected route component that becomes accessible only after a successful payment.

### 4. `ProtectedRoute`

A component that checks local storage for payment status and conditionally renders the protected component.

## Project Structure

```
react-payment-protected-route/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── CheckPaymentStatus.js
│   │   ├── PaymentPage.js
│   │   ├── TodoApp.js
│   │   └── ProtectedRoute.js
│   ├── App.js
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## Deployed Links
[Backend service](https://www.genome.gov/)
 - <h4 style="color:red">please wait for the backend service to spin up for atleast 50 seconds</h4>
 
[Front end app](https://rentkar.vercel.app/payment)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
