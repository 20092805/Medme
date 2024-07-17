import React from 'react'
import Banner from '../Banner/Banner';
import MedmeCrm from '../MedmeCrm/MedmeCrm';
import MedmeSuma from '../MedmeSuma/MedmeSuma';
import MedmeFoydalanuv from '../MedmeFoydalanvchi/MedmeFoydalanuv';
import MedmeHomiy from '../MedmeHomiylar/MedmeHomiy'
import MedmeFoydalunvchiNomi from '../MedmeFoydalanuvchiNomi/MedmeHomiylar';
import MedmeImg from '../MedmeImg/MedmeImg';
import Footer from '../Footer/Footer'
import Medem from '../Medme/Medem';
import Demo from '../Demo/Demo';
const Home = () => {
    return (
        <div>
            <Banner />
            <MedmeCrm />
            <MedmeSuma />
            <MedmeFoydalanuv />
            <MedmeHomiy />
            <MedmeFoydalunvchiNomi />
            <MedmeImg />
            <Medem />
            <Footer />
            <Demo />
        </div>
    )
}

export default Home;