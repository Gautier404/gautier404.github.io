import {Video} from './Video.js';
import {Picture} from './Picture.js'

import TasteBuds from '../Assets/TasteBuds.svg'
import TasteBudsAppFlow from '../Assets/AppflowTasteBuds.png'
import Cyanotypes from '../Assets/Cynotypes.jpg'
import ThisWebsite from '../Assets/Mask GroupThisWebsite.png'
import Jamalam from '../Assets/Jamalam.png'
import NotJamalam from '../Assets/NotJamalam.png'
import Animade from '../Assets/AnimadeEasy.png'
import Synth from '../Assets/Synth.png'
import Flange from '../Assets/Flange.png'
import SynthCad from '../Assets/SynthCad.PNG'
import CyanoHeader from '../Assets/Cyano/CyanoHeader.png'
import Cyano1 from '../Assets/Cyano/Cyano1.jpg'
import Cyano2 from '../Assets/Cyano/Cyano2.jpg'
import Cyano3 from '../Assets/Cyano/Cyano3.jpg'
import Cyano4 from '../Assets/Cyano/Cyano4.jpg'
import Cyano5 from '../Assets/Cyano/Cyano5.jpg'
import Cyano5_5 from '../Assets/Cyano/Cyano5.5.jpg'
import Cyano6 from '../Assets/Cyano/Cyano6.jpg'
import Cyano7 from '../Assets/Cyano/Cyano7.jpg'
import Cyano8 from '../Assets/Cyano/Cyano8.jpg'
import Cyano9 from '../Assets/Cyano/Cyano9.jpg'
import Cyano10 from '../Assets/Cyano/Cyano10.jpg'
import Cyano11 from '../Assets/Cyano/Cyano11.jpg'
import Cyano12 from '../Assets/Cyano/Cyano12.jpg'
import Cyano13 from '../Assets/Cyano/Cyano13.jpg'
import Cyano14 from '../Assets/Cyano/Cyano14.jpg'
import Cyano15 from '../Assets/Cyano/Cyano15.jpg'

//Object that contains all the content for the projects.
//priority the higher the number the higher on the page it is
//mpriority -> how important it is for recruiters from mechanical engineering fields to be looking at
//alt+z for word wrap

//card template:
// {   
//     title:"The Website You're Looking At!",
//     priority: 2,
//     mPriority: 0,
//     links: {
//         github: "https://github.com/Gautier404/gautier404.github.io",
//         linkedIn: "https://www.linkedin.com/feed/",
//     },
//     image: TasteBuds,
//     summary:"doap do bop doobop doobop",
//     content: 
//         <div>
//         </div>
// },

export let cards = [
    {   
        title: "TasteBuds",
        priority: 1,
        mPriority: 1,
        links: {
            github: "https://github.com/matthewcn56/tasteBuds",
            devpost: "https://devpost.com/software/tastebuds",
            figma: "https://www.figma.com/file/lfkUIENJmOi74HKk2XTsgB/Wireframe?node-id=0%3A1"
        },
        image: TasteBuds,
        date: "September 9th 2021",
        summary:"I created the design and did the styling for this hackathon project I made with some of my friends.",
        content: 
            <div>
                <h2>What We Built</h2>
                <p>The TasteBuds system would allow students to view where their friends are eating and the menus of each dining hall. Our app had users log in using their school’s gmail account and store their information in our Firebase database. The first time they swipe into a dining hall they pair their account to their bruin card by scanning a QR code generated by our hardware system.  They then can see where their friends are eating and what food the dining halls are serving. Each user has their own personal QR code that other students can use to add them as friends. You can check out our <a href = "https://devpost.com/software/tastebuds">devpost</a> and <a href = "https://github.com/matthewcn56/tasteBuds">github</a> if you want to know all the nitty gritty details. Besides the app and hardware, we also created a video that I created the shot list and cinematography for. </p>
                <Video link = "https://www.youtube.com/embed/ZMz_4wQKs1w"
                    description = "Here’s the demo video. Check out my cheesy acting at the end :D">
                </Video>
                <Picture link = {TasteBudsAppFlow} description = "TasteBuds App Flow" height = "80vw"></Picture>
                <h2>What I learned</h2>
                <p>This was one of my first times developing a product with a team, so I think the most important thing I learned was how to work on a complex project with a team of specialized individuals. Most of my work revolved around how the app would be used and how our product was presented so there was a lot of communication between me and the rest of the team about the mechanics of our system. They are all much better at programing and electronics than I am, so I ended up picking up a lot of knowledge about mobile development, databases, rfid scanners, and Bluetooth. </p>
                <h2>Tools I used</h2>
                <ul>
                    <li>Figma & Illustrator for the the wireframe and assets</li>
                    <li>React Native with Expo</li>
                    <li>A Nikon digital camera for the shaky cinematography in our demo</li>
                </ul>
            </div>
    },
    {   
        title:"Synthesizer",
        priority: 4,
        mPriority: 4,
        links: {
            github: "https://github.com/Gautier404/cigar-box-synth",
        },
        summary:"During the pandemic I built a membrane potentiometer synth with some cool software and hardware filters.",
        date:"September 13th 2021",
        image:Synth,
        content: 
            <div>
                <h2>Inspiration</h2>
                <p>This was not the first time someone has built a synthesizer using a membrane potentiometer. I got my idea from <a href = "https://www.youtube.com/watch?v=QaW5K85UDR0">Wintergatans modulin</a>. Wintergatan is a musician and engineer who creates cool musical instruments. I like their work which is partly why I want to be a mechanical engineer. When researching synthesizer design I also found <a href = "https://www.youtube.com/watch?v=YNoj9Rrw_VM&t=487s">Moritz Klein's guide on active filters</a>. I thought the way he explained signal processing super was cool so I included an active low pass filter in my design.</p>
                <h2>The Design</h2>
                <Video link="https://youtube.com/embed/3XiiAAksCvc" description ="Here's a demo video of some of the features. I created this video before the housing was done so you can see all the electronics."></Video>
                <h2>Stats</h2>
                <ul>
                    <li>84 playable notes from A0 to A flat 7 </li>
                    <li>Using the tuning potentiometer, the synthesizer can be tuned to any 2 octave interval within the 84 note range. </li>
                    <li>Active analog low pass filter for mellow sound (sine wave) or nasal sound (square wave) </li>
                    <li>Vibrato can change pitch from 0 - 4 hertz and occurs at a frequency of 5 hertz </li>
                    <li>Portamento or slide between notes can go from air raid siren smooth to none at all</li>
                    <li>Local Gain control has range of 5 to 0 V</li>
                </ul>
                <Picture link = {SynthCad} description = "I used CAD to create the housing of the synthesizer but ended up modifying it to be simpler to accommodate my very blunt hand saw. " height ="50vh"></Picture>
                <h2>Challenges</h2>
                <p>Getting Carried Away with Coding</p>
                <p>I was super excited to start building my synth but it took a while for some of the electrical components to come in the mail so I ended up coding all the software in one night. As you would expect when I did assemble everything my code was a buggy mess! I had to spend another couple hours debugging the software which wasn’t so fun. This was also my first time programming in C++ so there were lots of errors I didn’t understand. Next time I do a project I will definitely assemble the components first and then methodically iterate my code.</p>
                <p>Membrane Potentiometer Signal Noise</p>
                <p>Once I received my membrane potentiometer in the mail and hooked it up to my Arduino, I realized the signal was very noisy which made the speaker alternate between notes in not so nice sounding ways. I ended programming a smoothing function within my code to average out the past 10 readings in order to smooth out the signal.</p>
                <p>Membrane Potentiometer sending Signal when not depressed</p>
                <p>When I removed my hand from the membrane potentiometer the speaker would still play. Having space between notes in music is vital so I added a pulldown resistor to the membrane potentiometer which had it send a signal of 0 when not being played. I found this solution online from a blog by Russel Smith. The drawback of this solution is that the readings from the membrane potentiometer were no longer linear. To fix this I took readings of the potentiometer at 2 cm intervals. Using excel, I calculated a polynomial that did a decent job of linearizing the data and incorporated it into the readpot() function in my code.</p>
            </div>,
    },
    {   
        title:"Animade Easy",
        priority: 3,
        mPriority: 2,
        links: {
            github: "https://github.com/css-animations/animade-easy",
            devpost: "https://devpost.com/software/animade-easy",
            figma: "https://www.figma.com/file/vkMPhKmJ1m4u2EcQZQwR0P/NOtJAMALAM?node-id=0%3A1"
        },
        summary:"Animade Easy is a devtools extension I created with friends during Penn Apps 2021 that makes creating custom CSS animations super easy.",
        image: Animade,
        date:"September 13th 2021",
        content: 
            <div>
                <h2>Inspiration</h2>
                <p>When I was making my personal website, I learned how to create CSS animations. I found that typing out an animation was pretty far removed from how animation is typically done so I proposed that we create a mash up of React Dev Tools, animation software, and a CSS development website like <a href = "https://cssgradient.io/">CSS Gradient</a>. My friend Jake wanted to learn how to create Bezier curves and my friend Mathew wanted to learn about code injection with a devtools extension, so we went with the idea. </p>
                <h2>How it works</h2>
                <Video link="https://www.youtube.com/embed/IbXtdEvrIVo" description ="Demo video created 10 minutes before the hackathon deadline. Hopefully we'll have a better one soon :)"></Video>
                <p>Once we get everything flushed out we plan to put this on the chrome web store like a regular extension. After getting our extension you’ll be able to open dev tools like normal and open our add on by selecting the Animade Easy Tab. </p>
                <p>After hitting the Attach Animation button, you can select what element on your webpage you want to animate by clicking on it. I’m not entirely sure how this works because Mathew programed this feature, but I think we inspect the dom and inject css to draw boxes around what is being selected. We plan on letting you select which css properties you want to animate but right now we have size and rotation hardcoded in.  There are also some other animation options you can add to the property like if you want it to loop or not. </p>
                <p>The animation can be modified with the Bezier curve tool Jake built. When you modify the handles and keyframes it builds the CSS code that is injected when you hit play to animate your website! The CSS code is displayed below the Bezier curve for you to copy into your website. We have a copy to clipboard button but it doesn’t work for devtools security reasons.</p>
                <p>You can create very complex animations with this tool compared typing them out by hand. I put a lot of thought into the UI so I’m very proud with what we have so far. We definitely can release this on the chrome store but with school starting soon we’ll see how much time we have to flush it out.</p>
                <h2>Stuff learned</h2>
                <p>This was the most complex web application I’ve created in 36 hours, so we made a lot of mistakes. There was a big disconnect between the front end and backend team with how the workflow of this app was supposed to work so splicing everything together at 4 AM an hour before the deadline was a gigantic mess. If I were to do this over again, I would have communicated how the user was supposed to use our extension better and set up a solid data structure for the front and backend to anchor themselves to.  We originally had a super simple MVP in the works for the first half hour of the hackathon, but we pretty much threw iterative design out the window to create an application with all the cool features we wanted. We were lucky when everything fit together in the end, but I think it would have been better to build a framework that works and then add all our cool features. </p>
                <p>Besides some project management skills, I learned how to use TypeScript for React. Typescript is pretty nice, so I think I’ll use it for my projects in the future. I also got to put the React skills I learned making this website to the test when I built the components of the app. I had to do a lot of wrangling to get the timeline to work but I’m proud I was able to get it to work. I’ve always been the make things pretty guy for my friends’ projects, so I’ve been doing a lot of designing. I can tell I’m getting better because the wireframe for this app looks clean!</p>
                <Picture link = {Jamalam} description = "Can’t design a wireframe without a crazy mess!" height ="50vh"></Picture>
                <Picture link = {NotJamalam} description = "Polished Mockup. I had to modify it to accommodate the attribute selection and our time constraints." height = "72vh"/>
            </div>
    },
    {   
        title:"This Website!",
        priority: 5,
        mPriority: 3,
        links: {
            github: "https://github.com/Gautier404/ProjectPortfolio",
        },
        image:ThisWebsite,
        date:"September 13th 2021",
        summary:"I spent a good amount of time making this so of course I’m going to include it! ",
        content: 
            <div>
                <h2>But why though?</h2>
                <p>This summer I told myself I would learn how to use React. I had built a simple html website before, but it was more like a resume with personality, and I didn’t like how it looked. I wanted a website to showcase my projects, for it to be easy to update, and to look nice!  </p>
                <h2>How I made it</h2>
                <p>This summer I got into cyanotyping which is where you paint some chemicals onto paper or fabric, expose it to the sun, and develop it in water to form a blue image. I like how cyanotypes look so I made this website look like one of my prints! All the textures you see come from a free texture pack from <a href = "https://www.truegrittexturesupply.com/">true grit texture</a> supply I recently got. </p>
                <Picture link = {Cyanotypes} description = "Some of the cyanotypes I made this summer!" height = "20vw"></Picture>
                <p>The framework was simple. I wanted a little header with my face and links to my LinkedIn and GitHub and a bunch of cards for my projects. Each card is a react component that reads an object with all the information for each project. To create a new project, I add it to the object and my site automatically makes a card for it! </p>
                <p>I’m planning on showing this website to recruiters but I also want to put all the projects I work on here so I created a switch that sorts the projects between what I would want to show a recruiter and show my friends. Getting an animation for when the cards switch was difficult. React re renders components by deleting them and re adding them to the dom of a website, so programming an animation function by hand was completely above my head. I decided to use the React <a href = "https://github.com/joshwcomeau/react-flip-move">Flip Move library</a> Because I would rather spend my time making the rest of the website.</p>
                <p>Having a massive page with all my projects wasn’t practical or pretty so I modified my card component to expand if the user wanted to learn more about the project it displays. This was particularly challenging to me because I had to use a ref to calculate the height of the card to animate the card expanding and contracting. I also had to store the state of expansion of each card in an array one level up from the card because when an opened card got moved by my switch the card that took its position would open instead of the original card. </p>
                <p>After my fun part of making the framework, I got to write all the content. Writing is not exactly my favorite thing but writing about stuff I’m interested in has been alright. Its forcing me to do a better job of documenting the stuff I do which is important to show recruiters and just nice to look back at.</p>
                <h2>Stuff learned</h2>
                <p>I think I got better at project management skills while making this website. I put thought into what the purpose of this website would be and what I needed to get done while working on it. It took me four days to create the framework which is pretty good despite my inexperience with react. I am trying to get better at documentation so I kept a log of my progress which I will for sure do with my future projects.  </p>
            </div>
    },
    {   
        title:"ECVT Sheave Flange",
        priority: 1,
        mPriority: 1,
        links: {
        },
        summary:"Coming soon :)",
        date:"September 13th 2021",
        image:Flange,
        content: 
            <div>
                <h2>I told you, coming soon >:(</h2>
            </div>,
    },
    {   
        title:"Cyanotype Print Gallery",
        priority: 4,
        mPriority: 2,
        links: {
            },
        image: CyanoHeader,
        summary:"My art",
        content: 
            <div>
                <Picture link = {Cyano1} description = "" height = "20vw"></Picture>
                <Picture link = {Cyano2} description = "" height = "20vw"></Picture>
                <Picture link = {Cyano3} description = "" height = "20vw"></Picture>
                <Picture link = {Cyano4} description = "" height = "20vw"></Picture>
                <Picture link = {Cyano5} description = "" height = "20vw"></Picture>
                <Picture link = {Cyano5_5} description = "" height = "20vw"></Picture>
                <Picture link = {Cyano6} description = "" height = "20vw"></Picture>
                <Picture link = {Cyano7} description = "" height = "20vw"></Picture>
                <Picture link = {Cyano8} description = "" height = "20vw"></Picture>
                <Picture link = {Cyano9} description = "" height = "20vw"></Picture>
                <Picture link = {Cyano10} description = "" height = "20vw"></Picture>
                <Picture link = {Cyano11} description = "" height = "20vw"></Picture>
                <Picture link = {Cyano12} description = "" height = "20vw"></Picture>
                <Picture link = {Cyano13} description = "" height = "20vw"></Picture>
                <Picture link = {Cyano14} description = "" height = "20vw"></Picture>
                <Picture link = {Cyano15} description = "" height = "20vw"></Picture>

            </div>
    },
]
    
    