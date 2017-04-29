Typescript + Node + Express create Restful API
===


## Command Helpful
```
npm init
npm install express --save
npm install typescript --save-dev
npm install tslint --save-dev

npm install grunt --save-dev
npm install grunt-contrib-copy --save-dev
npm install grunt-ts --save-dev
npm install grunt-tslint --save-dev
npm install grunt-contrib-watch --save-dev

npm install body-parser --save
npm install cookie-parser --save
npm install morgan --save
npm install errorhandler --save
npm install method-override --save
npm install jsonwebtoken --save
npm install ip --save
npm install password-hash --save
npm install cors --save
npm install moment --save
npm install mysql --save
npm install typeorm --save
npm install reflect-metadata --save
npm install express-session --save
npm install node-fs --save

npm install @types/body-parser --save-dev
npm install @types/cookie-parser --save-dev
npm install @types/morgan --save-dev
npm install @types/errorhandler --save-dev
npm install @types/method-override --save-dev
npm install @types/jsonwebtoken --save-dev
npm install @types/ip --save-dev
npm install @types/password-hash --save-dev
npm install @types/cors --save-dev
npm install @types/mysql --save-dev
npm install @types/express-session --save-dev
>>> Deprecated >>> npm install @types/moment --save-dev
```

## Run
```
npm run grunt
npm start
npm run rebuild
```

### Gen RSA Key on Windows by Xampp
```
mkdir -p var/jwt # For Symfony3+, no need of the -p option
D:\xampp\apache\bin\openssl.exe genrsa -out var/jwt/private.pem -aes256 4096
D:\xampp\apache\bin\openssl.exe rsa -pubout -in var/jwt/private.pem -out var/jwt/public.pem
```

### Gen RSA Key on Linux
```
mkdir -p var/jwt # For Symfony3+, no need of the -p option
$ openssl genrsa -out var/jwt/private.pem -aes256 4096
$ openssl rsa -pubout -in var/jwt/private.pem -out var/jwt/public.pem
```

### Gen online
http://travistidwell.com/jsencrypt/demo/

##Reference
http://brianflove.com/2016/11/08/typescript-2-express-node/

http://brianflove.com/2016/03/29/typescript-express-node-js/

https://github.com/DefinitelyTyped/DefinitelyTyped