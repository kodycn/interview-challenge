import mongoose from 'mongoose';
import Swatch from '../models/swatch.js';

export const getSwatches = async (req, res) => {
  try {
    const swatches = await Swatch.find();

    res.status(200).json(swatches);
  } catch(error) {
    res.status(404).json({ message: error.message });
  }
}

export const createSwatch = async (req, res) => {
  const post = req.body;

  const newSwatch = new Swatch(post);

  try {
    await newSwatch.save();

    res.status(201).json(newSwatch);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}

export const deleteSwatch = async (req, res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No swatch exists with id: ${id}`);

  await Swatch.findByIdAndRemove(id); 

  res.json({ message: 'Swatch deleted successfully' });
}
