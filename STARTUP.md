# Revature Strategic Initiatives Board

## Startup Guide

* Step 1) Clone Github Repos:
  * Backend: <https://github.com/Project3VinayBatch/Project-3-Client.git>
  * Frontend: <https://github.com/Project3VinayBatch/Project-3-Services.git>
  
---

* Step 2a) Configure Java Application
  * You must modify these files to your specific settings to run the app properly:
    * `src\main\resources\application.properties`
    * `src\main\resources\secret.properties`

---

* Step 2b) Run Java Server Application
  * Within IntelliJ
    * Simply run main program `Project3ServerApplication`
  * Or by running the built Java app.
    * Do `gradle build` or `gradlew build` in terminal
    * Run Java jar.
      * located in: `\Project-3-Services\build\libs\project-3-server-0.0.1-SNAPSHOT.jar` 
 
  ---

* Step 3) Run Angular Application
  * Within Visual Code
    * `ng serve`
  * Or run the built single page application on S3 bucket with static web hosting.
    * `ng build` then upload to S3 bucket and get assigned a URL to access the static web page.

---

* Step 4) Go to Github. Go to settings > Developer Settings > Oauth Apps. Generate a secret key and put the client id and secret key in your secret.properties file in your Spring application. Your homepage url will be http://localhost:4200 or the s3 bucket url depending on how you are running the frontend. The callback url will be the homepage url plus /callback. For example: http://localhost:4200/callback or http://s3-url/callback. The application name can be anything but we named it Revature Initiatives. Then hit save.

---

* Step 5) Login through GitHub and use the App
  
