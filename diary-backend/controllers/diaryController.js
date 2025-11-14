const Diary = require('../models/diaryModel');
const jwt = require('jsonwebtoken');

function getUserId(req) {
  const token = req.headers.authorization?.split(' ')[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded.userId;
}

// Add new diary
exports.addDiary = async (req, res) => {
  const userId = getUserId(req);
  const newDiary = new Diary({ userId, ...req.body });
  await newDiary.save();
  res.json({ message: 'Diary added successfully' });
};

// Get all diaries
exports.getAllDiaries = async (req, res) => {
  const userId = getUserId(req);
  const diaries = await Diary.find({ userId });
  res.json(diaries);
};

// Update diary
exports.updateDiary = async (req, res) => {
  await Diary.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: 'Diary updated successfully' });
};

// Delete diary
exports.deleteDiary = async (req, res) => {
  await Diary.findByIdAndDelete(req.params.id);
  res.json({ message: 'Diary deleted successfully' });
};
