import './App.css';
import profil_pic from './assets/profil_pic.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faEnvelope, faPhone, faHome, faCalendar} from '@fortawesome/free-solid-svg-icons'
import {
    Sidebar,
    SidebarHeader,
    SidebarContent,
    SidebarImage,
    SidebarSubTitle,
    SidebarTitle
} from "./components/Sidebar.jsx";
import Gallery from "./components/Gallery.jsx";
import {Block, Content, Entreprise, Position, SubTitle, Date, Title, Text} from "./components/Content.jsx";
import Rating from './components/Rating.jsx';

function App() {

    return (
        <>
            <Sidebar>
                <div className="deco-top"></div>
                <div className="deco-bottom"></div>
                <SidebarHeader>
                    <SidebarTitle>Nicolas PIQUION</SidebarTitle>
                    <SidebarSubTitle>Développeur web</SidebarSubTitle>
                    <SidebarImage src={profil_pic} alt="Nicolas PIQUION"/>
                </SidebarHeader>
                <SidebarContent>
                    <h2>Informations personnelles</h2>
                    <ul>
                        <li><FontAwesomeIcon icon={faUser}></FontAwesomeIcon> Nicolas PIQUION</li>
                        <li><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> <a
                            href="mailto:contact@nicolaspiquion.fr">contact@nicolaspiquion.fr</a></li>
                        <li><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> <a href="tel:+33695415790">06 95 41 57
                            90</a></li>
                        <li><FontAwesomeIcon icon={faHome}></FontAwesomeIcon> 72 rue Notre Dame <br/>30000 Nîmes</li>
                        <li><FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon> 20 mai 1978</li>
                    </ul>
                    <h2>Compétences</h2>
                    <ul>
                        <li>Gestion serveurs web <Rating rating={3}/></li>
                        <li>PHP <Rating rating={4}/></li>
                        <li>MySQL <Rating rating={4}/></li>
                        <li>SCSS <Rating rating={4}/></li>
                        <li>Javascript <Rating rating={4}/></li>
                        <li>WordPress <Rating rating={3}/></li>
                        <li>Prestashop <Rating rating={3}/></li>
                        <li>Adobe Photoshop, Illustrator, Indesign <Rating rating={4}/></li>
                        <li>Angular <Rating rating={1}/></li>
                        <li>Vue.js <Rating rating={1}/></li>
                        <li>React <Rating rating={2}/></li>
                        <li>React Native<Rating rating={2}/></li>
                    </ul>
                    <h2>Langues</h2>
                    <ul>
                        <li>Anglais <Rating rating={3}/></li>
                        <li>Espagnol <Rating rating={1}/></li>
                    </ul>
                </SidebarContent>
            </Sidebar>


            <Content>
                <div className="deco-bottom"></div>
                <Title>Profil</Title>
                <Block>
                    <Text>Développeur web et infographiste passionné, autodidacte, avec plus de 15 ans d’expérience, basé à Nîmes. <br/>J’ai développé une expertise solide en PHP, JavaScript, CSS et MySQL, en menant des projets sur WordPress, PrestaShop et Laravel. <br/>Mon parcours me permet d’allier sens du design et rigueur technique pour créer des solutions numériques performantes, intuitives et visuellement soignées. Ma capacité à résoudre des problèmes complexes et à m’adapter rapidement aux évolutions technologiques fait de moi un atout précieux pour toute équipe de développement.</Text>
                </Block>

                <Title>Formation</Title>
                <Block>
                    <Position>
                        <SubTitle>Licence STAPS</SubTitle>
                        <Date>de sept. 2002 à sept. 2004</Date>
                    </Position>
                    <Entreprise>UFR STAPS Montpellier, Montpellier</Entreprise>
                </Block>

                <Title>Expériences professionnelles</Title>
                <Block>
                    <Position>
                        <SubTitle>Web designer</SubTitle>
                        <Date>de déc. 2006 à avr. 2007</Date>
                    </Position>
                    <Entreprise>StyloBille Studio, Fort de France (Martinique)</Entreprise>
                    <Text>Ajouter la compétence web design dans un studio graphique print.</Text>
                </Block>

                <Block>
                    <Position>
                        <SubTitle>Chef de projet web et Graphiste Maquettiste PAO</SubTitle>
                        <Date>de juil. 2007 à avr. 2010</Date>
                    </Position>
                    <Entreprise>Studio CréeAll, Basse-Terre (Guadeloupe)</Entreprise>
                    <Text>Création d'identités visuelles, de sites web vitrine.<br/>
                        PAO Maquette de magazines de Sport Auto MekaMag.</Text>
                </Block>
                <Block>
                    <Position>
                        <SubTitle>Développeur C++</SubTitle>
                        <Date>de mai 2013 à déc. 2013</Date>
                    </Position>
                    <Entreprise>Projet personel, Montpellier</Entreprise>
                    <Text>Création d'une application Windows d'entraiement pour jeu de combat sur PC.<br/>
                        "FullPunish", avec boutique Laravel pour la vente de licences et le partage de scripts
                        d'entrainements.</Text>
                </Block>
                <Block>
                    <Position>
                        <SubTitle>Développeur web</SubTitle>
                        <Date>de févr. 2016 à sept. 2024</Date>
                    </Position>
                    <Entreprise>N-Gine Innovation, Nîmes</Entreprise>
                    <Text>Gestion de serveurs OVH, PlanetHoster sur Plesk, IspConfig, avec apache et
                        Nginx.<br/>
                        PHP, MySQL, Javascript, jQuery, Bootstrap, SCSS :<br/>
                        Développement de backend support pour :
                        <ul>
                            <li>SportyCloud application mobile (course à pied),</li>
                            <li>Comm'une Actu (publication d'actu dans les communes entre mairie, commerces et
                                habitants),
                            </li>
                            <li>Stellee (Messagerie mobile anonymisée entre fournisseurs de contenu et leurs
                                abonnées).
                            </li>
                        </ul>
                        Création et maintenance de l'application de comptabilité de la Fédération Française de Handball.<br/>
                        Création de sites Wordpress pour Mairies de communes autour du Gard.
                    </Text>
                </Block>
                <Block>
                    <Position>
                        <SubTitle>Développeur web</SubTitle>
                        <Date>de sept. 2024 à mars 2025</Date>
                    </Position>
                    <Entreprise>Sora Websoft, Nîmes</Entreprise>
                    <Text>Création de sites Prestashop et développement de modules prestashop.<br/>
                        Support technique pour la solution de caisse Sora Caisse POS.<br/>
                        Développement d'extension Wordpress (chat, documentation).
                    </Text>
                </Block>

                <Title>Galerie PAO et Web</Title>
                <Text style={{'margin-bottom':'1em'}}>Nostalgie d'une époque (il y a plus de 14 ans) ou je débutais ma carrière…</Text>
                <Gallery />

            </Content>
        </>
    )
}

export default App
