[![Stories in Ready](https://badge.waffle.io/BeachHacks/Beach_Live.png?label=ready&title=Ready)](https://waffle.io/BeachHacks/Beach_Live)
[![Build Status](https://travis-ci.org/BeachHacks/Beach_Live.svg?branch=master)](https://travis-ci.org/BeachHacks/Beach_Live)

# BeachHacks Live

Live site for BeachHacks where attendees are able to read announcements, view campus and venue maps, send requests for mentors and song requests.

![](https://raw.githubusercontent.com/BeachHacks/Beach_Live/readme/screenshots/screenshot1.png)

## Features

* Push announcements
* Page for easily displaying maps for the event
* Mentor requests
* Song Requests

## Tools & Tech

* Firebase
* AngularJS 1.X
* Slack

## Developing Locally

1. Clone this repo and cd into the project's folder.

2. You may either use a browser to open index html or the recommended way by
using a local server to serve the files. An example of a local server is
Python's SimpleHttpServer. If you are on a Linux or Mac operating system with
Python 2 installed, simply run `python -m SimpleHTTPServer `. If Python 3 is
installed, run `python3 -m http.server`. Then visit the site in your browser by
going to `localhost:PORTNUMBER` where `PORTNUMBER` is the number listed in the
console after running the command.

3. When implementing mentor and song requests, modify the `message` string and
`url` in the following files: `controller_02_mentor.js` and
`controller_04_songs.js`. The url will be the webhook url you would obtain
[here](https://api.slack.com/incoming-webhooks) by carrying out the instructions
from Slack for your Slack team.

Note with UI-Router: There is a cross-origin security problem if opening site
on Chrome browser locally. Chrome doesn't like local file access from local
files. This problem will disappear if the website is being served. Running the
python server will avoid this issue for you. If for some reason you need to make
edits and can't run the python server, use Firefox browser for development or
install a Cross Origin plugin for Chrome.

### Deploy: [Deployment Site](https://beachlive-e9dbc.firebaseapp.com)
### Live Site: [Live Site](https://live.beachhacks.com)
