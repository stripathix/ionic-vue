# app-vue
I have setup everyting using @sentry/browser. This is Vue + Capacitor + Ionic + @sentry/browser

To run application 

1) Go to /app-vue

2) Then run 
  ```
    npm install
  ```
  
3) To run below application as Hybrid app on simulator just open below file on xCode and runn application on iphone simulator
    ```
    /app-vue/ios/App/App.xcworkspace
    ```

4) To run this application as website just follow regular vue comands
     
     
 For dev setup
 ```
 npm run serve
 ```
 
 For production build
 ```
 npm run build
 ```
 
 ## To make any change in JS and rebuild iOS platform
 
 ```
 npm run build
 npx cap copy
 ```
 
 Then just re-run application on simulator.
