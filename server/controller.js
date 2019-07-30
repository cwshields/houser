const getList = (req, res, next) => {
  const dbI = req.app.get('db')
  dbI
    .getList()
    .then( house => {
      res.status(200).json(house)
    })
    .catch(err => {
      res.status(500).json({ errMessage: "There was an error!" })
      console.log(err)
    })
}

const addHouse = (req, res, next) => {
  const dbI = req.app.get('db')
  const { property, address, city, state, zip, img, mortgage, rent } = req.body
  dbI
    .addHouse([ property, address, city, state, zip, img, mortgage, rent ])
    .then( house => {
      res.status(200).json(house)
    })
    .catch(err => {
      res.status(500).json({ errMessage: "There was an error!" })
      console.log(err)
    })
}

const deleteHouse = (req, res, next) => {
  const dbI = req.app.get('db')
  const { id } = req.params
  dbI
    .deleteHouse(id)
    .then( house => {
      res.status(200).json(house)
    })
    .catch(err => {
      res.status(500).json({ errMessage: "There was an error!" })
      console.log(err)
    })
}

module.exports = {
  getList,
  addHouse,
  deleteHouse,
}