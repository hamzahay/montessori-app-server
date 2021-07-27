const { Progress } = require('../models')

class Controller {

  static async getProgress (req, res, next) {
    try {
      const UserId = req.UserId
      const progress = await Progress.findOne({ where: { UserId } })
      res.status(200).json({ progress })
    } catch (err) {
      console.log(err)
      next (err)
    }
  }

  static async createProgress (req, res, next) {
    try {
      const UserId = req.UserId
      const progress = await Progress.create({ UserId })
      res.status(201).json({ progress })
    } catch (err) {
      console.log(err)
      next (err)
    }
  }

  static async updateProgress (req, res, next) {
    try {
      const { progress } = req.body
      const UserId = req.UserId
      const updatedProgress = await Progress.update({ progress }, { where: { UserId }, returning: true })
      console.log(updatedProgress)
      res.status(200).json(updatedProgress[1])
    } catch (err) {
      console.log(err)
      next (err)
    }
  }

  static async deleteProgress (req, res, next) {
    try {
      const UserId = req.UserId
      const response = await Progress.destroy({ where: { UserId }})
      console.log(response)
      res.status(200).json(response)
    } catch (err) {
      console.log(err)
      next (err)
    }
  }
}

module.exports = Controller