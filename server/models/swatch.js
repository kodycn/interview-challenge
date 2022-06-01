import mongoose from 'mongoose';

const swatchSchema = mongoose.Schema({
  color: String,
});

const Swatch = mongoose.model('Swatch', swatchSchema);

export default Swatch
