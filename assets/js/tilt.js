const deviceViewport = window.matchMedia('(max-width: 1024px)'); 
function checkMediaQuery(deviceViewport) {
    VanillaTilt.init(document.querySelector("main"), {
            max: 25,
            speed: 400,
            glare: true,
            "max-glare": 0.8,
        });   
    if (deviceViewport.matches) {
      document.querySelector("main").vanillaTilt.destroy();
    }
  }
deviceViewport.addListener(checkMediaQuery);
checkMediaQuery(deviceViewport);


// function tiltOnMobile(deviceViewport) {
//         const home = document.querySelector("#home");
        // const about = document.querySelector("#about");
        // const contact = document.querySelector("#contact");
        // const thankyou = document.querySelector("#thankyou");
    // if (deviceViewport.matches) { 
        // if the viewport is less than, or equal to, 992 pixels wide:
        // home.vanillaTilt.destroy();
        // home.tilt.destroy.call(home);
        // about.vanillaTilt.destroy();
        // contact.vanillaTilt.destroy();
        // thankyou.vanillaTilt.destroy();
    
    // } else { 
        // if the viewport is more than 992 pixels wide:
        // VanillaTilt.init(document.querySelector("#home"),  {
        //     max: 25,
        //     speed: 400,
        //     glare: true,
        //     "max-glare": 0.8,
        // });
        
        // VanillaTilt.init(document.querySelector("#about"),  {
        //     max: 25,
        //     speed: 400,
        //     glare: true,
        //     "max-glare": 0.8,
        // });
        
        // VanillaTilt.init(document.querySelector("#contact"),  {
        //     max: 25,
        //     speed: 400,
        //     glare: true,
        //     "max-glare": 0.8,
        // });
//     }
// }

// var deviceViewport = window.matchMedia("(max-width: 992px)")
// tiltOnMobile(deviceViewport)
// deviceViewport.addListener(tiltOnMobile)

// VanillaTilt.init(document.querySelector("#home"),  {
//     max: 25,
//     speed: 400,
//     glare: true,
//     "max-glare": 0.8,
// });

// VanillaTilt.init(document.querySelector("#about"),  {
//     max: 25,
//     speed: 400,
//     glare: true,
//     "max-glare": 0.8,
// });

// VanillaTilt.init(document.querySelector("#contact"),  {
//     max: 25,
//     speed: 400,
//     glare: true,
//     "max-glare": 0.8,
// });