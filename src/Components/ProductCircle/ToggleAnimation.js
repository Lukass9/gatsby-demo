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
            .to(ToggleWrapp, {duration: .4, boxShadow: '0px -4px 4px rgba(0, 0, 0, 0.25)'})
                // .to(Toggle, {duration: .4, boxShadow: 'inset 0px 4px 2px rgba(0, 0, 0, 0.05)'}, .5)
                    .to(Toggle, {duration: .5, yPercent: 200, scaleX: 1, }, .5)
    
        tl3.to(Toggle, { duration: .5, yPercent: 100, scaleX: 0.8, })
            .to(ToggleWrapp, {duration: .4, boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'})
                // .to(Toggle, {duration: .4, boxShadow: 'inset 0px 4px 2px rgba(0, 0, 0, 0.25)'}, .5)
                    .to(Toggle, {duration: .5, yPercent: 0, scaleX: 1, }, .5)
    }
    else {
        gsap.set(Toggle, {xPercent: 145})
        tl2.to(Toggle, {duration: .3, xPercent: 195, scaleX: 1.9, ease:'none'})
            .to(Toggle, {duration: .4, xPercent:  257, scaleX: 1, ease:'power1.out'}, .3)

        tl3.to(Toggle, {duration: .3, xPercent: 207, scaleX: 1.9, ease:'none'}) 
            .to(Toggle, {duration: .4, xPercent:  145, scaleX: 1, ease:'power1.out'}, .3)
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