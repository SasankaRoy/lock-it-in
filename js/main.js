const NavbarWrapper = document.getElementById("navBar__mainWrapper");
const heroSectionWraper = document.getElementById("heroSection__mainWraper");
const HeroSectionBgWrapper = document.getElementById("heroSection__BgWrapper");
const heroSectionBTN = document.getElementById("heroSection__BTN");
const aboutSvgCircleDark = document.getElementById("aboutSvg__circleDark");
const aboutSvgCircleLight = document.getElementById("aboutSvg__circleLight");
const aboutSmallTag = document.getElementById("about__smallTag");

const popUpModel__mainOuterWrapper = document.getElementById(
  "popUpModel__mainOuterWrapper"
);
const mainMode__Wrapper = document.getElementById("mainMode__Wrapper");
const mainWrapper__BuyersModel = document.getElementById(
  "mainWrapper__BuyersModel"
);
const mainWrapper__SellersModel = document.getElementById(
  "mainWrapper__SellersModel"
);
const mainWrapper__contactInfoModel = document.getElementById(
  "mainWrapper__contactInfoModel"
);

const handleShowPopUp = (hideAndShow) => {
  if (hideAndShow === "show") {
    popUpModel__mainOuterWrapper.style.display = "flex";
    return;
  }
  popUpModel__mainOuterWrapper.style.display = "none";
};

const showBuyersModel = (hideAndShow) => {
  if (hideAndShow === "show") {
    mainWrapper__BuyersModel.style.display = "flex";
    mainMode__Wrapper.style.display = "none";
    return;
  }

  mainWrapper__BuyersModel.style.display = "none";
  mainMode__Wrapper.style.display = "flex";
  console.log("buyers model", hideAndShow);
};
const showSellersModel = (hideAndShow) => {
  if (hideAndShow === "show") {
    mainWrapper__SellersModel.style.display = "flex";
    mainMode__Wrapper.style.display = "none";
    return;
  }

  mainWrapper__SellersModel.style.display = "none";
  mainMode__Wrapper.style.display = "flex";
  console.log("buyers model", hideAndShow);
};

const getInTouchHandler = (currentVeiwModel) => {
  if (currentVeiwModel === "buyer") {
    mainWrapper__BuyersModel.style.display = "none";
  } else if (currentVeiwModel === "seller") {
    mainWrapper__SellersModel.style.display = "none";
  }
  mainWrapper__contactInfoModel.style.display = "flex";
  console.log("getInTouchHandler");
};

const hideGetInTouchHandler = (currentVeiwModel)=>{
  // if (currentVeiwModel === "buyer") {
  //   mainWrapper__BuyersModel.style.display = "none";
  // } else if (currentVeiwModel === "seller") {
  //   mainWrapper__SellersModel.style.display = "none";
  // }
  mainWrapper__contactInfoModel.style.display = "none";
  mainMode__Wrapper.style.display = "flex";
}

gsap.registerPlugin(ScrollTrigger);
const gsapTL = new gsap.timeline();

document.addEventListener("DOMContentLoaded", () => {
  gsapTL.from(HeroSectionBgWrapper, {
    opacity: 0,
    duration: 0.9,
    ease: "power1.out",
  });
  gsapTL.from(NavbarWrapper, {
    y: "-60%",
    opacity: 0,
    duration: 0.8,
    ease: "power1.out",
  });
  gsapTL.from(heroSectionWraper, {
    opacity: 0,
    duration: 0.6,
    ease: "power1.out",
  });
  gsapTL.from(heroSectionBTN, {
    opacity: 0,
    duration: 0.4,
    ease: "power1.out",
  });
});

gsap.to(aboutSvgCircleDark, {
  x: "-10%",
  duration: 1,
  ease: "power1.out",
  repeat: -1,
  yoyo: true,
});

gsap.to(aboutSvgCircleLight, {
  x: "-10%",
  duration: 1,
  ease: "power1.out",
  repeat: -1,
  yoyo: true,
});

gsap.from(".about__smalltag", {
  scrollTrigger: {
    trigger: ".about__smalltag",
    toggleActions: "restart none none none",
    markers: false,

    // start: "top 90%",
  },
  opacity: 0,
  y: "-50%",
  duration: 0.8,
  ease: "power1.out",
});

gsap.from(".aboutsection__LockItIn", {
  scrollTrigger: {
    trigger: ".aboutsection__LockItIn",
    // start: "top 90%",
    toggleActions: "restart none none none",
    markers: false,
  },
  opacity: 0,
  y: "-50%",
  duration: 0.8,
  ease: "power1.out",
});

gsap.from(".aboutSection__Paragraph", {
  scrollTrigger: {
    trigger: ".aboutSection__Paragraph",
    // start: "top 90%",
    toggleActions: "restart none none none",
    markers: false,
  },
  opacity: 0,
  y: "20%",
  duration: 0.8,
  ease: "power1.out",
});

gsap.from(".aboutSection__LearnMoreBTN", {
  scrollTrigger: {
    trigger: ".aboutSection__LearnMoreBTN",
    // start: "top 90%",
    toggleActions: "restart none none none",
    markers: false,
  },
  opacity: 0,
  scale: 0.5,
  duration: 0.8,
  ease: "power1.out",
});
gsap.from(".whatWeDoSec__tag", {
  scrollTrigger: {
    trigger: ".whatWeDoSec__tag",
    // start: "top 90%",
    toggleActions: "restart none none none",
    markers: false,
  },
  opacity: 0,
  y: "-40%",
  duration: 0.8,
  ease: "power1.out",
});
gsap.from(".whatWeDoSec__solutionToHeight", {
  scrollTrigger: {
    trigger: ".whatWeDoSec__solutionToHeight",
    // start: "top 90%",
    toggleActions: "restart none none none",
    markers: false,
  },
  opacity: 0,
  y: "-40%",
  duration: 0.8,
  ease: "power1.out",
});
gsap.from(".whatWeDoSec__subHeading", {
  scrollTrigger: {
    trigger: ".whatWeDoSec__subHeading",
    // start: "top 90%",
    toggleActions: "restart none none none",
    markers: false,
  },
  opacity: 0,
  x: "-20%",
  duration: 0.8,
  ease: "power1.out",
});

gsap.from("#calculatorSection__titleWrapper", {
  scrollTrigger: {
    trigger: "#calculatorSection__titleWrapper",
    toggleActions: "restart none none none",
    markers: false,
  },
  opacity: 0,
  y: "-20%",
  duration: 0.5,
  ease: "power1.out",
});
gsap.from(".calculatorSection__heading", {
  scrollTrigger: {
    trigger: ".calculatorSection__heading",
    toggleActions: "restart none none none",
    markers: false,
  },
  opacity: 0,
  y: "-20%",
  duration: 0.5,
  ease: "power1.out",
});
gsap.from(".calculatorSection__smallInfo", {
  scrollTrigger: {
    trigger: ".calculatorSection__smallInfo",
    toggleActions: "restart none none none",
    markers: false,
  },
  opacity: 0,
  scale: 0.3,
  duration: 0.5,
  ease: "power1.out",
});
gsap.from(".calculatorSection__mainWrapper", {
  scrollTrigger: {
    trigger: ".calculatorSection__mainWrapper",
    toggleActions: "restart none none none",
    markers: false,
  },
  opacity: 0,
  scale: 0.3,
  duration: 0.5,
  ease: "power1.out",
});
gsap.from(".comparison-wrapper", {
  scrollTrigger: {
    trigger: ".comparison-wrapper",
    toggleActions: "restart none none none",
    markers: false,
  },
  opacity: 0,
  y: "-30%",
  duration: 0.5,
  ease: "power1.out",
});
gsap.from(".versus__heading", {
  scrollTrigger: {
    trigger: ".versus__heading",
    toggleActions: "restart none none none",
    markers: false,
  },
  opacity: 0,
  y: "-30%",
  duration: 0.5,
  ease: "power1.out",
});
gsap.from(".versus__paragraph", {
  scrollTrigger: {
    trigger: ".versus__paragraph",
    toggleActions: "restart none none none",
    markers: false,
  },
  opacity: 0,
  scale: 0.3,
  duration: 0.5,
  ease: "power1.out",
});
gsap.from(".blogSec__smallTag", {
  scrollTrigger: {
    trigger: ".blogSec__smallTag",
    toggleActions: "restart none none none",
    markers: false,
  },
  opacity: 0,
  y: "-30%",
  duration: 0.5,
  ease: "power1.out",
});
gsap.from(".blogSec__heading", {
  scrollTrigger: {
    trigger: ".blogSec__heading",
    toggleActions: "restart none none none",
    markers: false,
  },
  opacity: 0,
  x: "-50%",
  duration: 0.5,
  ease: "power1.out",
});
gsap.from(".blogSec__blogCard", {
  scrollTrigger: {
    trigger: ".blogSec__blogCard",
    toggleActions: "restart none none none",
    markers: false,
  },
  opacity: 0,
  scale: 0.3,
  duration: 0.5,
  ease: "power1.out",
});
gsap.from(".banner__heading1", {
  scrollTrigger: {
    trigger: ".banner__heading1",
    toggleActions: "restart none none none",
    markers: false,
  },
  opacity: 0,
  x: "50%",
  duration: 0.5,
  ease: "power1.out",
  delay: 0.1,
});
gsap.from(".banner__heading2", {
  scrollTrigger: {
    trigger: ".banner__heading2",
    toggleActions: "restart none none none",
    markers: false,
  },
  opacity: 0,
  x: "50%",
  duration: 0.8,
  ease: "power1.out",
  delay: 0.3,
});
gsap.from(".banner__ContactBTN", {
  scrollTrigger: {
    trigger: ".banner__ContactBTN",
    toggleActions: "restart none none none",
    markers: false,
  },
  opacity: 0,
  scale: 0.3,
  duration: 0.8,
  ease: "power1.out",
  delay: 0.3,
});
gsap.from(".banner__3dHouse", {
  scrollTrigger: {
    trigger: ".banner__3dHouse",
    toggleActions: "restart none none none",
    markers: false,
  },
  opacity: 0,
  x: "-50%",
  duration: 0.8,
  ease: "power1.out",
  delay: 0.1,
});
gsap.from(".testimonialSection__heading", {
  scrollTrigger: {
    trigger: ".testimonialSection__heading",
    toggleActions: "restart none none none",
    markers: false,
  },
  opacity: 0,
  y: "-30%",
  duration: 0.8,
  ease: "power1.out",
  delay: 0.1,
});
gsap.from(".testimonialSection__paragraph", {
  scrollTrigger: {
    trigger: ".testimonialSection__paragraph",
    toggleActions: "restart none none none",
    markers: false,
  },
  opacity: 0,
  y: "-30%",
  duration: 0.8,
  ease: "power1.out",
  delay: 0.1,
});
gsap.from(".testimonialSection__Subheading", {
  scrollTrigger: {
    trigger: ".testimonialSection__Subheading",
    toggleActions: "restart none none none",
    markers: false,
  },
  opacity: 0,
  x: "-30%",
  duration: 0.8,
  ease: "power1.out",
  delay: 0.1,
});
gsap.from(".contact__formWrapper", {
  scrollTrigger: {
    trigger: ".contact__formWrapper",
    toggleActions: "restart none none none",
    markers: false,
  },
  opacity: 0,
  scale: 0.3,
  duration: 0.8,
  ease: "power1.out",
  delay: 0.1,
});
gsap.from(".get-in-touch", {
  scrollTrigger: {
    trigger: ".get-in-touch",
    toggleActions: "restart none none none",
    markers: false,
  },
  opacity: 0,
  x: "-30%",
  duration: 0.8,
  ease: "power1.out",
  delay: 0.1,
});
gsap.from(".text-wrapper-38", {
  scrollTrigger: {
    trigger: ".text-wrapper-38",
    toggleActions: "restart none none none",
    markers: false,
  },
  opacity: 0,
  x: "-30%",
  duration: 0.8,
  ease: "power1.out",
  delay: 0.1,
});
gsap.from(".text-10", {
  scrollTrigger: {
    trigger: ".text-10",
    toggleActions: "restart none none none",
    markers: false,
  },
  opacity: 0,
  x: "-30%",
  duration: 0.8,
  ease: "power1.out",
  delay: 0.1,
});

gsap.from(".contact__phoneIcon", {
  scrollTrigger: {
    trigger: ".contact__phoneIcon",
    toggleActions: "restart none none none",
    markers: false,
  },
  opacity: 0,
  scale: 0.3,
  duration: 0.8,
  ease: "power1.out",
  delay: 0.1,
});
gsap.from(".contact__emailIcon", {
  scrollTrigger: {
    trigger: ".contact__emailIcon",
    toggleActions: "restart none none none",
    markers: false,
  },
  opacity: 0,
  scale: 0.3,
  duration: 0.8,
  ease: "power1.out",
  delay: 0.1,
});
gsap.from(".contact__locationIcon", {
  scrollTrigger: {
    trigger: ".contact__locationIcon",
    toggleActions: "restart none none none",
    markers: false,
  },
  opacity: 0,
  scale: 0.3,
  duration: 0.8,
  ease: "power1.out",
  delay: 0.1,
});
gsap.from(".text-wrapper-40", {
  scrollTrigger: {
    trigger: ".text-wrapper-40",
    toggleActions: "restart none none none",
    markers: false,
  },
  opacity: 0,
  x: "50%",
  duration: 0.8,
  ease: "power1.out",
  delay: 0.1,
});
gsap.from(".text-wrapper-41", {
  scrollTrigger: {
    trigger: ".text-wrapper-40",
    toggleActions: "restart none none none",
    markers: false,
  },
  opacity: 0,
  x: "50%",
  duration: 0.8,
  ease: "power1.out",
  delay: 0.1,
});

// const handleAnimate = () => {
//   console.log("the time interval");
// };

// setInterval(handleAnimate, 3000);
