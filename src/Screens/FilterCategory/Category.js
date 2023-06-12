import React from "react";

function Category({ filterItems, category }) {
  return (
    <>
      {category.map((item, index) => {
        return (
          <button
            className="category_btn btn"
            type="button"
            key={index}
            onClick={() => filterItems(item)}
          >
            {item}
          </button>
        );
      })}
    </>
  );
}

export default Category;

// import React from "react";

// function Category({ filterItems, category }) {
//   return (
//     <>
//       {category.map((item, index) => {
//         return (
//           <button type="button" key={index} onClick={() => filterItems(item)}>
//             {item}
//           </button>
//         );
//       })}
//     </>
//   );
// }

// export default Category;
