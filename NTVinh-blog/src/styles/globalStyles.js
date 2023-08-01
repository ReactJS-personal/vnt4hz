import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
      body{
         background: ${({ theme }) => theme.body};
         transition: all .2s linear; 
    }
   
//  profile darrk mode
    .p-f{
        background-color: ${({ theme }) => theme.bodycolorFB};    
        transition: all .2s linear;
     //    box-shadow: ${({ theme }) => theme.resetBoxShadow}; 
    }

    .ctnDrawVinhDz {
     background-color: ${({ theme }) => theme.black};
    }
    
    .contentDrawVinhDz{
     border-top: ${({ theme }) => theme.borderCardProject}
    }

    .cardProject {
     border: ${({ theme }) => theme.borderCardProject}
    }

    .avatar{
          border: 5px solid ${({ theme }) => theme.avatar};
          transition: all .9s linear;
    }

    .custom_btn_Profile .btn_text_Profile{
         color: ${({ theme }) => theme.text}
    }
    .custom_btn_Profile{
         box-shadow: ${({ theme }) => theme.boxShadowborder};
         transition: all .2s linear;
         background-image: ${({ theme }) => theme.borderLinear}
    }

   .p-f_name .name{
        color: ${({ theme }) => theme.colorName};
        transition: all .2s linear;
   }

   .Verification_hover{
     background-color: ${({ theme }) => theme.bodycolorFB};
     color: ${({ theme }) => theme.btnLikeText};
     border:  ${({ theme }) => theme.boderHoverVerifi};
   }

   .Verification_hover::after{
      border-color: ${({ theme }) => theme.boderColorDark};
   }
   .hover_owned{
     color: ${({ theme }) => theme.text}
   }

   .timelineItem_text{
        color: ${({ theme }) => theme.colortextFB};
        transition: all .2s linear;
   }

   .Git{
        color: ${({ theme }) => theme.colorIconContact};
        transition: all .2s linear;
   }
   .Linked{
        color: ${({ theme }) => theme.colorIconContact};
        transition: all .2s linear;
   }

   .darkmodeSkeleton{
     color: ${({ theme }) => theme.body};
   }


   
//    header dark mode

   .header{
        background-color: ${({ theme }) => theme.bodycolorFB};
        transition: all .2s linear;
   }
   .sticky{
        background-color: ${({ theme }) => theme.body};
   }
   .LogoNTV{
        color: ${({ theme }) => theme.Logo};
   }

   .header-homepageIcon_active{
     background-color: ${({ theme }) => theme.menuActive};
     transition: all .2s linear; 
   }

//main body

   .main-content{
        background-color: ${({ theme }) => theme.bodycolorFB};
        transition: all .2s linear;
   }

   .signalture{
     // border-bottom: ${({ theme }) => theme.SolidSignature};  
     transition: all .2s linear;
   }

   .content_about-me{
        color: ${({ theme }) => theme.colortextFB};
        transition: all .2s linear;
   }

   .Sec-Tlt_text{
        color: ${({ theme }) => theme.text};
        transition: all .2s linear;
   }
   .Sec-Tlt span{
        background-color: ${({ theme }) => theme.bottomHiglight};
        transition: all 2s ease-in-out;
   }
   .timeline-tlt{
        color: ${({ theme }) => theme.colorName};
        transition: all .2s linear;
   }
   .timeline-desc{
        color: ${({ theme }) => theme.colortextFB};
        transition: all .2s linear;
     //     border-top:${({ theme }) => theme.boderBottomCreated};
   }
   .custom_btn_Like{
        background-color: ${({ theme }) => theme.btnLike};
        border:${({ theme }) => theme.boder}
   }
   .custom_btn_Like:hover{
     background-color: ${({ theme }) => theme.hoverBtnLikeDark};
     
   }
   .custom_btn_Like .btn_text_Like{
        color:${({ theme }) => theme.btnLikeText};
        transition: all .2s linear;
   }
   .Step-skill{
        color: ${({ theme }) => theme.colorName};
        transition: all .2s linear;
   }
   .timeL .MuiTimelineConnector-root{
        background-color:${({ theme }) => theme.btnLike};
        transition: all .2s linear;
   }

   // service
   .service{
     background-color:${({ theme }) => theme.cardBg};
     transition: all .2s linear;
   }
   .skill{
     background-color:${({ theme }) => theme.cardBg};
     transition: all .2s linear;
   }
   .skill_tlt{
     color:${({ theme }) => theme.btnLikeText};
     transition: all .2s linear;
   }
   .skill_tlt_hash{
     color:${({ theme }) => theme.colorIconContact};
     transition: all .2s linear;
   }
   .service .service_mildstress{
     background-color:${({ theme }) => theme.mildstress};
     transition: all .2s linear;
   }

//card
     .customCard{
          background-color:${({ theme }) => theme.cardBg};
          transition: all .2s linear !important;
     }
     .customTab_item{
          color:${({ theme }) => theme.text};
     }
     .custom_tabs{
          background-color:${({ theme }) => theme.cardBg};
          transition: all .2s linear !important;
     }
   //contact
   .MuiInputLabel-root{
     color: ${({ theme }) => theme.labelDarkContact};
   }

   .MuiInputBase-input{
        color: ${({ theme }) => theme.text};
        transition: all .6s linear !important;
   }

   .MuiInput-underline:before{
        border-bottom: ${({ theme }) => theme.boderBottomCreated};
   }

   .f-t{
        background-color: ${({ theme }) => theme.bodycolorFB};
        border-top:  ${({ theme }) => theme.footerBorder};
        box-shadow: ${({ theme }) => theme.footerBorder}
   }

//avatar story

  .Title-Story{
     background: ${({ theme }) => theme.titleTop}
  }

  .Story_name{
     color:  ${({ theme }) => theme.storyName}
  }

  .T{
     background: ${({ theme }) => theme.mainBg}
  }

  .Bottom_Story{
     background: ${({ theme }) => theme.titleTop}
  }

  .Story_time{
     color:${({ theme }) => theme.timeStory}
  }
  ::-webkit-scrollbar-thumb {
     background: ${({ theme }) => theme.scroll};
     border-radius: 6px;
     
   }


`;

export const lightTheme = {
  body: "#fff",
  text: "#121212",
};

export const darkTheme = {
  black: "black",
  zero: "0px",
  hidden: "none",
  mainBg: "#242526 !important",
  body: "#060b10 !important",
  text: "#fff !important",
  avatar: "#2e89ff !important",
  bodycolorFB: "#12181f !important",
  colortextFB: " rgb(199, 194, 194)",
  colorName: "#e4e6eb",
  colorIconContact: "#2acea4",
  bottomHiglight: "#00ffc4fa",
  btnLike: "#3a3b3c !important",
  btnLikeText: "#dbdde2 !important",
  boder: "1px solid #242526 !important",
  boderColorDark: "transparent transparent #282828 transparent",
  boderVerifiDark: "1px solid black",
  boderBottomCreated: "1px solid #3a3b3c !important",
  boderHoverVerifi: "1px solid #373737 !important",
  hoverBtnLikeDark: "rgb(84, 85, 85) !important",
  shaDowDark: "#18191a !important",
  resetBoxShadow: "unset !important",
  labelDarkContact: "rgba(28, 251, 220, 0.54) !important",
  mildstress: "var(--main-color)",
  SolidSignature: "1.5px solid #3a3b3c",
  footerBg: "#242526",
  footerBorder: "none !important",
  scroll: "linear-gradient(#18191a)",

  // story avatatar click
  titleTop: "#1a1b1b !important;",
  storyName: "rgb(245, 237, 237)",
  timeStory: "#cacaca",
  boxShadowborder: "2px 100px 1px #242526 inset !important",
  borderLinear:
    "linear-gradient(90deg, rgba(27,250,255,1) 0%, rgba(218,236,31,1) 44%, rgba(244,109,109,1) 100%) !important",
  // header
  menuActive: "#1f2c3d !important",
  Logo: "#d9d9dd",
  borderCardProject: "1px solid #30363d",
  cardBg: "#1e242c",
};
