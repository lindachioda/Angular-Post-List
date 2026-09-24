

## 🛠️ Tecnologie Utilizzate
* **Angular**
* **Angular CLI**
* **TypeScript**
* **HTML5**
* **SCSS**
* **Bootstrap CSS**
* **JavaScript Fetch API**
* **JSON**
  
# 📋 Angular Post List

An Angular application built using the Angular CLI. The project retrieves posts from a local `db.json` file and displays them across different pages based on their status.

The application was created using the Angular CLI and SCSS for styling. A `db.json` file containing an array of post objects is used as the data source.
Each object represents a **Post** and follows a dedicated TypeScript interface.
The list of posts is retrieved in a `posts.service.ts` service using the JavaScript `fetch()` method.
The application includes a navigation bar with three pages:

* **Home (`/`)** – Contains two buttons that allow navigation to the active and inactive posts pages.
* **Active Posts (`/active-posts`)** – Retrieves all posts and displays only the active ones.
* **Inactive Posts (`/inactive-posts`)** – Retrieves all posts and displays only the inactive ones.
