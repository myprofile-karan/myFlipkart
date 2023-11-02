const BannerDiscount = (props) => {
  return (
    <div className="container-fluid my-3">
      <div className="row">
        <div className="col-4 px-1">
          <img src={props.image1 || props.image4 || props.image7} width="100%"></img>
        </div>
        <div className="col-4 px-1">
          <img src={props.image2 || props.image5 || props.image8} width="100%"></img>
        </div>
        <div className="col-4 px-1">
          <img src={props.image3 || props.image6 || props.image9} width="100%"></img>
        </div>
      </div>
    </div>
  );
};

export default BannerDiscount;