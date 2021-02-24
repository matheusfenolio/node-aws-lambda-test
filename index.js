exports.handler = async (event, context) => {
    console.log(event.headers);

    const headers = { 'Content-Type': 'text/html' };
    const body = serialize(bodyContent);

    return {
        statusCode: 200,
        headers,
        isBase64Encoded: false,
        body,
      };
}