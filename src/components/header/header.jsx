//import { useState } from "react";
import styles from "./Header.module.css";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
      
// const NAV_ITEMS = [
//   {
//     name: "Men",
//     link: "men.html",
//     megaMenu: [
//       {
//         title: "Topwear",
//         items: [
//           { name: "T-Shirts", link: "products.html" },
//           { name: "Casual Shirts", link: "products.html" },
//           { name: "Formal Shirts", link: "products.html" },
//           { name: "Sweatshirts", link: "products.html" },
//         ],
//       },
//       {
//         title: "Bottomwear",
//         items: [
//           { name: "Jeans", link: "products.html" },
//           { name: "Casual Trousers", link: "products.html" },
//           { name: "Formal Trousers", link: "products.html" },
//           { name: "Shorts", link: "products.html" },
//         ],
//       },
//     ],
//   },
//   { name: "Women", link: "women.html" },
//   { name: "Kids", link: "kids.html" },
//   { name: "Home & Living", link: "home-living.html" },
//   { name: "Beauty", link: "beauty.html" },
//   { name: "Studio", link: "studio.html", isNew: true },
// ];

// const ACTION_ICONS = [
//   {
//     id: "profile",
//     label: "Profile",
//     link: "login.html",
//     icon: (
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//         <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
//         <circle cx="12" cy="7" r="4"></circle>
//       </svg>
//     ),
//   },
//   {
//     id: "wishlist",
//     label: "Wishlist",
//     link: "wishlist.html",
//     icon: (
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//         <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
//       </svg>
//     ),
//   },
//   {
//     id: "bag",
//     label: "Bag",
//     link: "cart.html",
//     count: 2,
//     icon: (
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//         <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
//         <line x1="3" y1="6" x2="21" y2="6"></line>
//         <path d="M16 10a4 4 0 0 1-8 0"></path>
//       </svg>
//     ),
//   },
// ];

// function Header() {
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearch = (e) => {
//     setSearchQuery(e.target.value);
//     // Future: trigger search logic
//   };

//   return (
//     <header className={styles.header}>
//       <div className={styles.headerContainer}>
//         <div className={styles.logo}>
//           <a href="index.html">
//             <svg
//               viewBox="0 0 45 32"
//               style={{ height: "36px", width: "50px" }}>
//               <path
//                 fill="#f16521"
//                 d="M14.4 0c-.5 0-.9.2-1.3.5l-12.7 13.5c-.5.6-.5 1.5 0 2.1l12.7 13.5c.3.3.8.5 1.3.5h7c.8 0 1.5-.7 1.5-1.5V1.5C22.9.7 22.2 0 21.4 0h-7zm6.7 3v24l-9.8-10.4c-.4-.5-.4-1.3 0-1.8L21.1 3z"></path>
//               <path
//                 fill="#d53f8c"
//                 d="M30.6 0h-7c-.8 0-1.5.7-1.5 1.5v27c0 .8.7 1.5 1.5 1.5h7c.5 0 .9-.2 1.3-.5l12.7-13.5c.5-.6.5-1.5 0-2.1L31.9.5c-.3-.3-.8-.5-1.3-.5zm-5.2 3L35.2 13.4c.4.5.4 1.3 0 1.8L25.4 27V3z"></path>
//             </svg>
//           </a>
//         </div>

//         <nav className={styles.navLinks}>
//           {NAV_ITEMS.map((item) => (
//             <div
//               key={item.name}
//               className={`${styles.navLink} ${item.isNew ? styles.supLink : ""}`}>
//               <a href={item.link}>{item.name}</a>
//               {item.isNew && <sup>NEW</sup>}
//               {item.megaMenu && (
//                 <div className={styles.megaMenu}>
//                   {item.megaMenu.map((column) => (
//                     <div key={column.title} className={styles.menuColumn}>
//                       <h4>{column.title}</h4>
//                       <ul>
//                         {column.items.map((subItem) => (
//                           <li key={subItem.name}>
//                             <a href={subItem.link}>{subItem.name}</a>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </nav>

//         <div className={styles.searchContainer}>
//           <div className={styles.searchBar}>
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//               <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
//             </svg>
//             <input
//               type="text"
//               placeholder="Search for products, brands and more"
//               value={searchQuery}
//               onChange={handleSearch}
//             />
//           </div>
//         </div>

//         <div className={styles.actionIcons}>
//           {ACTION_ICONS.map((action) => (
//             <a
//               key={action.id}
//               href={action.link}
//               className={styles.actionItem}>
//               {action.icon}
//               {action.label}
//               {action.count !== undefined && (
//                 <span className={styles.bagCount}>{action.count}</span>
//               )}
//             </a>
//           ))}
//         </div>
//       </div>
//     </header>
//   );
// }

function Header() {
  const [searchQuery, setSearchQuery] = useState();

  function handelSearch(e) {
    setSearchQuery(e.target.value);
  }

  const location = useLocation();

  const isAuth =
    location.pathname.toLowerCase() === "/login" ||
    location.pathname === "/signup";

  // console.log(location.pathname);

  if (isAuth) {
    return null;
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.logo}>
            <Link to="/">
              <svg
                viewBox="0 0 45 32"
                style={{ height: "36px", width: "50px" }}>
                <path
                  fill="#f16521"
                  d="M14.4 0c-.5 0-.9.2-1.3.5l-12.7 13.5c-.5.6-.5 1.5 0 2.1l12.7 13.5c.3.3.8.5 1.3.5h7c.8 0 1.5-.7 1.5-1.5V1.5C22.9.7 22.2 0 21.4 0h-7zm6.7 3v24l-9.8-10.4c-.4-.5-.4-1.3 0-1.8L21.1 3z"></path>
                <path
                  fill="#d53f8c"
                  d="M30.6 0h-7c-.8 0-1.5.7-1.5 1.5v27c0 .8.7 1.5 1.5 1.5h7c.5 0 .9-.2 1.3-.5l12.7-13.5c.5-.6.5-1.5 0-2.1L31.9.5c-.3-.3-.8-.5-1.3-.5zm-5.2 3L35.2 13.4c.4.5.4 1.3 0 1.8L25.4 27V3z"></path>
              </svg>
            </Link>
          </div>

          <nav className={styles.navLinks}>
            <div className={styles.navLink}>
              <Link to="/men">Men</Link>
              <div className={styles.megaMenu}>
                <div className={styles.menuColumn}>
                  <h4>Topwear</h4>
                  <ul>
                    <li>
                      <Link to="/product">T-Shirts</Link>
                    </li>
                    <li>
                      <Link to="/product">Casual Shirts</Link>
                    </li>
                    <li>
                      <Link to="/product">Formal Shirts</Link>
                    </li>
                    <li>
                      <Link to="/product">Sweatshirts</Link>
                    </li>
                  </ul>
                </div>
                <div className={styles.menuColumn}>
                  <h4>Bottomwear</h4>
                  <ul>
                    <li>
                      <Link to="/product">Jeans</Link>
                    </li>
                    <li>
                      <Link to="/product">Casual Trousers</Link>
                    </li>
                    <li>
                      <Link to="/product">Formal Trousers</Link>
                    </li>
                    <li>
                      <Link to="/product">Shorts</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.navLink}>
              <Link to="/women">Women</Link>
            </div>

            <div className={styles.navLink}>
              <Link to="/kids">Kids</Link>
            </div>
            <div className={styles.navLink}>
              <Link to="/homelive">Home & Living</Link>
            </div>
            <div className={styles.navLink}>
              <Link to="/beauty">Beauty</Link>
            </div>
            <div className={`${styles.navLink} ${styles.supLink}`}>
              <Link to="/studio">Studio</Link>
              <sup>NEW</sup>
            </div>
          </nav>

          <div className={styles.searchContainer}>
            <div className={styles.searchBar}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
              </svg>

              <input
                type="text"
                placeholder="Search for products, brands and more"
                value={searchQuery}
                onChange={handelSearch}
              />
            </div>
          </div>

          <div className={styles.actionIcons}>
            <Link to="/login" className={styles.actionItem}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              Profile
            </Link>
            <Link to="/whishlist" className={styles.actionItem}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              Wishlist
            </Link>
            <Link to="/cart" className={styles.actionItem}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              Bag
              <span className={styles.bagCount}>2</span>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
