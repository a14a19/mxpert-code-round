# Team Career Camp

## Use npm i to install all the node modules.

## Run the command node src/seeds/batch.seeds.js to insert batches in database.
## Run the command node src/seeds/company.seeds.js to insert companies in database.

Initial page will be rendered at url - http://127.0.0.1:5000/team-career-camp or http://localhost:5000/team-career-camp

Follow the guide to use the app:-

1. First you need to create the a student
2. You'll be redirected to student list page
3. From there you can navigate to interview list page
4. On interview list page, you'll see "Allocate Interview" button, click on it to allocate the interview for students
5. After allocation, come back to interview list, click on your desired company and list of students will be displayed
6. From there you can update the status, result and score for each and every student one by one (PS: it may redirect to different page sometimes but once you click on interview list and again on the company, you'll be on same page)

### For CSV

I've used json-2-csv for converting json to csv, to download csv, you need to route http://127.0.0.1:5000/team-career-camp/interview-list in the navigation, you'll see download csv button.
