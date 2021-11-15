(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var i=a(1),o=a.n(i),n=a(2),s=a.n(n),r=(a(15),a(3)),c=(a(16),a(9)),h=a(0);function d(e){return Object(h.jsxs)("div",{className:"VideoContainer",children:[Object(h.jsx)("p",{children:e.description}),Object(h.jsx)("iframe",{src:e.link,frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:"true",title:"video",className:"Video"})]})}function l(e){return Object(h.jsxs)("div",{className:"PictureContainer",children:[Object(h.jsx)("p",{children:e.description}),Object(h.jsx)("img",{src:e.link,alt:e.description,style:{height:e.height},className:"Picture"})]})}var m=a.p+"static/media/TasteBuds.eacb32dd.svg",u=a.p+"static/media/AppflowTasteBuds.96aeb337.png",p=a.p+"static/media/Cynotypes.6fda5365.jpg",b=a.p+"static/media/Mask GroupThisWebsite.c5e6be52.png",w=a.p+"static/media/Jamalam.70f3610b.PNG",j=a.p+"static/media/NotJamalam.e3937b36.PNG",g=a.p+"static/media/AnimadeEasy.f6825b10.png",f=a.p+"static/media/Synth.69f19681.png",y=a.p+"static/media/Flange.5b1af04b.png",x=a.p+"static/media/SynthCad.1fc96e6a.PNG",v=[{title:"TasteBuds",priority:1,mPriority:1,links:{github:"https://github.com/matthewcn56/tasteBuds",devpost:"https://devpost.com/software/tastebuds",figma:"https://www.figma.com/file/lfkUIENJmOi74HKk2XTsgB/Wireframe?node-id=0%3A1"},image:m,date:"September 9th 2021",summary:"Some of the friends I made at UCLA are really into hackathons, so they asked me to join their team for LA Hacks 2021. We chose the weeklong track and created an app and RFID scanner that improves the existing UCLA dining hall swipe system. I was the UI/UX designer, but I ended up spending most of my time styling and using expo to develop the frontend of the app.",content:Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"What We Built"}),Object(h.jsxs)("p",{children:["The TasteBuds system would allow students to view where their friends are eating and the menus of each dining hall. Our app had users log in using their school\u2019s gmail account and store their information in our Firebase database. The first time they swipe into a dining hall they pair their account to their bruin card by scanning a QR code generated by our hardware system.  They then can see where their friends are eating and what food the dining halls are serving. Each user has their own personal QR code that other students can use to add them as friends. You can check out our ",Object(h.jsx)("a",{href:"https://devpost.com/software/tastebuds",children:"devpost"})," and ",Object(h.jsx)("a",{href:"https://github.com/matthewcn56/tasteBuds",children:"github"})," if you want to know all the nitty gritty details. Besides the app and hardware, we also created a video that I created the shot list and cinematography for. "]}),Object(h.jsx)(d,{link:"https://www.youtube.com/embed/ZMz_4wQKs1w",description:"Here\u2019s the demo video. Check out my cheesy acting at the end :D"}),Object(h.jsx)(l,{link:u,description:"TasteBuds App Flow",height:"80vw"}),Object(h.jsx)("h2",{children:"What I learned"}),Object(h.jsx)("p",{children:"This was one of my first times developing a product with a team, so I think the most important thing I learned was how to work on a complex project with a team of specialized individuals. Most of my work revolved around how the app would be used and how our product was presented so there was a lot of communication between me and the rest of the team about the mechanics of our system. They are all much better at programing and electronics than I am, so I ended up picking up a lot of knowledge about mobile development, databases, rfid scanners, and Bluetooth. "}),Object(h.jsx)("h2",{children:"Tools I used"}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:"Figma & Illustrator for the the wireframe and assets"}),Object(h.jsx)("li",{children:"React Native with Expo"}),Object(h.jsx)("li",{children:"A Nikon digital camera for the shaky cinematography in our demo"})]})]})},{title:"Synthesizer",priority:4,mPriority:4,links:{github:"https://github.com/Gautier404/cigar-box-synth"},summary:"During the pandemic I ended up working with plenty of electronics and code because electronic parts are cheap and all you need to code is a computer. Winter my freshman year I built a simple synthesizer for ASME\u2019s Fabrication and Design Essentials program. It used an Arduino to detect the position of my hand on a membrane potentiometer to generate a tone and several potentiometers to modify the tone\u2019s properties. It\u2019s been my favorite project so far and I ended learning a lot about electronics and signal processing.",date:"September 13th 2021",image:f,content:Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Inspiration"}),Object(h.jsxs)("p",{children:["This was not the first time someone has built a synthesizer using a membrane potentiometer. I got my idea from ",Object(h.jsx)("a",{href:"https://www.youtube.com/watch?v=QaW5K85UDR0",children:"Wintergatans modulin"}),". Wintergatan is a musician and engineer who creates cool musical instruments. I like their work which is partly why I want to be a mechanical engineer. When researching synthesizer design I also found ",Object(h.jsx)("a",{href:"https://www.youtube.com/watch?v=YNoj9Rrw_VM&t=487s",children:"Moritz Klein's guide on active filters"}),". I thought the way he explained signal processing super was cool so I included an active low pass filter in my design."]}),Object(h.jsx)("h2",{children:"The Design"}),Object(h.jsx)(d,{link:"https://youtube.com/embed/3XiiAAksCvc",description:"Here's a demo video of some of the features. I created this video before the housing was done so you can see all the electronics."}),Object(h.jsx)("h2",{children:"Stats"}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:"84 playable notes from A0 to A flat 7 "}),Object(h.jsx)("li",{children:"Using the tuning potentiometer, the synthesizer can be tuned to any 2 octave interval within the 84 note range. "}),Object(h.jsx)("li",{children:"Active analog low pass filter for mellow sound (sine wave) or nasal sound (square wave) "}),Object(h.jsx)("li",{children:"Vibrato can change pitch from 0 - 4 hertz and occurs at a frequency of 5 hertz "}),Object(h.jsx)("li",{children:"Portamento or slide between notes can go from air raid siren smooth to none at all"}),Object(h.jsx)("li",{children:"Local Gain control has range of 5 to 0 V"})]}),Object(h.jsx)(l,{link:x,description:"I used CAD to create the housing of the synthesizer but ended up modifying it to be simpler to accommodate my very blunt hand saw. ",height:"50vh"}),Object(h.jsx)("h2",{children:"Challenges"}),Object(h.jsx)("p",{children:"Getting Carried Away with Coding"}),Object(h.jsx)("p",{children:"I was super excited to start building my synth but it took a while for some of the electrical components to come in the mail so I ended up coding all the software in one night. As you would expect when I did assemble everything my code was a buggy mess! I had to spend another couple hours debugging the software which wasn\u2019t so fun. This was also my first time programming in C++ so there were lots of errors I didn\u2019t understand. Next time I do a project I will definitely assemble the components first and then methodically iterate my code."}),Object(h.jsx)("p",{children:"Membrane Potentiometer Signal Noise"}),Object(h.jsx)("p",{children:"Once I received my membrane potentiometer in the mail and hooked it up to my Arduino, I realized the signal was very noisy which made the speaker alternate between notes in not so nice sounding ways. I ended programming a smoothing function within my code to average out the past 10 readings in order to smooth out the signal."}),Object(h.jsx)("p",{children:"Membrane Potentiometer sending Signal when not depressed"}),Object(h.jsx)("p",{children:"When I removed my hand from the membrane potentiometer the speaker would still play. Having space between notes in music is vital so I added a pulldown resistor to the membrane potentiometer which had it send a signal of 0 when not being played. I found this solution online from a blog by Russel Smith. The drawback of this solution is that the readings from the membrane potentiometer were no longer linear. To fix this I took readings of the potentiometer at 2 cm intervals. Using excel, I calculated a polynomial that did a decent job of linearizing the data and incorporated it into the readpot() function in my code."})]})},{title:"Animade Easy",priority:3,mPriority:2,links:{github:"https://github.com/css-animations/animade-easy",devpost:"https://devpost.com/software/animade-easy",figma:"https://www.figma.com/file/vkMPhKmJ1m4u2EcQZQwR0P/NOtJAMALAM?node-id=0%3A1"},summary:"Animade Easy is a devtools extension that makes creating custom CSS animations super easy. I created it with some friends PennApps Fall 2021. I designed the UI and helped build the front end in React with Typescript. This is my favorite hackathon project because it\u2019s a tool I would use and it was challenging but not impossible for us to create.",image:g,date:"September 13th 2021",content:Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Inspiration"}),Object(h.jsxs)("p",{children:["When I was making my personal website, I learned how to create CSS animations. I found that typing out an animation was pretty far removed from how animation is typically done so I proposed that we create a mash up of React Dev Tools, animation software, and a CSS development website like ",Object(h.jsx)("a",{href:"https://cssgradient.io/",children:"CSS Gradient"}),". My friend Jake wanted to learn how to create Bezier curves and my friend Mathew wanted to learn about code injection with a devtools extension, so we went with the idea. "]}),Object(h.jsx)("h2",{children:"How it works"}),Object(h.jsx)(d,{link:"https://www.youtube.com/embed/IbXtdEvrIVo",description:"Demo video created 10 minutes before the hackathon deadline. Hopefully we'll have a better one soon :)"}),Object(h.jsx)("p",{children:"Once we get everything flushed out we plan to put this on the chrome web store like a regular extension. After getting our extension you\u2019ll be able to open dev tools like normal and open our add on by selecting the Animade Easy Tab. "}),Object(h.jsx)("p",{children:"After hitting the Attach Animation button, you can select what element on your webpage you want to animate by clicking on it. I\u2019m not entirely sure how this works because Mathew programed this feature, but I think we inspect the dom and inject css to draw boxes around what is being selected. We plan on letting you select which css properties you want to animate but right now we have size and rotation hardcoded in.  There are also some other animation options you can add to the property like if you want it to loop or not. "}),Object(h.jsx)("p",{children:"The animation can be modified with the Bezier curve tool Jake built. When you modify the handles and keyframes it builds the CSS code that is injected when you hit play to animate your website! The CSS code is displayed below the Bezier curve for you to copy into your website. We have a copy to clipboard button but it doesn\u2019t work for devtools security reasons."}),Object(h.jsx)("p",{children:"You can create very complex animations with this tool compared typing them out by hand. I put a lot of thought into the UI so I\u2019m very proud with what we have so far. We definitely can release this on the chrome store but with school starting soon we\u2019ll see how much time we have to flush it out."}),Object(h.jsx)("h2",{children:"Stuff learned"}),Object(h.jsx)("p",{children:"This was the most complex web application I\u2019ve created in 36 hours, so we made a lot of mistakes. There was a big disconnect between the front end and backend team with how the workflow of this app was supposed to work so splicing everything together at 4 AM an hour before the deadline was a gigantic mess. If I were to do this over again, I would have communicated how the user was supposed to use our extension better and set up a solid data structure for the front and backend to anchor themselves to.  We originally had a super simple MVP in the works for the first half hour of the hackathon, but we pretty much threw iterative design out the window to create an application with all the cool features we wanted. We were lucky when everything fit together in the end, but I think it would have been better to build a framework that works and then add all our cool features. "}),Object(h.jsx)("p",{children:"Besides some project management skills, I learned how to use TypeScript for React. Typescript is pretty nice, so I think I\u2019ll use it for my projects in the future. I also got to put the React skills I learned making this website to the test when I built the components of the app. I had to do a lot of wrangling to get the timeline to work but I\u2019m proud I was able to get it to work. I\u2019ve always been the make things pretty guy for my friends\u2019 projects, so I\u2019ve been doing a lot of designing. I can tell I\u2019m getting better because the wireframe for this app looks clean!"}),Object(h.jsx)(l,{link:w,description:"Can\u2019t design a wireframe without a crazy mess!",height:"50vh"}),Object(h.jsx)(l,{link:j,description:"Polished Mockup. I had to modify it to accommodate the attribute selection and our time constraints.",height:"72vh"})]})},{title:"This Website!",priority:5,mPriority:3,links:{github:"https://github.com/Gautier404/ProjectPortfolio"},image:b,date:"September 13th 2021",summary:"I spent a good amount of time making this so of course I\u2019m going to include it! ",content:Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"But why though?"}),Object(h.jsx)("p",{children:"This summer I told myself I would learn how to use React. I had built a simple html website before, but it was more like a resume with personality, and I didn\u2019t like how it looked. I wanted a website to showcase my projects, for it to be easy to update, and to look nice!  "}),Object(h.jsx)("h2",{children:"How I made it"}),Object(h.jsxs)("p",{children:["This summer I got into cyanotyping which is where you paint some chemicals onto paper or fabric, expose it to the sun, and develop it in water to form a blue image. I like how cyanotypes look so I made this website look like one of my prints! All the textures you see come from a free texture pack from ",Object(h.jsx)("a",{href:"https://www.truegrittexturesupply.com/",children:"true grit texture"})," supply I recently got. "]}),Object(h.jsx)(l,{link:p,description:"Some of the cyanotypes I made this summer!",height:"20vw"}),Object(h.jsx)("p",{children:"The framework was simple. I wanted a little header with my face and links to my LinkedIn and GitHub and a bunch of cards for my projects. Each card is a react component that reads an object with all the information for each project. To create a new project, I add it to the object and my site automatically makes a card for it! "}),Object(h.jsxs)("p",{children:["I\u2019m planning on showing this website to recruiters but I also want to put all the projects I work on here so I created a switch that sorts the projects between what I would want to show a recruiter and show my friends. Getting an animation for when the cards switch was difficult. React re renders components by deleting them and re adding them to the dom of a website, so programming an animation function by hand was completely above my head. I decided to use the React ",Object(h.jsx)("a",{href:"https://github.com/joshwcomeau/react-flip-move",children:"Flip Move library"})," Because I would rather spend my time making the rest of the website."]}),Object(h.jsx)("p",{children:"Having a massive page with all my projects wasn\u2019t practical or pretty so I modified my card component to expand if the user wanted to learn more about the project it displays. This was particularly challenging to me because I had to use a ref to calculate the height of the card to animate the card expanding and contracting. I also had to store the state of expansion of each card in an array one level up from the card because when an opened card got moved by my switch the card that took its position would open instead of the original card. "}),Object(h.jsx)("p",{children:"After my fun part of making the framework, I got to write all the content. Writing is not exactly my favorite thing but writing about stuff I\u2019m interested in has been alright. Its forcing me to do a better job of documenting the stuff I do which is important to show recruiters and just nice to look back at."}),Object(h.jsx)("h2",{children:"Stuff learned"}),Object(h.jsx)("p",{children:"I think I got better at project management skills while making this website. I put thought into what the purpose of this website would be and what I needed to get done while working on it. It took me four days to create the framework which is pretty good despite my inexperience with react. I am trying to get better at documentation so I kept a log of my progress which I will for sure do with my future projects.  "})]})},{title:"ECVT Sheave Flange",priority:1,mPriority:1,links:{},summary:"Coming soon :)",date:"September 13th 2021",image:y,content:Object(h.jsx)("div",{children:Object(h.jsx)("h2",{children:"I told you, coming soon >:("})})}],I=a(22),O=a(8),k=a.p+"static/media/GithubLogo.98a1493f.svg",A=a.p+"static/media/LinkedInLogo.31474d15.svg",C=a.p+"static/media/DevpostLogo.6a91d01e.svg",S=a.p+"static/media/FigmaLogo.085ebcfc.svg";function N(e){var t={github:k,linkedIn:A,devpost:C,figma:S},a=[];for(var i in e.links)a.push(Object(h.jsx)("a",{className:"IBLink",href:e.links[i],children:Object(h.jsx)("img",{className:"IBItem",src:t[i],alt:"".concat(i," logo link")})}));return Object(h.jsx)("div",{className:"IBContainer",children:a})}function T(e){var t=Object(i.useState)(new Array(v.length).fill(!1)),a=Object(r.a)(t,2),o=a[0],n=a[1],s=F("priority",v),c=F("mPriority",v);return Object(h.jsx)(O.a,{className:"CardStack",children:e.status?c.map((function(e,t){return Object(h.jsx)("div",{children:Object(h.jsx)(B,{cardIndex:e,orderIndex:t,expanded:o,setter:n})},v[e].title)})):s.map((function(e,t){return Object(h.jsx)("div",{children:Object(h.jsx)(B,{cardIndex:e,orderIndex:t,expanded:o,setter:n})},v[e].title)}))})}function B(e){var t=Object(i.useState)(!0),a=Object(r.a)(t,2),o=a[0],n=a[1],s=v[e.cardIndex],d=Object(i.useState)(null),l=Object(r.a)(d,2),m=l[0],u=l[1],p=["CBPoka","CBWaves","CBBamboo","CBHatch","CBComic"];function b(e){var t=e.offsetHeight;u(t)}return Object(h.jsx)("div",{style:{height:m,transition:"height var(--speed) ease",paddingBottom:o?"1vw":"0vw"},className:p[e.orderIndex%p.length],children:Object(h.jsx)(I.a,{in:e.expanded[e.cardIndex],timeout:0,classNames:"Card",onEnter:b,onExit:b,children:Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"CTop",children:[Object(h.jsx)("h1",{className:"CTitle",children:s.title}),Object(h.jsx)(N,{links:s.links})]}),Object(h.jsxs)("div",{className:"CMiddle",children:[Object(h.jsx)("div",{className:"CImage",children:Object(h.jsx)("img",{src:s.image,alt:"project",style:{width:"100%"}})}),Object(h.jsxs)("div",{className:"CMiddleLeft",children:[Object(h.jsx)("p",{style:{fontSize:"1vw"},children:s.date}),Object(h.jsx)("p",{children:s.summary})]})]}),e.expanded[e.cardIndex]&&s.content,Object(h.jsx)("button",{className:"CButton",onClick:function(){var t=Object(c.a)(e.expanded);t[e.cardIndex]=!t[e.cardIndex],e.setter(t),n(!1)},children:Object(h.jsx)("p",{children:e.expanded[e.cardIndex]?"Boop for less :>":"Boop for more >:D"})})]})})})}function F(e,t){for(var a=[0],i=1,o=0,n=1;n<t.length;n++){for(var s=0;s<i;s++){if(o=a[s],t[n][e]>=t[o][e]){a.splice(s,0,n);break}s===i-1&&a.push(n)}i++}return a}var M=function(e){return Object(h.jsx)("div",{style:{width:"100%"},className:"Everything",children:Object(h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 332.75 332.74",children:[Object(h.jsx)("defs",{children:Object(h.jsx)("style",{children:".a{fill:".concat(e.color,";stroke:#231f20;stroke-miterlimit:10;}  transition: fill var(--speed) ease;}")})}),Object(h.jsx)("path",{className:"a",d:"M166.37.5A165.87,165.87,0,1,0,332.25,166.37,165.87,165.87,0,0,0,166.37.5Zm0,306.35A140.48,140.48,0,1,1,306.85,166.37,140.48,140.48,0,0,1,166.37,306.85Z"}),Object(h.jsx)("path",{className:"a",d:"M239.49,166.37a73.12,73.12,0,1,1-73.12-73.12A73.12,73.12,0,0,1,239.49,166.37Z"})]})})};var P=function(e){return Object(h.jsx)("div",{style:{width:"100%"},className:"Gear",children:Object(h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 271.12 271.11",children:[Object(h.jsx)("defs",{children:Object(h.jsx)("style",{type:"text/css",children:".b{fill:".concat(e.color,"; transition: fill var(--speed) ease;}")})}),Object(h.jsx)("path",{className:"b",d:"M258.68,110.48H229.09a12.44,12.44,0,0,1-11.54-7.83c-.24-.6-.49-1.2-.75-1.79a12.46,12.46,0,0,1,2.63-13.71l20.89-20.89a12.45,12.45,0,0,0,0-17.59L222.44,30.8a12.42,12.42,0,0,0-17.58,0L184,51.69a12.44,12.44,0,0,1-13.7,2.62c-.6-.26-1.22-.51-1.83-.76A12.44,12.44,0,0,1,160.6,42V12.43A12.43,12.43,0,0,0,148.17,0H122.88a12.43,12.43,0,0,0-12.43,12.43V42a12.44,12.44,0,0,1-7.83,11.54l-1.76.73a12.44,12.44,0,0,1-13.7-2.62L66.23,30.76a12.45,12.45,0,0,0-17.59,0L30.77,48.64a12.42,12.42,0,0,0,0,17.58L51.69,87.15a12.46,12.46,0,0,1,2.63,13.71c-.26.59-.51,1.19-.75,1.79A12.44,12.44,0,0,1,42,110.48H12.44A12.44,12.44,0,0,0,0,122.91V148.2a12.44,12.44,0,0,0,12.44,12.43H42a12.44,12.44,0,0,1,11.54,7.83q.36.9.75,1.8A12.44,12.44,0,0,1,51.69,184l-21,21a12.45,12.45,0,0,0,0,17.59l17.88,17.87a12.42,12.42,0,0,0,17.58,0l21-21a12.44,12.44,0,0,1,13.7-2.62l1.76.73a12.45,12.45,0,0,1,7.83,11.54v29.61a12.43,12.43,0,0,0,12.43,12.43h25.29a12.43,12.43,0,0,0,12.43-12.43V229.1a12.44,12.44,0,0,1,7.83-11.54c.61-.25,1.23-.5,1.83-.76a12.44,12.44,0,0,1,13.7,2.62l20.93,20.93a12.45,12.45,0,0,0,17.59,0l17.87-17.88a12.42,12.42,0,0,0,0-17.58L219.43,184a12.44,12.44,0,0,1-2.63-13.7q.39-.9.75-1.8a12.44,12.44,0,0,1,11.54-7.83h29.59a12.44,12.44,0,0,0,12.44-12.43V122.91A12.44,12.44,0,0,0,258.68,110.48Zm-123.12,65.9a40.83,40.83,0,1,1,40.82-40.82A40.82,40.82,0,0,1,135.56,176.38Z"})]})})};function H(e){return Object(h.jsxs)("button",{className:"Switch",onClick:function(){return e.setStatus(!e.status)},children:[Object(h.jsx)("div",{className:"SwitchChild1",children:Object(h.jsx)(P,{color:e.status?"#FFFFFF":"#232370"})}),Object(h.jsx)("div",{className:"SwitchChild2",children:Object(h.jsx)(M,{color:e.status?"#232370":"#FFFFFF"})}),Object(h.jsx)("div",{className:"SwitchLever",style:e.status?{transform:"translateX(0%)"}:{transform:"translateX(100%)"}})]})}var L=a.p+"static/media/Me.1e82a857.jpg";function W(e){return Object(h.jsxs)("div",{className:"Header",children:[Object(h.jsx)("div",{className:"HeaderTop",children:Object(h.jsx)(N,{links:{github:"https://github.com/Gautier404",linkedIn:"https://www.linkedin.com/in/andrewjgautier/"}})}),Object(h.jsx)("div",{className:"HeaderLeft",children:Object(h.jsx)("img",{className:"HeaderImage",src:L,alt:"Drew Gautier"})}),Object(h.jsxs)("div",{className:"HeaderRight",children:[Object(h.jsx)("p",{className:"HeaderTitle",children:"Hello, my name is Drew"}),Object(h.jsx)("p",{children:"and this is a website I created to showcase the projects I work on! Toggle the switch bellow to sort things between what I think is the most related to mechanical engineering or what I think is most cool."})]})]})}var z=function(){var e=Object(i.useState)(!0),t=Object(r.a)(e,2),a=t[0],o=t[1];return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)("div",{className:"AppContent",children:[Object(h.jsx)(W,{}),Object(h.jsx)(H,{status:a,setStatus:o}),Object(h.jsx)(T,{status:a})]})})},E=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,23)).then((function(t){var a=t.getCLS,i=t.getFID,o=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),i(e),o(e),n(e),s(e)}))};s.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(z,{})}),document.getElementById("root")),E()}},[[20,1,2]]]);
//# sourceMappingURL=main.83e9a729.chunk.js.map