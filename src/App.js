import React, { useState, useEffect } from "react";

function DrinkChoiceForm() {
  const [metadata, setMetadata] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.up2tom.com/v3/models", {
      method: "GET",
      headers: {
        
        "Authorization":"Token  9307bfd5fa011428ff198bb37547f979",
        "Content-Type": "application/vnd.api+json"
      }});

      const data = await response.json();
    //  console.log(data);
      setMetadata(data);
    };

    fetchData();
  }, []);

  if (!metadata) {
    return <div>Loading...</div>;
  }
  //else {
   /*  return(
    <div>Got data</div>); } */


 // const { modelName, inputVariables } = metadata;
 // console.log(modelName);
  console.log(metadata.data);



   return (
    <div>
      <h2>Drinks choice</h2>
      <form>
        {metadata.data.map((variable) => (
          <div key={variable.name}>
            <label htmlFor={variable.attributes.name}>{variable.label}</label>
            <input type={variable.type} id={variable.name} name={variable.name} />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  ); 
}

export default DrinkChoiceForm;
