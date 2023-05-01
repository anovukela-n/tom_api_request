import React, { useState, useEffect } from "react";

function DrinkChoiceForm() {
  const [getData, setGetData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.up2tom.com/v3/models/58d3bcf97c6b1644db73ad12", {
      method: "GET",
      headers: {
        
        "Authorization":"Token  9307bfd5fa011428ff198bb37547f979",
        "Content-Type": "application/vnd.api+json"
      }});

      const data = await response.json();
    //  console.log(data);
      setGetData(data);
    };

    fetchData();
  }, []);

  if (!getData) {
    return <div>Loading...</div>;
  }
  
  else {
  console.log(getData.data);

   return (
    <div>
      <h2>{getData.data.attributes.name} </h2>
      <form>
        {getData.data.attributes.metadata.attributes.map((item,i) => (
          <div key={i}>
           
                  <label>name  : </label>
                  <input type="text" value={item.name}  />
                  <br></br>
                  <label>question  : </label>
                  <input type="text" value={item.question}  />
                  <br></br>
                  <label>type  : </label>
                  <input type="text" value={item.type}  />
                  <br></br>
                  <br></br>
          
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  ); 
}
}
export default DrinkChoiceForm;
