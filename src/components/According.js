import React, { useState } from 'react'

export default function According() {

  const [myStyle, setmyStyle]= useState({
        color: "black",
    backgroundColor: "white",
    border: '1px'
  })
  const [btntext, setBtnText]= useState("Enable Dark Mode")
  const toggleStyle= () => {
    if (myStyle.color == 'black') {
      setmyStyle({
        color: "white",
        backgroundColor: "black"
      })
      setBtnText("Enable light Mode");
    }
    else {
      setmyStyle({
        backgroundColor: "white",
        color: "black",
      })
      setBtnText("Enable Dark Mode");
    }

  }
    return (
      <div className="accordion accordion-flush" id="accordionFlushExample" style={myStyle}>
        <h2 className='mx-2 my-2'>
          About Us
        </h2>
          <div className="accordion-item"style={myStyle}>
            <h2 className="accordion-header" id="flush-headingOne">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={myStyle}>
                Accordion Item #1
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Placeholder content for this accordion,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit labore, reiciendis facilis ut unde esse ab? Voluptatibus, incidunt error soluta architecto, illum sed totam qui voluptate officia, nobis laborum ullam blanditiis natus recusandae accusamus beatae impedit mollitia pariatur. Quia dignissimos id consectetur error! Doloremque perspiciatis molestiae quas commodi molestias voluptate. which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
            </div>
          </div>
          <div className="accordion-item"style={myStyle}>
            <h2 className="accordion-header" id="flush-headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo"style={myStyle}>
                Accordion Item #2
              </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Placeholder content for this accordion, Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam hic perspiciatis officia itaque ipsum quae molestiae odio ipsam fugiat similique illo odit, voluptatum harum veritatis dolorem labore laborum culpa? which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
            </div>
          </div>
          <div className="accordion-item"style={myStyle}>
            <h2 className="accordion-header" id="flush-headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree"style={myStyle}>
                Accordion Item #3
              </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Placeholder content for this accordion,Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptatum minima magni quis ducimus doloribus optio earum libero, non repellat recusandae rem iusto obcaecati blanditiis quisquam pariatur fuga aut beatae delectus laborum natus nostrum. Exercitationem quisquam obcaecati vero veniam voluptatem, delectus itaque ullam facilis, vel quasi accusantium necessitatibus. Corporis, atque. which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
          </div>
          <button onClick={toggleStyle} type="button" className="btn btn-dark my-3 mx-2">{btntext} </button>
          </div>
      </div>
)
};
