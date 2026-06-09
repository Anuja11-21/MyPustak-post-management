# MyPustak Post Management App

A complete full-stack post management application built with FastAPI (backend) and React + Vite (frontend).

## Project Structure

```
mypustak-post-app/
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   ├── routers/
│   │   └── posts.py
│   ├── models/
│   │   └── post.py
│   └── README.md
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── PostForm.jsx
│   │   │   ├── PostList.jsx
│   │   │   └── PostCard.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── README.md
└── README.md
```

## Backend Setup

### Installation

```bash
cd backend
pip install -r requirements.txt
```

### Running the Server

```bash
uvicorn main:app --reload
```

The backend will run on http://localhost:8000

You can check the API documentation at http://localhost:8000/docs

## Frontend Setup

### Installation

```bash
cd frontend
npm install
```

### Running the Server

```bash
npm run dev
```

The frontend will run on http://localhost:5173

## Features

- ✅ Create new posts with title and body
- ✅ View all posts in cards
- ✅ Delete posts
- ✅ Form validation
- ✅ Loading states
- ✅ Error handling
- ✅ Responsive design with TailwindCSS
- ✅ CORS enabled for React frontend

## Deployment

### Live Application

Frontend:
https://mypustak-frontend1.onrender.com/

Backend API Documentation:
https://mypustak-post-management-7s7g.onrender.com/docs

## API Endpoints

### Get All Posts

```http
GET /posts
```

### Create Post

```http
POST /posts
```

Request Body:

```json
{
  "title": "Sample Title",
  "body": "Sample Post Content"
}
```

### Delete Post

```http
DELETE /posts/{id}
```

## Technologies Used

### Frontend

* React.js
* Vite
* Axios
* Tailwind CSS

### Backend

* FastAPI
* Python
* Uvicorn

### Deployment

* Render Web Service
* Render Static Site
* GitHub



