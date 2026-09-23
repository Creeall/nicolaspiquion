import './App.css';
import profil_pic from './assets/profil_pic.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faPhone, faHome, faGlobe} from '@fortawesome/free-solid-svg-icons'
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
                    <h2>Contact</h2>
                    <ul>
                        <li><FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon> <a
                            href="https://studiocreeall.com" target="_blank">studiocreeall.com</a></li>
                        <li><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> <a
                            href="mailto:contact@nicolaspiquion.fr">contact@nicolaspiquion.fr</a></li>
                        <li><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> <a href="tel:+33695415790">06 95 41 57
                            90</a></li>
                        <li><FontAwesomeIcon icon={faHome}></FontAwesomeIcon>Nîmes/Montpellier</li>
                    </ul>
                    <h2>Compétences</h2>
                    <ul>
                        <li>PHP / Symfony <Rating rating={4}/></li>
                        <li>Laravel <Rating rating={4}/></li>
                        <li>JavaScript <Rating rating={4}/></li>
                        <li>React / Vue / Next.js <Rating rating={3}/></li>
                        <li>SQL / MySQL / PostgreSQL <Rating rating={4}/></li>
                        <li>Docker / Linux <Rating rating={4}/></li>
                        <li>Git / CI/CD <Rating rating={4}/></li>
                        <li>WordPress / PrestaShop <Rating rating={4}/></li>
                        <li>IA / Codex <Rating rating={4}/></li>
                        <li>Suite Adobe <Rating rating={4}/></li>
                        <li>Serveurs / Nginx <Rating rating={4}/></li>
                    </ul>
                    <h2>Langues</h2>
                    <ul>
                        <li>Anglais (B2) <Rating rating={4}/></li>
                        <li>Espagnol (A2) <Rating rating={1}/></li>
                    </ul>
                </SidebarContent>
            </Sidebar>


            <Content>
                <div className="deco-bottom"></div>
                <Title>Profil</Title>
                <Block>
                    <Text>Développeur web full-stack autodidacte, 15+ ans d’expérience, spécialisé PHP/Symfony/Laravel.<br/>
                        Expérience en maintenance applicative, modernisation de legacy, Docker, Linux et JavaScript.<br/>
                        IA avec Codex : code, fonctionnalités, planification et orchestration multi-agents.</Text>
                </Block>

                <Title>Expériences</Title>
                <Block>
                    <Position>
                        <SubTitle>Web designer</SubTitle>
                        <Date>de déc. 2006 à avr. 2007</Date>
                    </Position>
                    <Entreprise>StyloBille Studio, Fort de France (Martinique)</Entreprise>
                    <Text>Web design et intégration de sites pour un studio graphique.</Text>
                </Block>

                <Block>
                    <Position>
                        <SubTitle>Chef de projet / graphiste maquettiste PAO</SubTitle>
                        <Date>de juil. 2007 à avr. 2010</Date>
                    </Position>
                    <Entreprise>Studio CréeAll, Basse-Terre (Guadeloupe)</Entreprise>
                    <Text>Identités visuelles, sites vitrines et supports print.</Text>
                </Block>
                <Block>
                    <Position>
                        <SubTitle>Développeur full stack LAMP</SubTitle>
                        <Date>de févr. 2016 à sept. 2024</Date>
                    </Position>
                    <Entreprise>N-Gine Innovation, Nîmes</Entreprise>
                    <Text>Développement et maintenance d’applications PHP/Laravel.<br/>
                        Applications web et mobiles : SportyCloud, Comm’une Actu, Stellee.<br/>
                        Déploiement et exploitation de serveurs Linux, Apache/Nginx et Plesk.<br/>
                        Front-end JavaScript/React et gestion du code avec Git.<br/>
                        Application web de comptabilité pour la Fédération Française de Handball.<br/>
                        Sites WordPress pour 15 mairies autour du Gard.</Text>
                </Block>
                <Block>
                    <Position>
                        <SubTitle>Développeur full stack</SubTitle>
                        <Date>de sept. 2024 à mars 2025</Date>
                    </Position>
                    <Entreprise>Sora Websoft, Nîmes</Entreprise>
                    <Text>Création de sites PrestaShop, modules et support technique de caisse.<br/>
                        Développement d’extensions WordPress : chat et documentation.
                    </Text>
                </Block>
                <Block>
                    <Position>
                        <SubTitle>Développeur fullstack Senior</SubTitle>
                        <Date>de sept. 2025 à sept. 2026</Date>
                    </Position>
                    <Entreprise>E-SI (Groupe CAPELLE), Nîmes</Entreprise>
                    <Text>MCO et modernisation d’applications PHP/Symfony legacy.<br/>
                        Dockerisation, environnements Linux et administration serveurs.<br/>
                        Bases de données multi-SGBD : PostgreSQL, Oracle, SQL Server, MySQL.<br/>
                        IA avec Codex : génération de code, fonctionnalités et documentation.<br/>
                        Planification, orchestration multi-agents et tests unitaires/E2E.</Text>
                </Block>

                <Title>Contexte technique personnel</Title>
                <Block>
                    <Text>Environnement personnel orienté DevOps et automatisation : VPS chez IONOS administré avec Plesk, Portainer et plusieurs applications conteneurisées.<br/>
                        Mise en place de workflows GitHub CI/CD et d’une instance n8n pour expérimenter l’automatisation.<br/>
                        Développement de projets personnels en React Native.</Text>
                </Block>

                <Title>Galerie PAO et Web</Title>
                <Text style={{'margin-bottom':'1em'}}>Nostalgie d'une époque (il y a plus de 14 ans) ou je débutais ma carrière…</Text>
                <Gallery />

            </Content>
        </>
    )
}

export default App
