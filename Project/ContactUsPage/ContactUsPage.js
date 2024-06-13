import { HOMEPAGE } from "../HomePage/HomePage.js";

export const COMPOSECONTACTUSPAGE=()=>{

    BACKHEADERWIDGET(()=>{HOMEPAGE()},

    `
        <h1 class='AppName'>Compose Ventures</h1>

        <h1 class='HeaderSections' >Share Holder</h1>

        <h1 class='HeaderSections' >Donate</h1>

        <h1 class='HeaderSections' >FAQ</h1>

    `,
        
    `

        <img class='AppLogo' src='${IMAGEPATH}app_icon.png'/>

        <div id='CloudComposeDiv' class='ShortDescripton'>

            <p>Send Direct Email to Compose Ventures</p>

            <input type='text' placeholder='Enter User Name' />
 
            <input type='email' placeholder='Enter User Email' />

            <input type='text' placeholder='Enter Mail Subject' />

            <textarea placeholder='Compose Your  Message'></textarea>

            <button id='SendEmail' class='forestgreen'>Send Email</button>

        </div>

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

}