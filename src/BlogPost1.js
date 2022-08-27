import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import mainImg from "./img/lightController1.png";
import video from "./vid/lightController.mp4";
import codeImg from "./img/lightControllerCode.png";
import transistorImg from "./img/transistors.jpg";

const BlogPost1 = ({ changeBackground }) => {
  useEffect(() => {
    changeBackground(false, "#0F0F1F");
  }, []);

  return (
    <>
      <Navbar />
      <article className="blog-post-container">
        <h2
          style={{
            marginTop: "3rem",
            marginBottom: "3rem",
            color: "hsl(205, 90%, 76%)",
            textAlign: "center",
          }}
        >
          Transistor Troubles
        </h2>
        <p>Written 8/25/2022</p>
        <img
          className="blog-image"
          src={mainImg}
          alt={"main image"}
          style={{ marginBottom: "3rem", height: "110%", width: "110%" }}
        />
        <p className="blog-paragraph">
          This story begins around two weeks ago. For background, I am at my
          parents home right now for the Summer and I have been ordering a
          plethora of different electronics components because I am trying to
          complete a hobbyist electronic kit of sorts. My parents are confused
          about what exactly I am getting all these things for. Another piece of
          background. Early in the Summer I made some home improvements to my
          old bedroom that is soon to be inherited by my younger brother. I
          installed some new blinds, did things with the furniture, but
          importantly for this story I installed LED strip lights that wrap
          around the walls of my room (As seen in the image above).
        </p>
        <p className="blog-paragraph">
          When I leave my room I sometimes forget to turn off the lights and my
          mom made the comment of why I leave them on. In that moment I crafted
          an ingenious practical joke combining the notion that I’m always
          making mysterious stuff with the fact I leave my lights on. I told her
          (in spanish) that if she clapped her hands twice they would turn off.
          Sadly, my snickering gave it away that it was a joke otherwise she
          definitely would have fallen for it. But that gave me a stroke of
          inspiration. What if I made the lights turn off with sound?
        </p>
        <p className="blog-paragraph">
          I specifically decided to not do this with my lamps but with my LED
          strip lights because there are four pins that come out of one cable
          and four holes for them on the lights. These pins were small and it
          would be very easy to connect a microcontroller to these pins. I
          ordered some Raspberry Pi Pico microcontrollers and several sound
          sensors off Amazon to do this. I wrote the code to do this in about 5
          minutes in MicroPython before the package arrived and when it did I
          discovered that the 3.3V from Pico could not power the sound sensor.
          So I had to rip out an old Arduino Nano from a different project and
          use that since it can supply 5V. But then I had to rewrite the code in
          C/C++ for the Arduino. I assembled the circuit and used a NPN BJT
          transistor as the digital switch that would turn the project on or off
          if sound was detected. I also made it so there needed to be two sound
          peaks to trigger the transistor to turn on or off to reduce false
          positives.
        </p>
        <p className="blog-paragraph">
          Everything worked great and with a little more fine tuning I could get
          it too work but first I wanted to install it. I got the cables and a
          breadboard, stuck it to the wall, and built the circuit there but it
          just would not work. The lights were affected and they appeared dimmer
          and there were noticeable changes to the color and brightness of the
          lights when I triggered the sensor but it did not work well. I
          suspected that the transistor was not working as intended and after
          some thought and research I came to the conclusion that using a BJT
          transistor here would not work for one reason. I was using a primary
          circuit to control a secondary one and the transistor relies on
          current flowing through its base pin to control its state. The
          transistor was being controlled by the Arduino but the emitter pin was
          connected solely to the other side of the lights. They were not
          connected to the same ground so in order for current to begin to flow
          the Arduino would have to generate enough voltage and current to drive
          the lights which was just not possible.
        </p>
        <p className="blog-paragraph">
          I devised another plan. I thought since BJTs did not work maybe MOSFET
          transistors with their even more switch like properties might work. I
          ordered some on Amazon as I kinda wanted them in general. And I
          plugged everything together and tried it and... it did not work
          either. A MOSFET’s digital logic depends on the voltage of the gate
          pin in relation to the source which was not correct because the source
          was connected to the lights. Fundamentally all my problems came from
          the fact that the lights were not part of my control circuit and I was
          trying to force them to be. I was stumped because without transistors
          acting as a switch there was no way I could control these lights and
          accomplish my dream of making a joke project.
        </p>
        <p className="blog-paragraph">
          Luckily, I found my solution in the simplest of places. Before
          transistors were used to drive digital computers vacuum tubes were
          used but even before that relays were used. Relays are literal
          electronic switches, the exact thing I needed. Older ones worked by
          taking a large current, inducing a magnetic field and pulling a
          literal piece of metal to touch another to create an electrical
          connection. Youtuber ElectroBoom goes into more detail in this{" "}
          <a
            href={
              "https://www.youtube.com/watch?v=PHcCSZ5nScM&ab_channel=ElectroBOOM"
            }
          >
            video
          </a>
          .
        </p>
        <img
          className="blog-image"
          style={{ marginTop: "3rem" }}
          src={transistorImg}
          alt={"Transistors"}
        />
        <p>
          Pictured here are all the "switches" I used. From left to right they
          are the BJT transistor, the MOSFET transistor, and the relay.
        </p>
        <p className="blog-paragraph">
          Ironically, after deciding to use relays and looking into it more, the
          first video I watched talked about how they are primarily used when an
          external circuit wants to control a different circuit. Once I
          installed the relay and adjusted the sound sensor the lights turned
          on/off with clapping (and sneezing).
        </p>
        <p className="blog-paragraph">
          After completion I can say that I learned quite a bit about
          transistors and their limitations. Nevertheless, I had to wait on
          Amazon for quite some time to complete this project. I still cannot
          believe that such a simple project took so long before it could be
          completed. (Below is video showcase a bit of the final product and the
          bit of Arduino code used).
        </p>
        <video className="project-video" style={{ marginTop: "5rem" }} controls>
          <source src={video} type="video/mp4" />
        </video>
        <img
          className="blog-image"
          style={{ marginTop: "3rem", widows: "100%", height: "100%" }}
          src={codeImg}
          alt={"Project Code"}
        />
        <p className="blog-paragraph">
          Note: I did not make this project its own page because it was too
          simple and because I wrote about quite a bit about it here.
        </p>
      </article>
    </>
  );
};

export default BlogPost1;
