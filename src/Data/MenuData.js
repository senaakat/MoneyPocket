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
      { key: "2", label: "ŞİFRE GÜNCELLEME", link: "/changePassword" },
    ],
  },
  {
    key: "overview",
    icon: <HomeTwoTone />,
    title: "ANA GÖRÜNÜM",
    items: [{ key: "1", label: "ÖZET", link: "/home" }],
  },
  {
    key: "sub2",
    icon: <LaptopOutlined />,
    title: "İŞLEMLER",
    items: [
      { key: "5", label: "Gelir Ekle", link: "/add-expense" },
      { key: "6", label: "Gider Ekle", link: "/add-income" },
      { key: "7", label: "İstatistiğim", link: "/add-income" },
      { key: "8", label: "Takvim", link: "/calendar" },
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
