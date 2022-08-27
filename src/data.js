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

export const links = [
  {
    id: 1,
    url: "/my-website",
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
      "For this project I included no additional media because well you are looking at the whole thing! Making the website itself was exciting and honestly way more fun than writing the project posts. I am looking forward to building more projects and hopefully a React Native app that should be coming soon!.",
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
];

export const blogPosts = [
  {
    id: 1,
    name: "Transistor Trouble",
    text: "I decided to make a circuit that switches my lights off with sound but my quest for a digital switch derails the projects.",
    img: blog_img,
    url: "/blog/audio-lightswitch",
  },
];
