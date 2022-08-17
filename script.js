let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
.to(".background", 1,  {y: -100})
.to(".landscape", 3,  {y: -200},"-= 3" )
.to("content",3 ,{top:"0%"}, '-=3')
.fromto(".text",{ opacity: 0},{ opacity: 1,duration:3 })





let scene = new ScrollMagic.Scene({
    triggerElement: "section",
    duration:"90%",
    triggerHook: 0,
})

 .setTween(timeline)
 .setPin(".section")
.addTo(controller);