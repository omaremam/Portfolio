import React from "react";

function CarouselComponent(props) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [touchStart, setTouchStart] = React.useState(null);
  const [touchEnd, setTouchEnd] = React.useState(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) incrementIndex();
    if (isRightSwipe) decrementIndex();
  };

  const incrementIndex = () => {
    if (currentIndex + 1 !== props.data.length)
      setCurrentIndex(currentIndex + 1);
  };

  const decrementIndex = () => {
    if (currentIndex - 1 !== -1) setCurrentIndex(currentIndex - 1);
  };

  return (
    <div
      className="carousel-container"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="carousel-image-container">
        <div style={{ display: "flex", justifyContent: "center" }}>
          {props.data && (
            <img
              src={props.data[currentIndex]}
              onClick={() => window.open(props.data[currentIndex], "_blank")}
            />
          )}
        </div>
        {props.data && props.data.length > 1 && (
          <div className="carousel-switch-container">
            {props.data &&
              props.data.map((_, index) => {
                return (
                  <div
                    onClick={() => setCurrentIndex(index)}
                    style={{
                      width: "40px",
                      height: "10px",
                      backgroundColor:
                        currentIndex === index ? "rgb(34, 193, 195)" : "#ccc",
                      margin: "10px",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  ></div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
}

export default CarouselComponent;
