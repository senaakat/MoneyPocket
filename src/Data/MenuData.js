import {
  HomeTwoTone,
  UserOutlined,
  LaptopOutlined,
  SettingOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";

const menuData = [
  {
    key: "overview",
    icon: <UserOutlined />,
    title: "HESAP",
    items: [
      { key: "1", label: "PROFİL", link: "/profile" },
      { key: "2", label: "ŞİFRE GÜNCELLEME" },
      { key: "3", label: "İLETİŞİM TERCİHLERİ" },
      { key: "4", label: "BİLGİ GÜNCELLEME" },
    ],
  },
  {
    key: "overview",
    icon: <HomeTwoTone />,
    title: "ANA GÖRÜNÜM",
    items: [{ key: "1", label: "ÖZET" }],
  },
  {
    key: "sub2",
    icon: <LaptopOutlined />,
    title: "İŞLEMLER",
    items: [
      { key: "5", label: "Gelir Ekle" },
      { key: "6", label: "Gider Ekle" },
      { key: "7", label: "İstatistiğim" },
      { key: "8", label: "Takvim" },
    ],
  },
  {
    key: "AYARLAR",
    icon: <SettingOutlined />,
    title: "AYARLAR",
    items: [
      { key: "9", label: "GİZLİLİK" },
      { key: "10", label: "GÜVENLİK" },
      { key: "11", label: "HELP" },
      { key: "12", label: "LOG OUT", link: "/" },
    ],
  },
  {
    key: "MORE",
    icon: <FileDoneOutlined />,
    title: "MORE",
    items: [{ key: "9", label: "RAPOR AL" }],
  },
];

export default menuData;
