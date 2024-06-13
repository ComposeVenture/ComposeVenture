import { COMPOSECLOUDPAGE } from "../ComposeCloud/ComposeCloud.js";
import { COMPOSEWEBPAGE } from "../ComposeWeb/ComposeWeb.js";
import { HOMEPAGE } from "../HomePage/HomePage.js"
import { COMPOSENATIVEDEVELOPERS } from "./ComposeNativeDeveloper.js";
import { COMPOSEWEBDEVELOPERS } from "./CompsoseWebDeveloper.js";
import { COMPOSECLOUDINTRO } from "./DeveloperServices.js";

export const FORDEVELOPERSPAGE=()=>{

    BACKHEADERWIDGET(()=>{HOMEPAGE()},

    `
        <h1 class='AppName'>Compose Ventures</h1>

        <h1 id='Cloud' class='HeaderSections' >Compose-Cloud</h1>

        <h1 id='ComposeWeb' class='HeaderSections' >Compose-Web</h1>

        <h1 class='HeaderSections' >Compose-Native</h1>

        <h1 class='HeaderSections' >FAQ</h1>

    `,
        
    `
    <br>

    <div id='MobileMenu' class='ShortContacts'>

        <h1 id='MobileCloud' class='HomeHeader' >Cloud</h1>

        <h1 id='MobileWeb' class='HomeHeader' >Web</h1>

        <h1 id='Developers' class='HomeHeader' >Native</h1>

        <h1 id='ReachUs' class='HomeHeader' >FAQ</h1>

    </div>

    <div class='ShortNews'>${COMPOSECLOUDINTRO}</div>

    <div class='ShortNews'>${COMPOSEWEBDEVELOPERS}</div>

    <div class='ShortNews'>${COMPOSENATIVEDEVELOPERS}</div>

    <p>

        For More Information,Please Contact Us Via :
    
    </p>


    <div class='ShortContacts'>
    
        <img src='${WHITEICONS}youtube.png'/>

        <img src='${WHITEICONS}twitter.png'/>

        <img src='${WHITEICONS}facebook.png'/>

        <img src='${WHITEICONS}instagram.png'/>

        <img src='${WHITEICONS}gmail.png'/>

    </div>

    <p>&copy; Compose Ventures 2024</p>

 
    `,'Developers Page'

    );

    CLICKED('#Cloud',()=>{COMPOSECLOUDPAGE()});

    CLICKED('#MobileCloud',()=>{COMPOSECLOUDPAGE()});

    CLICKED('#ComposeWeb',()=>{COMPOSEWEBPAGE()});

    CLICKED('#MobileWeb',()=>{COMPOSEWEBPAGE()});

}