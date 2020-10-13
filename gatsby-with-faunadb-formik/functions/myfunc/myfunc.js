// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
require('dotenv').config();
const faunadb = require('faunadb');
const q = require('faunadb/src/query');

// const q = faunadb.query;

exports.handler = async (event, context) => {
  console.log(event)
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const faunadbSecret = process.env.FAUNADB_ADMIN_SECRET;
  if (!faunadbSecret) {
    return { statusCode: 405, body: 'Cannot Read Environment Variable' };
  }

  try {

    const reqObj = JSON.parse(event.body);

    const client = new faunadb.Client({ secret: faunadbSecret })

    const result = await client.query(
      q.Create(
        q.Collection('products'),
        {
          data: {
            code: reqObj.code,
            name: reqObj.name,
            price: { amount: reqObj.price, currency: "pkr" }
          }
        }
      )

    )

    // console.log(JSON.stringify(result));


    return {
      statusCode: 200,
      body: JSON.stringify({ result })
    }


  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
