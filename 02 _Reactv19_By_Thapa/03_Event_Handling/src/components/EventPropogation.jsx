import "./Event.css"

export const EventPropogation = () => {

    const handleGrandParent = () => {
        console.log("Grandparent clicked")
    }

    const handleParent = (e) => {
        e.stopPropagation();
        console.log("Parent Clicked");
    }

    const handleChild = (e) => {
        e.stopPropagation();
        console.log(e)
        console.log("Child Clicked");
    }

    return (
      <>
      {/* Event Bubbling */}
        <section className="main-div">
          <div className="g-div" onClick={handleGrandParent}>
            <div className="p-div" onClick={handleParent}>
              <button className="c-div" onClick={handleChild}>
                Child Div
              </button>
            </div>
          </div>
        </section>

           {/* Event Capturing */}
        <section>
          <div className="g-div" onClickCapture={handleGrandParent}>
            <div className="p-div" onClickCapture={handleParent}>
              <button className="c-div" onClickCapture={handleChild}>
                Child Div
              </button>
            </div>
          </div>
        </section>
      </>
    );
} 