
import { TableBody, TableCell, TableRow, TablePagination } from "@mui/material";
import { useEffect } from "react";
import { useFilmContext } from "../context/filmContext";

export default function FilmTable() {
  const {
    films,
    currentPage,
    totalPages,
    fetchFiles,
    sortBy,
    sortOrder,
  } = useFilmContext();

  const handleChangePage = (event, newPage) => {
    fetchFiles(newPage + 1, sortBy, sortOrder);
  };

  useEffect(() => {
    fetchFiles(currentPage, sortBy, sortOrder);
    // eslint-disable-next-line
  }, [sortBy, sortOrder]);

  return (
    <>
      <TableBody>
        {films.map((film, index) => (
          <TableRow
            key={film.film_id}
            sx={{
              backgroundColor:
                index % 2 === 0 ? "rgba(0 ,0, 0, 0.04)" : "white",
            }}
          >
            <TableCell>{film.title}</TableCell>
            <TableCell>{film.release_year}</TableCell>
            <TableCell>{film.language?.name}</TableCell>
            <TableCell>{film.length}</TableCell>
            <TableCell>{film.replacement_cost}</TableCell>
            <TableCell>{film.rating}</TableCell>
          </TableRow>
        ))}
      </TableBody>

      <TablePagination
        component="div"
        count={totalPages * 10}
        page={currentPage - 1}
        onPageChange={handleChangePage}
        rowsPerPage={10}
        rowsPerPageOptions={[]}
      />
    </>
  );
}