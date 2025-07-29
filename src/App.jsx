import React, { useState } from "react";
import RestoImg from "./assets/resto-img.jpg";
import WspIcon from "./assets/wsp.png";

const data = {
  // headerImage: "https://picsum.photos/800/400",
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
      image: "https://picsum.photos/60/60?random=1",
      items: [
        {
          title: "",
          title_ar: " زعتر",
          price_usd: 0.8,
          image: "https://picsum.photos/200/300?random=2",
        },
        {
          title: "",
          title_ar: " جبنه",
          price_usd: 2.6,
          image: "https://picsum.photos/200/300?random=2",
        },
        {
          title: "",
          title_ar: " كشك",
          price_usd: 2.25,
          image: "https://picsum.photos/200/300?random=2",
        },

        {
          title: "",
          title_ar: " كوكتيل",
          price_usd: 2.25,
          image: "https://picsum.photos/200/300?random=2",
        },

        {
          title: "",
          title_ar: " لبنة",
          price_usd: 2,
          image: "https://picsum.photos/200/300?random=2",
        },

        {
          title: "",
          title_ar: " بندورة وبصل ",
          price_usd: 1.9,
          image: "https://picsum.photos/200/300?random=2",
        },

        {
          title: "",
          title_ar: " قشقوان",
          price_usd: 2.8,
          image: "https://picsum.photos/200/300?random=2",
        },

        {
          title: "",
          title_ar: " حلوم",
          price_usd: 2.7,
          image: "https://picsum.photos/200/300?random=2",
        },

        {
          title: "",
          title_ar: " حبش وقشقوان ",
          price_usd: 2.8,
          image: "https://picsum.photos/200/300?random=2",
        },

        {
          title: "",
          title_ar: " لحمة",
          price_usd: 3.05,
          image: "https://picsum.photos/200/300?random=2",
        },

        {
          title: "",
          title_ar: " بيتزا",
          price_usd: 3.25,
          image: "https://picsum.photos/200/300?random=2",
        },

        {
          title: "",
          title_ar: " سجق وجبنه",
          price_usd: 4,
          image: "https://picsum.photos/200/300?random=2",
        },

        {
          title: "",
          title_ar: " كفتة وجبنه ",
          price_usd: 4,
          image: "https://picsum.photos/200/300?random=2",
        },

       
      ],
    },
    {
      id: "test1",
      title: "test1",
      title_ar: "مقبلات",
      image: "https://picsum.photos/60/60?random=1",
      items: [
        {
          title: "Wedges fries",
          title_ar: "بطاطا ويدجز",
          price_usd: 4.5,
          image: "https://picsum.photos/200/300?random=2",
        },
        {
          title: "Mozzarella Sticks",
          title_ar: "أعواد موزاريلا",
          price_usd: 5.0,
          image: "https://picsum.photos/200/300?random=3",
        },
      ],
    },
    {
      id: "test2",
      title: "test2",
      title_ar: "مقبلات",
      image: "https://picsum.photos/60/60?random=1",
      items: [
        {
          title: "Wedges fries",
          title_ar: "بطاطا ويدجز",
          price_usd: 4.5,
          image: "https://picsum.photos/200/300?random=2",
        },
        {
          title: "Mozzarella Sticks",
          title_ar: "أعواد موزاريلا",
          price_usd: 5.0,
          image: "https://picsum.photos/200/300?random=3",
        },
      ],
    },
    {
      id: "test3",
      title: "test3",
      title_ar: "مقبلات",
      image: "https://picsum.photos/60/60?random=1",
      items: [
        {
          title: "Wedges fries",
          title_ar: "بطاطا ويدجز",
          price_usd: 4.5,
          image: "https://picsum.photos/200/300?random=2",
        },
        {
          title: "Mozzarella Sticks",
          title_ar: "أعواد موزاريلا",
          price_usd: 5.0,
          image: "https://picsum.photos/200/300?random=3",
        },
      ],
    },
    {
      id: "test4",
      title: "test4",
      title_ar: "مقبلات",
      image: "https://picsum.photos/60/60?random=1",
      items: [
        {
          title: "Wedges fries",
          title_ar: "بطاطا ويدجز",
          price_usd: 4.5,
          image: "https://picsum.photos/200/300?random=2",
        },
        {
          title: "Mozzarella Sticks",
          title_ar: "أعواد موزاريلا",
          price_usd: 5.0,
          image: "https://picsum.photos/200/300?random=3",
        },
      ],
    },
    {
      id: "test5",
      title: "test5",
      title_ar: "مقبلات",
      image: "https://picsum.photos/60/60?random=1",
      items: [
        {
          title: "Wedges fries",
          title_ar: "بطاطا ويدجز",
          price_usd: 4.5,
          image: "https://picsum.photos/200/300?random=2",
        },
        {
          title: "Mozzarella Sticks",
          title_ar: "أعواد موزاريلا",
          price_usd: 5.0,
          image: "https://picsum.photos/200/300?random=3",
        },
      ],
    },
    {
      id: "test6",
      title: "test6",
      title_ar: "مقبلات",
      image: "https://picsum.photos/60/60?random=1",
      items: [
        {
          title: "Wedges fries",
          title_ar: "بطاطا ويدجز",
          price_usd: 4.5,
          image: "https://picsum.photos/200/300?random=2",
        },
        {
          title: "Mozzarella Sticks",
          title_ar: "أعواد موزاريلا",
          price_usd: 5.0,
          image: "https://picsum.photos/200/300?random=3",
        },
      ],
    },
    {
      id: "salads",
      title: "Salads",
      title_ar: "سلطات",
      image: "https://picsum.photos/60/60?random=4",
      items: [
        {
          title: "Caesar Salad",
          title_ar: "سلطة سيزر",
          price_usd: 6.0,
          image: "https://picsum.photos/200/300?random=5",
        },
        {
          title: "Greek Salad",
          title_ar: "سلطة يونانية",
          price_usd: 5.5,
          image: "https://picsum.photos/200/300?random=6",
        },
      ],
    },
  ],
};

const VIEW_ALL_CATEGORY = {
  id: "view_all",
  title: "View All",
  title_ar: "عرض الكل",
  image: "https://picsum.photos/60/60?grayscale", // any placeholder image
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
      <div className="relative h-40 bg-[#153A43]">
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
      <a className="fixed bottom-2 left-2 h-[48px] w-[48px]" href="https://wa.me/+96181681908">

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
