# WordSurrounder.NET
<p align="center">
<img src="https://github.com/beamvenom/word_surrounder/blob/main/images/screenshot.png?raw=true" />
</p>


This project is to create a program that reads a text file and surrounds every occurence of the most used word in the text with "foo" and "bar".
Check out the Python version: https://github.com/beamvenom/word_surrounder.

For example, if you input a text file with this text: "The therapist is the hero." 
The program will print out "fooThebar therapist is foothebar hero"

Although it might be a simple program, this project tests one's skills on how to:
- Back-end API with .NET 5.
- Front-end program with React.
- Connecting front-end with back-end through HTTP requests.
- Unit tests both in front-end and back-end
- Making structured and readable code using the linters.

## Prerequisites
- Visual Studio (with .NET 5 installed) 
- Node.js

## Usage
#### 1. Run the .sln file in HiQ.Leap.WordSurrounder.API with Visual Studio.
#### 2. For the front-end
```bash
cd HiQ.Leap.WordSurrounder.Web
```
```bash
npm install
```
```bash
npm start
```
#### Now the program should be running!
- If a website did not start. Open up http://localhost:3000/ and you should be greeted with a page with a button.
<p align="center">
<img src="https://github.com/beamvenom/word_surrounder/blob/main/images/screenshot3.png?raw=true" />
</p>
- Pressing the blue/white button will prompt a file upload. 
- Upload a text file to get every occurence of the most used word in the text surrounded with "foo" and "bar".
- <p align="center">
<img src="https://github.com/beamvenom/word_surrounder/blob/main/images/screenshot2.png?raw=true" />
</p>
(Notice that "the" is the most used word in this example)
