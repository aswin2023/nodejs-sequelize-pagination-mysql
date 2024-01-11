module.exports = (app) => {
  const tutorials = require("../controllers/tutorial.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", tutorials.create);

  // Retrieve all Tutorials
  router.get("/", tutorials.findAll);

  // Retrieve all published Tutorials
  router.get("/published", tutorials.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", tutorials.findOne);

  // Update a Tutorial with id
  router.put("/:id", tutorials.update);

  // Delete a Tutorial with id
  router.delete("/:id", tutorials.delete);

  // Delete all Tutorials
  router.delete("/", tutorials.deleteAll);

  
  app.use("/api/tutorials", router);

  /**
 * @swagger
 * tags:
 *   name: Tutorials
 *   description: API for managing tutorials
 */

/**
 * @swagger
 * /api/tutorials:
 *   post:
 *     summary: Create a new tutorial
 *     description: Create a new tutorial in the database
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the tutorial
 *               description:
 *                 type: string
 *                 description: The description of the tutorial
 *               published:
 *                 type: boolean
 *                 description: The published status of the tutorial
 *             example:
 *               title: "Learn Node.js"
 *               description: "An introductory guide to Node.js"
 *               published: true
 *     responses:
 *       '201':
 *         description: Tutorial created successfully
 *       '400':
 *         description: Bad request. Check your request payload.
 */

/**
 * @swagger
 * /api/tutorials:
 *   get:
 *     summary: Get all tutorials
 *     description: Retrieve a list of all tutorials from the database
 *     responses:
 *       '200':
 *         description: A successful response with a list of tutorials
 *       '404':
 *         description: No tutorials found
 */

/**
 * @swagger
 * /api/tutorials/published:
 *   get:
 *     summary: Get all published tutorials
 *     description: Retrieve a list of all published tutorials from the database
 *     responses:
 *       '200':
 *         description: A successful response with a list of published tutorials
 *       '404':
 *         description: No published tutorials found
 */

/**
 * @swagger
 * /api/tutorials/{id}:
 *   get:
 *     summary: Get a single tutorial by ID
 *     description: Retrieve a single tutorial from the database based on its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the tutorial
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A successful response with the tutorial details
 *       '404':
 *         description: Tutorial not found
 */

/**
* @swagger
* /api/tutorials/{id}:
*   put:
*     summary: Update a tutorial by ID
*     description: Update a tutorial in the database based on its ID
*     parameters:
*       - in: path
*         name: id
*         required: true
*         description: ID of the tutorial
*         schema:
*           type: string
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               title:
*                 type: string
*                 description: The updated title of the tutorial
*               description:
*                 type: string
*                 description: The updated description of the tutorial
*               published:
*                 type: boolean
*                 description: The updated published status of the tutorial
*             example:
*               title: "Updated Node.js Tutorial"
*               description: "An updated guide to Node.js"
*               published: true
*     responses:
*       '200':
*         description: Tutorial updated successfully
*       '404':
*         description: Tutorial not found
*       '400':
*         description: Bad request. Check your request payload.
*/

/**
 * @swagger
 * /api/tutorials/{id}:
 *   delete:
 *     summary: Delete a tutorial by ID
 *     description: Delete a tutorial from the database based on its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the tutorial
 *         schema:
 *           type: string
 *     responses:
 *       '204':
 *         description: Tutorial deleted successfully
 *       '404':
 *         description: Tutorial not found
 */

/**
 * @swagger
 * /api/tutorials:
 *   delete:
 *     summary: Delete all tutorials
 *     description: Delete all tutorials from the database
 *     responses:
 *       '204':
 *         description: All tutorials deleted successfully
 *       '404':
 *         description: No tutorials found
 */
};
