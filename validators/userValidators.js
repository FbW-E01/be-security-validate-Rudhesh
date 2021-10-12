import { body } from "express-validator";

const userValidators = [
  body("species").isLength({ min: 3 }).withMessage("Length is too short"),
  body("species").isLength({ max: 80 }).withMessage("Length is too long"),
  body("species").isAlpha().withMessage("only letters allowed"),
  body("notes").isLength({ max: 140 }).withMessage("Length is too long"),

  body("estimatedAmount").isInt().withMessage("only numbers allowed"),
];

export default userValidators;
