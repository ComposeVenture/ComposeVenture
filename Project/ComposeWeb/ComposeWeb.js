import { FORDEVELOPERSPAGE } from "../ForDeveloperPage/ForDevelopersPage.js";
import { COMPOSECLOUDCOMPONENTS } from "./ComposeSectionsComponents.js";

export const COMPOSEWEBPAGE = () => {

    BACKHEADERWIDGET(() => { FORDEVELOPERSPAGE() },

    `
        <h1 class='AppName'>Compose Ventures</h1>

        <h1 class='HeaderSections'>Compose Web</h1>

        <h1 class='HeaderSections'>FAQ</h1>
    `,
        
    `
    <div class='WebComponents'>${COMPOSECLOUDCOMPONENTS}</div>

    <div class='WebComponentsDetails'>

        <img class='CloudIcon' src='${WHITEICONS}code.png' alt='Code Icon'/>

        <h3>Welcome to Compose Web</h3>

        <p>Build stunning and fully functional apps using Compose Web.</p>

        <p>
        For more information, please refer to the documentation for each section to effectively use Compose Web.
        </p>

        <p>
        Stay updated with the latest releases in the Updates Section, and follow the Developers Console to learn what's new and what's been updated. Build exceptional apps using Compose Web and Compose Cloud, sharing data seamlessly with Compose Native to enhance user experience.
        </p>

        <h1>No Additional Frameworks Required</h1>

        <p>
            Compose Web is designed to simplify your development process. There's no need for Node.js, React, or any other frameworks. Everything you need is included, allowing you to focus on creating amazing web applications without the hassle of setting up and managing external dependencies.
        </p>

        <p>
            Build amazing websites, PWAs, and more with cutting-edge technology from Compose Ventures. Our technology is continuously evolving to provide the best web framework and library, enabling you to build any type of website without third-party dependencies or libraries. Write code once and run it across all web-enabled devices.
        </p>

        <h3>Build the Following with Compose Web</h3>

        <div class='ShortContacts'>
            <img src='${WHITEICONS}mobile-development.png' alt='Code Icon'/>
            <img src='${WHITEICONS}front-end-programming.png' alt='Music Icon'/>
            <img src='${WHITEICONS}webinternet.png' alt='Library Icon'/>
        </div>
       
    </div>

    <p>Written by Compose Ventures Editor Team</p>

    <p>&copy; Compose Ventures 2024</p>
    `, 'Developers Page'
    );

    CLICKED('#HomeComposeWeb', () => { COMPOSEWEBPAGE() })
}
