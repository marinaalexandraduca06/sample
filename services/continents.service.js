const ContinentModel = require('../models/continent.model');

exports.getList = async function (reqQuery, reqOptions) {
 try {
   const continents = await ContinentModel.paginate(reqQuery, reqOptions);
   return continents;
 } catch (error) {
   throw Error('An error occurred while getting data');
 }
}

exports.create = async function (continent) {
  const newContinent = new ContinentModel({
    nameRo: continent.nameRo,
    nameEn: continent.nameEn
  });

  try {
    const savedContinent = await newContinent.save();
    return savedContinent;
  } catch (e) {
    throw Error('Error while creating the continent: ' + e);
  }
};

// exports.getById = async function (id, callback) {
//   // Post.find().deepPopulate('comments.user').exec(function (err, posts)
//   return OrderModel.findById(id).deepPopulate('owner products.product');
// };

// exports.getByEmail = async function (email, callback) {
//   const query = { email: email };
//   return OrderModel.findOne(query).deepPopulate('owner products.product');
// };

// exports.getItem = async function (query, callback) {
//   return OrderModel.findOne(query).deepPopulate('owner products.product');
// }

// exports.update = async function (order) {
//   const id = order.id;
//   let oldOrder;

//   try {
//     oldOrder = await OrderModel.findById(id);
//   } catch (e) {
//     throw Error('Order could not be found');
//   }

//   if (!oldOrder) {
//     return false;
//   }

//   oldOrder.owner = oldOrder.owner;
//   oldOrder.products = (order.products && order.products.length !== oldOrder.products.length) ||
//     oldOrder.products.every((v, i) => v !== order.products[i]) ? order.products : oldOrder.products;
//   oldOrder.status = order.status || oldOrder.status;

//   try {
//     const savedOrder = await oldOrder.save();
//     return savedOrder.deepPopulate('owner products.product');
//   } catch (e) {
//     throw Error('An error occured while updating the order');
//   }
// };

exports.delete = async function (id) {
  try {
    const deleted = await ContinentModel.findOneAndRemove({ _id: id });
  } catch (e) {
    throw Error('Error occured while deleting the continent');
  }
};
