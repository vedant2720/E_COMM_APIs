# E_Comm_APIs

ProductController
Get Products - Done.
Add a product -Done.
Get one product - Done 
Filter Product - Done

Rate product. - 
add item to cart
get item of cart 
remove item from cart 

UserController

signup - email,password,name,type(seller,customer) - Done
signin - email,password - Done
 

problems with basic auth.
1) No encryption means not secure.  ( just encodeing and decoding if we encrypt it cant be reobtained we have to use it as it is. )
2) it is stored in browser to send with every request which is so risky.


in encryption technique once we encrypt / hashed it cant be decrypted back.--> gives more security.

JSON Web Token:-

Encrypted Token
stateless
Easy to scale
Can be used by mobile / web both.

JWT token looks like-
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzNDU2Nzg5LCJuYW1lIjoiSm9zZXBoIn0.OpOSSw7e485LOP5PrzScxHb7SR6sAOMRckfFwi4rp7o

syntax:-
header.payload.signature

header:

{
    "typ":"JWT", //type of token
    "alg":"HS256"  // hashing algo.
}

payload:

{
     "userId":"b07f85be-45da",
     "iss": "https://provider.domain.com/",
     "sub": "auth/some-hash-here",
     "exp": 153452683
 }

signature:
HASHINGALGO( base64UrlEncode(header) + “.” + base64UrlEncode(payload),secret)