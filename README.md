# Patient Records Dashboard

A simple and responsive React web application for managing patient records. Built using **React**, **Vite**, and **Tailwind CSS**.

## Live Link

https://jaruratcare-wmmz.onrender.com/

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

![home](https://github.com/user-attachments/assets/1bc247be-fba3-4e5e-808c-868702395d34)


### Patients Dashboard

![patients](https://github.com/user-attachments/assets/27471840-9c14-4509-82c7-9852e63afaaa)


### Patient Details Modal

![viewpage](https://github.com/user-attachments/assets/c454cc0f-a106-444e-9905-c6ea8cb35c96)


### About Page

![about](https://github.com/user-attachments/assets/87d96aa4-2b7e-4162-ba0b-0931d1ac7a02)


### Search Functionality

![search ](https://github.com/user-attachments/assets/bbb55a21-39b7-48fb-b570-44bdf420f133)



### Add New Patient Modal

![add](https://github.com/user-attachments/assets/5cd82b57-10d5-4df0-8227-34077b3c4d66)


### After Adding

![newrecord](https://github.com/user-attachments/assets/1b3721ab-ada7-43b9-bcb2-1dd5a4d27346)




## Notes

* All patient data is fetched from a mock API (`https://jsonplaceholder.typicode.com/users`).
* Adding new patients only updates local state, not persisted in a backend.
* Fully responsive for desktop and mobile.

## Author

Mohd Abdul Rahman

---

