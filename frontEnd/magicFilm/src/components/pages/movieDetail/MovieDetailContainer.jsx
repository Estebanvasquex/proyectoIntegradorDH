import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./movieDetail.css";
import MovieDetail from "./MovieDetail";
import { getMovieById } from "../../../service/productServices";
import { AuthContext } from "../../../context/AuthContext";
import { scoreFilter } from "../../../service/rating";

const obtenerIdVideoYoutube = (url) => {
  const regex =
    /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)(?:&.*)?$/;
  const match = url.match(regex);

  if (match && match[1]) {
    return `https://www.youtube.com/embed/${match[1]}`;
  } else {
    return url;
  }
};

const MovieDetailContainer = () => {
  const { user } = useContext(AuthContext);

  const { id } = useParams();

  const [dataMovie, setDataMovie] = useState({});
  const [value, setValue] = useState(0);

  const nav = useNavigate();

  const loginReservation = (id) => {
    {
      user?.id
        ? nav(`/reservation/${id}`)
        : /*  Swal.fire('Debes iniciar sesión')    */
          nav("/login");
    }
  };

  useEffect(() => {
    getMovieById(id)
      .then(async (res) => {
        const data = res.data;
        data.trailer = obtenerIdVideoYoutube(data.trailer);
        if (user?.id) {
          scoreFilter({
            movie_id: data.id,
            user_id: parseInt(user.id),
          }).then((res) => {
            data["score"] = res.data;
            setValue(data["score"]?.score);
            setDataMovie(data);
          });
        } else {
          setDataMovie(data);
        }
      })
      .catch((error) => console.log(error));
  }, [id, value, user?.id]);

  return (
    <MovieDetail
      dataMovie={dataMovie}
      user={user}
      value={value}
      setValue={setValue}
      loginReservation={loginReservation}
    />
  );
};

export default MovieDetailContainer;
