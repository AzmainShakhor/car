const cart = document.querySelector(".cart-icon")
const back = document.querySelector(".back-icon i")

let t1 = gsap.timeline({paused:true, reversed:true});
let t2 = gsap.timeline({paused:true, reversed:true});


cart.addEventListener("click", (e)=>{
    t2.play()
   
})
back.addEventListener("click", (e)=>{
    t2.reversed(); 
})


t1.play()

t1.to(
    ".car1",{
        ease:"elastic.out(1, 0.6)",
        top:"6%",        
    } , 0.2
    
);
t1.to(
    ".para-1",{
        ease:"elastic.out(1, 0.6)",
        bottom:"15%",
        
    }, 0.2
    
);
t1.to(
    ".head1",{
        ease:"elastic.out(1, 0.6)",
        top:"59%",        
    }, 0.2
    
);

t1.from(".cart-icon",{
  scale:"0"
}, 0.3)

t2.to(".car1",{
    ease:"elastic.out(1, 0.6)",
       top:"-80%",
       duration:1.5
   
},0.05)
t2.to(".para-1",{
    ease:"elastic.out(1, 0.6)",
       top:"-80%",
       duration:1.5
   
},0.1)
t2.to(".head1",{
    ease:"elastic.out(1, 0.6)",
       top:"-80%", 
       duration:1.5
   
},0.15)

t2.to(".cart-icon i",{
    ease:"elastic.out(1, 0.6)",
    scale:0
},0)
t2.to(".cart-icon",{
    ease:"elastic.out(1, 0.6)",
    scaleY:13,
    width:384,
    borderRadius:0
},0.4)

t2.to(".car-img2 img",{
    left:"50%",
    top:"6%"
},0.4)
t2.to(".head2",{
    left:"50%"
},0.4)

t2.to(".para-2",{
    left:"5%"
},0.4)
t2.to(".back-icon i",{
    left:"3%"
},0.4)