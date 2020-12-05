// this function send response back to the client app
// volley in android doesn't supports default response of express

function jsonResponse(status,message,data=null){
    return {status:status,message:message,data:data};
}

module.exports = jsonResponse;