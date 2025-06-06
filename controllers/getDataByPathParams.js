import { startups } from "../data/data.js";
export const getDataByPathParams = (req, res) => {
  const { field, term } = req.params;
  const allowedFields = ["country", "continent", "industry"];

  if (allowedFields.includes(field)) {
    const filteredData = startups.filter((startup) => {
      return startup[field].toLowerCase() === term.toLowerCase();
    });
    res.json(filteredData).status(200);
  }
  if (!allowedFields.includes(field)) {
    return res
      .json({
        message:
          "Search field not allowed. Please use only 'country', 'continent', 'industry'",
      })
      .status(400);
  }
};
