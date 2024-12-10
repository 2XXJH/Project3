const Member = require('../models/Member');

// Create a new member
exports.createMember = async (req, res) => {
  const { name, email } = req.body;

  try {
    const member = new Member({ name, email });
    await member.save();
    res.status(201).json(member);
  } catch (err) {
    res.status(500).json({ message: 'Error creating member' });
  }
};

// Get all members
exports.getAllMembers = async (req, res) => {
  try {
    const members = await Member.find();
    res.status(200).json(members);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching members' });
  }
};
