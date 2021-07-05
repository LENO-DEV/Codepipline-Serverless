'use strict';

module.exports.api = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! from Proton'
      },
      null,
      2
    ),
  };
};
