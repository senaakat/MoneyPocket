import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

const menuData = [
  {
    key: "overview",
    icon: <UserOutlined />,
    title: "HESAP",
    items: [
      { key: "1", label: "PROFİL" },
      { key: "2", label: "ŞİFRE GÜNCELLEME" },
      { key: "3", label: "İLETİŞİM TERCİHLERİ" },
      { key: "4", label: "BİLGİ GÜNCELLEME" },
    ],
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
    icon: <NotificationOutlined />,
    title: "AYARLAR",
    items: [
      { key: "9", label: "GİZLİLİK" },
      { key: "10", label: "GÜVENLİK" },
      { key: "11", label: "HELP" },
      { key: "12", label: "LOG OUT" },
    ],
  },
  {
    key: "MORE",
    icon: <NotificationOutlined />,
    title: "MORE",
    items: [{ key: "9", label: "RAPOR AL" }, { key: "10" }, { key: "11" }],
  },
];

export default menuData;
