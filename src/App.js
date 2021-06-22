import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";
import { useState } from "react";
import ImageCard from "./components/ImageCard";
import { Container, Row, Col } from "react-bootstrap";

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

const App = () => {
  const [word, setWord] = useState("");
  const [images, setImages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(word);
    fetch(
      `https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages([{ ...data, title: word }, ...images]);
        // console.log(images);
      })
      .catch((err) => {
        console.log(err);
      });
    setWord("");
  };

  const handleDeleteImage = (id) => {
    setImages(images.filter((image) => image.id !== id));
  }

  return (
    <div>
      <Header />
      <Search word={word} setWord={setWord} handleSubmit={handleSubmit} />
      {/* {!!images.length && <ImageCard image={images[0]}/>} */}
      <Container>
        <Row xs={1} md={2} lg={3}>
          {images.map((image, i) => (
            <Col key={i}>
              <ImageCard deleteImage={handleDeleteImage} image={image} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default App;
