
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
} from "@mui/material";
import FilmTable from "../components/FilmTable";
import { useFilmContext } from "../context/filmContext";

export default function FilmPage() {
  const {
    sortBy,
    setSortBy,
    sortOrder,
    setSortOrder,
    fetchFiles,
  } = useFilmContext();

  const handleSort = (field) => {
    const isAsc = sortBy === field && sortOrder === "asc";
    setSortBy(field);
    setSortOrder(isAsc ? "desc" : "asc");
    fetchFiles(1, field, isAsc ? "desc" : "asc");
  };

  const createSortHandler = (field) => () => handleSort(field);

  return (
    <div className="film-page">
      <h3>Film Page</h3>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <TableSortLabel
                active={sortBy === "title"}
                direction={sortBy === "title" ? sortOrder : "asc"}
                onClick={createSortHandler("title")}
              >
                Title
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={sortBy === "release_year"}
                direction={sortBy === "release_year" ? sortOrder : "asc"}
                onClick={createSortHandler("release_year")}
              >
                Release Year
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={sortBy === "language"}
                direction={sortBy === "language" ? sortOrder : "asc"}
                onClick={createSortHandler("language")}
              >
                Language
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={sortBy === "length"}
                direction={sortBy === "length" ? sortOrder : "asc"}
                onClick={createSortHandler("length")}
              >
                Length
              </TableSortLabel>
            </TableCell>
            <TableCell>Replacement Cost</TableCell>
            <TableCell>
              <TableSortLabel
                active={sortBy === "rating"}
                direction={sortBy === "rating" ? sortOrder : "asc"}
                onClick={createSortHandler("rating")}
              >
                Rating
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <FilmTable />
      </Table>
    </div>
  );
}