import React, { useContext } from 'react';
import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { ImBooks } from "react-icons/im";
import { FaBookAtlas } from "react-icons/fa6";
import userImg from "../assets/banner-card/profile.jpeg";
import Logout from '../components/Logout';
import { AuthContext } from '../contects/AuthProvider';


const ContentSideBar = () => {
  const {user}=useContext(AuthContext);
  return (
    <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Logo href="#" img={user?.photoURL} imgAlt="">
        <p>
          {
            user?.displayName || user?.email
          }
        </p>
        
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
            Kitap Yükleme
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
            Kitap Yönetimi
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Profil
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={ImBooks}>
            Kitaplığım
          </Sidebar.Item>
          <Sidebar.Item href="/login" icon={HiArrowSmRight}>
            Giriş Yap
          </Sidebar.Item>
          <Sidebar.Item href="/sign-up" icon={HiTable}>
            Kayıt Ol
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          
          <Sidebar.Item href="#" icon={FaBookAtlas}>
            Yardım
          </Sidebar.Item>
          <Sidebar.Item>
            <Logout />
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default ContentSideBar;
