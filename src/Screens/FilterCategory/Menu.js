import React from "react";
function Menu({ menuItems }) {
  return (
    <>
      {menuItems.map((item) => {
        const { id, coursetitle, coursecode, credithours, desc } = item;
        return (
          <div key={id} className="filter_category_entry">
            <h1>{coursetitle}</h1>
            <h2>{coursecode}</h2>
            <h2>{credithours}</h2>
            <p>{desc}</p>
          </div>
        );
      })}
    </>
  );
}

export default Menu;
// import React from "react";
// function Menu({ items }) {
//   return (
//     <>
//       {items.map((item) => {
//         const { id, coursetitle, coursecode, credithours, desc } = item;
//         return (
//           <div key={id}>
//             <h1>{coursetitle}</h1>
//             <h2>{coursecode}</h2>
//             <h2>{credithours}</h2>
//             <p>{desc}</p>
//           </div>
//         );
//       })}
//     </>
//   );
// }

// export default Menu;
