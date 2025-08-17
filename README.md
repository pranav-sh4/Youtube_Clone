# 🎥 Video Streaming App (YouTube Clone)

A **frontend-only YouTube clone** built with **React, JavaScript, HTML, CSS, and Bootstrap**.
This project replicates the **core design and interactive features** of YouTube, focusing on **modern UI, responsiveness, and user interactions** such as search, video browsing, likes/dislikes, and dark mode.

---

## 🚀 Project Overview

This application allows users to:

* Browse trending and categorized videos.
* Search for videos by keywords.
* View video details, related videos, and comments.
* Like/Dislike videos.
* Switch between **light** and **dark** themes.
* Navigate seamlessly using **React Router**.

---

## 🎯 Project Goals

* Replicate YouTube’s **UI and core features**.
* Build a **responsive layout** for mobile, tablet, and desktop.
* Use **React state management** for likes, dislikes, and views.
* Implement **dark/light mode** toggle with persistence.
* Add **animations, hover effects, and loaders** for better UX.
* Deploy the app on **Vercel** with GitHub repository.

---

##  Features

### 📌 Homepage (Video Feed)

* Displays trending videos with:

  * Thumbnail
  * Title
  * Channel info (name + profile pic)
  * Views and posted time
* Clicking a video navigates to the **Video Details Page**.

### 📌 Navigation & Routing

* **Top Navbar**:

  * Search bar for finding videos
  * Profile icon (future authentication expansion)
* **Sidebar**:

  * Categories like Home, Trending, Music, Gaming, Tech
* Built with **React Router** for smooth navigation.

### 📌 Video Details Page

* Full video player UI.
* Video title, description, channel info.
* Like 👍 / Dislike 👎 buttons (dynamic, `localStorage` persisted).
* Subscribe button (UI only).
* Comment section with mock comments.

### 📌 Related Videos

* Shown on the right side.
* Clicking navigates to the selected video.

### 📌 Search Functionality

* Enter keywords in the search bar.
* Dynamic results displayed on a dedicated **Search Results Page**.

### 📌 Light/Dark Mode

* Toggle theme with a single click.
* Theme preference is saved and persists across sessions.

### 📌 UI/UX Enhancements

* Hover effects on thumbnails & buttons.
* Smooth animations for transitions.
* Skeleton loaders while fetching videos.
* Responsive on **mobile, tablet, and desktop**.

---

## ⚡ Tech Stack

* **React.js** – UI library
* **JavaScript (ES6+)** – Core language
* **React Router** – Routing/navigation
* **Bootstrap 5** – Grid & responsive design
* **CSS3** – Styling and animations
* **localStorage** – Persisting likes/dislikes
* **Netlify/Vercel** – Deployment

---

## 🛠️ Setup & Installation

```bash
# Clone the repo
git clone https://github.com/pranav-sh4/youtube-clone.git

# Navigate to project
cd youtube-clone

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 🌐 Deployment

* Hosted on **Vercel**
  👉 [Live Demo Link]()

---

