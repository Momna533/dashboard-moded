import React, { useState } from "react";
import "./FilterCategory.css";
import Nav from "../../Components/Nav/Nav";
import TopBar from "../../Components/TopBar/TopBar";
import Category from "./Category";
import Menu from "./Menu";
import array from "./Array";
const allCategories = ["all", ...new Set(array.map((item) => item.category))];
function FilterCategory() {
  const [menuItems, setMenuItems] = useState(array);
  const [category, setCategory] = useState(allCategories);
  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(array);
      return;
    }
    const newItems = array.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <>
      <div className="container">
        <div className="container_content">
          <div className="container_content_left">
            <Nav />
          </div>
          <div className="container_content_right">
            <TopBar />
            <div className="filter_category_container">
              <div className="filter_category_buttons">
                <Category category={category} filterItems={filterItems} />
              </div>
              <div className="filter_category_entries">
                <Menu menuItems={menuItems} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default FilterCategory;

// import React, { useState } from "react";
// import Nav from "../../Components/Nav/Nav";
// import Category from "./Category";
// import Menu from "./Menu";
// import array from "./Array";
// const allCategories = ["all", ...new Set(array.map((item) => item.category))];
// function FilterCategory() {
//   const [menuItems, setMenuItems] = useState(array);
//   const [category, setCategory] = useState(allCategories);
//   const filterItems = (category) => {
//     if (category === "all") {
//       setMenuItems(array);
//       return;
//     }
//     const newItems = array.filter((item) => item.category === category);
//     setMenuItems(newItems);
//     console.log(category);
//   };
//   return (
//     <>
//       <div className="container">
//         <div className="container_content">
//           <div className="container_content_left">
//             <Nav />
//           </div>
//           <div className="container_content_right">
//             <div className="filter_category_container">
//               <Category category={category} filterItems={filterItems} />
//               <Menu items={menuItems} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default FilterCategory;
