import React from 'react'
import './MedmeSuma.css'
import Marketing from "../../img/Marketing.png"
import Moliya from '../../img/Moliya.png'
import Sotuv from '../../img/Sotuv.png'
import Xizmat from '../../img/Xizmat.png'
import { Link } from 'react-router-dom'

const MedmeSuma = () => {
    return (
        <div className='ContenierMedmeSuma'>
            <div className="MedmeSuma">
                <div className="MedmeMarketing">
                    <img src={Marketing} alt="" />
                    <h2>MARKETING</h2>
                    <p>Platform﻿a yordamida marketing bo`limini avtomatlashtirishingiz va samaradorligini oshirishingiz, o`lchashingiz mumkin</p>
                </div>
                <div className="MedmeMoliya">
                    <img src={Moliya} alt="" />
                    <h2>MOLIYA</h2>
                    <p>Moliya bo`limida barcha to`lovlar, xarajatlar va oylik ish haqi hamda qarzdorliklarning hisob-kitobi avtomatik amalga oshiriladi</p>
                </div>
                <div className="MedmeSotuv">
                    <img src={Sotuv} alt="" />
                    <h2>SOTUV</h2>
                    <p>Platforma yordamida sizga kelib tushayotgan so`rovlarni bir joyga yig`ishingiz, ularga tez va sifatli aloqaga chiqishingiz mumkin</p>
                </div>
                <div className="MedmeXizmatKorsatish">
                    <img src={Xizmat} alt="" />
                    <h3>XIZMAT KO`RSATISH</h3>
                    <p>Siz doimiy mijozlaringiz bilan kunlik aloqani yaxshilash, sms-xabarlar yuborish va ko`plab xizmatlar ko`rsatishingiz mumkin.</p>
                </div>
            </div>
            <div className="MedemBtn">
                    <button>NARXLARNI BILSH</button>
            </div>
        </div>
    )
}

export default MedmeSuma;