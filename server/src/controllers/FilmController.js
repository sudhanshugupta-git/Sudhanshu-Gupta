import db from "../../models/index.js";
const { Film, Language } = db;

class FilmController {

async getAllFilms(req, res) {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit;

        // Sorting
        let sortBy = req.query.sortBy || "title";
        let sortOrder = req.query.sortOrder === "desc" ? "DESC" : "ASC";

        // Map frontend fields to DB columns
        const sortFieldMap = {
            title: "title",
            release_year: "release_year",
            language: "language_id",
            length: "length",
            rating: "rating"
        };
        if (!Object.keys(sortFieldMap).includes(sortBy)) sortBy = "title";

        const { count, rows: films } = await Film.findAndCountAll({
            include: ['language', 'original_language'],
            offset,
            limit,
            order: [[sortFieldMap[sortBy], sortOrder]],
        });

        return res.status(200).json({
            success: true,
            message: "Films fetched successfully",
            currentPage: page,
            totalPages: Math.ceil(count / limit),
            totalCount: count,
            data: films
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to fetch films",
            error: error.message
        });
    }
}

    async getAllLanguages(req, res) {
        try {
            const languages = await Language.findAll();

            return res.status(200).json({
                success: true,
                message: "Languages fetched successfully",
                count: languages.length,
                data: languages
            });

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Failed to fetch languages",
                error: error.message
            });
        }
    }

}

// Exporting an instance of Controller
export default new FilmController();