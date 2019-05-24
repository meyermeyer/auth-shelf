const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
    if(req.isAuthenticated()){
        let query= `SELECT * FROM "item";`;
        pool.query(query)
        .then((results) => {
            res.send(results.rows)
            console.log('in glitchy get with result: ', results.rows)
            })
        .catch( (error) => {
            console.log('error in GET: ', error);
            res.sendStatus(500);
        })
    }
    else {
       console.log('GET /api/shelf');
       res.sendStatus(403)
        
    }
  //  res.sendStatus(200); // For testing only, can be removed
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req,res)=>{
    if(req.isAuthenticated()){
        let query = `INSERT INTO "item" ("description", "image_url", "user_id")
                    VALUES ($1, $2, $3)`
        pool.query(query,[req.body.description, req.body.image_url, req.user.id])
        .then((response)=>{
            console.log('in POST /api/shelf', response);
            res.sendStatus(200)
        })
        .catch(error => {
            console.log('error in POST /api/shelf', error);
            res.sendStatus(500)
        })
    }
    else {
        console.log('POST /api/shelf forbidden');
        res.sendStatus(403)
    }
})

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
    console.log('in DELETE', req.body.user_id);
    console.log('req.user.id', req.user.id);
    
    if(req.user.id==req.body.user_id) {
        let query = 'DELETE FROM "item" WHERE "id"=$1'
        pool.query(query,[req.params.id])
        .then( (response) => {
            console.log('in DELETE /api/shield', response);
            res.sendStatus(200)
        })
        .catch(error => {
            console.log('error in DELETE /api/shield', error);
            res.sendStatus(500)
        })
    }
    else {
        console.log('DELETE /api/shelf forbidden');
        res.sendStatus(403)
    }
});


/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {

});


/**
 * Return all users along with the total number of items 
 * they have added to the shelf
 */
router.get('/count', (req, res) => {

});


/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {

});

module.exports = router;