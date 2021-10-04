# I Don't Know, What Do You Want To Do?
[Visit idkwdywtd on heroku!](https://idkwdywtd.herokuapp.com/)

# IDKWDYWTD at a glance
This website aims to be a group planning website which will help friends decide on what they wish to do! Eventually adding a voting system for users to submit their own ideas. Currently, a user is allowed to make groups and invite users to any event as well as invite all of a group to any event. Inviting a group to an event makes hosting an event with your friend group much easier.

# Application Achitecture
IDKWDYTD is built on a React frontend with an Express backend, using PostgreSQL as a database. 

# Technologies Used

* React
* Redux
* ExpressJS
* Sequelize
* Faker

# New Features

## 10/3/2021

### Invite Group to Event - beta

Users can now invite an entire group to an event. This will make hosting events with the same or similar groups of people much easier. 
Currently, users in the group who are already invited to the event are ignored. However, the same group can be invited an unlimited number of times even if all members are invited. A way to mark an event as already invited once all members are in is the next step for this feature.

<img src="https://i.imgur.com/B8fLsw7.png">

### Notifications - beta

Users can now see notifications when they are invited to a group or event!

<img src="https://i.imgur.com/kt5ahJK.png">
<img src="https://i.imgur.com/aAgF3qL.png">

Currently the notifications are being fetched for on each major component which causes a lot of unncessary fetch requests. This implementation is for proof of concept and will be replaced with a more effecient method.


# Planned Features 
## Coming Soon
### Filter for Inviting users 
You will no longer need to select users by finding their name in a drop down.
### Selecting multiple users outside of a group at once
Now making a group of users won't be the only way to invite more than one user at once!
### On click selecting users instead of drop down only
Once this is implemented, the drop down will get removed and be replaced by selecting a user on the page and having their card be highlighted.
### Notifications of invites being sent
Currently, when you hit invite, the only way you can see if the invite was sent was seeing the name removed from the list of users, or seeing it in the pending members section. I want invites to be a bit more intuitive, so a notification of which users were invited when clicking invite is planned. This would also solve notifying when a group is invited and all the members were already attending the event, so no actual invites were sent.

## Big Picture
### Activities
Activities are the next CRUD feature to be implemented for this application. Activities will be what occurs during the event. Event attendees will be able to submit various activity ideas. Voting will allow each attendee to show whether or not they want to do the activity.
<img src="https://camo.githubusercontent.com/b6e3c2e537fffa250b4cd079c59e5bc169732346c7f0b88d0ab6f24b4a2b00ed/68747470733a2f2f692e696d6775722e636f6d2f62444a556446422e706e67">
### Calendars
After activities are implemented and voting is finalized, attendees will now be able to submit custom calendars and rearrange the activities how they see fit. Afterwards, the same voting system used in activities will be used to show votes per calendar.
<img src="https://camo.githubusercontent.com/f483b2437f577d70ac7a735b5756062bd812f0d0943b78d76c3085cc69639229/68747470733a2f2f692e696d6775722e636f6d2f464759314156382e706e67">
