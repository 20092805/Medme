import React from 'react'
import './Medme1.css'
import MedmeImg from '../../img/MedmeImg.png'
import MedmeBoxImg from '../../img/MedmeBoxImg.png'
import MedmeImg3 from '../../img/MedmeImg3.png'
import MedmeImg4 from '../../img/MedmeImg4.png'


const Medem = () => {
    return (
        <div className='ContainerMedme'>
            <div className="MedmeNavBox">
                <p>MODMENI TANLASHINGIZ UCHUN</p>
                <p>4 SABAB</p>
            </div>
            <div className="MedmeSababBox">
                <div className="SababBox1">
                    <div className="SababYozuv">
                        <div className="SababYozuvBox">
                            <h3>DAROMADINGIZNI OSHIRASIZ</h3>
                            <p>Sotuv bo`limi va adminstratsiyadagi jarayonlarni avtomatlashtirish bilan ish samaradorligiga erishish va shu orqali daromadingiz oshirishingiz mumkin.</p></div>
                    </div>
                    <div className="SababImg1">
                        <img src={MedmeImg} alt="" />
                    </div>
                </div>
                <div className="SababBox2">
                    <div className="SababYozuv">
                        <div className="SababYozuvBox">
                            <h3>STRATEGIK RIVOJLANISH</h3>
                            <p>O`quv markazingizdagi takroriy vazifalarni avtomatlashtirish orqali operatsion boshqaruvdan chiqish va biznesni strategik rivojlanishiga vaqt ajratish.</p>
                        </div>
                    </div>
                    <div className="SababImg2">
                        <img src={MedmeBoxImg} alt="" />
                    </div>
                </div>
                <div className="SababBox3">
                <div className="SababYozuv">
                        <div className="SababYozuvBox">
                            <h3>MOLIYA VA XIZMAT KO`RSATISH</h3>
                            <p>Moliyaviy hisob-kitoblarning avtomatik bajarilishi evaziga ko`plab xatoliklarni oldini olasiz. Undan tashqari mijozlarga sifatli xizmat ko`rsatish orqali ularning sodiqligini oshirasiz.</p>
                        </div>
                    </div>
                    <div className="SababImg3">
                        <img src={MedmeImg3} alt="" />
                    </div>
                </div>
                <div className="SababBox4">
                <div className="SababYozuv">
                        <div className="SababYozuvBox">
                            <h3>DOIMIY TEXNIK YORDAM</h3>
                            <p>Platformadan foydalanish jarayonida qiyinchilik yoki savollar tug`ilsa "Online chat" yordamida to`g`ridan-to`g`ri biz bilan bog`lanishingiz mumkin.</p>
                        </div>
                    </div>
                    <div className="SababImg4">
                        <img src={MedmeImg4} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Medem;