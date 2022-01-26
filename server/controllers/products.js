module.exports = {
  
  getProducts: async (req, res, next) => {
    const db = await req.app.get('db');
    const results = await db.merch();

    return res.status(200).send(results);
  }
}