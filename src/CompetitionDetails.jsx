


import axios from "axios";
import { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";

function CompetitionDetails() {

  const {id}=useParams();
  const [Competition, setCompetition] = useState([]);
  const handleCompetition = async () => {
    try {
      const compData = await axios.get("http://localhost:3001/competitions/" + id);
      console.log(compData.data);
      setCompetition(compData.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };
  useEffect(() => {
    handleCompetition();
  }, []);
  return (
    <>
    
    <div>
    {Competition.id}
    {Competition.fees}
    {Competition.name}
    </div>
    </>
  );
}

export default CompetitionDetails;
