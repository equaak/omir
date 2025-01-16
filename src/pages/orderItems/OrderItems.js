import "./OrderItems.css";
import { Link } from "react-router-dom";
import basket from "../order/basket.svg";
import point from "../order/point.svg";
import searchImg from "../order/search.svg";
import arrow from "../order/arrow.svg";
import shopStore from "../../store/shopStore/ShopStore";
import userStore from "../../store/userStore/UserStore";
import { useState, useEffect } from "react";
import axios from "axios";
import star from "../order/star.svg";
import abyl from "./abyl.png";
import sale from "./sale.svg";
import bas from "./bas.svg";
import fire from "./fire.svg";
import product_logo from "./product_logo.png";
import Cart from "../../components/cart/Cart";
import person from "../order/person.svg";
import Item from "../../components/item/Item";

const OrderItems = () => {
  const [content, setContent] = useState([]);
  const [filteredItems, setFilteredItems] = useState([[]]);
  const [search, setSearch] = useState("");
  const [searchCategories, setSearchCategories] = useState("");
  const [category, setCategory] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState([]);
  const [searchCategory, setIndexCategory] = useState(-1);
  const [cartOpen, setCartOpen] = useState(false);
  const [item, setItem] = useState({});
  const [itemOpen, setItemOpen] = useState(false);
  const [minPrice, setMinPrice] = useState('');

  const setProducts = async () => {
    const responce = await axios.get(`http://localhost:5000/medication/byId?id=${shopStore.shop.id}`);
    const rows = responce.data.reduce(
      (rows, key, index) =>
        (index % 3 === 0
          ? rows.push([key])
          : rows[rows.length - 1].push(key)) && rows,
      []
    );
    console.log(responce.data);
    setContent(responce.data);
    setFilteredItems([]);
    setFilteredItems(rows);
  };

  const setCategories = async () => {
    const responce = await axios.get("http://localhost:5000/category");

    console.log(responce.data);
    setCategory(responce.data);
    setFilteredCategory(responce.data);
  };

  useEffect(() => {
    setProducts();
    setCategories();
  }, []);

  useEffect(() => {
    let minPrice = Infinity;

    for (let i = 0; i < content.length; i++) {
      if (content[i].price < minPrice) {
          minPrice = content[i].price;
      }
    }

    setMinPrice(minPrice);
  }, [content])

  useEffect(() => {
    handleFilter();
  }, [search]);

  useEffect(() => {
    handleCategoryFilter();
  }, [searchCategories]);


  useEffect(() => {
    handleFilter();
  }, [searchCategory]);

  useEffect(() => {}, [item]);

  const handleCategory = (e) => {
    setSearchCategories(e.target.value);
  };

  const handleItem = (item) => {
    setItem(item);
    setItemOpen(true);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleClickCategory = (id) => {
    if (searchCategory == -1 || searchCategory !== id) {
      setIndexCategory(id);
    }
    if (searchCategory == id) {
      setIndexCategory(-1);
    }
  };

  const handleFilter = () => {
    if (search !== "") {
      console.log(filteredItems);
      const filtered = content.filter(
        (item) =>
          item.name.toLowerCase().includes(search.toLowerCase()) &&
          item.categoryId == searchCategory
      );
      const rows = filtered.reduce(
        (rows, key, index) =>
          (index % 3 === 0
            ? rows.push([key])
            : rows[rows.length - 1].push(key)) && rows,
        []
      );
      setFilteredItems(rows);
    } else {
      if (searchCategory !== -1) {
        const filtered = content.filter(
          (item) => item.category_id === searchCategory
        );
        const rows = filtered.reduce(
          (rows, key, index) =>
            (index % 3 === 0
              ? rows.push([key])
              : rows[rows.length - 1].push(key)) && rows,
          []
        );
        setFilteredItems(rows);
      } else {
        const rows = content.reduce(
          (rows, key, index) =>
            (index % 3 === 0
              ? rows.push([key])
              : rows[rows.length - 1].push(key)) && rows,
          []
        );
        setFilteredItems(rows);
      }
    }
  };

  const handleCategoryFilter = () => {
    if (searchCategories !== "") {
      const filtered = category.filter((item) =>
        item.categoryName.toLowerCase().includes(searchCategories.toLowerCase())
      );
      setFilteredCategory(filtered);
    } else {
      setFilteredCategory(category);
    }
  };

  const handleOpenCart = (e) => {
    console.log("open cart");
    e.stopPropagation();
    setCartOpen(true);
  };

  const handleCloseCart = () => {
    console.log("close cart");
    if(cartOpen){
      setCartOpen(false);
    }
    if(itemOpen){
      setItemOpen(false);
    }
  };

  return (
    <main>
      {cartOpen && <div className="overlay" onClick={() => handleCloseCart()}/>}
      {itemOpen && <div className="overlay" onClick={() => handleCloseCart()}/>}
      <div
        className={`order-items-container ${cartOpen || itemOpen ? "shadowed" : ""}`}
      >
        <header className="order-header">
          <div className="wrapper order-content">
            <div className="nav">
              <img src={point} alt="" />
              <p className="address-text">Turan, 11</p>
            </div>

            <div className="search">
              <img src={searchImg} alt="" />
              <input
                type="text"
                placeholder="Search in ÖmirSafe... "
                value={search}
                onChange={handleSearch}
              />
            </div>

            <div className="nav">
              {userStore.token == "" ? (
                <>
                  <Link to="/auth">
                    <button className="login-button">Login</button>
                  </Link>
                  <Link to="/auth">
                    <button className="signup-button">Sign Up</button>
                  </Link>
                </>
              ) : (
                <Link to="/profile">
                  <div className="user-info">
                    <img src={person} alt="" />
                    <p>{userStore.user.firstName}</p>
                  </div>
                </Link>
              )}

              <div className="basket" onClick={handleOpenCart}>
                <img src={basket} alt="" />
                <p className="basket-text">{}</p>
              </div>
            </div>
          </div>
        </header>
        <main>
          <div className="wrapper">
            {/* {target === 'shops' ? <p className='order-title'>Medicine deliveries</p> : ''} */}
            <p className="order-title">{shopStore.shop.name}</p>
            <div className="shop-info">
              <img src={abyl} alt="" />
              <p className="pharmacy-price">KZT 0</p>
              <img src={sale} alt="" />
              <p className="pharmacy-text purple">
                Welcome gift: free delivery{" "}
              </p>
              <img src={bas} alt="" />
              <p className="pharmacy-text">Order from {minPrice} KZT </p>
              <img src={star} alt="" />
              <p className="pharmacy-text">Welcome gift: free delivery </p>
            </div>
            <p className="shop-description">{shopStore.shop.description}</p>
            <div className="tree">
              <Link to="/">
                <p className="tree-home">Homepage</p>
              </Link>
              <img src={arrow} alt="" />
              <Link to="/order/shops">
                <p className="shop tree-home">All pharmacies</p>
              </Link>
              <img src={arrow} alt="" />
              <p className="shop tree-home underline">{shopStore.shop.name}</p>
            </div>

            <div className="pharmacy-popular">
              <img src={fire} alt="" />
              <p className="popular-title">Popular</p>
            </div>
            <p className="popular-subtitle">
              Most ordered in the last 30 days at ÖmirSafe
            </p>
            <div className="popular-products">
              {content.map((item, i) => {
                if (i < 3) {
                  return (
                    <div className="popular-product">
                      <div className="popular-left">
                        <p className="popular-name">{item.name}</p>
                        <p className="popular-price">{item.price} KZT</p>
                      </div>
                      <div className="popular-right">
                        <img src={product_logo} alt="" />
                        {userStore.token !== "" ? (
                          <button
                            className="popular-button"
                            onClick={() => handleItem(item)}
                          >
                            +
                          </button>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  );
                }
              })}
            </div>
            <div className="products-content">
              <div className="product-categories">
                <div className="search">
                  <img src={searchImg} alt="" />
                  <input
                    type="text"
                    placeholder="Search in categories... "
                    value={searchCategories}
                    onChange={handleCategory}
                  />
                </div>
                <div className="categories-content">
                  {filteredCategory.map((item) => {
                    if (item.categoryId === searchCategory) {
                      return (
                        <div
                          onClick={() => handleClickCategory(item.categoryId)}
                          className="category-content active"
                        >
                          <img src="" alt="" />
                          <p>{item.categoryName}</p>
                        </div>
                      );
                    } else {
                      return (
                        <div
                          onClick={() => handleClickCategory(item.categoryId)}
                          className="category-content"
                        >
                          <img src="" alt="" />
                          <p>{item.categoryName}</p>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
              <div className="products-block">
                {filteredItems.map((item) => {
                  return (
                    <div className="popular-row">
                      {item.map((subItem) => {
                        return (
                          <div onClick={() => handleItem(subItem)} className="popular-product">
                            <div className="popular-left">
                              <p className="popular-name">{subItem.name}</p>
                              <p className="popular-price">
                                {subItem.price} KZT
                              </p>
                            </div>
                            <div className="popular-right">
                              <img src={product_logo} alt="" />
                              {userStore.token !== "" ? (
                                <button className="popular-button"> + </button>
                              ) : (
                                ""
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
            {cartOpen ? <Cart /> : ""}
            {itemOpen ? <Item item={item} /> : ""}
          </div>
        </main>
      </div>
    </main>
  );
};

export default OrderItems;
