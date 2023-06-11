(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{111:function(e){e.exports=JSON.parse('{"a":[{"title":"Welcome to my personal portfolio","text":["The intention of this webpage is to showcase the projects that I\u2019ve worked on as a hobby. Some of these projects are meaningful towards my curricular history, meaning that they are already present either in my LinkedIn profile or my Resume. However, the rest do not provide much weight to my application; hence, they were nowhere to be found, excluding Github, until now.","I began these projects out of curiosity and boredom. The fun of learning and doing something was what pushed me to put my limited time and effort into them after attending my responsibilities at school, work, and towards my physical and mental health. Being this my motivation, for the most part it wasn\u2019t an issue to not have them public. However, after some years, I realized that I didn\u2019t want these projects to live only in my (and Github\u2019s) memory, so I figured that an online portfolio could be a great option.","These projects range widely in complexity, some are a simple proof of concept lasting a couple of days, and some were a team effort that took months, and some are still ongoing projects. But all of them were full of lessons, and amazing experiences.","Even though the main intention of this portfolio is a professional one, I truly don\u2019t mind if it never helps me to achieve an admission anywhere (however the possibility sounds great), what would be most amazing for me is to inspire someone to do their own projects, and entertain themselves while also growing a set of skills. So to you, reader, if you\u2019re a developer like me and want to start building a portfolio of projects, I hope this helps you.","Finally, thank you for your time and for visiting my webpage."]}]}')},119:function(e){e.exports=JSON.parse('{"a":[{"heading":"Rescue Maze Jr. RoboCup","date":"01.01.17","image":"assets/images/Mariachi.jpg","description":"Developed an autonomous rescue robot for a simulation of a disaster zone, able to deliver rescue kits to victims.","link":"https://github.com/tomvik/RoBorregos-Japon"},{"heading":"Natural Selection Sim","date":"27.10.19","image":"assets/images/natural_selection.JPG","description":"A graphical simulation of how Natural Selection changes the features of species throughout generations to survive.","link":"https://github.com/tomvik/NaturalSelection_SideProjects"},{"heading":"Red Ball Tracker","date":"13.12.19","image":"assets/images/red_ball.JPG","description":"A simple red object tracker made in Python and OpenCV to experiment with this powerful computer vision library.","link":"https://github.com/tomvik/RedTracker"},{"heading":"RoboCup @Home","date":"01.08.20","image":"assets/images/Home.jpg","description":"Contributed in the development of an assistance robot that can carry out household activities for the user.","link":"https://github.com/RoBorregos/Robocup-Home/wiki"},{"heading":"RoBorregos Webpage","date":"01.08.20","image":"assets/images/roborregos.png","description":"Contributed in the development of RoBorrego\'s official webpage using React, Jest, and Github Actions for CI.","link":"http://roborregos.com/"},{"heading":"Portfolio Webpage","date":"01.02.21","image":"assets/images/ProjectsWebsite.JPG","description":"Simple Portfolio website to showcase my projects and serve as a Resume using TS, React and Github pages as host.","link":"https://github.com/tomvik/Portfolio"},{"heading":"ML plays Flappy Bird","date":"26.08.22","image":"assets/images/flappy_bird.gif","description":"Made a flappy bird game using python, to later train a machine learning model to play the game using NEAT.","link":"https://github.com/tomvik/FlappyBird_ML/tree/master"},{"heading":"Piano Tile Machine","date":"01.11.21","image":"assets/images/piano_tile_machine.JPG","description":"Made a python script to play Piano Tile autonomously. It takes screenshots and moves the mouse to the best tile.","link":"https://github.com/tomvik/Piano-Tile-Machine"},{"heading":"Stack Tower Machine","date":"13.07.22","image":"assets/images/stack_tower_machine.jpg","description":"Made a python script to play Stack the Tower autonomously. It tracks the moving block to determine when to click.","link":"https://github.com/tomvik/Stack-Tower-Machine"},{"heading":"Labyrinth Solver","date":"15.08.22","image":"assets/images/labyrinth_solver.gif","description":"Made a python script to fetch a random Maze and then solve it using BFS.","link":"https://github.com/tomvik/Labyrinth-Solver"},{"heading":"Labyrinth Solver","date":"09.06.23","image":"assets/images/mine_sweeper.gif","description":"Made a minesweeper game in Unity. Then made a python script to solve it.","link":"https://github.com/tomvik/Mine-sweeper"}]}')},143:function(e,t,a){},144:function(e,t,a){},181:function(e,t,a){"use strict";a.r(t);var n=a(69),i=a(0),o=a.n(i),r=a(10),s=a.n(r),c=(a(143),a(144),a(13)),l=a(209),d=a(131),m=a(111),h=a(3),u=function(){return Object(h.jsx)(l.a,{children:m.a.map((function(e){return Object(h.jsxs)(d.a,{style:{padding:16,margin:32},elevation:3,children:[Object(h.jsx)("h1",{children:e.title}),e.text.map((function(e){return Object(h.jsx)("p",{children:e})}))]})}))})},b=a(27),p=a(233),j=a(212),g=a(34),f=a(59),x=a(60),O=a.n(x),y=a(91),v=function(){var e=Object(y.a)(O.a.mark((function e(t,a,n,i){var o,r,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=t.target,r=new FormData(o),(s=new XMLHttpRequest).open("POST","https://formspree.io/f/xnqoedze"),s.setRequestHeader("Accept","application/json"),s.onreadystatechange=function(){s.readyState===XMLHttpRequest.DONE&&(200===s.status?n():i())},s.send(r);case 7:case"end":return e.stop()}}),e)})));return function(t,a,n,i){return e.apply(this,arguments)}}(),w={fullName:"",email:"",message:"",formSubmitted:!1,success:!1},k=function(){var e=Object(i.useState)(w),t=Object(f.a)(e,2),a=t[0],n=t[1],o=Object(i.useState)({}),r=Object(f.a)(o,2),s=r[0],c=r[1],l=function(){n(Object(b.a)(Object(b.a)({},w),{},{formSubmitted:!0,success:!0}))},d=function(){n(Object(b.a)(Object(b.a)({},w),{},{formSubmitted:!0,success:!1}))},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=e.fullName&&e.email&&e.message&&Object.values(s).every((function(e){return""===e}));return t};return{values:a,errors:s,handleInputValue:function(e){var t=e.target,i=t.name,o=t.value;n(Object(b.a)(Object(b.a)({},a),{},Object(g.a)({},i,o))),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=Object(b.a)({},s);"fullName"in e&&(t.fullName=e.fullName?"":"This field is required."),"email"in e&&(t.email=e.email?"":"This field is required.",e.email&&(t.email=/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e.email)?"":"Email is not valid.")),"message"in e&&(t.message=0!==e.message.length?"":"This field is required."),c(Object(b.a)({},t))}(Object(g.a)({},i,o))},handleFormSubmit:function(){var e=Object(y.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(Object.values(s).every((function(e){return""===e}))&&m())){e.next=5;break}return e.next=5,v(t,a,l,d);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),formIsValid:m}},S=[{name:"fullName",label:"Full Name",id:"my-name"},{name:"email",label:"Email",id:"my-email"},{name:"message",label:"Message",id:"my-message",multiline:!0,rows:10}],T=function(){var e=k(),t=e.handleInputValue,a=e.handleFormSubmit,n=e.formIsValid,i=e.errors,o=e.values;return Object(h.jsx)("form",{autoComplete:"off",onSubmit:a,children:Object(h.jsxs)("fieldset",{children:[Object(h.jsx)("legend",{children:"Did you find anything interesting? Feel free to contact me. I'll be sure to get in touch with you shortly."}),S.map((function(e,a){var n,o;return Object(h.jsx)(p.a,Object(b.a)({onChange:t,onBlur:t,name:e.name,label:e.label,error:i[e.name],multiline:null!==(n=e.multiline)&&void 0!==n&&n,fullWidth:!0,rows:null!==(o=e.rows)&&void 0!==o?o:1,autoComplete:"none"},i[e.name]&&{error:!0,helperText:i[e.name]}),a)})),Object(h.jsx)(j.a,{variant:"contained",type:"submit",color:"secondary",disabled:!n(),children:o.formSubmitted?o.success?"Successfully sent":"Failed to send":"Send Message"})]})})},I=function(){return Object(h.jsx)(l.a,{children:Object(h.jsx)(d.a,{style:{padding:16},children:Object(h.jsx)(T,{})})})},N=a(220),R=a(129),C=a(5),M=a(106),F=a(217),D=a(218),B=a(219),P=a(116),L=a.n(P),z=a(117),W=a(118),_=1233,J=Object(M.a)((function(e){var t=e.breakpoints,a=e.spacing;return{root:Object(g.a)({margin:"auto",borderRadius:a(2),transition:"0.3s",boxShadow:"0px 14px 80px rgba(34, 35, 58, 0.2)",position:"relative",maxWidth:500,marginLeft:"auto",overflow:"initial",background:"#ffffff",display:"flex",flexDirection:"column",alignItems:"center",paddingBottom:a(2),minWidth:250},t.up(_),{minWidth:500,flexDirection:"row",paddingTop:a(2)}),media:Object(g.a)({width:"80%",marginLeft:"auto",marginRight:"auto",marginTop:a(-3),height:0,paddingBottom:"48%",borderRadius:a(2),backgroundColor:"#fff","&:after":{content:'" "',position:"absolute",top:a(-3),left:a(5),width:"80%",height:"48%",borderRadius:a(2),opacity:.5,backgroundImage:"linear-gradient(147deg, #311b92 0%, #a5a1ac 74%)"}},t.up(_),{width:"100%",marginLeft:a(-3),marginTop:0,transform:"translateX(-8px)","&:after":{content:'" "',position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:a(2),opacity:.5,backgroundImage:"linear-gradient(147deg, #311b92 0%, #a5a1ac 74%)"}}),content:Object(g.a)({padding:24,minWidth:250,maxWidth:351},t.up(_),{minWidth:250,maxWidth:250}),cta:{marginTop:24,textTransform:"initial"},linkButton:{textDecoration:"none"},button:{backgroundImage:"linear-gradient(147deg, #a5a1ac 0%, #311b92  74%)",boxShadow:"0px 4px 32px rgba(34, 35, 58, 0.2)",borderRadius:100,paddingLeft:24,paddingRight:24,color:"#ffffff"}}})),G=o.a.memo((function(e){var t=e.heading,a=e.description,n=e.date,i=e.image,o=e.link,r=J(),s=Object(z.useBlogTextInfoContentStyles)(),c=(s.button,Object(R.a)(s,["button"])),l=Object(W.useOverShadowStyles)();return Object(h.jsxs)(F.a,{className:Object(C.default)(r.root,l.root),children:[Object(h.jsx)(D.a,{className:r.media,image:i}),Object(h.jsxs)(B.a,{className:r.content,children:[Object(h.jsx)(L.a,{classes:c,overline:n,heading:t,body:a}),Object(h.jsx)("a",{href:o,target:"_blank",rel:"noreferrer",className:r.linkButton,children:Object(h.jsx)(j.a,{className:r.button,children:"Learn more"})})]})]})})),H=a(119),q=Object(M.a)({outerGridStyle:{marginTop:"5px",marginBottom:"5px"}}),A=function(){var e=q(),t=H.a.map((function(e){var t=e.heading,a=e.description,n=e.date,i=e.image,o=e.link;return Object(h.jsx)(N.a,{item:!0,children:Object(h.jsx)(G,{heading:t,description:a,date:n,image:i,link:o})})}));return Object(h.jsx)(l.a,{children:Object(h.jsx)(N.a,{container:!0,direction:"column",spacing:6,justify:"space-around",sm:12,alignItems:"center",className:e.outerGridStyle,children:Object(h.jsx)(N.a,{item:!0,children:Object(h.jsx)(N.a,{container:!0,direction:"row",spacing:6,justify:"space-around",alignItems:"center",children:t})})})})};var E,V,X=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)(c.d,{children:[Object(h.jsx)(c.b,{exact:!0,path:"/home",component:u}),Object(h.jsx)(c.b,{exact:!0,path:"/projects",component:A}),Object(h.jsx)(c.b,{exact:!0,path:"/contact",component:I}),Object(h.jsx)(c.a,{to:"/home"})]})})},U=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,237)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,o=t.getLCP,r=t.getTTFB;a(e),n(e),i(e),o(e),r(e)}))},K=a(39),$=a(228),Q=a(229),Y=a(223),Z=a(234),ee=a(211),te=a(221),ae=a(222),ne=a(231),ie=a(230),oe=a(232),re=[{title:"Home",path:"/home"},{title:"Projects",path:"/projects"},{title:"Contact",path:"/contact"}],se=a(236),ce=a(224),le=Object(M.a)({list:{width:250},linkText:{textDecoration:"none",textTransform:"uppercase",color:"black"}}),de=function(e){var t=e.navLinks,a=le(),n=Object(i.useState)({right:!1}),r=Object(f.a)(n,2),s=r[0],c=r[1],l=function(e){return function(t){c({right:e})}};return Object(h.jsxs)(o.a.Fragment,{children:[Object(h.jsx)(Y.a,{edge:"start","aria-label":"menu",onClick:l(!0),children:Object(h.jsx)(ce.a,{fontSize:"large",style:{color:"white"}})}),Object(h.jsx)(se.a,{anchor:"right",open:s.right,onClose:l(!1),children:Object(h.jsx)("div",{className:a.list,role:"presentation",onClick:l(!1),onKeyDown:l(!1),children:Object(h.jsx)(ee.a,{component:"nav",children:t.map((function(e){var t=e.title,n=e.path;return Object(h.jsx)(K.b,{to:n,className:a.linkText,children:Object(h.jsx)(te.a,{button:!0,children:Object(h.jsx)(ae.a,{primary:t})})},t)}))})})})]})},me=a(226),he=a(225),ue=function(e){var t=e.children,a=Object(me.a)();return Object(h.jsx)(he.a,{appear:!1,direction:"down",in:!a,children:t})},be=a(227),pe={position:"fixed",bottom:"50px",right:"100px",zIndex:"99"},je=function(e){var t=e.children,a=Object(me.a)();return Object(h.jsx)(be.a,{in:a,children:Object(h.jsx)("div",{onClick:function(e){var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",style:pe,children:t})})},ge=Object(M.a)({navbarDisplayFlex:{display:"flex",justifyContent:"space-between"},navDisplayFlex:{display:"flex",justifyContent:"space-between"},linkText:{textDecoration:"none",textTransform:"uppercase",color:"white"}}),fe=function(){var e=ge(),t=re[0].title,a=re[0].path;return Object(h.jsxs)(o.a.StrictMode,{children:[Object(h.jsx)(ue,{children:Object(h.jsx)($.a,{position:"fixed",children:Object(h.jsx)(Q.a,{children:Object(h.jsxs)(l.a,{maxWidth:"md",className:e.navbarDisplayFlex,children:[Object(h.jsx)(K.b,{to:a,children:Object(h.jsx)(Y.a,{edge:"start",color:"secondary","aria-label":"home",children:Object(h.jsx)(ie.a,{fontSize:"large"})})},"Icon-"+t),Object(h.jsx)(Z.a,{smDown:!0,children:Object(h.jsx)(ee.a,{component:"nav","aria-labelledby":"main navigation",className:e.navDisplayFlex,children:re.map((function(t){var a=t.title,n=t.path;return Object(h.jsx)(K.b,{to:n,className:e.linkText,children:Object(h.jsx)(te.a,{button:!0,children:Object(h.jsx)(ae.a,{primary:a})})},a)}))})}),Object(h.jsx)(Z.a,{mdUp:!0,children:Object(h.jsx)(de,{navLinks:re})})]})})})}),Object(h.jsx)(Q.a,{id:"back-to-top-anchor"}),Object(h.jsx)(je,{children:Object(h.jsx)(ne.a,{color:"secondary",size:"large","aria-label":"scroll back to top",children:Object(h.jsx)(oe.a,{})})})]})},xe=a(126),Oe=a.n(xe),ye=a(127),ve=a.n(ye),we=a(128),ke=a.n(we),Se=a(77),Te=Se.a.div(E||(E=Object(n.a)(["\n  z-index: 0;\n"]))),Ie=Object(M.a)({footerDisplayFlex:{display:"flex",justifyContent:"center"}}),Ne=function(){var e="secondary",t=Ie();return Object(h.jsx)(Te,{children:Object(h.jsx)($.a,{position:"static",color:"primary",children:Object(h.jsx)(l.a,{maxWidth:"md",children:Object(h.jsx)(Q.a,{children:Object(h.jsxs)(l.a,{className:t.footerDisplayFlex,children:[Object(h.jsx)("a",{href:"https://www.linkedin.com/in/tomaslbmi/",target:"_blank",rel:"noreferrer",children:Object(h.jsx)(Y.a,{edge:"start",color:e,"aria-label":"home",children:Object(h.jsx)(Oe.a,{fontSize:"default"})})}),Object(h.jsx)("a",{href:"https://github.com/tomvik",target:"_blank",rel:"noreferrer",children:Object(h.jsx)(Y.a,{edge:"start",color:e,"aria-label":"home",children:Object(h.jsx)(ve.a,{fontSize:"default"})})}),Object(h.jsx)("a",{href:"mailto: ".concat("lugo.lbmi@gmail.com","?subject = Contact&body = Message"),children:Object(h.jsx)(Y.a,{edge:"start",color:e,"aria-label":"home",children:Object(h.jsx)(ke.a,{fontSize:"default"})})})]})})})})})},Re=a(216),Ce=a(49),Me=Object(Ce.a)({palette:{primary:{main:"#311b92"},secondary:{main:"#ede7f6"}}}),Fe=Se.a.div(V||(V=Object(n.a)(["\n  display: flex;\n  min-height: 100vh;\n  flex-direction: column;\n  justify-content: space-between;\n"])));s.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(K.a,{basename:"/Portfolio",children:Object(h.jsx)(Fe,{children:Object(h.jsxs)(Re.a,{theme:Me,children:[Object(h.jsx)(fe,{}),Object(h.jsx)(X,{}),Object(h.jsx)(Ne,{})]})})})}),document.getElementById("root")),U()}},[[181,1,2]]]);
//# sourceMappingURL=main.df635c95.chunk.js.map