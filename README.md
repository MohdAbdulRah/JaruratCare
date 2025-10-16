# Patient Records Dashboard

A simple and responsive React web application for managing patient records. Built using **React**, **Vite**, and **Tailwind CSS**.

## Features

* Landing page with header and navigation.
* Patients page displaying a list of patients in a responsive card/grid layout.
* Search bar to filter patients by name.
* View patient details in a modal.
* Add new patient via a modal form (local state only, no backend).
* Loading and error states while fetching API.
* Fully responsive and hi-fi modern design using Tailwind CSS.

## Tech Stack

* React 18
* Vite
* Tailwind CSS
* JavaScript (ES6+)

## Installation & Setup

1. **Clone the repository:**

```bash
git clone <your-repo-link>
cd patient-records-dashboard
```

2. **Install dependencies:**

```bash
npm install
```

3. **Start the development server:**

```bash
npm run dev
```

4. **Open in browser:**

Vite will provide a local URL, usually `http://localhost:5173/`. Open it in your browser.

## Build for Production

```bash
npm run build
```

This will create a `dist` folder ready to deploy.

## Deployment

You can deploy the project to **Vercel** or **Netlify**:

### Vercel

1. Install Vercel CLI (if not already):

```bash
npm i -g vercel
```

2. Deploy:

```bash
vercel
```

### Netlify

1. Drag and drop the `dist` folder in Netlify deploy area or connect GitHub repo.
2. Set build command as `npm run build` and publish directory as `dist`.

## Screenshots

### Landing Page

![Landing Page](screenshots/landing.png)

### Patients Dashboard

![Patients Dashboard](screenshots/patients.png)

### Patient Details Modal

![Patient Details](screenshots/details-modal.png)

### Add New Patient Modal

![Add Patient](screenshots/add-patient-modal.png)

## Notes

* All patient data is fetched from a mock API (`https://jsonplaceholder.typicode.com/users`).
* Adding new patients only updates local state, not persisted in a backend.
* Fully responsive for desktop and mobile.

## Author

Mohd Abdul Rahman

---

*Make sure to create a `screenshots` folder in your repo and add the above images for the screenshots references to work properly.*
