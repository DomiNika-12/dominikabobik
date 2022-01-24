import styles from '../styles/experience.module.css'
import {NavBar} from "../components/nav-bar";
import {NextPage} from "next";


const Experience: NextPage = () => {
    return (
        <div className={styles.main}>
            <title>Dominika Bobik</title>
            <NavBar/>
            <div className={styles.wrapper}>
                <body className={styles.text}>
                <h1>
                    Professional Experience
                </h1>
                <h4>Software Engineering Intern, Open Systems International</h4>
                <p>Developed new features for the power outage management system “Compass” for various customers ranging from private firms to national electric corporations. Implemented dynamic elements in Compass’s map software using the MapBox API while maintaining cross-platform compatibility and a positive user experience.</p>
                <p>Technologies used: Xamarin, .NET, MapBox, HTML/CSS/JavaScript, and more.</p>
                <h1>
                    Research Experience
                </h1>
                <h4>Undergraduate Research Assistant-
                    <a href={"https://snp.cs.mtu.edu/"}>Snp Lab</a>
                </h4>
                <i>“Towards Secure Decentralized Cloud Storage by Leveraging Blockchain Technology”</i>
                <p>Researched error-correcting codes that are suitable for flash memory in a decentralized cloud architecture. Implemented polar encoding for data storage in flash memory.</p>
                <i>“Ensuring Security of the Internet of Things Network”</i>
                <p>Led a research study in cloud system security focusing on the software stack provided by Amazon Web Services (AWS). The study was focused on the security aspects of IoT,and routing protocols provided by AWS and how other technologies can be adapted to IoT environments.</p>
                <h4>Undergraduate Research Assistant-
                    <a href={"https://abadi.me.mtu.edu/"}>Abadi Lab</a>
                </h4>
                <p>Conducted the study on developing fully mature cardiac cells from neonatal rat cardiomyocytes. Maintained cell culture seeded on a conductive carbon nanotube scaffold (CNT), imagined cell culture using CIF and SEM Microscopes, participated in CardiomyocyteIsolation Protocol, and much more.</p>
                <i>“Mechanical Stimulation of Cardiomyocytes Seeded on the Carbon Nanotube ForestScaffold for Producing Mature and Functional Cells”</i>
                <p>Using Siemens NX designed a custom device that provided dual electrical and mechanical stimuli to the cells.</p>
                <h1>
                    Achievements
                </h1>
                <h4>Electrical and Computer Engineering Undergraduate Advisory Board</h4>
                <h4>{"Dean's List"}</h4>
                <h4>GLIAC Freshman of the Year - 2019</h4>
                <h4>GLIAC First Team All Conference - 2019</h4>
                <h4>GLIAC Second Team All Conference - 2020</h4>
                <h1>
                    Part-time Employment
                </h1>
                <h4>Learning Center Coach - Electrical and Computer Engineering</h4>
                <h4>Teaching Lab Assistant - Electric Circuits II</h4>
                <h4>Teaching Lab Assistant - Introduction to Programming</h4>
                <h4>Tutor - Mathematics, Chemistry, Physics</h4>
                <h4>Gates Tennis Center Lobby Attendant</h4>
                </body>
            </div>
        </div>

    )
}

export default Experience;