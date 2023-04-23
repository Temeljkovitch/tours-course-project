import { useEffect } from "react";
import { useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const deleteTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await fetch(url);
      const response = await data.json();
      setTours(response);
    } catch (error) {
      setLoading(true);
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading)
    return (
      <main>
        <Loading />;
      </main>
    );

  if (tours.length === 0)
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button
            type="button"
            className="btn"
            style={{ marginTop: "2rem" }}
            onClick={() => fetchData()}
          >
            refresh
          </button>
        </div>
      </main>
    );

  return (
    <main>
      <Tours tours={tours} deleteTour={deleteTour} />
    </main>
  );
};
export default App;
