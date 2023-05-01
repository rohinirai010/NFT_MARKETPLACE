import React, { useRef, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/ui/Common-section/CommonSection";
import NftCard from "../components/ui/Nft-card/NftCard";
import img from "../assets/images/img-01.jpg";
import avatar from "../assets/images/ava-01.png";

import "../styles/create-item.css";

const Create = () => {
  const [item, setItem] = useState({
    id: "01",
    title: "Guhelloard",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia, nostrum et deleniti vero corrupti facilis minima laborum nesciunt nulla error natus saepe illum quasi ratione suscipit tempore dolores. Recusandae, similique modi voluptates dolore repellat eum earum sint.",
    imgUrl: img,
    creator: "Trista Francis",
    creatorImg: avatar,
    currentBid: 7.89,
  });

  const imgFile = useRef("");
  const price = useRef("");
  const miniumBid = useRef("");
  const startingDate = useRef("");
  const expiryDate = useRef("");
  const title = useRef("");
  const dec = useRef("");

  // const handleSubmit = (e) =>{
  //   e.preventDefault();
  //   // console.log("name ref>>>>>>>", imgFile.current.value);
  //   const item = {
  //     id: "01",
  //     title: "Guhelloard",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia, nostrum et deleniti vero corrupti facilis minima laborum nesciunt nulla error natus saepe illum quasi ratione suscipit tempore dolores. Recusandae, similique modi voluptates dolore repellat eum earum sint.",
  //     imgUrl:  img,
  //     creator: "Trista Francis",
  //     creatorImg: avatar,
  //     currentBid: 7.89,
  //   };

  // }

  const handleChange = (e) => {
    setItem({
      title: title.current.value,
      id: "01",
      title: title.current.value,
      desc: dec.current.value,
      imgUrl: img,
      creator: "Trista Francis",
      creatorImg: avatar,
      currentBid: miniumBid.current.value,
    });

    console.log("name ref>>>>>>>", title.current.value);
  };

  return (
    <>
      <CommonSection title="Create Item" />

      <section>
        <Container>
          <Row>
            <Col lg="3" md="4" sm="6">
              <h5 className="mb-4 text-light">Preview Item</h5>
              <NftCard item={item} />
            </Col>

            <Col lg="9" md="8" sm="6">
              <div className="create__item">
                <form onChange={handleChange}>
                  <div className="form__input">
                    <label htmlFor="">Upload File</label>
                    <input
                      type="file"
                      className="upload__input"
                      ref={imgFile}
                    />
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Price</label>
                    <input
                      type="number"
                      placeholder="Enter price for one item (ETH)"
                      ref={price}
                    />
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Minimum Bid</label>
                    <input
                      type="number"
                      placeholder="Enter minimum bid"
                      ref={miniumBid}
                    />
                  </div>

                  <div className=" d-flex align-items-center gap-4">
                    <div className="form__input w-50">
                      <label htmlFor="">Starting Date</label>
                      <input type="date" ref={startingDate} />
                    </div>

                    <div className="form__input w-50">
                      <label htmlFor="">Expiration Date</label>
                      <input type="date" ref={expiryDate} />
                    </div>
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Title</label>
                    <input type="text" placeholder="Enter title" ref={title} />
                  </div>

                  <div className="form__input">
                    <label htmlFor="">Description</label>
                    <textarea
                      name=""
                      id=""
                      rows="7"
                      placeholder="Enter description"
                      className="w-100"
                      ref={dec}
                    ></textarea>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Create;
