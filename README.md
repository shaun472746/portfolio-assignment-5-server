# Portfolio Server
Live Deployed Link: 


## Technologies
- TypeScript
- Node.js
- Express.js
- MongoDB with Mongoose


# instruction to setup the project locally
This repository is currently public. To setup this project locally follow the instruction given below -

- clone the repository

- move into project directory

- create an .env which must contain fields that are defined in .env.example file

- npm install (run this command)

- npm run build ( run this command)

- npm start (to start the server locally)

- change the cors origin in src/app folder.

Now, project setup is done. Hit the api described below to get the expected result.


## API Endpoints

#### 1.1 Create Blog

**POST** `/api/blog/`

**Description:** Use to create a blog
**Request Body:**

```json
{
  "title": "Blog Title",
  "content": "blog description",
  "category": "mystery",
  "image": "image link"
}
```


#### 1.2 Update Blog

**PUT** `/api/blog/:blogId`

**Description:** Use to update a blog
**Request Body:**

```json
{
  "title": "Blog Title",
  "content": "blog description",
  "category": "mystery",
  "image": "image link"
}
```

#### 1.3 Get Blogs

**GET** `/api/blog/`

**Description:** Use to get all blogs


#### 1.3 Delete Blog

**DELETE** `/api/blog/:blogId`

**Description:** Use to delete single blog



#### 2.1 Create Message

**POST** `/api/message/`

**Description:** Use to create a message
**Request Body:**

```json
{
  "name": "Name",
  "email": "email",
  "message": "enter your message"
}
```


#### 2.2 Get Messages

**GET** `/api/message/`

**Description:** Use to get all messages


#### 3.1 Create Project

**POST** `/api/project/`

**Description:** Use to create a project
**Request Body:**

```json
{
  "title": "Name",
  "description": "project description",
  "link": "live project link",
  "image": "image link"
}
```


#### 3.2 Update Project

**PUT** `/api/project/:projectId`

**Description:** Use to update a project
**Request Body:**

```json
{
  "title": "Name",
  "description": "project description",
  "link": "live project link",
  "image": "image link"
}
```


#### 3.3 Get all projects

**GET** `/api/project/`

**Description:** Use to get all projects



#### 3.4 Get single project

**GET** `/api/project/:projectId`

**Description:** Use to get single project



#### 3.5 Delete Project

**DELETE** `/api/project/:projectId`

**Description:** Use to delete single project