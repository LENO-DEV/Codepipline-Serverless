'use strict';

module.exports.api = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go v2.0! from Proton'
      },
      null,
      2
    ),
  };
};
