import mongoose from 'mongoose';
import { Router } from 'express';
import Restaurant from '../model/restaurant';

export default({config, db}) => {
  let api = Router();

  // CRUD

  // v1/restaurant/add - Create
  api.post('/add', (req, res)=>{
    let newRest = new Restaurant();
    newRest.name = req.body.name;

    newRest.save(err => {
      if(err) {
        res.send(err);
      }
      res.json({message: 'Restaurant saved successfully'});
    });
  });

  // v1/restaurant - READ
  api.get('/', (req, res) => {
    Restaurant.find({}, (err, restaurants) => {
      if(err){
        res.send(er);
      }
      else {
        res.json(restaurants);
      }
    });
  });

  // v1/restaurant/:id - READ
  api.get('/:id', (req, res) => {
    Restaurant.findById(req.params.id, (err, restaurant) => {
      if(err){
        res.send(err);
      }else{
        res.json(restaurant);
      }
    });
  });

  // v1/restaurant/:id - Update
  api.put(':/id', (req, res) => {
    Restaurant.findById(req.params.id, (err, restaurant) => {
      console.log(req.params.name);
      if(err){
        res.send(err);
      }
      restaurant.name = req.body.name;
      restaurant.save(err => {
        if(err)
          res.send(err);
        res.json({message: 'Restaurant updated successfully'});
      });
    });
  });

  //

  return api;

}
