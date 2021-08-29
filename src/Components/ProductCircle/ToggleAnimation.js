import { gsap } from "gsap";

function ToggleAnimation (elements, switchButton){

    const ToggleWrapp = elements;
    const Toggle = elements.querySelector(".switch");


    const tl2 = gsap.timeline({
        paused: true,    
    });
    const tl3 = gsap.timeline({
        paused: true, 
    });

    if(window.innerWidth < 1024){
        tl2.to(Toggle, { duration: .5, yPercent: 100, scaleX: 0.8, })
        .to(Toggle, {duration: .5, yPercent: 200, scaleX: 1, })
    
        tl3.to(Toggle, { duration: .5, yPercent: 100, scaleX: 0.8, })
        .to(Toggle, {duration: .5, yPercent: 0, scaleX: 1, })
    }
    else {
        gsap.set(Toggle, {xPercent: 145})
        tl2.to(Toggle, {duration: .5, xPercent:  257})
        tl3.to(Toggle, {duration: .5, xPercent:  145})
    }


    function play() {
        return tl2.play();
    }

    function reverse() {
        return tl3.play();
    }
    
    if(switchButton){
        ToggleWrapp.onclick = reverse;
    }
    else ToggleWrapp.onclick = play;
    // ToggleWrapp.onmouseover = play;
    // ToggleWrapp.onmouseleave = reverse;
}

export default ToggleAnimation;