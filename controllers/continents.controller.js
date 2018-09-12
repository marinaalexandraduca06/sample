const ContinentModel = require('../models/continent.model');
const ContinentsService = require('../services/continents.service');

exports.getList = async function (params, response, next) {
  const reqOptions = {
    page: params.query.page ? params.query.page : 1,
    limit: params.query.limit ? params.query.limit : 100,
  };
  let reqQuery = {};

  if (params.query.filter) {
    reqQuery = params.query.filter
  }
  if (params.query.sort) {
    reqOptions.sort = params.query.sort;
  }

  try {
    const continents = await ContinentsService.getList(reqQuery, reqOptions);
    return response.status(200).json({
      status: 200,
      result: continents
    });
  } catch (e) {
    return response.status(400).json({
      status: 400,
      message: e.message
    });
  }
}

exports.create = async function (req, res, next) {
  try {
    const continent = {
      nameRo: req.body.nameRo,
      nameEn: req.body.nameEn
    };
    try {
      const createdContinent = await ContinentsService.create(continent);
      return res.status(200).json({
        status: 201,
        result: createdContinent,
        message: 'Created continent succesfully'
      });
    } catch (e) {
      return res.status(400).json({
        status: 400,
        message: e.message
      });
    }
  } catch (e) {
    return res.status(500).json({
      status: 500,
      message: 'Invalid User'
    });
  }
};

// exports.getItem = async function (req, res, next) {
//   const userId = req.get('userId');
//   let user;
//   try {
//     user = await UserModel.findById(userId);
//   } catch (e) {
//     return res.status(400).json({
//       status: 400,
//       message: 'Invalid user'
//     });
//   }
//   let id;
//   if (req.params.id) {
//     id = req.params.id;
//   } else {
//     return res.status(400).json({
//       status: 400,
//       message: 'Id is mandatory'
//     });
//   }
//   try {
//     const order = await OrdersService.getById(id);
//     return res.status(200).json({
//       status: 200,
//       result: order
//     });
//   } catch (e) {
//     return res.status(400).json({
//       status: 400,
//       message: e.message
//     });
//   }
// }

// exports.edit = async function (req, res, next) {
//   if (!req.params.id) {
//     return res.status(400).json({
//       status: 400,
//       message: 'Id of the order is required'
//     });
//   }
//   const id = req.params.id;
//   const order = {
//     id
//   };
//   let feProds;
//   let beProds = [];
//   if (req.body.products) {
//     feProds = req.body.products;
//   }
//   if (feProds && feProds.length > 0) {
//     feProds.forEach((element) => {
//         const tempProd = {
//           product: { _id: element.product._id },
//           quantity: element.quantity
//         };
//         beProds.push(tempProd);
//     });
//   }
//   order.products = beProds;
//   if (req.body.status) {
//     const newStatus = ['ACTIVE', 'DONE']
//       .find((el) => el === req.body.status);
//     if (newStatus) {
//       order.status = newStatus
//     } else {
//       return res.status(400).json({
//         status: 400,
//         message: 'The new order status is invalid'
//       });
//     }
//   } else {
//     order.status = null;
//   }
//   try {
//     const updatedOrder = await OrdersService.update(order);
//     if (updatedOrder.status === 'DONE') {
//       await OrdersService.create({ owner: updatedOrder.owner });
//     }
//     return res.status(201).json({
//       status: 201,
//       result: updatedOrder.populate('owner'),
//       message: 'Order updated succesfully'
//     });
//   } catch (e) {
//     return res.status(400).json({
//       status: 400,
//       message: e.message
//     });
//   }
// };

exports.delete = async function (req, res, next) {
  if (!req.params.id) {
    return res.status(400).json({
      status: 400,
      message: 'Id of the continent is required'
    });
  }
  const id = req.params.id;
  try {
    await ContinentsService.delete(id);
    return res.status(201).json({
      status: 201,
      message: 'Continent deleted successfully'
    });
  } catch (e) {
    return res.status(400).json({
      status: 400,
      message: e.message
    });
  }
};
