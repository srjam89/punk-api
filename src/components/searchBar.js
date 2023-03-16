import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import searchCSS from "../styles/search.module.css";
import { searchPunkApi } from "../api/punkApi";
import BeerItems from "./beerItems";

const SearchBar = () => {
  const [foodName, setFoodName] = useState("");
  const [chosenBeer, setChosenBeer] = useState(false);
  const [beerResults, setbeerResults] = useState([]);
  const [randomBeer, setRandomBeer] = useState([]);

  const searchFood = (e) => {
    searchPunkApi(foodName).then((res) => {
      res.json().then((data) => {
        e.preventDefault();
        console.log(data);
        setChosenBeer(true);
        setbeerResults(data);
      });
    });
  };

  const fetchRandomApi = async () => {
    const response = await fetch("https://api.punkapi.com/v2/beers/random");
    const data = await response.json();
    setRandomBeer(data[0]);
  };

  useEffect(() => {
    fetchRandomApi();
  }, []);

  const { abv, image_url, name, description } = randomBeer;
  console.log(randomBeer);

  const imageUrl = !(image_url == null) ? image_url : "/default-img.jpeg";

  const onChange = (e) => {
    setFoodName(e.target.value);
  };

  return (
    <div className={searchCSS.container}>
      <h1>Food To Match Your Beer</h1>
      <h4>Simply pick a food item of your choice and we'll do the rest.</h4>
      <div className={searchCSS.inputContainer}>
        <input onChange={onChange} type="text" placeholder="Pick Your Food" />
        <button onClick={searchFood} className={searchCSS.btn}>
          Search
        </button>
        <div className={searchCSS.cardContainer}>
          <div>
            {!chosenBeer ? <></> : <BeerItems beerResults={beerResults} />}
          </div>
        </div>
      </div>
      <div className={searchCSS.randomContainer}>
        <h2>A Beer You Might Like</h2>
        <Card sx={{ width: 340, height: 440, overflowY: "scroll" }}>
          <CardActionArea sx={{ display: "flex", flexDirection: "column" }}>
            <CardMedia
              component="img"
              height="300"
              image={imageUrl}
              alt="green iguana"
              className={searchCSS.img}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ textAlign: "center" }}
              >
                {name}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ textAlign: "center" }}
              >
                {description}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: "center", paddingTop: 1 }}
              >
                ABV: {abv}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};

export default SearchBar;
