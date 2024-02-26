import {Video} from './Video.js';
import {Picture} from './Picture.js';
import {Gallery} from './Gallery.js';

import TasteBuds from '../Assets/TasteBuds.svg'
import TasteBudsAppFlow from '../Assets/AppflowTasteBuds.png'
import Cyanotypes from '../Assets/Cynotypes.jpg'
import ThisWebsite from '../Assets/Mask GroupThisWebsite.png'
import Jamalam from '../Assets/Jamalam.PNG'
import NotJamalam from '../Assets/NotJamalam.PNG'
import Animade from '../Assets/AnimadeEasy.png'
import Synth from '../Assets/Synth.png'
import Flange from '../Assets/Flange.png'
import SynthCad from '../Assets/SynthCad.PNG'
import CyanoHeader from '../Assets/Cyano/CyanoHeader.png'
import PoodleProfile from '../Assets/PoodleProfile.png'
import ActuatorProfile from '../Assets/Actuator.png'
import KareokeSchematic from '../Assets/KareokeSchematic.png'
import KareokeProfile from '../Assets/KareokeProfile.png'
//import KareokeProfile from '../Assets/blahblahblah.png'

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
import Cyano16 from '../Assets/Cyano/Cyano16.jpg'
import Cyano17 from '../Assets/Cyano/Cyano17.jpg'
import Cyano18 from '../Assets/Cyano/Cyano18.jpg'
import Cyano19 from '../Assets/Cyano/Cyano19.jpg'
import Cyano20 from '../Assets/Cyano/Cyano20.jpg'
import Cyano21 from '../Assets/Cyano/Cyano21.jpg'
import Cyano22 from '../Assets/Cyano/Cyano22.jpg'
import Cyano23 from '../Assets/Cyano/Cyano23.jpg'

import Poodle from '../Assets/3DPrints/Poodle.jpg';
import ClosetHook from '../Assets/3DPrints/ClosetHook.jpg';
import BedHook from '../Assets/3DPrints/BedHook.jpg';
import Assembled162Proj from '../Assets/3DPrints/Assembled162Proj.jpg'
import DeskLampHolder from '../Assets/3DPrints/DeskLampHolder.jpg'
import InjectionMoldTest from '../Assets/3DPrints/InjectionMoldTest.jpg'
import Lamp from '../Assets/3DPrints/Lamp.jpg'
import Print2 from '../Assets/3DPrints/Print2of162bProj.jpg'
import Print3 from '../Assets/3DPrints/Print3of162bProj.jpg'

import OdriveSchematic from '../Assets/OdriveSchematic.png'
import OdriveLayout from '../Assets/OdriveLayout.png'
import OdriveBox from '../Assets/Odrive Box.PDF'
import MainSchematic from '../Assets/MainBoxSchematic.png'
import MainLayout from '../Assets/MainBoxLayout.png'
import MainBox from '../Assets/Main Box.pdf'
import Benchamin from '../Assets/Benchamin.jpg'
import ECVTArt from '../Assets/ECVTArt.png'
import TreasureTracker from '../Assets/TreasureTracker.png'

import SPAM from '../Assets/SPAM.png'
import SPAMToolpath2D from '../Assets/SPAM_Toolpath2D.png'
import SPAMToolpath3D from '../Assets/SPAM_Toolpath3D.png'
import SPAMDHTable from '../Assets/SPAM_DHTable.png'
import SPAMShakyCartesianTracking from '../Assets/SPAM_Shaky_Cartesian_Tracking.png'
import SPAMTightCartesianTracking from '../Assets/SPAM_Tight_Cartesian_Tracking.png'
import SPAMTightAngleTracking from '../Assets/SPAM_Tight_Angle_Tracking.png'
import SPAMFirstHello from '../Assets/SPAM_First_Hello.png'
import SPAMGraphicDesign from '../Assets/SPAM_Graphic_Design.png'
import SPAMHelloWorlds from '../Assets/SPAM_Hello_Worlds.png'

import FlyierClub from '../Assets/FlyierClub.png'

import DNDCAD from '../Assets/DND_CAD.png'
import DNDDiagram from '../Assets/DND_Diagram.png'
import DNDElectronics from '../Assets/DND_Electronics.jpg'
import DNDFrontPage from '../Assets/DND_FrontPage.jpg'
import DNDInternals from '../Assets/DND_Internals.jpg'
import DNDMaskMechanism from '../Assets/DND_Mask_Mechanism.jpg'
import DNDMaskMount from '../Assets/DND_Mask_Mount.jpg'
import DND from '../Assets/DND.png'

import Earing from '../Assets/Earing.png'
import EaringLeft from '../Assets/Earing_Left.jpg'
import EaringRight from '../Assets/Earing_Right.jpg'
import EaringMiddle from '../Assets/Earing_Middle.jpg'

let EaringGallery = [
    {link: EaringLeft, description: ""},
    {link: EaringMiddle, description: ""},
    {link: EaringRight, description: ""},
]


let CyanotypeGallery = [
    {link: Cyano1, description: "My first two prints made using plants from my backyard."},
    {link: Cyano2, description: "An experiment using cut paper to block out light."},
    {link: Cyano3, description: "Cat and moon from cut paper."},
    {link: Cyano4, description: "Another fern print with a pretty blue color from the long exposure time."},
    {link: Cyano5, description: "My cat Kel."},
    {link: Cyano5_5, description: "Kel on actual Kel."},
    {link: Cyano6, description: "Boy in Bathtub made using vinyl paper."},
    {link: Cyano7, description: "Bert the frog wizard"},
    {link: Cyano8, description: "Bert & his friend Kurt on a journey"},
    {link: Cyano9, description: "Berts intimidating grandmother"},
    {link: Cyano10, description: "Results of a day of printing. Here you can see a vinyl negative I use to create my prints."},
    {link: Cyano11, description: "Me and my friend from across the country. It's been a while since I've seen him."},
    {link: Cyano12, description: "Ferrari because cars are cool."},
    {link: Cyano13, description: "The sun."},
    {link: Cyano14, description: "A rainbow."},
    {link: Cyano15, description: "A very. angry. frog lion."},
    {link: Cyano16, description: "Bulk printing for some christmas cards! It was raining during exposure which you can see reflected on the prints if you look closely."},
    {link: Cyano17, description: "A Magic token card."},
    {link: Cyano18, description: "A girl on a sled."},
    {link: Cyano19, description: "Dancing beetle."},
    {link: Cyano20, description: "Blue tiger."},
    {link: Cyano21, description: "Ballerina."},
    {link: Cyano22, description: "Waterfall."},
    {link: Cyano23, description: "A beach at night."},
]

let ThreeDPrints = [
    {link: Lamp, description: "A Christmas gift for my sister I made with a python script in Blender."},
    {link: InjectionMoldTest, description: "A test injection mold for a dinosaur coin."},
    {link: Assembled162Proj, description: "Part of a project assembled together for my compliant mechanism class."},
    {link: Print2, description: "Second iteration of the blocks directly from the print bed."},
    {link: Print3, description: "Third iteration plus another flexture block."},
    {link: DeskLampHolder, description: "An adaptor that lets me attach my lamp to my desk."},
    {link: Poodle, description: "A balloon poodle I modelled using SOLIDWORKS to give as a gift."},
    {link: ClosetHook, description: "A hook so I can hang up my laundry bag"},
    {link: BedHook, description: "Hooks that fit around my bunkbed to hang up my school bag and sweaters."}
]

//Object that contains all the content for the projects.
//priority the higher the number the higher on the page it is
//mpriority -> how important it is for recruiters from mechanical engineering fields to be looking at
//alt+z for word wrap

//card template:
// {   
//     title:"The Website You're Looking At!",
//     date:"3-6-2023",
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
        mPriority: 5,
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
        priority: 1,
        mPriority: 1,
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
        mPriority: 4,
        links: {
            github: "https://github.com/Gautier404/ProjectPortfolio",
        },
        image:ThisWebsite,
        date:"September 13th 2021",
        summary:"I spent a lot of time building this website so of course I have to include it!",
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
        title:"Print Gallery",
        priority: 4,
        mPriority: 2,
        links: {
            },
        image: CyanoHeader,
        summary:"Outside of engineering I like to create prints. Here are some and a little explanation on how they are made!",
        content: 
            <div>
                <h2>How I make them</h2>
                <p>Cyanotyping is a form of printing which uses a chemical reaction to form the pigment Prussian blue. I begin making my cyanotypes by creating a 200 mL solution of 36 grams Ferric Ammonium Citrate and 20 grams Potassium Ferricyanide. This must be done in the dark because the chemicals will start to react in sunlight. I then paint the solution onto the material I want to print on. Most of the time I use watercolor paper but one time I printed on a shirt. Next, I make my negatives. When I first began printing I used plants from my backyard but recently I create designs digitally and print them onto translucent vinyl paper. I create a sandwich of glass, the negative, the printing material, and something rigid on and expose the print to the sun. It takes about 8 minutes of exposure for vinyl negatives and 25 minutes for plants. When photons in the UV spectrum from the sun hit the Ferric Ammonium Citrate a reaction occurs which allows Iron to combine with the Potassium Ferricyanide to form Prussian Blue. But because the chemicals are trapped in the fibers of the paper I need to develop the print in water so they are able to react with each Then all I have to do is let my print dry!</p>
                <h2>The Gallery</h2>
                <p>I first learned about cyanotypes by watching a Nile Red video where he synthesized the components of Prussian Blue, the pigment in cyanotypes, from scratch. I found the process of making cyanotypes fascinating and I planned on trying to make my own for my AP chemistry final project at the end of Senior Year. But because of the pandemic that never ended up happening. The following year I started researching printing methods to procrastinate studying for my spring quarter finals. I ended up ordering the chemicals to arrive as soon as school was out. This is what I made.
                </p>
                <Gallery galleryItems = {CyanotypeGallery}></Gallery>
            </div>
    },
    {   
        title:"ECVT Control Design",
        date:"3-6-2023",
        priority: 0,
        mPriority: 6,
        links: {
            github: "https://github.com/Bruin-Racing-Baja/GROND",
            },
        image: ECVTArt,
        summary:"How I make cars go fast!",
        content: 
            <div>
                <p>Baja Bruin Racing is a club at UCLA that designs, manufactures, and races offroad buggies. We normally race at events hosted by Baja SAE against other college teams. Most teams run a mechanical continuously variable transmission, but we have converted to an electrically controlled one. I’m in charge of all the electrical components that are associated with the control of the clutch position. </p>
                <h2>What is a Continuously Variable Transmission (CVT)?</h2>
                <p>The purpose of a CVT is to modulate the ratio between the engine shaft and the wheels. It’s composed of two conical clutches and a belt. By squeezing the clutches, the belt travels radially up and down the clutches changing the mechanical advantage between the clutches. This can be a bit difficult to visualize, so I would recommend checking out this video which shows the shifting action.</p>
                <Video link="https://www.youtube.com/embed/PEq5_b4LWNY" description ="A quick video about the CVT"></Video>
                <p>A traditional Baja Car uses flyweights on ramps to apply primary clutch clamping force that increases with engine speed and a helical spring and rollers to apply a secondary clutch clamping force that increases with torque. This system must be carefully balanced and tuned in order to achieve peak engine performance. Its difficult tuning the CVT perfectly and there are always several Baja events at competition that require different engine operating characteristics. This is why we’ve researched an electrically controlled CVT. We control the primary clutch position with a lever arm and linear actuator. If you’re interested in how exactly we control the primary clutch position check out <a href = "https://baja-controls.notion.site/Drew-s-Controls-Crash-Course-647b7b7e35d54651940a18fae95379cb">this</a> write up I made for our new members about the basic control of the ECVT.</p>
                <h2>Design Changes</h2>
                <p>Last year I was head of all things controls and in charge of manufacturing and implementing two ECVT’s designed by my predecessors. The results were rough but the I learned a lot. Using my team and I learned we designed a new electronic system. Here is a list of the major design issues and changes.</p>
                <h3>Physical Connection issues</h3>
                <p>Last year we used a double stacked PCB connected via headers which combined with our box design meant that a given signal would have been hand soldered at 6 points before it exited the electronics box. We also used bullets and screw terminals on external connections which tended to fail under light stress. The double stacked PCB would sometimes vibrate so much our teensy microcontroller would become disconnected from our motor controller randomly too. </p>
                <p>This year we’re using a single layer PCB with a 90 degree automotive connector that interfaces with the outside of the box. This reduces the number hand soldered connections and increase robustness. All external connectors are replaced by waterproof DT connectors to increase reliability. These new connectors are crimped which makes them easier to service in the field than soldered bullets.</p>
                <h3>Noise on sensor pins</h3>
                <p>One of our greatest challenges last year was high frequency noise on our encoders and gear tooth signals. The greatest culprit was the lack of shielding on motor wiring and electrical components. This year all of our important signals and the motor cabling are shielded. I’ve also separated electronics associated with the motor driver from input electronics, which is why there are two PCBs.</p>
                <h3>Teensy Power cycling from serial ground loop</h3>
                <p>During regular operation we noticed our teensy crashes and restarts every couple of seconds. I believe this is because the M22 system contained a ground loop between the motor driver and teensy and any current flowing the wrong way into the teensy could cause it to crash. This year we have the capability to power the teensy on a separate battery to cut the loop. We’re also looking into optical isolation for the CAN communication between the microcontroller and motor driver to separate high side and low side electronics.</p>
                <h3>CAN</h3>
                <p>CAN is a communication method and protocol commonly used in automotive applications. Its robust to noise, has a high data transmission rate, and our motor driver has a built in CAN transceiver and protocol. The M23 PCB has the capability to use CAN or Serial. </p>
                <h3>Battery for Real Time Clock</h3>
                <p>One thing we’ve wanted during data collection is accurate time stamps. The teensy has a real time clock that can be powered with an external coin battery. I added a mount for the battery on the M23 PCB.</p>
                <h2>Schematic & PCB Layout</h2>
                <p>I created these two schematics and PCBs with Arnav, the electronic subteam lead, using Altium Designer. This was the first time both of us made a PCB but the software was pretty simple to learn and we got a bunch of design help from our sister club Super Milage Vehicle. There was one small issue were I used the wrong version of ODrive layout but that’s been fixed and our new boards will be arriving shortly! </p>
                <Picture link = {MainSchematic} description = "Main Box Schematic" height = "20vw"></Picture>
                <Picture link = {MainLayout} description = "Main Box Layout" height = "20vw"></Picture>
                <Picture link = {OdriveSchematic} description = "Odrive Box Schematic" height = "20vw"></Picture>
                <Picture link = {OdriveLayout} description = "Odrive Box Layout" height = "20vw"></Picture>
                <p>For higher definition images download <a href = {MainBox} target="_blank">this</a> pdf for the odrive box and this pdf for the main box.</p>
                <h2>Manufacture & Testing</h2>
                <p>I created this test bench to validate our hardware before we put it on the car. This is particularly useful because the electronics subteam normally only gets a few days to work on the car and having our designs validated lets me catch errors early. My software counterpart can develop code without an actual car. It incorporates an Analog Discovery 2 to generate the input signals and read CAN traffic and a Raspberry Pi for remote flashing of the Teensy and data collection.</p>
                <Picture link ={Benchamin} description = "Our Test Bench" height = "20vw"></Picture>
                <p>We’ve only found a few errors with the pcb, mostly to do with part footprints so they’re ready to go on the car! Right now we are waiting for the powertrain, transmission, and engine to be assembled on the car before we can do actual harnessing.</p>
                <p>As a bonus here's a video of last years actuator on last years test bed!</p>
                <Video link="https://youtube.com/embed/OrqwldYKF2g" description ="The actuator moving pack and forth"></Video>
            </div>
    },
    {   
        title:"My 3D Prints",
        priority: 0,
        mPriority: 3,
        links: {
            },
        image: PoodleProfile,
        summary:"The bits and bobs I print at UCLA's makerspace.",
        content: 
            <div>
                <Gallery galleryItems = {ThreeDPrints}></Gallery>
            </div>
    },
    {   
        title:"The Kareoketron 9000",
        priority: 0,
        mPriority: 4.5,
        links: {
            github: "https://github.com/Gautier404/kareoke",
            },
        image: KareokeProfile,
        summary:"A simple sound player and listener I created for Physics Lab Fall Sophomore year.",
        content: 
            <div>
                <h2>Functionality</h2>
                <Video link="https://youtube.com/embed/kFo-WVT7Ql4" description ="Here I am using the Kareoketron 9000. Please excuse the poor singing!"></Video>
                <p>The kareoketron 9000 tests users pitch by playing them a note then listening for the note they sing back. If the note they sing back is within one percent of the desired frequency the green led light is turned on to show they hit the correct pitch. Over the course of two seconds the Teensy 4.0 microcontroller averages together what it hears. I used the notefrequency() function from the Audio library that came with the Teensy. After the Teensy determines the average note sung, it flashes a light to show how close you were to the note overall. As you hopefully can tell from the video green is within one percent of the original note, orange is within twenty-five percent, and red is for when you completely miss the note. This process is repeated for five notes and the result of the test is printed out to the serial monitor of the computer the teensy is connected to.</p>
                <h2>Components</h2>
                <Picture link = {KareokeSchematic} description = "Wiring of the Kareoketron 9000" height = "20vw"></Picture>
                <p>At the heart of the kareoketron 9000 is a teensy 4.0 microcontroller which I chose because it came with an adc and the processing power to perform the fast fourier transforms needed to pick out a note in real time. My lab also let us borrow a speaker and a microphone. I used a simple voltage divider to cut the signal in half because the adc of the teensy could only take a signal with an offset of .6V with a VPP of 1.2V while the microphone outputted a signal with an offset of 1.25V and a VPP of 2V. The slick 3D printed housing was designed and printed by my lab partner Aiden.</p>
                <h2>Some Caveats</h2>
                <p>One interesting thing about the human voice is that there are a lot of overtones. Sometimes the teensy would pick up on these overtones and record them into the notefrequency() function. Since I was taking the average of sound over time these miss readings of overtones would throw off the results. I ended up throwing away any datapoints that were not within 25 percent of the original note to get rid of them. This means that even if you sing the correct note an octave up or down the kareoketron 9000 will consider the note you sang incorrect. Unfortunately, we disassembled the kareoketron 9000 to return all the parts before winter break but if we were to continue development we would definitely add octave jump detection and the ability to actually sing along to music.</p>
            </div>
    },
    {   
    title:"Treasure Tracker",
    date:"3-7-2023",
    priority: 4.5,
    mPriority: 4.5,
    links: {
        devpost: "https://devpost.com/software/pirate-compass",
        github: "https://github.com/TrevorGuo/TreasureTracker",
    },
    image: TreasureTracker,
    summary:"Idea Hacks 2022 First Place Winner",
    content: 
        <div>
            <p>Winter Quarter was a weird time to be at UCLA. A recent covid wave had pushed classes back online and everyone had at least one close contact in isolation housing. Nevertheless, IDEA hacks, the world’s largest hardware hackathon, continued in a hybrid in person and online format. My team was composed of my two roommates on campus and two friends still at home. Here’s what we created in 36 highly caffeinated hours:</p>
            <Video link="https://www.youtube.com/embed/J1GFBCbM9qY" description ="Our Demo Video"></Video>
            <h2>Inspiration</h2>
            <p>Our group of friends has had the pleasure of viewing the first three Pirates of the Caribbean movies. One of our group members was inspired by Jack Sparrow’s Compass. His compass points towards whatever Jacks wants most. While it would be hard to determine the deepest desires of one’s heart, we liked the idea of a compass that could remember and point to a location of one's choosing. </p>
            <h2>The Tech</h2>
            <p>The Treasure tracker uses a combination of a magnetometer and a GPS module in order to save locations and triangulate the bearing of a saved location. We only had access to a 90-degree servo, so we also printed a small reduction gear set that allowed the compass to achieve a larger range of motion. </p>
            <h2>My Role</h2>
            <p>My team was full of Electrical and Computer Engineers, so I ended up taking on more of the mechanical side of things. I designed and manufactured the casing for our demo compass and gave it a piracy themed paint job. I also wrote up the script for our demo video and edited it together. </p>
        </div>
    },
    {   
        title:"Control of SPAM Bot",
        date:"12-1-2023",
        priority: 4.5,
        mPriority: 5.5,
        links: {
            github: "https://github.com/Gautier404/robowriter",
        },
        image: SPAM,
        summary:"The coolest school assignment I've had at UCLA.",
        content: 
            <div>
                <p>The final project of my robotics kinematics course was to construct a robot that performed some sort of task with 4+ degrees of freedom. Our group decided to create a robot that was capable of drawing standard SVG files from Illustrator. I mostly worked on designing the control code to convert a given toolpath, as described by an SVG, to a series of commands that were sent to our dynamixel USB motor controller. I spent about 30 hours working on the code because of how fun it was and I'm super happy with the final product!</p>
                <Video link="https://www.youtube.com/embed/Kg42oVeM5DE" description ="Our Demo Video"></Video>
                <h2>How it works</h2>
                <p>First you choose a given SVG from illustrator or from mixtella's <a href = "https://mitxela.com/plotterfun/">plotter fun software</a>.  A parsing algorithm written in python then converts the elements within the file to a series of discretized points that we want the tip of the robot arm's sharpie to hit on the paper. </p>
                <Picture link = {SPAMToolpath2D} description = "A 2D toolpath" height = "20vw"></Picture>
                <Picture link = {SPAMToolpath3D} description = "A 3D toolpath with interpolation" height = "20vw"></Picture>
                <p>We feed these points into a series of functions that convert them into a scaled 3D toolpath that fits within the robots work area and accounts for the lifting and pressing of the sharpie. Earlier we had determined the basic dimensions of the robot, derived a Denavit-Hartenberg table, and computed the forward and inverse kinematics of the robot. </p>
                <Picture link = {SPAMDHTable} description = "Robot parameters and Denavit-Hartenberg Table" height = "20vw"></Picture>
                <p>For those who don't know: forward kinematics take in a series of motor angles and convert them into the location of the robot tool tip in cartesian coordinates in relation to the base of the robot. Inverse kinematics take in the tooltip cartesian coordinates and convert it into motor joint angles. This was done with the help of MATLAB. Finding the kinematic relations comprised most of what had been taught to us in the course by Dr. Hong. The inverse kinematics were used to convert our cartesian toolpath into into a series of motor angles. We put these angles through the forward kinematics to generate a simulation of our robot going through the toolpath. </p>
                <Video link="https://www.youtube.com/embed/dAau1SGesEk" description ="The simulation runs slowly in this video but in a more recent version of our code I've added some optimizations to make it smoother."></Video>
                <p>Finally the series of angles is sent to the robot arm using a modified python driver I wrote and the dynamixel motor USB motor controller.</p>
                <h3>PID Tuning</h3>
                <p>During the development process we discovered that the SPAM bot was doing a poor job line following. I added a motor position logger to create the following graphs to gauge motor error. After tightening up the PID parameters of each of the motors and adding the SPAM counterweight, the line following was much better.</p>
                <Picture link = {SPAMShakyCartesianTracking} description = "Cartesian tracking before tuning" height = "20vw"></Picture>
                <Picture link = {SPAMTightCartesianTracking} description = "Cartesian tracking after tuning" height = "20vw"></Picture>
                <Picture link = {SPAMTightAngleTracking} description = "Angle tracking after tuning" height = "20vw"></Picture>
                <h2>SPAM Bot Gallery</h2>
                <Picture link = {SPAMFirstHello} description = "The first time Bezier curves worked & a nerdy goodnight text." height = "20vw"></Picture>
                <Picture link = {SPAMGraphicDesign} description = "SPAM Bot does graphic design???" height = "20vw"></Picture>
                <Picture link = {SPAMHelloWorlds} description = "Hello Worlds!" height = "20vw"></Picture>
            </div>
    },
    {   
        title:"Bare Bones DND",
        date:"1-15-2022",
        priority: 4.3,
        mPriority: 5.2,
        links: {
            devpost: "https://devpost.com/software/bare-bonez-dnd",
        },
        image: DND,
        summary:"A robot DND dungeon master and Idea Hacks 2024 3rd place winner.",
        content: 
            <div>
                <Picture link = {DNDFrontPage} description = "The dungeon master and its DND kit" height = "20vw"></Picture>
                <p> Idea hacks is a 36 hour hardware hackathon hosted by the local chapter of IEEE at our school. We managed to win it all our sophomore year with a product we called Treasure Tracker (see below) but had a disappointing showing our Junior year after getting COVID halfway through and not making finals. For our final year at university, we created a robotic dungeon master using some of the AI tools that have been put out recently. It was intended to make getting into DND more accessible and fun since DMing can be a big task. It was a lot of fun and is my favorite hackathon I've done while at university. Bare Bones DND is best shown in video form. The one we took below was recorded at 6am after a long all nighter yet you can see how excited we were to play with the finished project.</p>
                <Video link="https://www.youtube.com/embed/EDbum2Axv7s" description ="Demo Video (I hope to put out a higher quality version in the future)"></Video>
                <h2>How it works</h2>
                <h3>Code</h3>
                <p>Out of everything, the code was the simplest component of this project. We used Open AI's APIs for speech to text, Chat GPT, and text to speech to convert our talking into the robots replies. There are a lot of API calls which is why the robot sometimes takes a while to think. Everything was done using python for ease of use and tested on our computers before being used on a Raspberry Pi 4. The Raspberry Pi also delt with inputs from the a recording button and the control of the skulls LED eyes and servo jaw motion.</p>
                <Picture link = {DNDDiagram} description = "The signal flow diagram for our robot" height = "20vw"></Picture>
                <h3>Electronics</h3>
                <p>You probably wouldn't guess that the most difficult part of our project was to get a microphone working with the Raspberry Pi. Unfortunately the Raspberry Pi doesn't come with any analogue read pins and there were no USB microphones available among the hackathon supplies. We tried using a 12 bit ADC but failed to get it to work in a reasonable amount of time. We also tried using a Teensy 4.1's ADC and sending the audio over a serial connection to the Pi 4 but that also proved to complicated given our time constraints. At the suggestion of one of the hackathon organizers, we used a PDM microphone hooked up to a Raspberry Pico emulating a USB microphone which worked after minimal debugging. </p>
                <p>The Raspberry Pi also didn't have any GPIO pins with DACs so I ended up sacrificing some airplane headphones to get an audio signal from the Pi's headphone jack. I also selected a class D amplifier and speaker to make our DM's voice louder. We were conveniently able to power everything off the Raspberry Pi's power supply.</p>
                <Picture link = {DNDElectronics} description = "Testing all the breadboarded electronic components before soldering them together and fitting them inside the enclosure." height = "20vw"></Picture>
                <Picture link = {DNDInternals} description = "Open enclosure of our project showing all the wiring and components. Its messy but hasn't broken after being banged around during transport and when we show it off to guests at our apartment." height = "1vw"></Picture>
                <h3>Enclosure and Mask</h3>
                <p>My main task was to create the enclosure and animatronic skull. I initially tried modeling my own skull as the entire enclosure but my proficiency at Blender proved to be too poor. I instead went with a regular box with a skull mask mounted to the front. The 3D files of a skull mask was found on Thingiverse by user BobStuntsville. I brought them into SOLIDWORKS and created a mounting plate for the skull that was 3D printed at the makerspace. The rest of the enclosure was made from laser cut acrylic. The whole thing was put together arts and crafts style with hot glue and lockwire with the aid of some 3D printed corner supports.</p>
                <Picture link = {DNDCAD} description = "CAD of the mask mount." height = "20vw"></Picture>
                <Picture link = {DNDMaskMechanism} description = "The mounted mask. You can see how the jaw is connected to the hinge via lockwire and how servo actuation moves the jaw up and down." height = "20vw"></Picture>
                <Picture link = {DNDMaskMount} description = "Mounting the mask." height = "20vw"></Picture>
            </div>
        },
        {   
        title:"Flyier Club",
        date:"5-30-2022",
        priority: 4.5,
        mPriority: 2.5,                
        links: {
            github: "https://github.com/Gautier404/Flyier-Club",
        },
        image: FlyierClub,
        summary:"A dumb idea from sophomore year",
        content:
            <div>
                <p>My roomates and I thought it would be a fun idea to create a club on campus who's sole purpose was to distribute silly fliers. My roomate and I created <a href = 'https://gautier404.github.io/Flyier-Club/'>this website</a> to host the designs I made. Some of the designs are pretty fun so go check it out! This idea was later made much cooler <a href = 'https://www.instagram.com/flier.club/'>by some folks at CalArts</a>.</p>
            </div>
        },
        {   
            title:"LED Filament Earings",
            date:"1-15-2023",
            priority: 4,
            mPriority: 4.7,                
            links: {
            },
            image: Earing,
            summary:"A moon themed Christmas gift for my girlfriend",
            content:
                <div>
                    <Gallery galleryItems = {EaringGallery}></Gallery>
                    <p>Adafruit has this flexible filament called noods. It's basically the same stuff you find in modern Eddison bulbs. Slightly inspired by a <a href = "https://www.youtube.com/watch?v=Fzbg-BqIdJI">mixtela video</a>. I thought it would be fun to take the filament and turn it into an earing. Originally, I wanted to make hoops but the filament in stock was long and would have made earrings that were much too large. This is why I looped the filament over itself to create a moon shape!</p>
                    <p>I used copper wire to provide structure to the earrings and tiny slices of heat shrink to fix the filament to the wire. I selected a 3V coin cell and a 200 Ohm resister to give the battery life of the earrings a dozen hours. To anchor everything together I 3D printed a holder that pressed both ends of the circuit into the faces of the battery. To turn the earrings on you just need to shove the resistor into the battery holder. To turn turn them off you just need to pull the resistor out.</p>
                    <p>It took me lot of fiddling to get the filament in the correct shape. In the future I might make a flexible PCB version of these to see if the assembly process can be simplified. Overall I'm pretty happy with how they turned out! My girlfriend has taken them out a few times and they've held together and gotten lots of compliments. And while LED earrings tend to be a little gaudy, I think these ones have some class. </p>
                </div>
        },
        
    // {   
    // title:"The Trials of Tonatiuh",
    // date:"3-7-2023",
    // priority: 1.7,
    // mPriority: 1.7,
    // links: {
    //     devpost: "https://devpost.com/software/the-artifact-of-ix-boluc",
    //     github: "https://github.com/TrevorGuo/mayanKTANE",
    // },
    // image: TasteBuds,
    // summary:"Covid and a hackathon what could go wrong?",
    // content: 
    //     <div>
    //     </div>
    // },
]
    
    