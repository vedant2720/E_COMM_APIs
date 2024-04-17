

import  jwt  from "jsonwebtoken";

const jwtAuth=(req,res,next)=>{

    console.log(req.headers);
    //1. Read the token.
    const token=req.headers["authorization"]

    console.log(token);
    //2. if no token,return err.
    if(!token){
        return res.status(401).send("Unauthorized access");
    }
    //3. check if token valid.
    try{
        //once it is verified it gives us the payload.
        const payload=jwt.verify(
            token,
            "0tvR5WYrrc5MQaW8DTK8NAOGu06TVR2u"
        );

        req.userID=payload.userId;
        console.log(payload)
    }
    catch(err){
        //4. return err.
        console.log(err);
        return res.status(400).send("Unauthorized");
    }

    //5. call the next middleware.
    next();
}

export default jwtAuth;