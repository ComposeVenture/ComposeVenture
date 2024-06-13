import { COMPOSECONTACTUSPAGE } from "../ContactUsPage/ContactUsPage.js";
import { ABOUTDIV } from "../DataPages/AboutDiv.js";
import { ABOUTDIVME } from "../DataPages/AboutMe.js";
import { DEVELOPERDIV } from "../DataPages/Developer.js";
import { HOMESTORE } from "../DataPages/Store.js";
import { FORDEVELOPERSPAGE } from "../ForDeveloperPage/ForDevelopersPage.js";

export const HOMEPAGE=()=>{

    HEADERWIDGET(
        `
            <h1 class='AppName'>Compose Ventures</h1>

            <h1 class='HeaderSections' >Products</h1>

            <h1 class='HeaderSections' >Store</h1>

            <h1 class='HeaderSections' >About</h1>

            <h1 id='ForDevelopers' class='HeaderSections' >Developers</h1>

            <h1 id='ContactUs' class='HeaderSections' >Contact Us</h1>

        `,
        `
            <br>

            <div id='MobileMenu' class='ShortContacts'>

                <h1 class='HomeHeader' >Products</h1>

                <h1 class='HomeHeader' >About</h1>

                <h1 id='Developers' class='HomeHeader' >Developers</h1>

                <h1 id='ReachUs' class='HomeHeader' >ContactUs</h1>

            </div>


            <img class='AppLogo' src='${IMAGEPATH}Compose Venture Logo.jpg'/>

            <div id='HomeShortDiv' class='ShortDescripton'>

                <div class='DataDivs'>${ABOUTDIV}</div>

                <div class='DataDivs'>${HOMESTORE}</div>

                <div class='DataDivs'>${DEVELOPERDIV}</div>

                <div class='DataDivs'>${ABOUTDIVME}</div>
            
            </div>

            <div class='ShortNews'></div>

            <div class='ShortNews'></div>

            <div class='ShortContacts'>

                <img src='${WHITEICONS}youtube.png'/>

                <img src='${WHITEICONS}twitter.png'/>

                <img src='${WHITEICONS}facebook.png'/>

                <img src='${WHITEICONS}instagram.png'/>

                <img src='${WHITEICONS}gmail.png'/>
            
            </div>

            <p>&copy; Compose Ventures 2024</p>

        `,'HomeDiv'
    );

    CLICKED('#ForDevelopers',()=>{FORDEVELOPERSPAGE()});

    CLICKED('#Developers',()=>{FORDEVELOPERSPAGE()});

    CLICKED('#ContactUs',()=>{COMPOSECONTACTUSPAGE()});

    CLICKED('#ReachUs',()=>{COMPOSECONTACTUSPAGE()});
  
};