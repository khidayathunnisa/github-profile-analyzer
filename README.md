# GitHub Profile Analyzer API

## Project Description

This is a Node.js and Express.js backend application that analyzes a GitHub user's public profile using the GitHub REST API and stores the analysis in a MySQL database.

## Tech Stack

- Node.js
- Express.js
- MySQL
- GitHub REST API
- Axios
- mysql2
- dotenv

## Features

- Fetch GitHub user profile by username
- Store profile details in MySQL
- Update profile if it already exists
- Retrieve all analyzed profiles
- Retrieve a single analyzed profile

## Project Structure

```
github-profile-analyzer/
│
├── config/
│   └── db.js
├── controllers/
│   └── githubController.js
├── routes/
│   └── githubRoutes.js
├── app.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/github-profile-analyzer.git
```

### 2. Open the project

```bash
cd github-profile-analyzer
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a `.env` file

```env
PORT=5000
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=YOUR_MYSQL_PASSWORD
DB_NAME=github_analyzer
```

### 5. Create the MySQL database

```sql
CREATE DATABASE github_analyzer;
```

### 6. Create the table

```sql
CREATE TABLE github_profiles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) UNIQUE,
    name VARCHAR(255),
    followers INT,
    following INT,
    public_repos INT,
    avatar_url TEXT,
    github_url TEXT,
    analyzed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 7. Start the server

```bash
node app.js
```

The server will run on:

```
http://localhost:5000
```

## API Endpoints

### Analyze GitHub Profile

**POST**

```
/api/profile/:username
```

Example

```
POST http://localhost:5000/api/profile/octocat
```

---

### Get All Profiles

**GET**

```
/api/profiles
```

Example

```
GET http://localhost:5000/api/profiles
```

---

### Get Single Profile

**GET**

```
/api/profile/:username
```

Example

```
GET http://localhost:5000/api/profile/octocat
```

## Sample Response

```json
{
  "id": 1,
  "username": "octocat",
  "name": "The Octocat",
  "followers": 23166,
  "following": 9,
  "public_repos": 8,
  "avatar_url": "https://avatars.githubusercontent.com/u/583231?v=4",
  "github_url": "https://github.com/octocat"
}
```

## Dependencies

- express
- axios
- mysql2
- dotenv
- nodemon (development)

## Author

Your Name
