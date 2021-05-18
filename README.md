# <center>Trivia-Project

By <a href="https://github.com/eyalzimerman">Eyal Zimerman</a> and <a href="https://github.com/hubermanophir">Ophir Huberman</a>

![overview image](./images/overview.png)


 run 
  ```
  npm install
  ```
  in the main folder and in the DB folder
  
  
  
.env in DB folder and outside folder

ACCESS_TOKEN_SECRET='$2b$10$8jz874m2K/bONb8/Avbr6eKvqKjn/o97gbOvrQjsXFalfMN7/Uwxe'
REFRESH_TOKEN_SECRET='$2b$10$Ilh5YT9nE0eJN5XDMlHVKeyt3IX5pWjEc8tPnoisTCIh3glRbUWSu'

to run localy run migrate seed the db and start the server with npm start

## OVERVIEW

Trivia game built with react, express server and MySQL database.

- To start the user must enter his name and by clicking start the game will begin.
- On the first question the user will have 20 seconds to answer, after every question the time to answer is decreased by 0.5 seconds until it reaches it's lowest at 5 seconds.
- The user score is based on the amount of time it took the user to answer the question, when answering faster the score is higher. 😉
- After the user chooses an option or the timer went out all the answers are revealed.
- When the user fails to answer 3 question he is out of the game
- For each game the user gets 2 life savers he can choose to use on a 4 option question. When pressed 2 options are eliminated.
- Between every question the user can rate the question if he chooses. By doing so its being added to the database.
- At the end of the game the user is added to the scoreboard. He can go to the scoreboard page to see his place against other players.
