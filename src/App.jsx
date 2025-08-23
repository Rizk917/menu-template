import React, { useState } from "react";
import RestoImg from "./assets/resto-img.jpg";
import WspIcon from "./assets/wsp.png";
import NoImg from "./assets/no_image.png";
import allImage from "./assets/fourSquare.svg";
import headerImage from "./assets/mou3ajanet.jpg";

const data = {
  headerImage: headerImage,
  logo: RestoImg,
  name: "Kabouchieh Bakery - فرن الكبوشية",
  type: "Bakery",
  location: "Hamra - Beirut",
  phone: "01351721 - 01750881",
  social: "https://www.instagram.com/kabouchiehbakery/",
  categories: [
    {
      id: "manakish",
      title: "",
      title_ar: "مناقيش",
      image: NoImg,
      items: [
        {
          title: "",
          title_ar: " زعتر",
          price_usd: 0.8,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " جبنه",
          price_usd: 2.6,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " كشك",
          price_usd: 2.25,
          image: NoImg,
        },

        {
          title: "",
          title_ar: " كوكتيل",
          price_usd: 2.35,
          image: NoImg,
        },

        {
          title: "",
          title_ar: " لبنة",
          price_usd: 2,
          image: NoImg,
        },

        {
          title: "",
          title_ar: " بندورة وبصل ",
          price_usd: 1.9,
          image: NoImg,
        },

        {
          title: "",
          title_ar: " قشقوان",
          price_usd: 2.8,
          image: NoImg,
        },

        {
          title: "",
          title_ar: " حلوم",
          price_usd: 2.7,
          image: NoImg,
        },

        {
          title: "",
          title_ar: " حبش وقشقوان ",
          price_usd: 2.8,
          image: NoImg,
        },

        {
          title: "",
          title_ar: " لحمة",
          price_usd: 3.05,
          image: NoImg,
        },

        {
          title: "",
          title_ar: " بيتزا",
          price_usd: 3.25,
          image: NoImg,
        },

        {
          title: "",
          title_ar: " سجق وجبنه",
          price_usd: 4,
          image: NoImg,
        },

        {
          title: "",
          title_ar: " كفتة وجبنه ",
          price_usd: 4,
          image: NoImg,
        },
      ],
    },

    {
      id: "manakish mashruha",
      title: "",
      title_ar: "مناقيش مشروحة",
      image: NoImg,
      items: [
        {
          title: "",
          title_ar: " زعتر",
          price_usd: 0.95,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " جبنه",
          price_usd: 3.05,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " كشك",
          price_usd: 2.5,
          image: NoImg,
        },

        {
          title: "",
          title_ar: " كوكتيل",
          price_usd: 2.6,
          image: NoImg,
        },

        {
          title: "",
          title_ar: " لبنة",
          price_usd: 2.35,
          image: NoImg,
        },

        {
          title: "",
          title_ar: " بندورة وبصل ",
          price_usd: 2.25,
          image: NoImg,
        },

        {
          title: "",
          title_ar: " قشقوان",
          price_usd: 3.4,
          image: NoImg,
        },

        {
          title: "",
          title_ar: " حلوم",
          price_usd: 3.05,
          image: NoImg,
        },

        {
          title: "",
          title_ar: " حبش وقشقوان ",
          price_usd: 6.4,
          image: NoImg,
        },
      ],
    },
    {
      id: "Jrish",
      title: "",
      title_ar: "جريش",
      image: NoImg,
      items: [
        {
          title: "",
          title_ar: " زعتر",
          price_usd: 1.7,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " جبنه",
          price_usd: 2.9,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " كشك",
          price_usd: 2.5,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " كوكتيل",
          price_usd: 2.7,
          image: NoImg,
        },

        {
          title: "",
          title_ar: " لبنة",
          price_usd: 2.5,
          image: NoImg,
        },

        {
          title: "",
          title_ar: " بندورة وبصل ",
          price_usd: 2.35,
          image: NoImg,
        },

        {
          title: "",
          title_ar: " قشقوان",
          price_usd: 3.25,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " نوعان جبنة",
          price_usd: 3.4,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " حبش وقشقوان ",
          price_usd: 3.6,
          image: NoImg,
        },
        {
          title: "",
          title_ar: "بيتزا ",
          price_usd: 3.6,
          image: NoImg,
        },
      ],
    },
    {
      id: "ka3ek",
      title: "",
      title_ar: " كعكة",
      image: NoImg,
      items: [
        {
          title: "",
          title_ar: " سادة",
          price_usd: 0.9,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " زعتر",
          price_usd: 1,
          image: NoImg,
        },
        {
          title: "",
          title_ar: "عكاوي ",
          price_usd: 3.15,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " زعتر وجبنه ",
          price_usd: 2,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " حلوم ",
          price_usd: 3.25,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " نوعين ",
          price_usd: 3.25,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " 3 أنواع جبنه ",
          price_usd: 3.8,
          image: NoImg,
        },

        {
          title: "",
          title_ar: " بيكون ",
          price_usd: 2.15,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " قشقوان",
          price_usd: 3.4,
          image: NoImg,
        },

        {
          title: "",
          title_ar: " كشك",
          price_usd: 2.8,
          image: NoImg,
        },

        {
          title: "",
          title_ar: " حبش وقشقوان ",
          price_usd: 3.6,
          image: NoImg,
        },

        {
          title: "",
          title_ar: " سجق وقشقوان ",
          price_usd: 4.5,
          image: NoImg,
        },

        {
          title: "",
          title_ar: "بيتزا",
          price_usd: 3.7,
          image: NoImg,
        },

        {
          title: "",
          title_ar: "لبنه",
          price_usd: 2.5,
          image: NoImg,
        },
      ],
    },
    {
      id: "ka3ekeh trabulsiyeh",
      title: "",
      title_ar: "كعكة طرابلسية ",
      image: NoImg,
      items: [
        {
          title: "",
          title_ar: " سادة",
          price_usd: 0.45,
          image: NoImg,
        },
        {
          title: "",
          title_ar: "قشقوان",
          price_usd: 2.8,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " حبش وقشقوان",
          price_usd: 2.7,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " عكاوي",
          price_usd: 2.5,
          image: NoImg,
        },

        {
          title: "",
          title_ar: "حلوم ",
          price_usd: 2.6,
          image: NoImg,
        },

        {
          title: "",
          title_ar: " نوعين جبنة ",
          price_usd: 2.7,
          image: NoImg,
        },

        {
          title: "",
          title_ar: "لبنه",
          price_usd: 1.9,
          image: NoImg,
        },
        {
          title: "",
          title_ar: "بيكون",
          price_usd: 1.8,
          image: NoImg,
        },

  

        {
          title: "",
          title_ar: "شوكولا",
          price_usd: 2.23,
          image: NoImg,
        },
      ],
    },

    {
      id: "Sandwich ",
      title: "",
      title_ar: " سندويش ",
      image: NoImg,
      items: [
        {
          title: "",
          title_ar: " لبنة",
          price_usd: 1.9,
          image: NoImg,
        },
        {
          title: "",
          title_ar: "حلوم",
          price_usd: 2.35,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " عكاوي",
          price_usd: 2.35,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " قشقوان ",
          price_usd: 2.6,
          image: NoImg,
        },

        {
          title: "",
          title_ar: " حبش ",
          price_usd: 2.25,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " حبش وقشقوان ",
          price_usd: 2.8,
          image: NoImg,
        },

        {
          title: "",
          title_ar: " بيكون",
          price_usd: 1.9,
          image: NoImg,
        },

        {
          title: "",
          title_ar: " نوعين جبنة ",
          price_usd: 2.8,
          image: NoImg,
        },

        {
          title: "",
          title_ar: "تونا",
          price_usd: 2.25,
          image: NoImg,
        },
      ],
    },

    {
      id: "Arayes ",
      title: "",
      title_ar: " عرايس ",
      image: NoImg,
      items: [
        {
          title: "",
          title_ar: "  جبنة",
          price_usd: 2.6,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " كفتة ",
          price_usd: 2.9,
          image: NoImg,
        },
        {
          title: "",
          title_ar: "  سجق وجبنة ",
          price_usd: 3.7,
          image: NoImg,
        },
        {
          title: "",
          title_ar: "  حلوم ",
          price_usd: 2.7,
          image: NoImg,
        },

        {
          title: "",
          title_ar: "  لبنة ",
          price_usd: 2,
          image: NoImg,
        },
        {
          title: "",
          title_ar: "  قشقوان ",
          price_usd: 2.8,
          image: NoImg,
        },

        {
          title: "",
          title_ar: "  حبش وقشقوان ",
          price_usd: 2.8,
          image: NoImg,
        },
      ],
    },

    {
      id: "Muaajanet ",
      title: "",
      title_ar: " معجنات سواريه ",
      image: NoImg,
      items: [
        {
          title: "",
          title_ar: " فطاير زعتر أخضر ",
          price_usd: 4.5,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " سبانخ ",
          price_usd: 3.6,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " سبانخ خلطة   ",
          price_usd: 3.9,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " سبانخ خلطة مع لبنة ",
          price_usd: 4.5,
          image: NoImg,
        },

        {
          title: "",
          title_ar: " بيتزا ",
          price_usd: 3.7,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " بعلبكية ",
          price_usd: 4.5,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " ",
          price_usd: 0.85,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " طرابلسية حبة ",
          price_usd: 0.85,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " كشك ",
          price_usd: 3.4,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " زعتر ",
          price_usd: 2.9,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " سمبوسك جبنة ",
          price_usd: 4.5,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " بيتزا بيبروني ",
          price_usd: 3.7,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " جبنة ",
          price_usd: 4.15,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " جبنة ",
          price_usd: 4.15,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " لبنة حبة ",
          price_usd: 0.6,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " حلوم حبة ",
          price_usd: 0.6,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " تونا حبة ",
          price_usd: 0.6,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " قشقوان حبة ",
          price_usd: 0.6,
          image: NoImg,
        },
      ],
    },
    {
      id: "Kaak + اثمخ ",
      title: "",
      title_ar: "  كعك مشكل + كعك حلو",
      image: NoImg,
      items: [
        {
          title: "",
          title_ar: "  كعك دبس ",
          price_usd: 2.35,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " كعك بزعتر ",
          price_usd: 2.25,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " كعك حلو   ",
          price_usd: 2.35,
          image: NoImg,
        },
        {
          title: "",
          title_ar: "  كعك ترمسي ",
          price_usd: 2.25,
          image: NoImg,
        },

        {
          title: "",
          title_ar: " كعك مشكل ",
          price_usd: 1.8,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " كعك قرشلي ",
          price_usd: 1.8,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " كعك هوا ",
          price_usd: 2,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " توست زبيب ",
          price_usd: 2.35,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " كعك العباس ",
          price_usd: 1.1,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " كعك لايت ",
          price_usd: 2.25,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " حر وزعتر و زيتون + كعك قليطة ",
          price_usd: 2.35,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " توست محمص ",
          price_usd: 1.25,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " توست طري ",
          price_usd: 2.25,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " توست صغير ",
          price_usd: 1.1,
          image: NoImg,
        },
        {
          title: "",
          title_ar: "  أصابع موالح ",
          price_usd: 1.9,
          image: NoImg,
        },
        {
          title: "",
          title_ar: "  كراكرز +حر وزعتر و زيتون ",
          price_usd: 2.34,
          image: NoImg,
        },
        
      ],
    },
    {
      id: "Patisserie ",
      title: "",
      title_ar: " باتيسري ",
      image: NoImg,
      items: [
        {
          title: "",
          title_ar: "  1kg بتي فور ",
          price_usd: 14.6,
          image: NoImg,
        },
        {
          title: "",
          title_ar: "  علبة بتي فور دايت  ",
          price_usd: 2.5,
          image: NoImg,
        },
        {
          title: "",
          title_ar: "  بسكويت شوكولا دايت ",
          price_usd: 2.9,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " حبة تارت مشمش ",
          price_usd: 1.35,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " حبة تارت فريز ",
          price_usd: 1.35,
          image: NoImg,
        },
        {
          title: "",
          title_ar: "  قالب تارت كبير مشمش ",
          price_usd: 7.5,
          image: NoImg,
        },
                {
          title: "",
          title_ar: "  قالب تارت كبير فريز ",
          price_usd: 7.5,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " حبة سابلية  ",
          price_usd: 1.35,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " حبة سابليه قلوبات ",
          price_usd: 1.6,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " حبة براونيز ",
          price_usd: 0.7,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " كاب كيك ",
          price_usd: 0.55,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " قالب كيك ",
          price_usd: 3.95,
          image: NoImg,
        },
        {
          title: "",
          title_ar: "   علبة برازق سمسم  ",
          price_usd: 2.5,
          image: NoImg,
        },
              {
          title: "",
          title_ar: "علبة برازق فستق عبيد  ",
          price_usd: 2.5,
          image: NoImg,
        },
        {
          title: "",
          title_ar: "  علبة غريبة بيضاء ",
          price_usd: 2.5,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " علبة أصابع تمر ",
          price_usd: 2.35,
          image: NoImg,
        },
        {
          title: "",
          title_ar: "  قرص تمر ",
          price_usd: 0.55,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " قرص0 جوز الهند ",
          price_usd: 0.8,
          image: NoImg,
        },
      ],
    },
    {
      id: "Beriosh ",
      title: "",
      title_ar: " بريوش ",
      image: NoImg,
      items: [
        {
          title: "",
          title_ar: " بريوش سكر  ",
          price_usd: 1.34,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " بريوش مجدول صغير ",
          price_usd: 1.34,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " بريوش مجدول كبير ",
          price_usd: 2.47,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " بريوش تمر صغير ",
          price_usd: 0.78,
          image: NoImg,
        },

        {
          title: "",
          title_ar: " بريوش تمر كبير ",
          price_usd: 1.34,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " بريوش شوكولا  ",
          price_usd: 1.57,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " بريوش  جوز الهند ",
          price_usd: 1.57,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " بريوش جبنة ",
          price_usd: 1.57,
          image: NoImg,
        },
      ],
    },
    {
      id: " Franje + Burger ",
      title: "",
      title_ar: " افرنجي + برغر ",
      image: NoImg,
      items: [
        {
          title: "",
          title_ar: " حبة فاهيتا  ",
          price_usd: 0.28,
          image: NoImg,
        },
        {
          title: "",
          title_ar: "  حبة افرنجي ",
          price_usd: 0.16,
          image: NoImg,
        },
        {
          title: "",
          title_ar: "  حبة باغيت ",
          price_usd: 0.16,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " حبة أسمر ",
          price_usd: 0.2,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " حبة برغر ",
          price_usd: 0.19,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " حبة ب.ب  ",
          price_usd: 0.11,
          image: NoImg,
        },
        {
          title: "",
          title_ar: " حبةافرنجي كبير  ",
          price_usd: 0.19,
          image: NoImg,
        },
        {
          title: "",
          title_ar: "  سواردو كبير ",
          price_usd: 5,
          image: NoImg,
        },
        {
          title: "",
          title_ar: "  سواردو صغير ",
          price_usd: 3.37,
          image: NoImg,
        },
      ],
    },
  ],
};

const VIEW_ALL_CATEGORY = {
  id: "view_all",
  title: "View All",
  title_ar: "عرض الكل",
  image: allImage,
};
export default function App() {
  const categoriesWithViewAll = [VIEW_ALL_CATEGORY, ...data.categories];

  const [selectedCategory, setSelectedCategory] = useState(
    categoriesWithViewAll[0]
  );

  let groupedItemsToDisplay = [];

  if (selectedCategory.id === VIEW_ALL_CATEGORY.id) {
    groupedItemsToDisplay = data.categories.map((cat) => ({
      category: cat,
      items: cat.items,
    }));
  } else {
    groupedItemsToDisplay = [
      {
        category: selectedCategory,
        items: selectedCategory.items,
      },
    ];
  }

  return (
    <div className="max-w-md min-h-dvh mx-auto main-bg  shadow-lg overflow-hidden">
      {/* Header Image */}
      {/* <div className="relative h-40 bg-[#153A43]"> */}
      <div
        className="relative h-40 bg-cover bg-center"
        style={{ backgroundImage: `url(${headerImage})` }}
      >
        {/* <img
          src={data.headerImage}
          alt="header"
          className="w-full h-full object-cover"
        /> */}
        {/* Logo */}
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-white shadow-md rounded-lg p-2">
          <img
            src={data.logo}
            alt="logo"
            className="h-24 w-24 object-contain"
          />
        </div>
      </div>
      <a
        className="fixed bottom-2 left-2 h-[48px] w-[48px]"
        href="https://wa.me/+96181681908"
      >
        <img src={WspIcon} alt="contactUs" />
      </a>
      {/* Name and Type */}
      <div className="mt-16 text-center px-4 bg-white py-2 shadow ">
        <h1 className="text-xl font-bold">{data.name}</h1>
        <p className="text-gray-600">{data.type}</p>
        <div className="flex justify-center items-center gap-2 mt-2 text-sm text-gray-600">
          <span>📍 {data.location}</span> |{" "}
          <span href={`tel=${data.phone}`}>📞 {data.phone}</span> |
          <a href={data.social} target="_blank" rel="noopener noreferrer">
            📸 IG
          </a>
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-3 overflow-x-auto px-4 py-4">
        {categoriesWithViewAll.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat)}
            className={`flex flex-col items-center justify-between p-4 rounded-[12px] shadow-lg min-w-[120px] min-h-[120px] ${
              selectedCategory.id === cat.id
                ? "bg-[#153A43] text-white"
                : "bg-white"
            }`}
          >
            <img src={cat.image} alt={cat.title} className="h-12 w-12 mb-1" />
            <p className="text-xs flex flex-col font-bold ">
              <span>{cat.title} </span>
              <span>{cat.title_ar}</span>
            </p>
          </button>
        ))}
      </div>

      {/* Selected Category Items or grouped items */}
      <div className="px-4 pb-4">
        {groupedItemsToDisplay.map(({ category, items }) => (
          <div key={category.id} className="mb-6">
            {/* Show category title and image */}
            <div className="bg-white p-3 rounded-lg shadow mb-3">
              <h2 className="text-lg font-bold flex items-center justify-between gap-2">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-6 w-6"
                />
                {category.title} {category.title_ar}
              </h2>
            </div>

            {/* Show items under this category */}
            {items.map((item, idx) => (
              <div
                key={idx}
                className="bg-white flex items-center gap-4 p-3 rounded-lg shadow mb-2"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-20 w-20 object-cover rounded"
                />
                <div className="flex-1 flex gap-2 items-center justify-between px-4">
                  <h3 className="font-semibold flex flex-col">
                    {item.title}{" "}
                    <span className="text-gray-500">{item.title_ar}</span>
                  </h3>
                  <p className="text-gray-700 font-bold">
                    ${item.price_usd.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
