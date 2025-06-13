import { createContext, useContext, useState } from "react";
import { getFilms } from "../services/filmService";

const FilmContext = createContext();

export const useFilmContext = () => useContext(FilmContext);

export const FilmProvider = ({ children }) => {
  const [films, setFilms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [filters, setFilters] = useState({});
  const [sortBy, setSortBy] = useState("title");
  const [sortOrder, setSortOrder] = useState("asc");
  const [views, setViews] = useState([]);
  const [activeView, setActiveView] = useState(null);

  const fetchFiles = async (page = currentPage, sortField = sortBy, order = sortOrder) => {
    const res = await getFilms(page, 10, sortField, order);
    setFilms(res.data.data);
    setCurrentPage(res.data.currentPage);
    setTotalPages(res.data.totalPages);
  };

  return (
    <FilmContext.Provider
      value={{
        films,
        setFilms,
        filters,
        setFilters,
        sortBy,
        setSortBy,
        sortOrder,
        setSortOrder,
        views,
        setViews,
        activeView,
        setActiveView,
        fetchFiles,
        currentPage,
        totalPages,
      }}
    >
      {children}
    </FilmContext.Provider>
  );
};
