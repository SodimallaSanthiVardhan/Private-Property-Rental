import React, { useContext } from 'react';
import './Listing.css';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { dataContext } from '../../Context/Usercontext';

function Listing() {
  const {
    title,
    setTitle,
    addListing,
    setaddListing,
    addImage1,
    setaddImage1,
    addImage2,
    setaddImage2,
    addImage3,
    setaddImage3,
    price,
    setprice
  } = useContext(dataContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Listing added successfully! ✅");
    setaddListing(true);
  };

  return (
    <div className="listing-container">
      <form className="listing-form" onSubmit={handleSubmit}>
        <h2 className="listing-title">Add Your Listing</h2>

        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="des">Description</label>
          <textarea id="des" rows="4" placeholder="Write a brief description..."></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="img1">Image 1</label>
          <input type="file" id="img1" required onChange={(e) => setaddImage1(e.target.files[0])} />
        </div>

        <div className="form-group">
          <label htmlFor="img2">Image 2</label>
          <input type="file" id="img2" required onChange={(e) => setaddImage2(e.target.files[0])} />
        </div>

        <div className="form-group">
          <label htmlFor="img3">Image 3</label>
          <input type="file" id="img3" required onChange={(e) => setaddImage3(e.target.files[0])} />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            required
            value={price}
            onChange={(e) => setprice(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="loc">Location</label>
          <input type="text" id="loc" placeholder="Enter location" />
        </div>

        <button className="listing-btn" type="submit">
          Add Listing <IoMdAddCircleOutline />
        </button>
      </form>
    </div>
  );
}

export default Listing;
