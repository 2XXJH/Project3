const Staff = require('../models/Staff');

// Create a new staff member
exports.createStaff = async (req, res) => {
  const { name, position } = req.body;

  try {
    const staff = new Staff({ name, position });
    await staff.save();
    res.status(201).json(staff);
  } catch (err) {
    res.status(500).json({ message: 'Error creating staff member' });
  }
};

// Get all staff members
exports.getAllStaff = async (req, res) => {
  try {
    const staff = await Staff.find();
    res.status(200).json(staff);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching staff members' });
  }
};
