'use strict';

module.exports.api = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v2.0! hh'
      },
      null,
      2
    ),
  };
};