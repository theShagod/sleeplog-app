### Sleep Logger
App that uses MySQL database to store your wakeup and sleep times. The app is deployed [here](https://sleeplog-app.herokuapp.com/).
### Install and Run
`npm install`
`node server.js`
### Features
 - add single entry to database
 - MVP of API for deleting and changing rows
### Possible Improvements
 - view all of your entries from database
 - delete rows by id
 - change an entry in database
 - Graphs
 - User authentication

### Technologies Used
 - MySQL
 - nodejs
 - express
 - jawsdb
 - handlebars

### File Structure
database -> connection (config) -> orm (config) -> sleeplog (models) -> controller <- server

controller -> views
 - handles api requests and routes
 - supplies data and info to views

### MIT License

Copyright 2020 JohnInc

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.