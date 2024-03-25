import express from "express";
import verifyMiddleware from "../middlewares/verify.js";
import usernameController from "../controllers/user/username.js";
import allDepartmentsController from "../controllers/user/allDepartments.js";
import allSubjectsController from "../controllers/user/allSubjects.js";
import pagedSubjectsController from "../controllers/user/pagedSubjects.js";
import departmentSubjectsController from "../controllers/user/departmentSubjects.js";
import subjectReviewsController from "../controllers/user/subjectReviews.js";
import addReviewController from "../controllers/user/addReview.js";
import pagedSubjectsQueryController from "../controllers/user/pagedSubjectsQuery.js";
import hasAddedSubjectsController from "../controllers/user/hasAddedSubjects.js";
import addUserSubjectsController from "../controllers/user/addUserSubjects.js";
import userSubjectsController from "../controllers/user/userSubjects.js";
import departmentPagedSubjectsController from "../controllers/user/departmentPagedSubjects.js";

const userRouter = express.Router();

userRouter.get("/username", verifyMiddleware, usernameController);
userRouter.get("/allDepartments", verifyMiddleware, allDepartmentsController);
userRouter.get("/allSubjects", verifyMiddleware, allSubjectsController);
userRouter.get(
  "/allVerifiedReviews/courseCode/:courseCode",
  verifyMiddleware,
  subjectReviewsController
);
userRouter.get(
  "/weightedSubjects/page/:page",
  verifyMiddleware,
  pagedSubjectsController
);
userRouter.get(
  "/weightedSubjects/filter/:filter/page/:page",
  verifyMiddleware,
  pagedSubjectsQueryController
);
userRouter.get(
  "/allSubjects/departmentId/:departmentId",
  verifyMiddleware,
  departmentSubjectsController
);
userRouter.get(
  "/allSubjects/departmentId/:departmentId/filter/:filter/page/:page",
  verifyMiddleware,
  departmentPagedSubjectsController
);
userRouter.get(
  "/hasAddedSubjects",
  verifyMiddleware,
  hasAddedSubjectsController
);
userRouter.get("/userSubjects", verifyMiddleware, userSubjectsController);
userRouter.post("/userSubjects", verifyMiddleware, addUserSubjectsController);
userRouter.post(
  "/submitReview/courseCode/:courseCode",
  verifyMiddleware,
  addReviewController
);

export default userRouter;
