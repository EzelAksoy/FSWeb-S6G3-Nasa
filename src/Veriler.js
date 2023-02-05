import React from "react";
import styled from "styled-components";

const Veriler = (props) => {
  const { veri } = props;
  if (veri !== null)
    return (
      <div className="Veri">
        <div className="Tarih">
          <p style={{ fontWeight: "bold", fontStyle: "italic" }}>
            {veri.copyright}
          </p>
          <p> Date : {veri.date}</p>
        </div>
        <img src={veri.url} style={{ width: "80%" }} />
        <p>{veri.explanation}</p>
      </div>
    );
  else {
    return <h3>Yükleniyor...</h3>;
  }
};

export default Veriler;
