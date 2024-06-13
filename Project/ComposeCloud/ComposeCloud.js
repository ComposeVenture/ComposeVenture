import { FORDEVELOPERSPAGE } from "../ForDeveloperPage/ForDevelopersPage.js";

export const COMPOSECLOUDPAGE=()=>{

    BACKHEADERWIDGET(()=>{FORDEVELOPERSPAGE()},

    `
        <h1 class='AppName'>Compose Ventures</h1>

        <h1 class='HeaderSections' >Documentations</h1>

        <h1 class='HeaderSections' >FAQ</h1>

    `,
        
    `

        <img class='AppLogo' src='${IMAGEPATH}app_icon.png'/>

        <div id='CloudComposeDiv' class='ShortDescripton'>

            <p>Sign In to Access your Compose-Cloud Account</p>

            <input type='email' placeholder='Enter Compose Email' />

            <input type='password' placeholder='Enter Compose Password' />

            <button class='forestgreen'>Sign In</button>

            <button class='teal'>Reset Password</button>

            <button class='blue'>Create Account </button>
        
        </div>

        <p>
            
            To Get Access to Compose-Cloud Api and Start to Upload Files From the Web or Android Device or Pwas. Sign Up or Sign In Into Existing Account.
        
        <p>

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

    const CloudComposeDiv=document.querySelector('#CloudComposeDiv');

    CLICKED('.blue',()=>{

        DISPLAY(CloudComposeDiv,`

            <p>Sign Up To Access your Compose-Cloud Account</p>

            <input type='text' placeholder='Enter Compose UserName' />

            <input type='email' placeholder='Enter Compose Email' />

            <input type='password' placeholder='Enter Compose Password' />

            <button  class='forestgreen'>Sign Up</button>

            <button id='SignIn' class='blue'>LogIn</button>
            
        `)

        CLICKED('#SignIn',()=>{COMPOSECLOUDPAGE()});

    });

}