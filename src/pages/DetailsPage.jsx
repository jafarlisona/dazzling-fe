import React from "react";
import Detail from "../components/Detail";
import { Helmet, HelmetProvider } from "react-helmet-async";

function DetailsPage() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Dazzling | Details Page</title>
      </Helmet>
      <Detail />
    </HelmetProvider>
  );
}

export default DetailsPage;
