import React from 'react'
import './Banner.css'
import Input from '../Generic/Input/Input'
import Button from '../Generic/Button/Button'

const Banner = () => {
  const Style = {
    width: "300px",
    height: "46px",
    borderRadius: "8px",
    fontSize: "18px",
  }
  const BtnStyle = {
    width: "300px",
    height: "46px",
    background: "gold",
    borderRadius: "20px",
    fontSize: "18px",
  }
  return (

    <div className='ContenierBanner'>
      <div className="BannerMalumot">
        <h1>Modme CRM- ta'lim markazlarni tizimlashtirish platformasi</h1>
        <p>Markazingizni tizimlashtirish vaqti keldi!</p>
      </div>
      <div className="BannerInputBtn">
        <div className='BannerMalumoth1'>
          <h2>Demoga so'rov qoldirsh</h2>
          <p>va Medme haqida batafsil PREZINTATSIYAGA ega bo'ling!</p>
        </div>
        <Input placeholder="Ismingiz" style={Style} type="text" />
        {/* <Input placeholder="O'quv markazingiz nomi" style={Style} type="text" />
        <Input placeholder="Telfon raqamingiz" style={Style} type="text" />
        <Input placeholder="Telegram manzilingiz" style={Style} type="text" /> */}
   
      </div>
    </div>
  )
}

export default Banner;