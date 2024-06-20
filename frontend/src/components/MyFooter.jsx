import React from 'react'
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const MyFooter = () => {
  return (
    <Footer bgDark>
    <div className="w-full px-4 lg:px-24">
      <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
        <div>
          <Footer.Title title="Şirket" />
          <Footer.LinkGroup col>
            <Footer.Link href="#">Hakkımızda</Footer.Link>
            <Footer.Link href="#">Kariyer</Footer.Link>
            <Footer.Link href="#">Blog</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div>
          <Footer.Title title="Yardım Merkezi" />
          <Footer.LinkGroup col>
            <Footer.Link href="#">Discord Kanalı</Footer.Link>
            <Footer.Link href="#">Twitter</Footer.Link>
            <Footer.Link href="#">Facebook</Footer.Link>
            <Footer.Link href="#">İletişim</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div>
          <Footer.Title title="Hukuki" />
          <Footer.LinkGroup col>
            <Footer.Link href="#">Gizlilik Politikası</Footer.Link>
            <Footer.Link href="#">Lisanslar</Footer.Link>
            <Footer.Link href="#">Şartlar &amp; Koşullar</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div>
          <Footer.Title title="İndir" />
          <Footer.LinkGroup col>
            <Footer.Link href="#">Windows</Footer.Link>
            <Footer.Link href="#">MacOS</Footer.Link>
          </Footer.LinkGroup>
        </div>
      </div>
      <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
        <Footer.Copyright href="#" by="ExBoook" year={2024} />
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <Footer.Icon href="#" icon={BsFacebook} />
          <Footer.Icon href="#" icon={BsInstagram} />
          <Footer.Icon href="#" icon={BsTwitter} />
          <Footer.Icon href="#" icon={BsGithub} />
          
        </div>
      </div>
    </div>
  </Footer>
  )
}

export default MyFooter

