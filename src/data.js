import React from "react";
import {
  FaBehance,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTextWidth,
  FaTwitter,
  FaReact,
} from "react-icons/fa";
import blog_img from "./img/lightController1.png";
import arduinoImg from "./img/arduino1_filter.jpg";
import arduinoVid1 from "./vid/arduinoThumbNail1.png";
import arduinoVidSource1 from "./vid/arduino2.mp4";
import arduinoVid2 from "./vid/arduinoThumbNail2.jpg";
import arduinoVidSource2 from "./vid/arduino3.mp4";
import arduinoVid3 from "./vid/arduinoThumbNail33.png";
import arduinoVidSource3 from "./vid/arduino4.mp4";
import arduino4 from "./img/arduinoCircuit.png";
import reactLogo from "./img/logo512.png";
import appImg1 from "./img/mainAppImg_0.PNG";
import appImg2 from "./img/AppImg2_0.PNG";
import appVid1 from "./vid/mainVid.MP4";
import appVid2 from "./vid/vid2.MP4";
import appHome from "./img/mainAppImgHome.PNG";
import appDemo1 from "./img/appDemo1.PNG";
import appDemo2 from "./img/appDemo2.PNG";
import toto from "./img/toto.png";
import compression from "./img/compression.png";
import vlsiChip from "./img/pynq.jpg";
import vlsiImg1 from "./img/diagram.png";
import vlsiImg2 from "./img/musicRom.png";
import vlsiVid1 from "./vid/quick_demo.mov";
import vlsiVid2 from "./vid/vlsiVid2.mp4";
import vlsiVidImg1 from "./img/chords.png";
import vlsiVidImg2 from "./img/note.png";

export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
  },
  {
    id: 2,
    url: "/projects",
    text: "projects",
  },
  {
    id: 3,
    url: "/blog",
    text: "blog",
  },
  {
    id: 4,
    url: "/contact",
    text: "contact",
  },
  // {
  //   id: 5,
  //   url: "/about",
  //   text: "about",
  // },
];

export const social = [
  {
    id: 1,
    url: "https://www.linkedin.com/in/cgarcia0",
    icon: <FaLinkedin />,
  },
  {
    id: 2,
    url: "https://github.com/cgarcia00",
    icon: <FaGithub />,
  },
];

export const projects = [
  {
    id: 1,
    name: "This React Website",
    text: "On my journey to learn React I made several websites and this is one of them! Here I go into detail into how I did so.",
    img: reactLogo,
    media: [],
    mediaType: ["image", "image", "image", "image"],
    projectPost: [
      "I made this website to primarily learn a good amount of JS, HTML, CSS, and React all in one swoop. This website primarily showcases some projects I have built (both big and small) along with a small blog.",
      [
        `The skeleton of this website came from another project I built during a \
          tutorial on making React projects. The project was one of many from John Smilga’s \
          “Code 15 React Projects - Complete Course” youtube tutorial on the freeCodeCamp youtube channel. \
          The only portion from the project I used was the navigation bar. I used only its style because the \
          linking to other pages was not included. I first thought I would reuse CSS from the starter code but \
          I did not do so. I stylized the home page working with the “float” and position properties to place \
          elements where I wanted. I used stock photos from pexels.com to get background images and such. \
          I used React Router to make the links to local pages and had to look up documentation because the \
          tutorial I used was outdated. I made several pages for my projects, a blog, and a contact page.`,
        `From there I had to tackle a variety of React problems.The first was changing the background of \
          each page, since they were all a little different. I made a function in the App page that I passed \
          to each React element. This function changed several useState variables that determine whether the \
          background was a color or an image and the image/color itself. Then I made a MiniPost element that had \
          information about a project/blog post. I plastered these where appropriate. Then I had to make different\
           pages for different projects and blog posts. For the projects I decided to use placeholder parameters \
           and a parent page to make multiple copies of the same page with different information being displayed. \
           This is what you are looking at right now. Each project page has a main image, at most four pieces of \
           supplemental media, and an overview; implementation; and closing thoughts section. I took a different\
            approach for the blog posts. I knew that since I wanted to have more media and text sprinkled out giving \
            explanations and demonstrating things as I went along that a dynamic page would not work very well. \
            Instead each blog post follows a rough templemt/layout with similar CSS but most of the HTML is written \
            from scratch.`,
        `The final point I want to discuss is my least favorite part of making a website, inconsistent rendering. \
          During development I always displayed the website on the Chrome browser but I had to monitor with different \
          resolutions and I learned quickly that what looks good on one screen may not on the other. I did two things \
          to alleviate this problem. First there is condition rendering for the CSS depending on what the screen \
          resolution is so things do not overlap on one screen but look fine on the other. The second thing I did was \
          track the zoom of the browser so that if the screen was too zoomed in or out images would not display so \
          elements were not compressed into a soup-like mess. My solutions are by no means comprehensive and I’m sure \
          if someone goes on NetScape on their Nokia brick phone something might not render correctly but I decided \
          that I did well enough.`,
      ],
      "For this project I included no additional media because well you are looking at the whole thing! Making the website itself was exciting and honestly way more fun than writing the project posts. I am looking forward to building more projects and hopefully a React Native app that should be coming soon! (Update: It has been posted!)",
    ],
  },
  {
    id: 2,
    name: "Multplexing Arduino Display",
    text: "Here I take the scraps from a class I took called “Intro to Making” and make a simple \
      seven-segement display.",
    img: arduinoImg,
    media: [arduinoVid1, arduinoVid2, arduinoVid3, arduino4],
    mediaType: ["video", "video", "video", "image"],
    videos: [arduinoVidSource1, arduinoVidSource2, arduinoVidSource3],
    projectPost: [
      "Seven-segment displays, most commonly seen on household appliances like microwaves, are a simple and semi-versatile way \
      to display text when comparing it to practically any other kind of display. Screens with arrays of pixels either require \
      external code or tedious amounts array indexing and comparing and vacuum tubes, while very cool, are expensive and clunky. \
      There is a reason seven segment displays are in most of the cheap (and some expensive) consumer appliances. \
      In this project I wanted to take the scraps from a class I took at Stanford called “Intro to Making” and make a simple \
      text display with an arduino that displayed text I entered on my computer.",
      [
        `The two pieces that I did not have my hands on were the seven-segment-displays and transistors. When I received the displays a little bit of probing revealed what pins were what. There were ten total pins; two of them ground and the other eight were for each segment. 
So, if I wanted to write the letter ‘H’ I would have to connect one or both ground pins to ground and then a voltage source (running through a resistor to limit current) to the pins controlling the four side segments and the middle segment. This would take at least six wires. If I wanted to write ‘HELLO’ that would require 23. I had limited material so this was not desirable. In addition, if I wanted a microcontroller to drive all these inputs I  would need a wire on every single light. In my original plan with 12 total lights and each having seven lights the microcontroller would have to drive 76 outputs. My Arduino had <20 so I implemented a common solution for this kind of output limited problem called digital time-division multiplexing which is a fancy way of saying that I would only light up one light at a time and move through them very quickly to the point where they all look like they are always on.
`,
        `I accomplished this by using transistors that connected the displays to ground. I had one transistor for each light and only turned one on at a time. I also connected all of the same segments to each other and connected them to the same pin output. This implementation took me ~70 wires but only required 17 inputs (12 for the transistors and 7 for the segments). Sadly, I only had 16 available pins. The 0 and 1 pins, that I did not use, were usable but they were used to communicate with the laptop so I needed them to type words on my computer. `,
        `Now if I wanted to write the letter “H” I would light up the corresponding segments but only when the first transistor was on. If I wanted to write “HELLO” I would set the “H” segments high and the first transistor on. Then I would turn off everything and set the “E” segments and the second transistor high. This process would repeat very quickly and the text would be displayed seemingly all at once similar to how lightbulbs flickering at 60 Hertz appear to always be on. 
In the media for this project there are two videos where the delay is increased showing how the lights are actually not all on at once and there is a video demoing the entire project's functionality. The last image is a simplified circuit representation of what I did. Here each group of LEDs (there are three groups) represent different segmented displays. All of the same segments are “connected” together with the first and last segments being set high but only the second transistor is on so only the 4th and 6th LEDs are on. The resistors are there to limit current. 
`,
      ],
      `British Youtuber Tom Scott made a video on seven-segment displays that first piqued my interest on the component. The video focused on what was the longest English word that could be written with these displays. He restricted the use of letters that would not work with the display (take the letter “K” or “M” as examples). I was more focused on just taking the displays and controlling them. Specifically, I was focused on not buying more materials and just throwing something together. The project could have been made more cleanly with a larger breadboard but as a small project that I can display this aesthetic fits it better. In the future I could expand its usage to being controlled by text entered remotely on a website.`,
    ],
  },
  {
    id: 3,
    name: "VLSI Music Synthesizer",
    text: "This is the final project for my digital systems design course. It is a music synthesizer made for a VLSI chip.",
    img: vlsiChip,
    media: [vlsiVidImg1, vlsiVidImg2, vlsiImg1, vlsiImg2],
    mediaType: ["video", "video", "image", "image"],
    videos: [vlsiVid1, vlsiVid2],
    projectPost: [
      "This project is a wave-table music synthesizer. It uses song data consisting of notes and durations and looks them up on a frequency table to play them through a speaker using a sine ROM. There is timing handoffs between all these modules to ensure everything goes smoothly.",
      [
        `This project was written in a hardware description language named Verilog that is used to model electronic systems. It is essentially code that works at the bit level. The brains of the project is the MCU which is a module that takes in inputs from the buttons on the chip to cycle through songs, play/pause, reset, and a few other functions. Once the play signal is read the song_reader module begins by reading into a song ROM that is generated by making a spreadsheet and processing it. It turns into one big nested array. That data is read and processed by the note_player module.`,
        `The note_player module is broken down into two parts. The first part processes the data and turns into a frequency like 20Hz by checking a ROM so that the data can be passed on to the second part. The sine reader takes in that frequency and produces the first quarter of the sine wave for that frequency. The note_player module then has to flip the first quarter to produce the second, invert the first to produce the third, and invert the second to receive the fourth. All these put together produce the entire sine wave which is passed into the codec which sends the signal to the speakers. `,
        `A wave signal then goes in reverse notifying each module that the one before is finished so that the next note can be played and so on. The mcu also controls when to switch to the next song and each module has code to handle mcu inputs (play/pause/reset) respectively.`,
        `There is also another set of modules that control the screen connected to the chip that display the sine wave. These mostly consisted of taking the data from sine reader and graphing it through array indexing/looping. During the final phase of the project I added the functionality of chords so multiple notes (See left for demo) could be played at once. With this implemented I had to make it so the screen showed four sine waves. Three were for the chords and the white wave was their sum.`,
      ],
      `This was probably my hardest assignment for a course. It was a multi-week project that I just keep building on and building on. I was very proud of the end result and the presentation I gave on it.`,
    ],
  },
  {
    id: 4,
    name: "React Native App for Class Organization",
    text: "Taking what I learned from making this website I decided to make a simple React Native App.",
    img: appHome,
    media: [appDemo1, appDemo2, appImg1, appImg2],
    mediaType: ["video", "video", "image", "image"],
    videos: [appVid1, appVid2],
    projectPost: [
      "I have always wanted to make an app I can have on my phone. Since I had already learned the React enviroment the next logical step was to learn React Native and make an App. I have done just that! Over the course of five days I made a simple app that can keep track of a student's courses and their tasks. Altough the app is simple it has the core features of most common apps like data storage, multiple pages, and scrolling displays and inputs.",
      [
        `When making this app I decided to use the Expo Go development tools to help set up the environment. Expo Go has an app so that the project can be rendered on an IPhone while being coded on a computer. I also had virtual phones on my computer but I decided to just base everything off how it looked on my IPhone. 
`,
        `The first page the user interacts with is the home. This page displays all the courses that the user has added. The user can add new courses using a button on the bottom of the screen. Clicking this button brings up a modal where the data for a new class can be entered. The subject of the class is entered here and depending on what is chosen the background picture for the course is different. For example, if the course is a math course the background is a chalkboard with equations. Each class has an “Open” button that opens the tasks for that class.`,
        `Each course has its set of tasks which the user can add and remove. Adding a task brings up a modal where the user can enter the name of the task, its details, and its due date. When a task is complete the user can press the title and enter the task page where the details can be seen and the task can be removed. `,
        `Styling for mobile is a bit different than for web apps. I had focused more on using FlexBox to make sure everything was properly arranged. I also had to think about the user experience of mobile. I added a scroll selector for certain inputs and the courses and tasks scroll up and down.
`,
        `I also used AsyncStorage to store all the data the user entered. This way if the app is refreshed it still retains all its data. This can be seen in the “Storage Demo” video linked to the left. Here I am seen entering the app by scanning the Exp Go QR code on my laptop and entering the app. I had previously entered data on the class and it was retained. If AsyncStorage was not used the screen would’ve been blank. AsyncStorage was like a mini database. I was able to pass the data through the database as opposed to passing it through prop drilling. I did both of these when they were appropriate but having the extra option was quite helpful.`,
      ],
      `This app was made throughout the course of five days. This includes both learning the framework and the creation of the app. This app was the last main project for the Summer of 2022 so my goal was just to learn how to use React Native and quickly move on. I hope to continue using React Native and create fun and practical apps. (The app demo to left showcases the app in action!)`,
    ],
  },
];

export const blogPosts = [
  {
    id: 1,
    name: "Transistor Trouble",
    text: "I decided to make a circuit that switches my lights off with sound but my quest for a digital switch derails the projects.",
    img: blog_img,
    url: "/blog/audio-lightswitch",
  },
  {
    id: 2,
    name: "Image Compressor",
    text: "This is a program that compresses an image based on user input. (Note: This post is about a assignment for a class called E76 and it consists of a PDF of a Jupyter Notebook)",
    img: compression,
    url: "/blog/image-compressor",
  },
  {
    id: 3,
    name: "Hiding Data in Music",
    text: "Here I hid data inside Toto's Africa by taking out certain frequencies from the song and injecting new data. (Note: This post is about a class assignment and it is a Jupyter Notebook)",
    img: toto,
    url: "/blog/hidden-data",
  },
];
