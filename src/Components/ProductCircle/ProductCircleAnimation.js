import { gsap } from "gsap";

function CircleAnimation() {

    const circle = document.querySelectorAll(".Circle");
    const ProductPrice = document.querySelectorAll(".ProductPrice");
    const ProductSlide = document.querySelectorAll(".ProductSlide");
    const ProductName = document.querySelectorAll(".ProductName");
    const ProductParagraph = document.querySelectorAll(".ProductParagraph");
    const ProductWrapp = document.querySelectorAll(".ProductWrapp");
    const H1Product = document.querySelectorAll(".H1Product");
    // console.log(ProductSlide[0].clientHeight);

    
    circle.forEach((el, i) => {
        let distanceFromCircle = ProductSlide[i].clientHeight;
        
        if(window.innerWidth > 1024){
            distanceFromCircle = distanceFromCircle/4
        }
        else{
            distanceFromCircle = distanceFromCircle/8
        }

        const tl = gsap.timeline({
            paused: true,    
        })

        tl.to(ProductPrice[i],
            {
                duration: 0.6,
                rotation: 75,
                yPercent: 50,
                xPercent: -40,
            })

        tl.to(ProductSlide[i],
            {
                duration: 0.3,
                scaleX: 1,
                scaleY: .3,
                xPercent: 43,
                yPercent: 5,
            }, 0.2)

        tl.to(ProductSlide[i],
            {
                duration: 0.3,
                scaleY: 1,
                yPercent: 40,
            }, 0.5)

        tl.to(H1Product[i],
            {
                xPercent: -20,
                opacity: 0,
            }, 0.4)

        tl.to(ProductName[i],
            {
                duration: 0.5,
                xPercent: 80,
            }, 0.6)

        tl.to(ProductParagraph[i],
            {
                duration: 0.5,
                xPercent: 180,
            }, 0.75)

        tl.to(ProductWrapp[i + 1],
            {
                duration: 1.1,
                ease:"bounce.out",
                y: distanceFromCircle,
            }, 0.4)

        if(i==ProductWrapp.length-1){
            tl.to(ProductWrapp[i-1],
                {
                    yPercent:-(distanceFromCircle/2),
                }, 0.2)

            if(window.innerWidth < 1024){
                const nextCircle = [ProductWrapp[i-1], ProductWrapp[i-2]];
            
                tl.to(nextCircle[0],
                    {
                        duration: 0.3,
                        xPercent: -25,
                        scale: 0,
                    }, 0.4)
    
              
                    
                tl.to(ProductWrapp[i],
                    {
                        yPercent:-(distanceFromCircle * 3.7),
                    }, 0.5)
                
            }else{
                tl.to(ProductWrapp[i],
                    {
                        yPercent:-(distanceFromCircle/2),
                    }, 0.5)
            }
        }
        
        if(window.innerWidth < 1024){
            const nextCircle = [ProductWrapp[i+1], ProductWrapp[i+2]];
    
            tl.to(nextCircle[0],
                {
                    duration: 0.3,
                    xPercent: -25,
                    scale: 0,
                }, 0.4)

            tl.to(nextCircle[1],
                {
                    yPercent: 25,
                }, 0.6)
        }



        function playAndRemove(){
            el.onmouseleave = null;
            // el.removeEventListener("mouseleave", reverse)
            if(tl.isActive){
                return tl.play();
            }
        }
        
        function reverseAndAdd(){
            // el.addEventListener("mouseleave", reverse );
            el.onmouseleave = reverse;
            if(tl.isActive){
                return tl.reverse();
            }
        }

        if(window.innerWidth > 1024){
           

            el.onfocus = playAndRemove;
            el.onblur = reverseAndAdd;
            // el.addEventListener("focus", playAndRemove);
            // el.addEventListener("blur", reverseAndAdd);
        }
      
        function reverse(){
            if(tl.isActive){
                return tl.reverse();
            }
        }
        function play(){
            if(tl.isActive){
                return tl.play();
            }
        }
       
        el.onmouseover = play;
        el.onmouseleave = reverse;
        
        // el.addEventListener("mouseover", play );
        // el.addEventListener("mouseleave", reverse );
        
        console.log("po");
        console.log(el);
        // el.addEventListener("mouseover", () => openCircle2(ProductPrice, ProductSlide, i) );
        // el.addEventListener("mouseleave", () => clouseCircle2(ProductPrice, ProductSlide, i) );
    })
}

export default CircleAnimation