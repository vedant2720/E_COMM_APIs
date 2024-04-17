
import {
    body,
    validationResult,
  } from 'express-validator';
  
  const validateRequest = async (
    req,
    res,
    next
  ) => {
    console.log(req.body);
    // 1. Setup rules for validation.
    const rules = [
      body('name')
        .notEmpty()
        .withMessage('Name is required'),
      body('email')
        .notEmpty()
        .withMessage(
          'Email is required'
        ),
        body('type')
        .notEmpty()
        .withMessage(
          'type is required'
        ),
        body('password')
        .notEmpty()
        .withMessage(
          'password is required'
        ),
    ];
  
    // 2. run those rules.
    await Promise.all(
      rules.map((rule) => rule.run(req))
    );
  
    // 3. check if there are any errors after running the rules.
    var validationErrors = validationResult(req);
    console.log(validationErrors);
    // 4. if errros, return the error message
    if (!validationErrors.isEmpty()) {
      return res.status(500).send({"error":validationErrors.array()[0].msg});
    }
    next();
  };
  
  export default validateRequest;
  