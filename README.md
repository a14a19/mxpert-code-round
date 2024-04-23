# MXPERT Coding Round

### To get started clone the repository

```bash
git clone https://github.com/a14a19/mxpert-code-round.git
```

<hr />

## Frontend (Restuarant Web App)

Frontend is a simple static web page of a restuarant web app. 

To get started with the frontend app - 

1. **Go inside frontend folder:**

```bash
cd restaurant-fe
```

2. **Install node modules:**

```bash
npm i
```

3. **Start the project:**

```bash
npm start
```

<hr />

## Backend (Team Career Camp Web App)

backend is a simple nodejs web app named Team Career Camp 

To get started with the backend app - 

1. **Go inside backend folder:**

```bash
cd backend
```

3. **Initialize .env file:**

```bash
cp .env.example .env
```

3. **Install node modules:**

```bash
npm i
```

4. **Run seeds:**

```bash
node src/seeds/batch.seeds.js
node src/seeds/company.seeds.js
```

5. **Start the project:**

```bash
npm start
```

Initial page will be rendered at url - http://127.0.0.1:5000/team-career-camp or http://localhost:5000/team-career-camp

#### Follow the guide to use the app:-

1. First you need to create the a student
2. You'll be redirected to student list page
3. From there you can navigate to interview list page
4. On interview list page, you'll see "Allocate Interview" button, click on it to allocate the interview for students
5. After allocation, come back to interview list, click on your desired company and list of students will be displayed
6. From there you can update the status, result and score for each and every student one by one (PS: it may redirect to different page sometimes but once you click on interview list and again on the company, you'll be on same page)

### For CSV

I've used json-2-csv for converting json to csv, to download csv, you need to route http://127.0.0.1:5000/team-career-camp/interview-list in the navigation, you'll see download csv button.
