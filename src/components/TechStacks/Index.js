import React from "react";

import ProgressLine from "./ProgressLine";

const Index = () => {
  return (
    <>
    <h1 style={{textAlign:"center",marginLeft:"300px",fontSize:"40px",fontWeight:"bold"}}>TECH STACKS</h1>
      <ProgressLine
        label="REACT JS"
       
        visualParts={[
          {
            percentage: "80%",
            color: "#20B2AA",
            
          },
        ]}
      />
      <ProgressLine
        label="JAVA SCRIPT"
   
        visualParts={[
          {
            percentage: "60%",
            color: "#008080",
            
          },
        ]}
      />

<ProgressLine
        label="HTML"
      
        visualParts={[
          {
            percentage: "85%",
            color: "steelblue",
          },
        //   {
        //     percentage: "13%",
        //     color: "deepskyblue",
        //   },
        ]}
      />
        <ProgressLine
        label="CSS"
     
        visualParts={[
          {
            percentage: "70%",
            color: "DeepskyBlue",
          },
        ]}
      />
  <ProgressLine
        label="GIT"
     
        visualParts={[
          {
            percentage: "60%",
            color: "Orchid",
          },
        ]}
      />


        <ProgressLine
        label="DATA STRUCTURE"
      
        visualParts={[
          {
            percentage: "50%",
            color: "BlueViolet",
          },
        ]}
      />
     
        <ProgressLine
        label="REDUX"
       
        visualParts={[
          {
            percentage: "55%",
            color: "MediumSlateBlue",
          },
        ]}
      />
        <ProgressLine
        label="NODE JS"
       
        visualParts={[
          {
            percentage: "65%",
            color: "MidnightBlue",
          },
        ]}
      />
        <ProgressLine
        label="MONGO DB"
        
        visualParts={[
          {
            percentage: "57%",
            color: "Gold",
          },
        ]}
      />
      
    </>
  );
};

export default Index;
