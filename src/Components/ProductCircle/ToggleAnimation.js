import { gsap } from "gsap";

function ToggleAnimation (elements, switchButton){

    const ToggleWrapp = elements;
    const shadowButtonUp = elements.querySelector(".switch");
    const shadowButtonDown = elements.querySelector(".switch2");
    const Toggle = elements.querySelector(".switch");


    const tl2 = gsap.timeline({
        paused: true,    
    });
    const tl3 = gsap.timeline({
        paused: true, 
    });
    // gsap.set(Toggle, {xPercent: 145, })

    // if(window.innerWidth < 1024){
    //     tl2.to(Toggle, { duration: .5, yPercent: 100, scaleX: 0.8, opacity: .25, })
    //         .to(ToggleWrapp, {duration: .4, boxShadow: '0px -4px 4px rgba(0, 0, 0, 0.25)'})
    //             // .to(Toggle, {duration: .4, boxShadow: 'inset 0px 4px 2px rgba(0, 0, 0, 0.05)'}, .5)
    //                 .to(Toggle, {duration: .5, yPercent: 200, scaleX: 1, opacity: 1, }, .5)
    
    //     tl3.to(Toggle, { duration: .5, yPercent: 100, scaleX: 0.8, opacity: .25 })
    //         .to(ToggleWrapp, {duration: .4, boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'})
    //             // .to(Toggle, {duration: .4, boxShadow: 'inset 0px 4px 2px rgba(0, 0, 0, 0.25)'}, .5)
    //                 .to(Toggle, {duration: .5, yPercent: 0, scaleX: 1, opacity: 1 }, .5)
    // }
    if(window.innerWidth < 1024){
        gsap.set(shadowButtonDown, {opacity: 0,})
        gsap.set(ToggleWrapp, {perspective: 800});

        tl2.to(shadowButtonUp, { duration: 1.1, opacity: 0,})
            .to(shadowButtonDown, {duration: 1.1, opacity: 1 }, .1)
            .to(ToggleWrapp, {duration: 1,  rotationX: 20, boxShadow: '0px -7px 4px rgba(0, 0, 0, 0.25)'}, .1 )
                // .to(Toggle, {duration: .4, boxShadow: 'inset 0px 4px 2px rgba(0, 0, 0, 0.05)'}, .5)
    
        tl3.to(shadowButtonDown, { duration: 1.1,  opacity: 0 })
            .to(shadowButtonUp, {duration: 1.1, opacity: 1 }, .1)
            .to(ToggleWrapp, {duration: 1, rotationX: -20, boxShadow: '0px 7px 4px rgba(0, 0, 0, 0.25)'}, .1)
                // .to(Toggle, {duration: .4, boxShadow: 'inset 0px 4px 2px rgba(0, 0, 0, 0.25)'}, .5)
    }




    else {
        tl2.to(Toggle, {duration: .3, xPercent: 45, scaleX: 1.9, ease:'none'})
            .to(Toggle, {duration: .4, xPercent:  110, scaleX: 1, ease:'power1.out'}, .3)

        tl3.to(Toggle, {duration: .3, xPercent: 65, scaleX: 1.9, ease:'none'}) 
            .to(Toggle, {duration: .4, xPercent:  0, scaleX: 1, ease:'power1.out'}, .3)

        // tl2.to(Toggle, {duration: .3, xPercent: 195, scaleX: 1.9, ease:'none'})
        //     .to(Toggle, {duration: .4, xPercent:  257, scaleX: 1, ease:'power1.out'}, .3)

        // tl3.to(Toggle, {duration: .3, xPercent: 207, scaleX: 1.9, ease:'none'}) 
        //     .to(Toggle, {duration: .4, xPercent:  145, scaleX: 1, ease:'power1.out'}, .3)
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